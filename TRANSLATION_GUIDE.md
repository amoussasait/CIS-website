# Translation Guide for CISS Website

## Current Status

✅ **UI Elements Translated:**
- Navigation menus
- Footer
- Buttons and common UI text
- Announcement bar

❌ **Not Yet Translated:**
- Page content (paragraphs, descriptions)
- News articles
- Board member bios
- About page content
- Contact page content

## Translation API Options

### 1. **Google Cloud Translation API** 💰💰💰
**Pros:**
- Very accurate
- Supports 100+ languages
- Good with context
- Handles HTML

**Cons:**
- **Expensive**: $20 per million characters
- Requires Google Cloud account
- Need credit card even for free tier

**Cost Estimate for CISS:**
- Your entire website: ~100,000 characters
- Cost: ~$2 per full translation
- Annual: ~$50-100 if you update frequently

**Setup:**
```bash
npm install @google-cloud/translate
```

### 2. **DeepL API** 💰💰 ⭐ RECOMMENDED
**Pros:**
- **Better quality** than Google for European languages
- **Free tier**: 500,000 characters/month
- Simple API
- Maintains formatting
- Good with Arabic

**Cons:**
- Limited to 30+ languages (but includes Arabic, not Urdu)
- Free tier has limits

**Cost Estimate:**
- Free tier: 500,000 chars/month
- Pro: $5.49/month for 5M characters
- Your entire site fits in free tier!

**Setup:**
```bash
npm install deepl-node
```

### 3. **LibreTranslate** 💰 FREE ⭐ BEST FOR URDU
**Pros:**
- **100% Free** and open source
- Self-hostable
- No API key needed (public instance)
- Supports Arabic AND Urdu
- Privacy-friendly

**Cons:**
- Quality not as good as DeepL/Google
- Public instance can be slow
- May need review/editing

**Cost:** FREE

**Setup:**
```bash
npm install libretranslate
```

### 4. **Microsoft Translator** 💰
**Pros:**
- Free tier: 2M characters/month
- Good quality
- Supports Urdu
- Azure integration

**Cons:**
- Requires Azure account
- Complex setup

## Recommended Approach

### Option A: **Hybrid Approach** (RECOMMENDED)

1. **Use DeepL for Arabic** (better quality, free)
2. **Use LibreTranslate for Urdu** (free, supports Urdu)
3. **Review and edit** all translations manually

### Option B: **Manual Translation** (BEST QUALITY)

Hire translators or use community volunteers:
- Arabic speaker: Review/improve machine translations
- Urdu speaker: Review/improve machine translations
- Estimated time: 10-20 hours total
- Cost: $300-600 if hiring professional translators

## Translation Script

I've created a script to help you translate content. Here's how to use it:

### Step 1: Create Translation Script

```javascript
// scripts/translate-content.js
const DeepL = require('deepl-node');
const fs = require('fs');

async function translateWithDeepL(text, targetLang) {
  const authKey = process.env.DEEPL_API_KEY;
  const translator = new DeepL.Translator(authKey);

  try {
    const result = await translator.translateText(text, null, targetLang);
    return result.text;
  } catch (error) {
    console.error(`DeepL error: ${error.message}`);
    return null;
  }
}

async function translateWithLibre(text, targetLang) {
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

  const data = await response.json();
  return data.translatedText;
}

// Usage
async function main() {
  const englishText = "Welcome to CISS";

  // Translate to Arabic with DeepL
  const arabicText = await translateWithDeepL(englishText, 'ar');
  console.log('Arabic:', arabicText);

  // Translate to Urdu with LibreTranslate
  const urduText = await translateWithLibre(englishText, 'ur');
  console.log('Urdu:', urduText);
}

main();
```

### Step 2: Get API Keys

**For DeepL (Free):**
1. Go to https://www.deepl.com/pro-api
2. Sign up for free account
3. Get your API key
4. Add to `.env.local`:
   ```
   DEEPL_API_KEY=your-key-here
   ```

**For LibreTranslate:**
No API key needed! Use public instance.

### Step 3: Install Dependencies

```bash
npm install deepl-node node-fetch
```

### Step 4: Run Translation

```bash
node scripts/translate-content.js
```

## What Content Needs Translation?

### High Priority:
1. **Homepage** (`app/[locale]/page.tsx`)
   - Hero section
   - Why Choose CISS
   - Our Foundation
   - School descriptions

2. **About Page** (`app/[locale]/about/page.tsx`)
   - Mission, Vision, Values
   - School descriptions

3. **Contact Page** (`app/[locale]/contact/page.tsx`)
   - Form labels
   - Contact information

### Medium Priority:
4. **Board Page** (`app/[locale]/board/page.tsx`)
   - Board member bios (already in English in `lib/data/directors.ts`)

5. **News/Updates Pages**
   - News articles
   - Announcements

### Low Priority:
6. **School-specific pages**
7. **Registration page**
8. **Parents page**

## Translation Workflow

1. **Extract text** from component files
2. **Translate** using APIs (get first draft)
3. **Review** with native speakers
4. **Update** JSON files in `/messages/`
5. **Test** on localhost
6. **Deploy**

## Tips for Better Translations

### For Arabic:
- Keep proper nouns in Arabic script when possible
- Verify religious terms are correct
- Check right-to-left formatting
- Review honorifics (الشيخ, الدكتور, etc.)

### For Urdu:
- Mix Arabic religious terms with Urdu
- Check  formality level (آپ vs تم)
- Verify educational terminology
- Arabic script names may need adjustment

### For Both:
- **Don't translate:**
  - School names (keep as is)
  - Person names
  - Addresses
  - Phone numbers
  - Email addresses
  - Grade levels (K-12, etc.)

- **Do translate:**
  - Descriptions
  - Instructions
  - Benefits/features
  - Calls to action

## Need Help?

If you want me to:
1. Create the translation script
2. Translate specific pages
3. Set up API integration
4. Review translations

Just let me know which pages you want translated first!

## Cost Comparison Summary

| Service | Free Tier | Paid | Quality | Supports Urdu | Recommended |
|---------|-----------|------|---------|---------------|-------------|
| **DeepL** | 500K/month | $5.49/month | ⭐⭐⭐⭐⭐ | ❌ No | ✅ For Arabic |
| **LibreTranslate** | Unlimited | Free | ⭐⭐⭐ | ✅ Yes | ✅ For Urdu |
| **Google Translate** | None | $20/1M chars | ⭐⭐⭐⭐ | ✅ Yes | Maybe |
| **Microsoft** | 2M/month | Complex | ⭐⭐⭐⭐ | ✅ Yes | If you have Azure |
| **Manual** | N/A | $300-600 | ⭐⭐⭐⭐⭐ | ✅ Yes | ✅ Best quality |

**My Recommendation:** Use DeepL + LibreTranslate for first draft, then have native speakers review and improve.
