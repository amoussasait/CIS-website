import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react"
import { getTranslations } from "next-intl/server"

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('CareersPage')

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-school-news.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <Briefcase className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">{t('title')}</h1>
          <p className="text-xl text-white/90">{t('subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Job Header */}
          <Card className="border-2 border-accent/20 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{t('job_title')}</h2>
                  <p className="text-lg text-muted-foreground">{t('organization')}</p>
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">{t('status')}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{t('location')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{t('position_type')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{t('salary')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <div className="prose prose-lg max-w-none">
            {/* Position Summary */}
            <Card className="mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('summary_title')}</h3>
                <p className="mb-4">{t('summary_p1')}</p>
                <p className="mb-4">{t('summary_p2')}</p>
                <p className="font-semibold text-accent">{t('summary_p3')}</p>
              </CardContent>
            </Card>

            {/* Key Responsibilities */}
            <Card className="mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('responsibilities_title')}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">{t('resp1_title')}</h4>
                    <ul className="list-disc space-y-2 ml-6">
                      <li>{t('resp1_item1')}</li>
                      <li>{t('resp1_item2')}</li>
                      <li>{t('resp1_item3')}</li>
                      <li>{t('resp1_item4')}</li>
                      <li>{t('resp1_item5')}</li>
                      <li>{t('resp1_item6')}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">{t('resp2_title')}</h4>
                    <ul className="list-disc space-y-2 ml-6">
                      <li>{t('resp2_item1')}</li>
                      <li>{t('resp2_item2')}</li>
                      <li>{t('resp2_item3')}</li>
                      <li>{t('resp2_item4')}</li>
                      <li>{t('resp2_item5')}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">{t('resp3_title')}</h4>
                    <ul className="list-disc space-y-2 ml-6">
                      <li>{t('resp3_item1')}</li>
                      <li>{t('resp3_item2')}</li>
                      <li>{t('resp3_item3')}</li>
                      <li>{t('resp3_item4')}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">{t('resp4_title')}</h4>
                    <ul className="list-disc space-y-2 ml-6">
                      <li>{t('resp4_item1')}</li>
                      <li>{t('resp4_item2')}</li>
                      <li>{t('resp4_item3')}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">{t('resp5_title')}</h4>
                    <ul className="list-disc space-y-2 ml-6">
                      <li>{t('resp5_item1')}</li>
                      <li>{t('resp5_item2')}</li>
                      <li>{t('resp5_item3')}</li>
                      <li>{t('resp5_item4')}</li>
                      <li>{t('resp5_item5')}</li>
                      <li>{t('resp5_item6')}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">{t('resp6_title')}</h4>
                    <ul className="list-disc space-y-2 ml-6">
                      <li>{t('resp6_item1')}</li>
                      <li>{t('resp6_item2')}</li>
                      <li>{t('resp6_item3')}</li>
                      <li>{t('resp6_item4')}</li>
                      <li>{t('resp6_item5')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Qualifications */}
            <Card className="mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('qualifications_title')}</h3>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-accent">{t('required_title')}</h4>
                  <ul className="list-disc space-y-2 ml-6">
                    <li>{t('required_item1')}</li>
                    <li>{t('required_item2')}</li>
                    <li>{t('required_item3')}</li>
                    <li>{t('required_item4')}</li>
                    <li>{t('required_item5')}</li>
                    <li>{t('required_item6')}</li>
                    <li>{t('required_item7')}</li>
                    <li>{t('required_item8')}</li>
                    <li>{t('required_item9')}</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-primary">{t('preferred_title')}</h4>
                  <ul className="list-disc space-y-2 ml-6">
                    <li>{t('preferred_item1')}</li>
                    <li>{t('preferred_item2')}</li>
                    <li>{t('preferred_item3')}</li>
                    <li>{t('preferred_item4')}</li>
                    <li>{t('preferred_item5')}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Core Competencies */}
            <Card className="mb-6">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('competencies_title')}</h3>
                <ul className="list-disc space-y-2 ml-6">
                  <li>{t('comp1')}</li>
                  <li>{t('comp2')}</li>
                  <li>{t('comp3')}</li>
                  <li>{t('comp4')}</li>
                  <li>{t('comp5')}</li>
                </ul>
              </CardContent>
            </Card>

            {/* Apply Section */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t('apply_title')}</h3>
                <p className="mb-6 text-muted-foreground">{t('apply_text')}</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="mailto:info@cissociety.ca?subject=Executive Director Application">
                    {t('apply_button')}
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
