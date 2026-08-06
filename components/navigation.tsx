"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [schoolsOpen, setSchoolsOpen] = useState(false)
  const t = useTranslations('Navigation')
  const params = useParams()
  const locale = params?.locale || 'en'

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:font-semibold focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href={`/${locale}`} className="text-primary hover:text-accent transition-colors" aria-label="CISS Home">
              <Logo />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button
                className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1"
                aria-label="About menu"
                aria-haspopup="true"
              >
                {t('about')}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <Link
                    href={`/${locale}/about`}
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">{t('aboutCISS')}</div>
                    <div className="text-xs text-muted-foreground">{t('ourMission')}</div>
                  </Link>
                  <Link
                    href={`/${locale}/board`}
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">{t('boardOfDirectors')}</div>
                    <div className="text-xs text-muted-foreground">{t('governance')}</div>
                  </Link>
                  <Link
                    href={`/${locale}/governance`}
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">{t('governance')}</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1"
                aria-label="Our Schools menu"
                aria-haspopup="true"
              >
                {t('ourSchools')}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <Link
                    href={`/${locale}/schools/akram-jomaa`}
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">{t('aksSchool')}</div>
                    <div className="text-xs text-muted-foreground">KG - Grade 12</div>
                  </Link>
                  <Link
                    href={`/${locale}/schools/omar-ibn-al-khattab`}
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">{t('aisSchool')}</div>
                    <div className="text-xs text-muted-foreground">KG - Grade 9</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href={`/${locale}/parents`} className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
              {t('forParents')}
            </Link>
            <Link href={`/${locale}/news`} className="text-sm font-medium hover:text-accent transition-colors">
              {t('news')}
            </Link>
            <Link href={`/${locale}/careers`} className="text-sm font-medium hover:text-accent transition-colors">
              {t('careers')}
            </Link>
            <Button asChild size="sm">
              <Link href={`/${locale}/contact`}>{t('contact')}</Link>
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full px-4 py-3 hover:bg-accent/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  {t('about')}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", aboutOpen && "rotate-180")} />
                </button>
                {aboutOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href={`/${locale}/about`}
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      {t('aboutCISS')}
                    </Link>
                    <Link
                      href={`/${locale}/board`}
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      {t('boardOfDirectors')}
                    </Link>
                    <Link
                      href={`/${locale}/governance`}
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      {t('governance')}
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setSchoolsOpen(!schoolsOpen)}
                  className="w-full px-4 py-3 hover:bg-accent/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  {t('ourSchools')}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", schoolsOpen && "rotate-180")} />
                </button>
                {schoolsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href={`/${locale}/schools/akram-jomaa`}
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      {t('aksSchool')} (KG-12)
                    </Link>
                    <Link
                      href={`/${locale}/schools/omar-ibn-al-khattab`}
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      {t('aisSchool')} (KG-9)
                    </Link>
                  </div>
                )}
              </div>

              <Link href={`/${locale}/parents`} className="px-4 py-3 bg-accent/10 font-medium rounded-lg transition-colors">
                {t('forParents')}
              </Link>
              <Link href={`/${locale}/news`} className="px-4 py-3 hover:bg-accent/10 rounded-lg transition-colors">
                {t('news')}
              </Link>
              <Link href={`/${locale}/careers`} className="px-4 py-3 hover:bg-accent/10 rounded-lg transition-colors">
                {t('careers')}
              </Link>
              <div className="px-4 pt-2 flex gap-2">
                <Button asChild className="flex-1">
                  <Link href={`/${locale}/contact`}>{t('contact')}</Link>
                </Button>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
