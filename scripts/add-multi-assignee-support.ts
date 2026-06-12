import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

import { sql } from '../lib/db-postgres';

async function addMultiAssigneeSupport() {
  console.log('🚀 Adding multi-assignee support to tasks...\n');

  try {
    // Step 1: Create task_assignments junction table
    console.log('📋 Creating task_assignments table...');
    await sql`
      CREATE TABLE IF NOT EXISTS task_assignments (
        id SERIAL PRIMARY KEY,
        task_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        user_email TEXT,
        user_name TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id),
        UNIQUE(task_id, user_id)
      )
    `;
    console.log('✅ task_assignments table created\n');

    // Step 2: Migrate existing single assignments to the new table
    console.log('📦 Migrating existing task assignments...');

    const existingTasks = await sql`
      SELECT id, assigned_to, assigned_to_email, assigned_to_name
      FROM tasks
      WHERE assigned_to IS NOT NULL
    `;

    for (const task of existingTasks) {
      await sql`
        INSERT INTO task_assignments (task_id, user_id, user_email, user_name)
        VALUES (${task.id}, ${task.assigned_to}, ${task.assigned_to_email}, ${task.assigned_to_name})
        ON CONFLICT (task_id, user_id) DO NOTHING
      `;
    }

    console.log(`✅ Migrated ${existingTasks.length} task assignments\n`);

    console.log('✅ Multi-assignee support added successfully!\n');
    console.log('📝 Next steps:');
    console.log('1. Update task creation form to allow multi-select');
    console.log('2. Update task display to show all assignees');
    console.log('3. Update task API to use task_assignments table\n');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
addMultiAssigneeSupport()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
