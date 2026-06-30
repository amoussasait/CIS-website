# Internationalization (i18n) Implementation Guide

This document explains how internationalization has been implemented for the CISS website, supporting English, Arabic, and Urdu languages with full RTL (right-to-left) support.

## Overview

The website now supports three languages:
- **English (en)** - Left-to-right (LTR)
- **Arabic (ar)** - Right-to-left (RTL)
- **Urdu (ur)** - Right-to-left (RTL)

## Technology Stack

- **next-intl**: The primary i18n library for Next.js App Router
- **Tailwind CSS**: With custom RTL/LTR variants for directional styling
- **Next.js 16**: App Router with locale-based routing

## Project Structure

```
ciss-website/
├── i18n/
│   └── request.ts          # i18n configuration and locale settings
├── messages/
│   ├── en.json             # English translations
│   ├── ar.json             # Arabic translations
│   └── ur.json             # Urdu translations
├── app/
│   ├── layout.tsx          # Root layout (minimal wrapper)
│   └── [locale]/           # Locale-specific routes
│       ├── layout.tsx      # Main layout with i18n provider & RTL support
│       ├── page.tsx        # Homepage
│       └── ...             # All other pages
├── components/
│   ├── language-switcher.tsx  # Language selection dropdown
│   ├── navigation.tsx         # Translated navigation
│   ├── footer.tsx             # Translated footer
│   └── announcement-bar.tsx   # Translated announcement bar
└── middleware.ts           # Locale detection and routing
```

## Key Features

### 1. Automatic Locale Routing

All URLs now include the locale prefix:
- `/en/about` - English version
- `/ar/about` - Arabic version
- `/ur/about` - Urdu version

The middleware automatically handles:
- Locale detection from URL
- Redirecting users to the appropriate locale
- Preserving the locale across navigation

### 2. RTL Support

Arabic and Urdu pages automatically switch to RTL layout:
- The `<html>` element gets `dir="rtl"` attribute
- All UI elements respect the text direction
- Custom Tailwind variants available: `rtl:` and `ltr:`

### 3. Language Switcher

A globe icon in the navigation allows users to switch between languages:
- Desktop: Top navigation bar
- Mobile: Mobile menu at the bottom

The language switcher preserves the current page path when switching languages.

## Adding New Translations

### Step 1: Add to Translation Files

Update all three translation files in `/messages/`:

**en.json**:
```json
{
  "ComponentName": {
    "key": "English text"
  }
}
```

**ar.json**:
```json
{
  "ComponentName": {
    "key": "النص العربي"
  }
}
```

**ur.json**:
```json
{
  "ComponentName": {
    "key": "اردو متن"
  }
}
```

### Step 2: Use in Components

```tsx
"use client"

import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('ComponentName');

  return <div>{t('key')}</div>;
}
```

### Step 3: Update Links

All internal links must include the locale:

```tsx
import { useParams } from 'next/navigation';
import Link from 'next/link';

export function MyComponent() {
  const params = useParams();
  const locale = params?.locale || 'en';

  return <Link href={`/${locale}/about`}>About</Link>;
}
```

## RTL Styling with Tailwind

Use the custom RTL/LTR variants for directional styling:

```tsx
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  Content with conditional margin
</div>

<div className="text-left rtl:text-right">
  Text aligned based on direction
</div>
```

## Translation Namespaces

Current translation namespaces:

- **Navigation**: Nav menu items, links
- **Footer**: Footer sections, links, contact info
- **Home**: Homepage content
- **About**: About page content
- **Contact**: Contact form and page
- **Common**: Shared UI text (buttons, labels, etc.)
- **Announcement**: Announcement bar messages

## Best Practices

### 1. Always Use Translation Keys

Don't hardcode text in components:
```tsx
// ❌ Bad
<button>Click me</button>

// ✅ Good
<button>{t('clickMe')}</button>
```

### 2. Keep Translation Files Organized

Group related translations under meaningful namespaces:
```json
{
  "Navigation": { ... },
  "Footer": { ... },
  "Forms": {
    "submit": "Submit",
    "cancel": "Cancel"
  }
}
```

### 3. Include Locale in All Links

Always include the locale parameter in navigation:
```tsx
// ✅ Good
<Link href={`/${locale}/contact`}>Contact</Link>

// ❌ Bad - will cause errors
<Link href="/contact">Contact</Link>
```

### 4. Test in All Languages

Before deploying:
1. Test each page in all three languages
2. Verify RTL layout for Arabic and Urdu
3. Check that all text is translated
4. Ensure the language switcher works on all pages

## Metadata and SEO

To add translated metadata, update the layout files:

```tsx
// app/[locale]/layout.tsx or app/[locale]/page.tsx
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const titles = {
    en: "CISS | Calgary Islamic School Society",
    ar: "CISS | جمعية المدرسة الإسلامية في كالجاري",
    ur: "CISS | کیلگری اسلامی اسکول سوسائٹی"
  };

  return {
    title: titles[locale as 'en' | 'ar' | 'ur'],
    // ... other metadata
  };
}
```

## Troubleshooting

### Build Errors

If you encounter build errors related to translations:

1. Check that all translation keys exist in all three language files
2. Verify the import path in `i18n/request.ts` is correct
3. Ensure `next-intl` is properly configured in `next.config.mjs`

### Missing Translations

If text isn't being translated:

1. Verify the translation key exists in the JSON file
2. Check that you're using the correct namespace
3. Make sure the component is using `useTranslations` correctly
4. Confirm the component has `"use client"` directive if needed

### RTL Issues

If RTL layout isn't working:

1. Check that `dir="rtl"` is set in the HTML element
2. Verify you're using Tailwind's RTL variants correctly
3. Test in Arabic (ar) or Urdu (ur) locale
4. Use browser DevTools to inspect the `dir` attribute

## Future Improvements

Consider these enhancements:

1. **Add more languages**: Follow the same pattern to add French, Spanish, etc.
2. **Translate page content**: Currently only UI chrome is translated
3. **Dynamic content translation**: Translate database content (news, announcements, etc.)
4. **Language persistence**: Store user's language preference in localStorage
5. **Automated translation**: Use translation APIs for initial drafts

## Resources

- [next-intl Documentation](https://next-intl.dev/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Tailwind RTL Support](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support)
