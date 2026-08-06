import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Bell,
  FileText,
  Mail,
  MessageCircle,
  Clock,
  AlertCircle,
  Download,
} from "lucide-react"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "Parents & Communication Hub | CISS",
  description:
    "CISS Parent Communication Hub - Stay informed, connected, and engaged with announcements, newsletters, resources, and direct contact channels",
}

export default async function ParentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('ParentsPage')
  const tRoutes = await getTranslations('ContactRoutes')
  const tAnnouncements = await getTranslations('Announcements')
  const tFAQs = await getTranslations('FAQs')

  // Build contact routes from translations
  const contactRoutes = [
    {
      title: tRoutes('route1_title'),
      description: tRoutes('route1_description'),
      email: "info@cissociety.ca",
      responseTime: tRoutes('route1_responseTime'),
    },
    {
      title: tRoutes('route2_title'),
      description: tRoutes('route2_description'),
      email: "info@cissociety.ca",
      responseTime: tRoutes('route2_responseTime'),
    },
  ]

  // Build announcements from translations
  const announcements = [
    {
      id: "akram-jomaa-robotics-championship-2026",
      title: tAnnouncements('announcement7_title'),
      excerpt: tAnnouncements('announcement7_excerpt'),
      content: tAnnouncements('announcement7_content'),
      date: "2026-08-01",
      category: tAnnouncements('announcement7_category'),
    },
    {
      id: "akram-jomaa-science-fair-2026",
      title: tAnnouncements('announcement1_title'),
      excerpt: tAnnouncements('announcement1_excerpt'),
      content: tAnnouncements('announcement1_content'),
      date: "2026-04-20",
      category: tAnnouncements('announcement1_category'),
    },
    {
      id: "fee-payment-schedule-2026",
      title: tAnnouncements('announcement2_title'),
      excerpt: tAnnouncements('announcement2_excerpt'),
      content: tAnnouncements('announcement2_content'),
      date: "2026-04-15",
      category: tAnnouncements('announcement2_category'),
    },
    {
      id: "obk-science-fair-2026",
      title: tAnnouncements('announcement3_title'),
      excerpt: tAnnouncements('announcement3_excerpt'),
      content: tAnnouncements('announcement3_content'),
      date: "2026-04-10",
      category: tAnnouncements('announcement3_category'),
    },
    {
      id: "budget-transparency-2026",
      title: tAnnouncements('announcement4_title'),
      excerpt: tAnnouncements('announcement4_excerpt'),
      content: tAnnouncements('announcement4_content'),
      date: "2026-04-08",
      category: tAnnouncements('announcement4_category'),
    },
    {
      id: "registration-2026",
      title: tAnnouncements('announcement5_title'),
      excerpt: tAnnouncements('announcement5_excerpt'),
      content: tAnnouncements('announcement5_content'),
      date: "2026-04-05",
      category: tAnnouncements('announcement5_category'),
    },
    {
      id: "fundraiser-dinner",
      title: tAnnouncements('announcement6_title'),
      excerpt: tAnnouncements('announcement6_excerpt'),
      content: tAnnouncements('announcement6_content'),
      date: "2026-04-03",
      category: tAnnouncements('announcement6_category'),
    },
  ]

  // Map announcement IDs to their destination URLs
  const getAnnouncementLink = (id: string): string => {
    const urlMap: Record<string, string> = {
      'akram-jomaa-robotics-championship-2026': `/${locale}/updates/robotics-championship-2026`,
      'akram-jomaa-science-fair-2026': 'https://platform.cysf.org/project/browse/?search=&fair=2026&grade=&school_name=Akram+Jomaa+Islamic+School&award_type=&award_sponsor=',
      'fee-payment-schedule-2026': '/documents/Fee-Payment-Schedule-2026-2027.pdf',
      'obk-science-fair-2026': 'https://platform.cysf.org/project/browse/?search=&fair=2026&grade=&school_name=Calgary+Islamic+School%2C+Omar+Bin+Al-Khattab+Campus&award_type=&award_sponsor=',
      'budget-transparency-2026': `/${locale}/updates/budget-transparency`,
      'registration-2026': `/${locale}/registration`,
      'fundraiser-dinner': 'https://buytickets.at/calgaryislamicschoolakramjomaacampus/2114371',
    }
    return urlMap[id] || `/${locale}/news`
  }

  // Build FAQs from translations
  const faqs = [
    {
      question: tFAQs('faq1_question'),
      intro: tFAQs('faq1_intro'),
      bullets: [
        tFAQs('faq1_bullet1'),
        tFAQs('faq1_bullet2'),
        tFAQs('faq1_bullet3'),
        tFAQs('faq1_bullet4'),
      ],
      answer: tFAQs('faq1_answer'),
      category: "tuition",
    },
    {
      question: tFAQs('faq2_question'),
      intro: tFAQs('faq2_intro'),
      bullets: [
        tFAQs('faq2_bullet1'),
        tFAQs('faq2_bullet2'),
        tFAQs('faq2_bullet3'),
      ],
      category: "communication",
    },
    {
      question: tFAQs('faq3_question'),
      intro: tFAQs('faq3_intro'),
      bullets: [
        tFAQs('faq3_bullet1'),
        tFAQs('faq3_bullet2'),
        tFAQs('faq3_bullet3'),
        tFAQs('faq3_bullet4'),
      ],
      answer: tFAQs('faq3_answer'),
      category: "tuition",
    },
    {
      question: tFAQs('faq4_question'),
      answer: tFAQs('faq4_answer'),
      category: "tuition",
    },
    {
      question: tFAQs('faq5_question'),
      intro: tFAQs('faq5_intro'),
      bullets: [
        tFAQs('faq5_bullet1'),
        tFAQs('faq5_bullet2'),
        tFAQs('faq5_bullet3'),
      ],
      answer: tFAQs('faq5_answer'),
      category: "programs",
    },
    {
      question: tFAQs('faq6_question'),
      intro: tFAQs('faq6_intro'),
      bullets: [
        tFAQs('faq6_bullet1'),
        tFAQs('faq6_bullet2'),
        tFAQs('faq6_bullet3'),
      ],
      answer: tFAQs('faq6_answer'),
      category: "financial-support",
    },
    {
      question: tFAQs('faq7_question'),
      intro: tFAQs('faq7_intro'),
      answer: tFAQs('faq7_answer'),
      category: "programs",
    },
    {
      question: tFAQs('faq8_question'),
      intro: tFAQs('faq8_intro'),
      bullets: [
        tFAQs('faq8_bullet1'),
        tFAQs('faq8_bullet2'),
        tFAQs('faq8_bullet3'),
      ],
      category: "communication",
    },
    {
      question: tFAQs('faq9_question'),
      intro: tFAQs('faq9_intro'),
      bullets: [
        tFAQs('faq9_bullet1'),
        tFAQs('faq9_bullet2'),
        tFAQs('faq9_bullet3'),
      ],
      answer: tFAQs('faq9_answer'),
      category: "governance",
    },
    {
      question: tFAQs('faq10_question'),
      intro: tFAQs('faq10_intro'),
      answer: tFAQs('faq10_answer'),
      category: "tuition",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/parents-communication-hub.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">{t('text1')}</h1>
          <p className="text-xl text-white/90">{t('text2')}</p>
        </div>
      </section>

      {/* Priority Message */}
      <section className="py-12 px-6 bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <AlertCircle className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('text3')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('text4')}
          </p>
        </div>
      </section>

      {/* Contact Routing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('text5')}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('text6')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactRoutes.map((route, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-accent/30 transition-colors">
                <CardContent className="p-8">
                  <MessageCircle className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{route.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{route.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`mailto:${route.email}`} className="text-primary hover:underline font-medium">
                        {route.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{route.responseTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Feed */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold">{t('text7')}</h2>
          </div>

          <div className="space-y-4 mb-8">
            {announcements.slice(0, 5).map((announcement) => {
              const url = getAnnouncementLink(announcement.id)
              const isExternal = url.startsWith('http')

              return (
                <Link
                  key={announcement.id}
                  href={url}
                  className="block"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded">
                              {announcement.category}
                            </span>
                            <span className="text-sm text-muted-foreground">{announcement.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{announcement.excerpt}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href={`/${locale}/news`}>{t('text8')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Resources */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text9')}</h2>

          <div className="max-w-md mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text10')}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('text11')}
                </p>
                <Button asChild className="w-full" size="lg">
                  <a
                    href="/documents/CISS Bylaws.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {t('text12')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('text13')}</h2>
          <p className="text-center text-muted-foreground mb-12">{t('text14')}</p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    {faq.intro && <p>{faq.intro}</p>}
                    {faq.bullets && (
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        {faq.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {faq.answer && <p>{faq.answer}</p>}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Need Help Sticky Card Concept */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-3">{t('text15')}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('text16')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:info@cissociety.ca">{t('text17')}</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={`/${locale}/contact`}>{t('text18')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
