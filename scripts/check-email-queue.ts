import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

import db from '../lib/db';

async function checkEmailQueue() {
  console.log('📧 Checking email queue...\n');

  try {
    // Get recent emails
    const emails = await db`
      SELECT id, to_email, to_name, subject, email_type, status, created_at, sent_at, error_message
      FROM email_queue
      ORDER BY created_at DESC
      LIMIT 10
    `;

    console.log(`Found ${emails.length} emails in queue:\n`);

    for (const email of emails) {
      console.log(`ID: ${email.id}`);
      console.log(`  To: ${email.to_name} (${email.to_email})`);
      console.log(`  Subject: ${email.subject}`);
      console.log(`  Type: ${email.email_type || 'general'}`);
      console.log(`  Status: ${email.status}`);
      console.log(`  Created: ${new Date(email.created_at).toLocaleString()}`);
      if (email.sent_at) {
        console.log(`  Sent: ${new Date(email.sent_at).toLocaleString()}`);
      }
      if (email.error_message) {
        console.log(`  Error: ${email.error_message}`);
      }
      console.log('');
    }

  } catch (error) {
    console.error('\n❌ Error:', error);
    process.exit(1);
  }
}

checkEmailQueue()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
