#!/usr/bin/env node

/**
 * Translation Parser for CISS Website
 *
 * This script parses translations from ChatGPT/Claude output and updates
 * the Arabic and Urdu translation JSON files.
 *
 * Usage:
 *   1. Get translations from ChatGPT/Claude
 *   2. Save the output to TRANSLATIONS_COMPLETE.txt
 *   3. Run: node scripts/parse-translations.js
 */

const fs = require('fs');
const path = require('path');

// File paths
const TRANSLATIONS_FILE = path.join(__dirname, '..', 'TRANSLATIONS_COMPLETE.txt');
const AR_JSON_FILE = path.join(__dirname, '..', 'messages', 'ar.json');
const UR_JSON_FILE = path.join(__dirname, '..', 'messages', 'ur.json');

// Section to JSON key mapping
const SECTION_MAP = {
  'HOMEPAGE HERO': 'HomePage.Hero',
  'HOMEPAGE STATS': 'HomePage.Stats',
  'HOMEPAGE COMMUNICATION': 'HomePage.Communication',
  'WHY CHOOSE CISS': 'HomePage.WhyChoose',
  'OUR SCHOOLS': 'HomePage.Schools',
  'OUR FOUNDATION': 'HomePage.Foundation',
  'ABOUT PAGE - OVERVIEW': 'AboutPage.Overview',
  'ABOUT PAGE - MOTTO': 'AboutPage.Motto',
  'ABOUT PAGE - DISTINCTIVE FEATURES': 'AboutPage.Distinctive',
  'ABOUT PAGE - PRIORITIES': 'AboutPage.Priorities',
  'ABOUT PAGE - CISS RESPONSIBILITIES': 'AboutPage.Responsibilities',
  'ABOUT PAGE - GOVERNANCE DOCUMENTS': 'AboutPage.Governance',
  'ABOUT PAGE - COMMITMENT': 'AboutPage.Commitment',
  'CONTACT PAGE': 'ContactPage',
  'BOARD PAGE - INTRO': 'BoardPage.Intro',
  'BOARD PAGE - RESPONSIBILITIES': 'BoardPage.Responsibilities',
  'BOARD PAGE - MEETINGS & CONTACT': 'BoardPage.MeetingsContact',
  'GOVERNANCE PAGE - INTRO': 'GovernancePage.Intro',
  'GOVERNANCE PAGE - BOARD LEADERSHIP': 'GovernancePage.Leadership',
  'GOVERNANCE PAGE - COMMITTEES': 'GovernancePage.Committees',
  'GOVERNANCE PAGE - CISS ROLE': 'GovernancePage.CISS',
  'GOVERNANCE PAGE - MCFC/MCC ROLE': 'GovernancePage.MCFC',
  'GOVERNANCE PAGE - PARENTS ROLE': 'GovernancePage.Parents',
  'GOVERNANCE PAGE - SCHOOL COUNCILS': 'GovernancePage.Councils',
  'GOVERNANCE PAGE - PROGRAM ADVISORY': 'GovernancePage.Advisory',
  'GOVERNANCE PAGE - PRINCIPALS': 'GovernancePage.Principals',
  'GOVERNANCE PAGE - COLLABORATION': 'GovernancePage.Collaboration',
  'FUTURE CAMPUS PAGE': 'FutureCampusPage',
  'NEWS PAGE ARTICLES': 'NewsPage'
};

function parseTranslations(content) {
  const lines = content.split('\n');
  const sections = {};
  let currentSection = null;
  let currentEnglish = null;
  let translationIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Detect section headers (e.g., "SECTION 1: HOMEPAGE HERO" or "---\nSECTION 1:")
    if (line.startsWith('SECTION') && line.includes(':')) {
      const sectionName = line.split(':')[1].trim().replace('---', '').trim();
      currentSection = sectionName.toUpperCase();

      if (!sections[currentSection]) {
        sections[currentSection] = [];
      }

      translationIndex = 0;
      continue;
    }

    // Parse [English] lines
    if (line.startsWith('[English]')) {
      currentEnglish = line.replace('[English]', '').trim();
      translationIndex++;

      if (currentSection && currentEnglish) {
        sections[currentSection].push({
          key: `text${translationIndex}`,
          english: currentEnglish,
          arabic: null,
          urdu: null
        });
      }
    }

    // Parse [Arabic] lines
    if (line.startsWith('[Arabic]') && currentSection && currentEnglish) {
      const arabic = line.replace('[Arabic]', '').trim();
      const lastItem = sections[currentSection][sections[currentSection].length - 1];
      if (lastItem && lastItem.english === currentEnglish) {
        lastItem.arabic = arabic;
      }
    }

    // Parse [Urdu] lines
    if (line.startsWith('[Urdu]') && currentSection && currentEnglish) {
      const urdu = line.replace('[Urdu]', '').trim();
      const lastItem = sections[currentSection][sections[currentSection].length - 1];
      if (lastItem && lastItem.english === currentEnglish) {
        lastItem.urdu = urdu;
      }
    }
  }

  return sections;
}

