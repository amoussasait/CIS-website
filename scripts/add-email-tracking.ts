import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

import { sql } from '../lib/db-postgres';

async function addEmailTracking() {
  console.log('🚀 Adding email tracking to email_queue...\n');

  try {
    // Add new columns to email_queue table
    console.log('📋 Adding tracking columns to email_queue...');

    await sql`
      ALTER TABLE email_queue
      ADD COLUMN IF NOT EXISTS email_type VARCHAR(50) DEFAULT 'general',
      ADD COLUMN IF NOT EXISTS related_task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
      ADD COLUMN IF NOT EXISTS related_user_id INTEGER REFERENCES users(id)
    `;

    console.log('✅ Email tracking columns added\n');

    console.log('📝 Email types available:');
    console.log('  - task_assigned: When a task is assigned');
    console.log('  - task_reminder: Periodic reminder for pending task');
    console.log('  - task_overdue: When task passes due date');
    console.log('  - task_completed: When task is marked complete');
    console.log('  - general: Other emails\n');

    console.log('✅ Email tracking setup complete!\n');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
addEmailTracking()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
