#!/usr/bin/env node

/**
 * Translation Script for CISS Website
 *
 * This script helps translate content from English to Arabic and Urdu
 *
 * Usage:
 *   node scripts/translate-content.js "Your text here"
 *   node scripts/translate-content.js --file path/to/file.txt
 */

const fs = require('fs');
const path = require('path');

// LibreTranslate - Free, supports both Arabic and Urdu
async function translateWithLibre(text, targetLang) {
  try {
    const response = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: targetLang,
        format: 'text'
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error(`LibreTranslate error for ${targetLang}:`, error.message);
    return null;
  }
}

// DeepL Translation (requires API key)
async function translateWithDeepL(text, targetLang) {
  const apiKey = process.env.DEEPL_API_KEY;

  if (!apiKey) {
    console.log('⚠️  DEEPL_API_KEY not found. Using LibreTranslate instead.');
    return null;
  }

  try {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        text: text,
        target_lang: targetLang.toUpperCase(),
      })
    });

    const data = await response.json();
    return data.translations[0].text;
  } catch (error) {
    console.error(`DeepL error for ${targetLang}:`, error.message);
    return null;
  }
}

// Main translation function
async function translate(text) {
  console.log('\n📝 Original (English):');
  console.log(text);
  console.log('\n' + '='.repeat(60));

  // Translate to Arabic
  console.log('\n🔄 Translating to Arabic...');
  let arabicText = await translateWithDeepL(text, 'ar');

  if (!arabicText) {
    arabicText = await translateWithLibre(text, 'ar');
  }

  console.log('\n🇸🇦 Arabic Translation:');
  console.log(arabicText || 'Translation failed');

  // Translate to Urdu
  console.log('\n🔄 Translating to Urdu...');
  const urduText = await translateWithLibre(text, 'ur');

  console.log('\n🇵🇰 Urdu Translation:');
  console.log(urduText || 'Translation failed');

  console.log('\n' + '='.repeat(60));

  return {
    english: text,
    arabic: arabicText,
    urdu: urduText
  };
}

// Batch translate from JSON structure
async function translateJSON(obj, parentKey = '') {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      console.log(`\n🔄 Translating: ${parentKey}.${key}`);
      const translations = await translate(value);
      result[key] = {
        en: value,
        ar: translations.arabic,
        ur: translations.urdu
      };

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } else if (typeof value === 'object') {
      result[key] = await translateJSON(value, `${parentKey}.${key}`);
    }
  }

  return result;
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
📚 CISS Translation Tool

Usage:
  node scripts/translate-content.js "Your text here"
  node scripts/translate-content.js --file path/to/file.txt
  node scripts/translate-content.js --help

Examples:
  node scripts/translate-content.js "Welcome to CISS"
  node scripts/translate-content.js --file content.txt

Environment Variables:
  DEEPL_API_KEY - Optional, for better Arabic translations

Notes:
  - Uses LibreTranslate (free) by default
  - Set DEEPL_API_KEY for better quality (free tier available)
  - Translations may need manual review
    `);
    return;
  }

  if (args[0] === '--help' || args[0] === '-h') {
    return main();
  }

  let textToTranslate;

  if (args[0] === '--file' || args[0] === '-f') {
    const filePath = args[1];
    if (!filePath) {
      console.error('❌ Error: Please provide a file path');
      return;
    }

    try {
      textToTranslate = fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error(`❌ Error reading file: ${error.message}`);
      return;
    }
  } else {
    textToTranslate = args.join(' ');
  }

  if (!textToTranslate.trim()) {
    console.error('❌ Error: No text to translate');
    return;
  }

  console.log('🚀 Starting translation...\n');
  const result = await translate(textToTranslate);

  // Save to file if needed
  const outputPath = path.join(__dirname, '..', 'translations-output.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
  console.log(`\n💾 Results saved to: ${outputPath}`);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { translate, translateWithLibre, translateWithDeepL };
