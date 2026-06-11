import { processEmailQueue } from '../lib/email';

async function main() {
  console.log('Processing email queue...');

  const processed = await processEmailQueue();

  console.log(`Processed ${processed} emails`);
}

main().catch(console.error);
