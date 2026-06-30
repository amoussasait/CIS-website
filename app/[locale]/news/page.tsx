import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Heart, ArrowRight, Ticket, Users, Award, DollarSign } from "lucide-react"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "News & Updates | CISS",
  description: "Latest news, events, and announcements from CISS",
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('NewsPage')

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-school-news.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">{t('title')}</h1>
          <p className="text-xl text-white/90">{t('text1')}</p>
        </div>
      </section>

      {/* News Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* OBK Science Fair Success Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-accent flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {t('category_achievement')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text2')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('text3')}
                  </p>
                  <ul className="text-muted-foreground mb-6 space-y-1">
                    <li>🥇 {t('text4')}</li>
                    <li>🥈 {t('text5')}</li>
                    <li>🥉 {t('text6')}</li>
                    <li>⭐ {t('text7')}</li>
                    <li>🏆 {t('text8')}</li>
                  </ul>
                </div>
                <Button asChild className="w-full mt-auto">
                  <a
                    href="https://platform.cysf.org/project/browse/?search=&fair=2026&grade=&school_name=Calgary+Islamic+School%2C+Omar+Bin+Al-Khattab+Campus&award_type=&award_sponsor="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {t('text9')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Akram Jomaa Science Fair Success Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-accent flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {t('category_achievement')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text10')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('text11')}
                  </p>
                  <div className="text-muted-foreground mb-6 space-y-2">
                    <p className="font-semibold text-foreground">{t('text12')}</p>
                    <ul className="space-y-1 text-sm">
                      <li>🥇 <strong>{t('text13')}</strong></li>
                      <li>🥉 <strong>{t('text14')}</strong></li>
                      <li>⭐ <strong>{t('text15')}</strong></li>
                    </ul>
                  </div>
                </div>
                <Button asChild className="w-full mt-auto">
                  <a
                    href="https://platform.cysf.org/project/browse/?search=&fair=2026&grade=&school_name=Akram+Jomaa+Islamic+School&award_type=&award_sponsor="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {t('text9')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Fee Payment Schedule Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {t('category_board_update')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text16')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('text17')}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t('text18')}
                  </p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <a
                    href="/documents/Fee-Payment-Schedule-2026-2027.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {t('text19')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Budget Clarity & Governance Transparency Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {t('category_board_update')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text20')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('text21')}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t('text22')}
                  </p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <a
                    href="/documents/CISS-Budget-Clarity-Governance-Transparency-April-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {t('text23')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Budget Transparency Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-accent flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {t('category_board_update')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text20')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('text24')}
                  </p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/${locale}/updates/budget-transparency`} className="flex items-center justify-center gap-2">
                    {t('text25')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Town Hall March 2026 Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {t('category_town_hall')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text26')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('text27')}
                  </p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/${locale}/updates/town-hall-march-2026`} className="flex items-center justify-center gap-2">
                    {t('text28')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Registration Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {t('category_registration')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text29')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('text30')}
                  </p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <Link href={`/${locale}/registration`} className="flex items-center justify-center gap-2">
                    {t('text31')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fundraiser Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-accent flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {t('category_fundraiser')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('text32')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('text33')}
                  </p>
                  <p className="text-primary font-semibold mb-4">
                    {t('text34')}
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-6">
                    {t('text35')}
                  </p>
                </div>
                <Button asChild className="w-full mt-auto">
                  <a
                    href="https://buytickets.at/calgaryislamicschoolakramjomaacampus/2114371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-4 h-4" />
                    {t('text36')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
