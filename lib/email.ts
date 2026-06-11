import nodemailer from 'nodemailer';

export interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(options: EmailOptions) {
  // Check if SMTP is configured
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.log('Email configuration not set up. Email would have been sent:');
    console.log('To:', options.to);
    console.log('Subject:', options.subject);
    console.log('Message:', options.text);
    return { success: false, message: 'Email not configured' };
  }

  try {
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@cissociety.ca',
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html || options.text.replace(/\n/g, '<br>'),
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

// Function to process email queue
export async function processEmailQueue() {
  const db = require('./db').default;

  const pendingEmails = db.prepare(`
    SELECT * FROM email_queue
    WHERE status = 'pending' AND retry_count < 3
    LIMIT 10
  `).all() as any[];

  for (const email of pendingEmails) {
    const result = await sendEmail({
      to: email.to_email,
      subject: email.subject,
      text: email.body,
    });

    if (result.success) {
      db.prepare(`
        UPDATE email_queue
        SET status = 'sent', sent_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `).run(email.id);
    } else {
      db.prepare(`
        UPDATE email_queue
        SET retry_count = retry_count + 1, error_message = ?
        WHERE id = ?
      `).run(JSON.stringify(result.error), email.id);
    }
  }

  return pendingEmails.length;
}
