import db, { initializeDatabase, logActivity } from '../lib/db';
import bcrypt from 'bcryptjs';

// Committee members
const committeeMembers = [
  { email: 'o.elhajjar@muslimscalgary.ca', name: 'Omar El-Hajjar' },
  { email: 'ramyelhamalawy@prrd8.ca', name: 'Ramy Elhamalawy' },
  { email: 'MoussaOuarou@prrd8.ca', name: 'Moussa Ouarou' },
  { email: 'a.abbas@muslimscalgary.ca', name: 'Abdulrahman Abbas' },
  { email: 'dr.m.hafez@gmail.com', name: 'Dr. M. Abdel-Hafez' },
  { email: 'marwaajram3@gmail.com', name: 'Marwa Ajram' },
  { email: 'medinakalaf@gmail.com', name: 'Medina Desouki Khalaf' },
  { email: 'basir.saleh@aecom.com', name: 'Basir' },
  { email: 'ali.moussa@shaw.ca', name: 'Ali Moussa' },
  { email: 'rightcareerfit@shaw.ca', name: 'Hoda Kilani' },
  { email: 'm.zohiri@outlook.com', name: 'Mohamed Zohiri' },
  { email: 'z.ahmad@muslimscalgary.ca', name: 'Z Ahmad' },
  { email: 'info@cissociety.ca', name: 'CISS Society' },
];

async function setupDatabase() {
  console.log('🚀 Setting up CISS Committee Management Database...\n');

  // Initialize database schema
  initializeDatabase();

  // Check if users already exist
  const existingUsers = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };

  if (existingUsers.count > 0) {
    console.log('⚠️  Users already exist in database. Skipping user creation.');
    console.log('   To reset, delete data/ciss-committee.db and run this script again.\n');
    return;
  }

  // Default password for all users (they should change this on first login)
  const defaultPassword = 'CISS2026!';
  const passwordHash = await bcrypt.hash(defaultPassword, 10);

  // Insert all committee members
  const insertUser = db.prepare(`
    INSERT INTO users (email, name, password_hash, role)
    VALUES (?, ?, ?, ?)
  `);

  console.log('👥 Creating committee member accounts...\n');

  for (const member of committeeMembers) {
    try {
      insertUser.run(member.email, member.name, passwordHash, 'member');
      console.log(`   ✅ ${member.name} (${member.email})`);
    } catch (error) {
      console.log(`   ❌ Failed to create ${member.name}: ${error}`);
    }
  }

  // Make the first user (you) an admin
  db.prepare(`UPDATE users SET role = 'admin' WHERE email = ?`).run('ali.moussa@shaw.ca');

  console.log('\n✅ Database setup complete!\n');
  console.log('📝 Default login credentials for all users:');
  console.log(`   Username: [their email]`);
  console.log(`   Password: ${defaultPassword}`);
  console.log('\n🔐 IMPORTANT: Users should change their password on first login!\n');
  console.log(`📊 Database location: data/ciss-committee.db\n`);
}

// Run setup
setupDatabase().catch(console.error);
