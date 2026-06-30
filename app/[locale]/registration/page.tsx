import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, FileText, ExternalLink, AlertCircle } from "lucide-react"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "Registration 2026-2027 | Calgary Islamic School Society",
  description: "Application process and alternative program fees for the 2026-2027 school year at Akram Jomaa and Omar Bin Al-Khattab campuses.",
}

export default async function RegistrationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('RegistrationPage')

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/islamic-school-reception.jpg')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-6 bg-accent/10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-accent">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">{t('important_update')}</h2>
                  <p className="text-muted-foreground">
                    {t('notice1')}
                  </p>
                  <p className="text-muted-foreground mt-4">
                    {t('notice2')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">{t('fee_structure_title')}</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold">{t('table_grades')}</th>
                  <th className="p-4 text-left font-semibold">{t('table_total_annual_fee')}</th>
                  <th className="p-4 text-left font-semibold">{t('table_first_child')}</th>
                  <th className="p-4 text-left font-semibold">{t('table_additional_child')}</th>
                  <th className="p-4 text-left font-semibold">{t('table_returning_deposit')}</th>
                  <th className="p-4 text-left font-semibold">{t('table_prospective_fee')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">{t('row_kg_grade9')}</td>
                  <td className="p-4">$2,450</td>
                  <td className="p-4">$2,250</td>
                  <td className="p-4">$250</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$50</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 font-medium">{t('row_kg_assessment')}</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4">$100</td>
                  <td className="p-4">$100</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">{t('row_grades_10_12')}</td>
                  <td className="p-4">$2,690</td>
                  <td className="p-4">$2,490</td>
                  <td className="p-4">$250</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$50</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 font-medium">{t('row_tahfeez')}</td>
                  <td className="p-4">$2,690</td>
                  <td className="p-4">$2,490</td>
                  <td className="p-4">$250</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-4">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>{t('declaration_title')}</strong> {t('declaration_text')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>{t('new_student_title')}</strong> {t('new_student_text')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Need to Know */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">{t('before_apply_title')}</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p>{t('info1')} <strong>{t('info1_date')}</strong>.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p>{t('info2')} <strong>{t('info2_emphasis')}</strong> {t('info2_end')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p>{t('info3')} <strong>{t('info3_emphasis')}</strong> {t('info3_end')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p>{t('info4')} <strong>{t('info4_emphasis')}</strong>.</p>
              </CardContent>
            </Card>

            <Card className="border-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p><strong>{t('info5')}</strong></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learn More Links */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('learn_more_title')}</h2>
          <p className="text-center text-muted-foreground mb-8">
            {t('learn_more_subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{t('campus1_title')}</h3>
                <p className="text-muted-foreground mb-4">{t('campus1_subtitle')}</p>
                <Button asChild className="w-full">
                  <a href="https://aj.myprps.com/admission-registration" target="_blank" rel="noopener noreferrer">
                    {t('campus1_button')}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{t('campus2_title')}</h3>
                <p className="text-muted-foreground mb-4">{t('campus2_subtitle')}</p>
                <Button asChild className="w-full">
                  <a href="https://obk.myprps.com/admission-registration" target="_blank" rel="noopener noreferrer">
                    {t('campus2_button')}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              {t('thank_you')}
            </p>
            <Button variant="outline" asChild>
              <a href="https://drive.google.com/file/d/1-IDwYxkmln7_FIwmQBpVBAHXsnV1UW7Z/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                {t('read_full_letter')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
