import { neon } from '@neondatabase/serverless';

// Get SQL client - will be initialized when first called
function getDb() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set. Make sure to add it to your .env.local file.');
  }

  return neon(databaseUrl);
}

// Initialize SQL client
const sql = getDb();

// Initialize database schema for Postgres
export async function initializePostgresDatabase() {
  try {
    // Users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT DEFAULT 'member',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Meeting minutes table
    await sql`
      CREATE TABLE IF NOT EXISTS meeting_minutes (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        meeting_date DATE NOT NULL,
        content TEXT NOT NULL,
        file_path TEXT,
        created_by INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (created_by) REFERENCES users(id)
      )
    `;

    // Tasks/Projects table
    await sql`
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        assigned_to INTEGER,
        assigned_to_email TEXT,
        assigned_to_name TEXT,
        created_by INTEGER NOT NULL,
        status TEXT DEFAULT 'pending',
        priority TEXT DEFAULT 'medium',
        due_date DATE,
        completed_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (assigned_to) REFERENCES users(id),
        FOREIGN KEY (created_by) REFERENCES users(id)
      )
    `;

    // Task comments/notes table
    await sql`
      CREATE TABLE IF NOT EXISTS task_comments (
        id SERIAL PRIMARY KEY,
        task_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        comment TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;

    // Proposed agenda items table
    await sql`
      CREATE TABLE IF NOT EXISTS agenda_items (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        proposed_by INTEGER NOT NULL,
        proposed_by_name TEXT,
        status TEXT DEFAULT 'proposed',
        priority INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (proposed_by) REFERENCES users(id)
      )
    `;

    // Agendas table
    await sql`
      CREATE TABLE IF NOT EXISTS agendas (
        id SERIAL PRIMARY KEY,
        meeting_date DATE NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        status TEXT DEFAULT 'draft',
        created_by INTEGER NOT NULL,
        sent_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (created_by) REFERENCES users(id)
      )
    `;

    // Agenda items mapping
    await sql`
      CREATE TABLE IF NOT EXISTS agenda_item_mappings (
        id SERIAL PRIMARY KEY,
        agenda_id INTEGER NOT NULL,
        agenda_item_id INTEGER NOT NULL,
        order_index INTEGER DEFAULT 0,
        FOREIGN KEY (agenda_id) REFERENCES agendas(id) ON DELETE CASCADE,
        FOREIGN KEY (agenda_item_id) REFERENCES agenda_items(id) ON DELETE CASCADE
      )
    `;

    // Activity log table
    await sql`
      CREATE TABLE IF NOT EXISTS activity_log (
        id SERIAL PRIMARY KEY,
        user_id INTEGER,
        action TEXT NOT NULL,
        entity_type TEXT,
        entity_id INTEGER,
        details TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;

    // Email notifications queue
    await sql`
      CREATE TABLE IF NOT EXISTS email_queue (
        id SERIAL PRIMARY KEY,
        to_email TEXT NOT NULL,
        to_name TEXT,
        subject TEXT NOT NULL,
        body TEXT NOT NULL,
        status TEXT DEFAULT 'pending',
        retry_count INTEGER DEFAULT 0,
        sent_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        error_message TEXT
      )
    `;

    console.log('✅ Postgres database initialized successfully!');
  } catch (error) {
    console.error('Error initializing Postgres database:', error);
    throw error;
  }
}

// Helper function to log activity
export async function logActivity(
  userId: number | null,
  action: string,
  entityType?: string,
  entityId?: number,
  details?: string
) {
  await sql`
    INSERT INTO activity_log (user_id, action, entity_type, entity_id, details)
    VALUES (${userId}, ${action}, ${entityType || null}, ${entityId || null}, ${details || null})
  `;
}

export { sql };
export default sql;
