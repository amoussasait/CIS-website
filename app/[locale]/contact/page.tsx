import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { getTranslations } from "next-intl/server"

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('ContactPage')

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-school-reception.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90">{t('text1')}</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('text2')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('text3')}
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-xl mb-12">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('text4')}</h3>
                    <p className="text-muted-foreground mb-2">{t('text5')}</p>
                    <a href="mailto:info@cissociety.ca" className="text-lg text-primary font-semibold hover:underline">
                      info@cissociety.ca
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">{t('text6')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('text7')}</h3>
                    <p className="text-muted-foreground mb-2">{t('text8')}</p>
                    <p className="text-lg">{t('text9')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Akram Jomaa Islamic School</h3>
                <p className="text-muted-foreground mb-4">KG - Grade 12</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p>2711 39 Ave NE</p>
                      <p>Calgary, AB T1Y 4T8</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                    <p>(403) 248-2773</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{t('text10')}</p>
                      <p>{t('text11')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Omar Ibn Al-Khattab School</h3>
                <p className="text-muted-foreground mb-4">KG - Grade 9</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p>225 28 St SE</p>
                      <p>Calgary, AB T2A 5K4</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                    <p>(587) 353-8900</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{t('text10')}</p>
                      <p>{t('text12')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center p-8 bg-accent/5 rounded-lg border-2 border-accent/20">
            <h3 className="text-2xl font-bold mb-3">{t('text13')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('text14')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}/parents`}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                {t('text15')}
              </a>
              <a
                href={`/${locale}/parents#faq`}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary/5 transition-colors"
              >
                {t('text16')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
