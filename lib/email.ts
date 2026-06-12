import { Resend } from 'resend';

export interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendEmail(options: EmailOptions) {
  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    console.log('⚠️  Resend API key not configured. Email would have been sent:');
    console.log('To:', options.to);
    console.log('Subject:', options.subject);
    console.log('Message:', options.text);
    return { success: false, message: 'Email not configured' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'CISS Committee <onboarding@resend.dev>',
      to: options.to,
      subject: options.subject,
      html: options.html || options.text.replace(/\n/g, '<br>'),
      text: options.text,
    });

    if (result.error) {
      console.error('❌ Resend error:', result.error);
      return { success: false, error: result.error };
    }

    console.log('✅ Email sent successfully:', result.data?.id);
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return { success: false, error };
  }
}

// Function to process email queue
export async function processEmailQueue() {
  const db = require('./db').default;

  const pendingEmails = await db`
    SELECT * FROM email_queue
    WHERE status = 'pending' AND retry_count < 3
    ORDER BY created_at ASC
    LIMIT 10
  `;

  console.log(`📧 Processing ${pendingEmails.length} pending emails...`);

  let successCount = 0;
  let failCount = 0;

  for (const email of pendingEmails) {
    const result = await sendEmail({
      to: email.to_email,
      subject: email.subject,
      text: email.body,
    });

    if (result.success) {
      await db`
        UPDATE email_queue
        SET status = 'sent', sent_at = CURRENT_TIMESTAMP
        WHERE id = ${email.id}
      `;
      successCount++;
      console.log(`  ✅ Sent to ${email.to_email}: ${email.subject}`);
    } else {
      await db`
        UPDATE email_queue
        SET retry_count = retry_count + 1,
            error_message = ${JSON.stringify(result.error)},
            status = CASE WHEN retry_count + 1 >= 3 THEN 'failed' ELSE 'pending' END
        WHERE id = ${email.id}
      `;
      failCount++;
      console.log(`  ❌ Failed to send to ${email.to_email}: ${email.subject}`);
    }
  }

  console.log(`\n📊 Results: ${successCount} sent, ${failCount} failed`);
  return { total: pendingEmails.length, success: successCount, failed: failCount };
}
