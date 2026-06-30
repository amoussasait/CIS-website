import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/request';
import "../globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "CISS | Calgary Islamic School Society",
  description:
    "Calgary Islamic School Society oversees two campuses and is planning future growth to serve Calgary's Muslim community through excellent Islamic education.",
  generator: "v0.app",
  icons: {
    icon: "/images/ciss-logo-new.png",
    apple: "/images/ciss-logo-new.png",
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Explicitly load messages for this locale
  const messages = await getMessages({ locale });

  // Determine text direction based on locale
  const direction = locale === 'ar' || locale === 'ur' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} className={`${geist.variable} ${cairo.variable}`}>
      <body className={`${locale === 'ar' || locale === 'ur' ? 'font-cairo' : 'font-sans'} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
