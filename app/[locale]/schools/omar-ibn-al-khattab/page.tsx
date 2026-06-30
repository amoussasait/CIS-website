import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, BookOpen, Globe, Award, MapPin, Phone, Mail } from "lucide-react"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "Omar Ibn Al-Khattab School | CISS",
  description: "KG - Grade 9 education in Calgary, Alberta",
}

export default async function OmarIbnAlKhattabPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('OmarPage')
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-secondary-students.jpg)",
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
          <h2 className="text-4xl font-bold mb-6">{t('text3')}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('text4')}
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text5')}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('text6')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('text7')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('text8')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('text9')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('text10')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('text11')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('text12')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('text13')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text14')}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('text15')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('text16')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('text17')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('text18')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{t('text19')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('text20')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Islamic STEM Education Showcase */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/islamic-stem-education.jpg"
                alt="Students in STEM education"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('text21')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('text22')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('text23')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text24')}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text25')}</h3>
                <p className="text-muted-foreground">{t('text26')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text27')}</h3>
                <p className="text-muted-foreground">{t('text28')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text29')}</h3>
                <p className="text-muted-foreground">{t('text30')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text31')}</h3>
                <p className="text-muted-foreground">{t('text32')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text33')}</h3>
                <p className="text-muted-foreground">{t('text34')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{t('text35')}</h3>
                <p className="text-muted-foreground">{t('text36')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text37')}</h2>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">{t('text38')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t('text39')}</p>
                        <p className="text-sm text-muted-foreground">225 28 St SE, Calgary, AB T2A 5K4</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t('text40')}</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:+15873538900" className="hover:text-accent transition-colors">(587) 353-8900</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t('text41')}</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:info@obkschool.ca" className="hover:text-accent transition-colors">info@obkschool.ca</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">{t('text42')}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t('text43')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg">
                      <Link href={`/${locale}/contact`}>{t('text44')}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://obk.myprps.com/documents/d325ee5e-eea0-4159-ab91-12ec2e9eda16/2025-2026-Calgary-Islamic-School-OBK-Ed-Plan-pdf-1.pdf" target="_blank" rel="noopener noreferrer">
                        {t('text45')}
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
