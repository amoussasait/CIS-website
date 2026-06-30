import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Target,
  Eye,
  Heart,
  BookOpen,
  Shield,
  Users2,
  FileText,
  Download,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  Languages,
  Star,
  MessageCircle,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "About CISS | Calgary Islamic School Society",
  description:
    "Learn about Calgary Islamic School Society's mission, vision, beliefs, values, and commitment to excellence in Islamic education",
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tOverview = await getTranslations('AboutPage.Overview')
  const tMotto = await getTranslations('AboutPage.Motto')
  const tMottoText = await getTranslations('AboutPage.MottoText')
  const tMission = await getTranslations('AboutPage.Mission')
  const tVision = await getTranslations('AboutPage.Vision')
  const tBeliefs = await getTranslations('AboutPage.Beliefs')
  const tValues = await getTranslations('AboutPage.Values')
  const tGuidingPrinciples = await getTranslations('AboutPage.GuidingPrinciples')
  const tDistinct = await getTranslations('AboutPage.Distinctive')
  const tPrior = await getTranslations('AboutPage.Priorities')
  const tResp = await getTranslations('AboutPage.Responsibilities')
  const tGov = await getTranslations('AboutPage.Governance')
  const tCommit = await getTranslations('AboutPage.Commitment')
  const tHero = await getTranslations('AboutPage.Hero')
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-school-collaboration.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">{tHero('title')}</h1>
          <p className="text-xl text-white/90">{tOverview('text1')}</p>
        </div>
      </section>

      {/* CISS Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">{tOverview('text2')}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {tOverview('text3')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">{tOverview('text4')}</h3>
                <p className="text-sm text-muted-foreground">{tOverview('text5')}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">{tOverview('text6')}</h3>
                <p className="text-sm text-muted-foreground">{tOverview('text7')}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Users2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">{tOverview('text8')}</h3>
                <p className="text-sm text-muted-foreground">{tOverview('text9')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="py-16 px-6 bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">{tMotto('text1')}</h2>
          <p className="text-4xl md:text-5xl font-bold text-primary mb-6">{tMottoText('text')}</p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {tMotto('text2')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-accent mb-4" />
                <h2 className="text-3xl font-bold mb-4">{tMission('title')}</h2>
                <p className="text-muted-foreground leading-relaxed">{tMission('text')}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-accent mb-4" />
                <h2 className="text-3xl font-bold mb-4">{tVision('title')}</h2>
                <p className="text-muted-foreground leading-relaxed">{tVision('text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">{tBeliefs('title')}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{tBeliefs('text')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Distinguishing Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">{tDistinct('text1')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {tDistinct('text2')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tDistinct('text3')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tDistinct('text4')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Languages className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tDistinct('text5')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tDistinct('text6')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tDistinct('text7')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tDistinct('text8')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tDistinct('text9')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tDistinct('text10')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:shadow-lg transition-shadow md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tDistinct('text11')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tDistinct('text12')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-6">{tValues('title')}</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-medium">{tValues(`value${num}`)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">{tGuidingPrinciples('title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {tGuidingPrinciples('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <Card key={num} className="border-2 border-primary/10 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{tGuidingPrinciples(`principle${num}_name`)}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tGuidingPrinciples(`principle${num}_description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">{tPrior('text1')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {tPrior('text2')}
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-accent/20 bg-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  {tPrior('text3')}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">{tPrior('text4')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tPrior('text5')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{tPrior('text6')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tPrior('text7')}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{tPrior('text8')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tPrior('text9')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {tPrior('text10')}
                </h3>
                <p className="text-muted-foreground">
                  {tPrior('text11')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {tPrior('text12')}
                </h3>
                <p className="text-muted-foreground">
                  {tPrior('text13')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{tPrior('text14')}</h3>
                <p className="text-muted-foreground">
                  {tPrior('text15')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {tPrior('text16')}
                </h3>
                <p className="text-muted-foreground">
                  {tPrior('text17')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CISS Responsibilities */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{tResp('text1')}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {tResp('text2')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{tResp('text3')}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {tResp('text4')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{tResp('text5')}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {tResp('text6')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{tResp('text7')}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {tResp('text8')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{tResp('text9')}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {tResp('text10')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance Documents */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">{tGov('text1')}</h2>
            <p className="text-xl text-muted-foreground">
              {tGov('text2')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{tGov('text3')}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{tGov('text4')}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tGov('text5')}
                </p>
                <Button asChild className="w-full" size="lg">
                  <a href="/documents/CISS Bylaws.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    {tGov('text6')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{tGov('text7')}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{tGov('text8')}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tGov('text9')}
                </p>
                <div className="text-center text-primary font-semibold text-lg">{tGov('text10')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accountability & Parent Partnership */}
      <section className="py-20 px-6 bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <Users2 className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">{tCommit('text1')}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty mb-8">
            {tCommit('text2')}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {tCommit('text3')}
          </p>
        </div>
      </section>

      {/* Governance Structure Link */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-shadow">
            <CardContent className="p-12 text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">{tCommit('text4')}</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                {tCommit('text5')}
              </p>
              <Button asChild size="lg">
                <Link href={`/${locale}/governance`}>{tCommit('text6')}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
