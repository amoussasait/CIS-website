'use client'

import { useTranslations } from 'next-intl'

export function Logo({ className = "", iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  const t = useTranslations('Logo')

  if (iconOnly) {
    return (
      <img
        src="/images/ciss-logo-new.png"
        alt={t('altText')}
        className={`h-12 w-12 ${className}`}
      />
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/images/ciss-logo-new.png" alt={t('altText')} className="h-12 w-12" />
      <div className="flex flex-col">
        <span className="text-2xl font-bold leading-none tracking-tight">{t('abbreviation')}</span>
        <span className="text-[10px] leading-tight text-muted-foreground">{t('fullName')}</span>
      </div>
    </div>
  )
}
