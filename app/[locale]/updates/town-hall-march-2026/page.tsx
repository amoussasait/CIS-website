import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Download, Users, Building2, DollarSign, TrendingUp, GraduationCap } from "lucide-react"
import { getTranslations } from "next-intl/server"

export default async function TownHallMarch2026({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('TownHallPage')
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">{t('text1')}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('text2')}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {t('text3')}
            </p>
            <p className="text-lg mb-8">
              {t('text4')}
            </p>
            <Button size="lg" asChild>
              <a href="/documents/CISS-Town-Hall-March-2026.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                {t('text5')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">{t('text6')}</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{t('text7')}</CardTitle>
                <CardDescription>
                  {t('text8')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-semibold">Abdulrahman Abbas</p>
                      <p className="text-sm text-muted-foreground">{t('text9')}</p>
                    </div>
                    <Badge>{t('text10')}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-semibold">Dr. Mohammed Abdel-Hafez</p>
                      <p className="text-sm text-muted-foreground">{t('text11')}</p>
                    </div>
                    <Badge>{t('text12')}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-semibold">Marwa Ajram</p>
                      <p className="text-sm text-muted-foreground">{t('text13')}</p>
                    </div>
                    <Badge>{t('text14')}</Badge>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Madina Kalaf</p>
                    <p className="text-sm text-muted-foreground">{t('text13')}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Ali Moussa</p>
                    <p className="text-sm text-muted-foreground">{t('text11')}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Dr. Hoda Kilani</p>
                    <p className="text-sm text-muted-foreground">{t('text9')}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Mohamed Zohiri</p>
                    <p className="text-sm text-muted-foreground">{t('text9')}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Omar El-Hajjar</p>
                    <p className="text-sm text-muted-foreground">{t('text15')}</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Basir Saleh</p>
                    <p className="text-sm text-muted-foreground">{t('text16')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">{t('text17')}</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{t('text18')}</CardTitle>
                <CardDescription>
                  {t('text19')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('text20')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t('text21')}</li>
                    <li>{t('text22')}</li>
                    <li>{t('text23')}</li>
                    <li>{t('text24')}</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('text25')}</h3>
                  <div className="grid gap-3">
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">{t('text26')}</p>
                      <p className="text-sm text-muted-foreground">{t('text27')}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">{t('text28')}</p>
                      <p className="text-sm text-muted-foreground">{t('text29')}</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">{t('text30')}</p>
                      <p className="text-sm text-muted-foreground">{t('text31')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">{t('text32')}</h2>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('text33')}</CardTitle>
                  <CardDescription>{t('text34')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                      <span className="font-medium">{t('text35')}</span>
                      <span className="text-xl font-bold">$4.7M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <span className="font-medium">{t('text36')}</span>
                      <span className="text-xl font-bold text-green-700 dark:text-green-400">$1.0M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <span className="font-medium">{t('text37')}</span>
                      <span className="text-xl font-bold text-amber-700 dark:text-amber-400">$3.7M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('text38')}</CardTitle>
                  <CardDescription>{t('text39')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary">
                      <div>
                        <p className="font-medium">{t('text40')}</p>
                        <p className="text-sm text-muted-foreground">{t('text41')}</p>
                      </div>
                      <span className="font-bold">$1,993,609</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/70">
                      <div>
                        <p className="font-medium">{t('text42')}</p>
                        <p className="text-sm text-muted-foreground">{t('text43')}</p>
                      </div>
                      <span className="font-bold">$900,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/50">
                      <div>
                        <p className="font-medium">{t('text44')}</p>
                        <p className="text-sm text-muted-foreground">{t('text45')}</p>
                      </div>
                      <span className="font-bold">$733,595</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/40">
                      <div>
                        <p className="font-medium">{t('text46')}</p>
                        <p className="text-sm text-muted-foreground">{t('text47')}</p>
                      </div>
                      <span className="font-bold">$621,852</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/30">
                      <div>
                        <p className="font-medium">{t('text48')}</p>
                        <p className="text-sm text-muted-foreground">{t('text49')}</p>
                      </div>
                      <span className="font-bold">$250,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/20">
                      <div>
                        <p className="font-medium">{t('text50')}</p>
                        <p className="text-sm text-muted-foreground">{t('text51')}</p>
                      </div>
                      <span className="font-bold">$204,236</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    {t('text52')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('text53')}</CardTitle>
                  <CardDescription>{t('text54')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">{t('text55')}</th>
                          <th className="text-right py-3 px-4">{t('text56')}</th>
                          <th className="text-right py-3 px-4">{t('text57')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">{t('text58')}</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,450</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,250</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">{t('text59')}</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,690</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,490</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">{t('text60')}</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,690</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,490</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>{t('text61')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('text62')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('text63')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('text64')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('text65')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{t('text66')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Improvements Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">{t('text67')}</h2>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('text68')}</CardTitle>
                  <CardDescription>{t('text69')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{t('text70')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{t('text71')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{t('text72')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{t('text73')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('text74')}</CardTitle>
                  <CardDescription>
                    {t('text75')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Badge>{t('text76')}</Badge>
                        {t('text77')}
                      </h3>
                      <div className="space-y-2 ml-6">
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>{t('text78')}</span>
                          <span className="font-semibold">$1,650,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>{t('text79')}</span>
                          <span className="font-semibold">$500,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>{t('text80')}</span>
                          <span className="font-semibold">$250,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>{t('text81')}</span>
                          <span className="font-semibold">$150,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>{t('text82')}</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Badge>{t('text76')}</Badge>
                        {t('text83')}
                      </h3>
                      <div className="space-y-2 ml-6">
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>{t('text78')}</span>
                          <span className="font-semibold">$680,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>{t('text84')}</span>
                          <span className="font-semibold">$400,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>{t('text85')}</span>
                          <span className="font-semibold">$225,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>{t('text81')}</span>
                          <span className="font-semibold">$150,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>{t('text82')}</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Badge variant="outline">{t('text86')}</Badge>
                        {t('text87')}
                      </h3>
                      <div className="space-y-2 ml-6">
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>{t('text88')}</span>
                          <span className="font-semibold">$75,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>{t('text89')}</span>
                          <span className="font-semibold">$225,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>{t('text90')}</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>{t('text91')}</span>
                          <span className="font-semibold">$275,000</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm">
                        <strong>{t('text92')}</strong> {t('text93')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Protecting Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">{t('text94')}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('text95')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text96')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text97')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text98')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text99')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('text100')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text101')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text102')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text103')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>{t('text104')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="pt-6">
                <blockquote className="text-center text-lg italic">
                  "{t('text105')}"
                </blockquote>
                <p className="text-center mt-4 font-medium">
                  {t('text106')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('text107')}</h2>
          <p className="text-lg mb-8 opacity-90">
            {t('text108')}
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/documents/CISS-Town-Hall-March-2026.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              {t('text109')}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
