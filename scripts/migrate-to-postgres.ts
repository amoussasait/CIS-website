import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

import db from '../lib/db';
import { sql, initializePostgresDatabase } from '../lib/db-postgres';
import bcrypt from 'bcryptjs';

async function migrateToPostgres() {
  console.log('🚀 Starting migration from SQLite to Postgres...\n');

  try {
    // Step 1: Initialize Postgres schema
    console.log('📋 Creating Postgres tables...');
    await initializePostgresDatabase();

    // Step 2: Migrate users
    console.log('\n👥 Migrating users...');
    const users = db.prepare('SELECT * FROM users').all() as any[];

    for (const user of users) {
      await sql`
        INSERT INTO users (id, email, name, password_hash, role, created_at, updated_at)
        VALUES (
          ${user.id},
          ${user.email},
          ${user.name},
          ${user.password_hash},
          ${user.role},
          ${user.created_at},
          ${user.updated_at}
        )
        ON CONFLICT (email) DO NOTHING
      `;
      console.log(`   ✅ ${user.name} (${user.email})`);
    }

    // Update sequence for users
    if (users.length > 0) {
      const maxId = Math.max(...users.map(u => u.id));
      await sql`SELECT setval('users_id_seq', ${maxId})`;
    }

    // Step 3: Migrate meeting minutes
    console.log('\n📝 Migrating meeting minutes...');
    const minutes = db.prepare('SELECT * FROM meeting_minutes').all() as any[];

    for (const minute of minutes) {
      await sql`
        INSERT INTO meeting_minutes (id, title, meeting_date, content, file_path, created_by, created_at, updated_at)
        VALUES (
          ${minute.id},
          ${minute.title},
          ${minute.meeting_date},
          ${minute.content},
          ${minute.file_path},
          ${minute.created_by},
          ${minute.created_at},
          ${minute.updated_at}
        )
      `;
      console.log(`   ✅ ${minute.title}`);
    }

    if (minutes.length > 0) {
      const maxId = Math.max(...minutes.map(m => m.id));
      await sql`SELECT setval('meeting_minutes_id_seq', ${maxId})`;
    }

    // Step 4: Migrate tasks
    console.log('\n✅ Migrating tasks...');
    const tasks = db.prepare('SELECT * FROM tasks').all() as any[];

    for (const task of tasks) {
      await sql`
        INSERT INTO tasks (
          id, title, description, assigned_to, assigned_to_email, assigned_to_name,
          created_by, status, priority, due_date, completed_at, created_at, updated_at
        )
        VALUES (
          ${task.id},
          ${task.title},
          ${task.description},
          ${task.assigned_to},
          ${task.assigned_to_email},
          ${task.assigned_to_name},
          ${task.created_by},
          ${task.status},
          ${task.priority},
          ${task.due_date},
          ${task.completed_at},
          ${task.created_at},
          ${task.updated_at}
        )
      `;
      console.log(`   ✅ ${task.title}`);
    }

    if (tasks.length > 0) {
      const maxId = Math.max(...tasks.map(t => t.id));
      await sql`SELECT setval('tasks_id_seq', ${maxId})`;
    }

    // Step 5: Migrate task comments
    console.log('\n💬 Migrating task comments...');
    const comments = db.prepare('SELECT * FROM task_comments').all() as any[];

    for (const comment of comments) {
      await sql`
        INSERT INTO task_comments (id, task_id, user_id, comment, created_at)
        VALUES (
          ${comment.id},
          ${comment.task_id},
          ${comment.user_id},
          ${comment.comment},
          ${comment.created_at}
        )
      `;
    }

    if (comments.length > 0) {
      const maxId = Math.max(...comments.map(c => c.id));
      await sql`SELECT setval('task_comments_id_seq', ${maxId})`;
    }
    console.log(`   ✅ Migrated ${comments.length} comments`);

    // Step 6: Migrate agenda items
    console.log('\n📋 Migrating agenda items...');
    const agendaItems = db.prepare('SELECT * FROM agenda_items').all() as any[];

    for (const item of agendaItems) {
      await sql`
        INSERT INTO agenda_items (id, title, description, proposed_by, proposed_by_name, status, priority, created_at)
        VALUES (
          ${item.id},
          ${item.title},
          ${item.description},
          ${item.proposed_by},
          ${item.proposed_by_name},
          ${item.status},
          ${item.priority},
          ${item.created_at}
        )
      `;
    }

    if (agendaItems.length > 0) {
      const maxId = Math.max(...agendaItems.map(i => i.id));
      await sql`SELECT setval('agenda_items_id_seq', ${maxId})`;
    }
    console.log(`   ✅ Migrated ${agendaItems.length} agenda items`);

    // Step 7: Migrate agendas
    console.log('\n📅 Migrating agendas...');
    const agendas = db.prepare('SELECT * FROM agendas').all() as any[];

    for (const agenda of agendas) {
      await sql`
        INSERT INTO agendas (id, meeting_date, title, content, status, created_by, sent_at, created_at, updated_at)
        VALUES (
          ${agenda.id},
          ${agenda.meeting_date},
          ${agenda.title},
          ${agenda.content},
          ${agenda.status},
          ${agenda.created_by},
          ${agenda.sent_at},
          ${agenda.created_at},
          ${agenda.updated_at}
        )
      `;
    }

    if (agendas.length > 0) {
      const maxId = Math.max(...agendas.map(a => a.id));
      await sql`SELECT setval('agendas_id_seq', ${maxId})`;
    }
    console.log(`   ✅ Migrated ${agendas.length} agendas`);

    console.log('\n✅ Migration completed successfully!\n');
    console.log('📝 Next steps:');
    console.log('1. Add DATABASE_URL to your .env.local file');
    console.log('2. Update your code to use the Postgres database');
    console.log('3. Deploy to Vercel\n');

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateToPostgres().catch(console.error);
