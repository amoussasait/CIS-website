import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

import { processEmailQueue } from '../lib/email';

async function main() {
  console.log('🚀 Starting email queue processor...\n');

  const result = await processEmailQueue();

  console.log(`\n✅ Done! Processed ${result.total} emails`);
  process.exit(0);
}

main().catch((error) => {
  console.error('❌ Error:', error);
  process.exit(1);
});
