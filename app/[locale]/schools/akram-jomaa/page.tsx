import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Palette, MapPin, Phone, Mail, Globe } from "lucide-react"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "Akram Jomaa Islamic School | CISS",
  description: "K-12 Islamic education in Calgary, Alberta - Founded 1992 - Over 1,000 students",
}

export default async function AkramJomaaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('AkramJomaaPage')
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-elementary-learning.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{t('text1')}</h1>
          <p className="text-xl text-white/90">{t('text2')}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-6">
            <p className="text-accent font-semibold">{t('text3')}</p>
          </div>
          <h2 className="text-4xl font-bold mb-6">{t('text4')}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {t('text5')}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('text6')}
          </p>
        </div>
      </section>

      {/* Three Priorities */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('text7')}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('text8')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text9')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('text10')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Palette className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text11')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('text12')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text13')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('text14')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('text15')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('text16')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('text17')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('text18')}
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/quran-learning-children.jpg"
                alt="Children learning Quran"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text19')}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text20')}</h3>
                <p className="text-muted-foreground">{t('text21')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text22')}</h3>
                <p className="text-muted-foreground">{t('text23')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text24')}</h3>
                <p className="text-muted-foreground">{t('text25')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text26')}</h3>
                <p className="text-muted-foreground">{t('text27')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text28')}</h3>
                <p className="text-muted-foreground">{t('text29')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text30')}</h3>
                <p className="text-muted-foreground">{t('text31')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text32')}</h3>
                <p className="text-muted-foreground">{t('text33')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text34')}</h3>
                <p className="text-muted-foreground">{t('text35')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text36')}</h3>
                <p className="text-muted-foreground">{t('text37')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text38')}</h2>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">{t('text39')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t('text40')}</p>
                        <p className="text-sm text-muted-foreground">2612 37 Ave NE, Calgary, AB T1Y 5L2</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t('text41')}</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:+14032482773" className="hover:text-accent transition-colors">(403) 248-2773</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t('text42')}</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:aj.info@prrd8.ca" className="hover:text-accent transition-colors">aj.info@prrd8.ca</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t('text43')}</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="https://www.akramjomaa.ca" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.akramjomaa.ca</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">{t('text44')}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('text45')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg">
                      <Link href={`/${locale}/contact`}>{t('text46')}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://aj.myprps.com/documents/5187bd29-e060-4334-8b21-dcb4d03600d5/EducationPlan_2025-2030.pdf" target="_blank" rel="noopener noreferrer">
                        {t('text47')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
