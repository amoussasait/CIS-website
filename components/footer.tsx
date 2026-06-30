"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Facebook, Instagram, Mail, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  const t = useTranslations('Footer')
  const params = useParams()
  const locale = params?.locale || 'en'

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="mb-4 text-primary-foreground">
              <Logo />
            </div>
            <p className="text-sm opacity-90" style={{ lineHeight: '2' }}>
              {t('description')}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About & Schools */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('aboutSchools')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/about`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('aboutCISS')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/board`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('boardOfDirectors')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/governance`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('governanceRoles')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/schools/akram-jomaa`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('aksSchool')} (KG-12)
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/schools/omar-ibn-al-khattab`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('aisSchool')} (KG-9)
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/parents`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('forParents')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/news`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/registration`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('registration')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t('privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@cissociety.ca" className="opacity-90 hover:opacity-100 transition-opacity hover:underline">
                  info@cissociety.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Calgary, AB</span>
              </li>
            </ul>

            <h4 className="font-bold text-sm mt-6 mb-3">{t('schoolHours')}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <div className="font-semibold">{t('aksSchool')}</div>
                <div>{t('mondayToFriday')}: {t('hours1')}</div>
              </li>
              <li>
                <div className="font-semibold">{t('aisSchool')}</div>
                <div>{t('mondayToFriday')}: {t('hours2')}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p className="mb-3 text-xs opacity-70">
            {t('underConstruction')}
          </p>
          <p>&copy; {new Date().getFullYear()} Calgary Islamic School Society (CISS). {t('rights')}</p>
        </div>
      </div>
    </footer>
  )
}
