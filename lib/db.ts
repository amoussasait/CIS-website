import { neon } from '@neondatabase/serverless';

// Get database URL from environment - works with both local and production
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set. Please add it to your .env.local file.');
}

// Create Neon SQL client
const sql = neon(databaseUrl);

// Initialize database schema (Postgres version)
export async function initializeDatabase() {
  console.log('✅ Database already initialized in Postgres!');
  // Tables are already created via migration script
  // This function is kept for compatibility
}

// Helper function to log activity (Postgres version)
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

// Export SQL client as default
export default sql;
