"use client"

import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/i18n/request';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params?.locale as Locale) || 'en';

  const switchLocale = (newLocale: Locale) => {
    if (!pathname) return;

    // Remove the current locale from the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the locale segment
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 gap-1.5 px-3">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLocale(locale)}
            className={currentLocale === locale ? 'bg-accent' : ''}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