function generateJSON(sections, language) {
  const result = {};

  // Group by page/section
  for (const [sectionName, items] of Object.entries(sections)) {
    // Try to find mapping
    const jsonKey = SECTION_MAP[sectionName] || sectionName;
    const parts = jsonKey.split('.');

    // Create nested structure
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }

    // Add translations
    const lastPart = parts[parts.length - 1];
    if (!current[lastPart]) {
      current[lastPart] = {};
    }

    items.forEach((item, index) => {
      const value = language === 'ar' ? item.arabic : item.urdu;
      if (value) {
        current[lastPart][item.key] = value;
      }
    });
  }

  return result;
}

function mergeWithExisting(existingJSON, newContent) {
  // Deep merge: keep existing UI translations, add new content translations
  const merged = { ...existingJSON };

  for (const [key, value] of Object.entries(newContent)) {
    if (typeof value === 'object' && !Array.isArray(value)) {
      merged[key] = {
        ...(merged[key] || {}),
        ...value
      };
    } else {
      merged[key] = value;
    }
  }

  return merged;
}

async function main() {
  console.log('🚀 CISS Translation Parser\n');

  // Check if translations file exists
  if (!fs.existsSync(TRANSLATIONS_FILE)) {
    console.error('❌ Error: TRANSLATIONS_COMPLETE.txt not found');
    console.log('\nPlease:');
    console.log('1. Get translations from ChatGPT/Claude');
    console.log('2. Save the output to TRANSLATIONS_COMPLETE.txt');
    console.log('3. Run this script again\n');
    return;
  }

  console.log('📖 Reading translations...');
  const content = fs.readFileSync(TRANSLATIONS_FILE, 'utf-8');

  console.log('🔍 Parsing translations...');
  const sections = parseTranslations(content);

  console.log(`\n✅ Found ${Object.keys(sections).length} sections`);
  console.log('\nSections parsed:');
  Object.keys(sections).forEach(section => {
    console.log(`  - ${section} (${sections[section].length} items)`);
  });

  // Generate Arabic JSON
  console.log('\n📝 Generating Arabic translations...');
  const arabicContent = generateJSON(sections, 'ar');

  // Read existing Arabic JSON
  const existingArabic = fs.existsSync(AR_JSON_FILE)
    ? JSON.parse(fs.readFileSync(AR_JSON_FILE, 'utf-8'))
    : {};

  // Merge with existing
  const mergedArabic = mergeWithExisting(existingArabic, arabicContent);

  // Write Arabic JSON
  fs.writeFileSync(AR_JSON_FILE, JSON.stringify(mergedArabic, null, 2));
  console.log(`✅ Updated ${AR_JSON_FILE}`);

  // Generate Urdu JSON
  console.log('\n📝 Generating Urdu translations...');
  const urduContent = generateJSON(sections, 'ur');

  // Read existing Urdu JSON
  const existingUrdu = fs.existsSync(UR_JSON_FILE)
    ? JSON.parse(fs.readFileSync(UR_JSON_FILE, 'utf-8'))
    : {};

  // Merge with existing
  const mergedUrdu = mergeWithExisting(existingUrdu, urduContent);

  // Write Urdu JSON
  fs.writeFileSync(UR_JSON_FILE, JSON.stringify(mergedUrdu, null, 2));
  console.log(`✅ Updated ${UR_JSON_FILE}`);

  console.log('\n🎉 Translation files updated successfully!');
  console.log('\nNext steps:');
  console.log('1. Review the updated JSON files');
  console.log('2. Update your components to use the new translation keys');
  console.log('3. Test all three languages (en, ar, ur)');
  console.log('4. Deploy to production\n');

  // Generate a report
  console.log('📊 Translation Report:');
  console.log(`   Arabic: ${Object.keys(sections).length} sections added`);
  console.log(`   Urdu: ${Object.keys(sections).length} sections added`);

  // Check for missing translations
  let missingArabic = 0;
  let missingUrdu = 0;

  Object.values(sections).forEach(items => {
    items.forEach(item => {
      if (!item.arabic || item.arabic === 'null' || item.arabic === '') missingArabic++;
      if (!item.urdu || item.urdu === 'null' || item.urdu === '') missingUrdu++;
    });
  });

  if (missingArabic > 0 || missingUrdu > 0) {
    console.log('\n⚠️  Warning: Some translations are missing:');
    if (missingArabic > 0) console.log(`   - Arabic: ${missingArabic} missing`);
    if (missingUrdu > 0) console.log(`   - Urdu: ${missingUrdu} missing`);
    console.log('\nPlease review the translations and fill in any missing items.\n');
  } else {
    console.log('   ✅ All translations present!\n');
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { parseTranslations, generateJSON, mergeWithExisting };
