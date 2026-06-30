# How to Translate CISS Website Content

This guide explains how to get translations for the CISS website and integrate them back into the site.

## Overview

The file `CONTENT_TO_TRANSLATE.txt` contains all the English content that needs translation into Arabic and Urdu. This guide will walk you through getting those translations and putting them back into the website.

---

## Step 1: Get Translations from ChatGPT or Claude

### Option A: Using ChatGPT (Recommended)

1. Open ChatGPT (https://chat.openai.com)
2. Start a new chat
3. Copy the **entire contents** of `CONTENT_TO_TRANSLATE.txt`
4. Paste it into ChatGPT
5. Add this prompt at the end:

```
Please translate all the text above following the instructions at the top of the file.
Provide translations in the same format:

SECTION_NAME
[English] original text
[Arabic] translation here
[Urdu] translation here

Make sure to:
- Keep school names as-is: "Akram Jomaa Islamic School" and "Omar Ibn Al-Khattab School"
- Keep all grade levels, proper names, emails, and phone numbers unchanged
- Use formal, respectful language appropriate for an educational institution
- Use proper Islamic terminology
```

### Option B: Using Claude (Alternative)

Same process as ChatGPT, just use Claude.ai instead.

### What to Expect

- Processing time: 2-5 minutes for the full file
- The AI will return the same format with Arabic and Urdu translations added
- **Important**: Always review translations with a native speaker if possible

---

## Step 2: Save the Translations

1. Copy the entire response from ChatGPT/Claude
2. Save it to a new file in the project: `TRANSLATIONS_COMPLETE.txt`
3. Review the output to make sure all sections are included

---

## Step 3: Integrate Translations into the Website

### Option A: Automated Integration (Recommended - Fast & Easy!)

I've created a script that automatically parses the translations and updates the JSON files for you!

**How to use:**

1. Make sure you saved your translations to `TRANSLATIONS_COMPLETE.txt` (from Step 2)

2. Run the parser script:
   ```bash
   node scripts/parse-translations.js
   ```

3. The script will:
   - Read your `TRANSLATIONS_COMPLETE.txt` file
   - Parse all the Arabic and Urdu translations
   - Automatically update `messages/ar.json` and `messages/ur.json`
   - Keep your existing UI translations (navigation, footer, etc.)
   - Add all the new page content translations
   - Show you a report of what was added

**That's it!** The script does all the work for you.

### Option B: Manual Integration (If you prefer doing it yourself)

If you want to manually add translations to the JSON files:

The translation files are located in the `messages/` folder:
- `messages/en.json` (English - already complete)
- `messages/ar.json` (Arabic - needs content added)
- `messages/ur.json` (Urdu - needs content added)

Currently, these files only contain UI translations (navigation, buttons, etc.). You'll need to add new sections for page content.

**Example structure to add:**

```json
{
  "Navigation": { ... existing ... },
  "Footer": { ... existing ... },
  "Home": { ... existing ... },

  "HomePage": {
    "Hero": {
      "text1": "Serving Calgary's Muslim community...",
      "text2": "Calgary Islamic School Society..."
    },
    "Stats": {
      "text1": "Years of Service",
      "text2": "Serving Calgary families"
    }
  },

  "AboutPage": {
    "Overview": {
      "text1": "Serving Calgary's Muslim Community...",
      "text2": "CISS is the governing society..."
    }
  },

  "ContactPage": {
    "text1": "We'd love to hear from you",
    "text2": "General inquiries and questions"
  }
}
```

---

## Step 4: Update Components to Use Translations

After adding translations to the JSON files, you'll need to update the React components to use them instead of hardcoded text.

### Example: Homepage Hero Section

**Before (hardcoded):**
```tsx
<h1>Serving Calgary's Muslim community through excellent Islamic education</h1>
```

**After (using translations):**
```tsx
"use client"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations('HomePage')

  return (
    <h1>{t('heroServing')}</h1>
  )
}
```

### Components That Need Updating

These component files have hardcoded English text that should use translations:

1. **app/[locale]/page.tsx** (Homepage)
   - Hero section
   - Stats section
   - Communication section
   - Why Choose CISS
   - Schools section
   - Foundation section

2. **app/[locale]/about/page.tsx** (About page)
   - Overview
   - Motto
   - Distinctive features
   - Priorities
   - Responsibilities
   - Governance documents

3. **app/[locale]/contact/page.tsx** (Contact page)
   - Page title and descriptions
   - Form labels (if not already translated)

4. **app/[locale]/board/page.tsx** (Board page)
   - Intro section
   - Responsibilities
   - Meetings and contact info

5. **app/[locale]/governance/page.tsx** (Governance page)
   - All role descriptions
   - Committee information
   - Collaboration section

6. **app/[locale]/future-campus/page.tsx** (Future Campus page)
   - Hero section
   - Campus features
   - Timeline
   - Form

7. **app/[locale]/news/page.tsx** or news articles
   - Article content (if stored in database, update database)

---

## Step 5: Test the Translations

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test each language:
   - English: http://localhost:3000/en
   - Arabic: http://localhost:3000/ar
   - Urdu: http://localhost:3000/ur

3. Check for:
   - Proper text display
   - RTL layout working correctly for Arabic/Urdu
   - No missing translations (text showing as keys like `HomePage.heroServing`)
   - School names displaying correctly (not translated)

---

## Step 6: Deploy to Production

Once everything looks good locally:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add Arabic and Urdu translations for all website content"
   git push
   ```

2. Deploy (if using Vercel):
   ```bash
   npx vercel --prod
   ```

---

## Quick Reference

### File Locations

| File | Purpose |
|------|---------|
| `CONTENT_TO_TRANSLATE.txt` | Original English content to translate |
| `TRANSLATIONS_COMPLETE.txt` | Your translations from ChatGPT/Claude (you'll create this) |
| `messages/en.json` | English translations (complete) |
| `messages/ar.json` | Arabic translations (needs content added) |
| `messages/ur.json` | Urdu translations (needs content added) |

### Translation Keys

The translation files use dot notation:
- `Navigation.about` → "About" button in navigation
- `HomePage.heroServing` → Homepage hero text
- `AboutPage.mottoDescription` → About page motto text

---

## Need Help?

If you get stuck or need assistance with:
- Parsing the translations from ChatGPT/Claude
- Creating the auto-generation script
- Updating specific components
- Testing RTL layout
- Any other translation-related issues

Just ask! I can help with any of these steps.

---

## Tips for Best Results

1. **Review with Native Speakers**: Always have Arabic and Urdu speakers review the translations
2. **Test on Mobile**: RTL layouts can behave differently on mobile devices
3. **Check Religious Terms**: Ensure Islamic terminology is accurate and respectful
4. **Maintain Consistency**: Use the same translation for repeated phrases
5. **Keep Backups**: Save your `TRANSLATIONS_COMPLETE.txt` file for reference

---

## What's Already Done

✅ i18n framework setup (next-intl)
✅ Language switcher component
✅ RTL support for Arabic and Urdu
✅ UI translations (navigation, footer, buttons)
✅ Locale-based routing (/en, /ar, /ur)
✅ Translation extraction (CONTENT_TO_TRANSLATE.txt)

## What You Need to Do

1. ⏳ Get translations from ChatGPT/Claude
2. ⏳ Integrate translations into JSON files
3. ⏳ Update components to use translations
4. ⏳ Test all three languages
5. ⏳ Deploy to production

---

**Good luck with the translations! The hard part (setting up the i18n framework) is already done. Now it's just about getting the content translated and plugged in.**
