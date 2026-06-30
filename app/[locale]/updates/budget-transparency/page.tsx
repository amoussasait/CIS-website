import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ArrowLeft, FileText, Users, DollarSign } from "lucide-react"
import { getTranslations } from "next-intl/server"

export default async function BudgetTransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('BudgetTransparencyPage')
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />

      {/* Header */}
      <section className="bg-primary/5 border-b">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href={`/${locale}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('text4')}
            </Link>
          </Button>

          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">{t('text1')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('text2')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('text3')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Greeting */}
            <div className="mb-8">
              <p className="text-lg font-arabic">
                {t('text5')}
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8 space-y-4">
              <p>
                {t('text6')}
              </p>

              <p>
                {t('text7')}
              </p>
            </div>

            {/* Process and Approval */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('text8')}</h2>
              <div className="space-y-4">
                <p>
                  {t('text9')}
                </p>
                <p>
                  {t('text10')}
                </p>
              </div>
            </div>

            {/* Understanding the Budget Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold">{t('text11')}</h2>
              <p className="mt-2">
                {t('text12')}
              </p>
            </div>

            {/* Budget Structure */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">{t('text13')}</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-bold">{t('text14')}</th>
                      <th className="text-right p-4 font-bold">{t('text15')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">{t('text16')}</td>
                      <td className="text-right p-4 font-semibold">$1,993,609</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">{t('text17')}</td>
                      <td className="text-right p-4 font-semibold">$733,595</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">{t('text18')}</td>
                      <td className="text-right p-4 font-semibold">$621,852</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">{t('text19')}</td>
                      <td className="text-right p-4 font-semibold">$250,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">{t('text20')}</td>
                      <td className="text-right p-4 font-semibold">$204,236</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">{t('text21')}</td>
                      <td className="text-right p-4 font-semibold">$900,000</td>
                    </tr>
                    <tr className="bg-accent/10 font-bold">
                      <td className="p-4">{t('text22')}</td>
                      <td className="text-right p-4 text-lg">$4,703,292</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                {t('text23')}
              </p>
            </div>

            {/* The Financial Reality */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">{t('text24')}</h2>
              <Card className="mb-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <ul className="space-y-3 text-lg">
                    <li>• {t('text25')}</li>
                    <li>• {t('text26')}</li>
                    <li>• {t('text27')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Fee Structure */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">{t('text28')}</h2>

              <h3 className="text-xl font-bold mb-4">{t('text29')}</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse mb-6">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">{t('text30')}</td>
                      <td className="text-right p-3 font-semibold">$4,703,292</td>
                      <td className="text-center p-3 font-semibold">A</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-3">{t('text31')}</td>
                      <td className="text-right p-3 font-semibold">$1,006,736</td>
                      <td className="text-center p-3 font-semibold">B</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">{t('text32')}</td>
                      <td className="text-right p-3 font-semibold">$3,696,556</td>
                      <td className="text-center p-3 font-semibold">C</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-3">{t('text33')}</td>
                      <td className="text-right p-3 font-semibold">1545</td>
                      <td className="text-center p-3 font-semibold">D</td>
                    </tr>
                    <tr className="bg-accent/10 font-bold">
                      <td className="p-3">{t('text34')}</td>
                      <td className="text-right p-3 text-lg">$2,393</td>
                      <td className="text-center p-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-4">{t('text35')}</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-bold">{t('text36')}</th>
                      <th className="text-right p-4 font-bold">{t('text37')}</th>
                      <th className="text-right p-4 font-bold">{t('text38')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">{t('text39')}</td>
                      <td className="text-right p-4 font-semibold">$2,450</td>
                      <td className="text-right p-4 font-semibold">$2,250</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">{t('text40')}</td>
                      <td className="text-right p-4 font-semibold">$2,690</td>
                      <td className="text-right p-4 font-semibold">$2,490</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">{t('text41')}</td>
                      <td className="text-right p-4 font-semibold">$2,690</td>
                      <td className="text-right p-4 font-semibold">$2,490</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Teacher Cost Explanation */}
            <div className="mb-8 space-y-4">
              <p>
                {t('text42')}
              </p>

              <p>
                {t('text43')}
              </p>

              <p>
                {t('text44')}
              </p>

              <p className="font-semibold">
                {t('text45')}
              </p>
            </div>

            {/* Facilities Explanation */}
            <div className="mb-8 space-y-4">
              <p>
                {t('text46')}{" "}
                <strong>{t('text47')}</strong>
              </p>
            </div>

            {/* Alberta Education Framework */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('text48')}</h2>
              <div className="space-y-4">
                <p>
                  {t('text49')}{" "}
                  <strong>{t('text50')}</strong>.
                </p>

                <p>
                  {t('text51')}
                </p>

                <p>
                  {t('text52')}
                </p>
              </div>
            </div>

            {/* Board Authority */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('text53')}</h2>
              <div className="space-y-4">
                <p>
                  {t('text54')}
                </p>

                <p>
                  {t('text55')}
                </p>

                <p className="font-semibold">
                  {t('text56')}
                </p>

                <Card className="mb-4 bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <p className="italic mb-4">
                      {t('text57')}
                    </p>
                    <p className="italic">
                      {t('text58')}
                    </p>
                  </CardContent>
                </Card>

                <p>
                  {t('text59')}
                </p>
              </div>
            </div>

            {/* Governance and Responsibility */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('text60')}</h2>
              <div className="space-y-4">
                <p>
                  {t('text61')}
                </p>

                <p>
                  {t('text62')}
                </p>

                <p>
                  {t('text63')}
                </p>
              </div>
            </div>

            {/* Our Commitment to Transparency */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('text64')}</h2>
              <div className="space-y-4">
                <p>
                  {t('text65')}
                </p>

                <ul className="space-y-2 ml-6 list-disc">
                  <li>{t('text66')}</li>
                  <li>{t('text67')}</li>
                  <li>{t('text68')}</li>
                  <li>{t('text69')}</li>
                </ul>

                <p>
                  {t('text70')}
                </p>
              </div>
            </div>

            {/* Moving Forward Together */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('text71')}</h2>
              <div className="space-y-4">
                <p>
                  {t('text72')}
                </p>

                <p>
                  {t('text73')}
                </p>

                <p>
                  {t('text74')}
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="mt-12 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <p className="mb-4">
                {t('text75')}
              </p>
              <p className="font-arabic mb-2">
                {t('text76')}
              </p>
              <p className="font-semibold mb-1">
                {t('text77')}
              </p>
              <p className="font-semibold">
                {t('text78')}
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{t('text79')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('text80')}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">{t('text81')}</p>
                    <a href="mailto:info@cissociety.ca" className="text-primary hover:underline font-semibold text-lg">
                      info@cissociety.ca
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <a href="mailto:info@cissociety.ca">{t('text82')}</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href={`/${locale}/parents`}>{t('text83')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
