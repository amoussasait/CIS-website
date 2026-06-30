import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, DollarSign, FileText, Handshake, BookOpen, Globe } from "lucide-react"
import { directors } from "@/lib/data/directors"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "Board of Directors | CISS",
  description:
    "Meet the Calgary Islamic School Society Board of Directors - dedicated leaders providing governance, oversight, and strategic direction for Islamic education in Calgary.",
}

export default async function BoardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tIntro = await getTranslations('BoardPage.Intro')
  const tResp = await getTranslations('BoardPage.Responsibilities')
  const tMeet = await getTranslations('BoardPage.MeetingsContact')
  const committees = [
    { name: tMeet('text4'), icon: DollarSign },
    { name: tMeet('text5'), icon: FileText },
    { name: tMeet('text6'), icon: Handshake },
    { name: tMeet('text7'), icon: Target },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-board-meeting.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">Board of Directors</h1>
          <p className="text-xl text-white/90 text-pretty">{tIntro('text1')}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">{tIntro('text2')}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty mb-6">
            {tIntro('text3')}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {tIntro('text4')}
          </p>
        </div>
      </section>

      {/* Board Responsibilities */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{tResp('text1')}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            {tResp('text2')}
          </p>

          <Card className="mb-12 border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{tResp('text3')}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {tResp('text4')}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {tResp('text5')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{tResp('text6')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tResp('text7')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <DollarSign className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{tResp('text8')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tResp('text9')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{tResp('text10')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tResp('text11')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{tResp('text12')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tResp('text13')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{tMeet('text1')}</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            {tMeet('text2')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-center">{director.name}</h3>
                  <p className="text-accent font-semibold mb-2 text-center">{director.position}</p>
                  <p className="text-sm text-muted-foreground/80 mb-4 text-center italic">{director.representative}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">{director.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{tMeet('text3')}</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {committees.map((committee, index) => {
              const Icon = committee.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg">{committee.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Meeting Information */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{tMeet('text8')}</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {tMeet('text9')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {tMeet('text10')}
              </p>
              <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-6">
                <h3 className="font-bold mb-2 text-lg">{tMeet('text11')}</h3>
                <p className="text-muted-foreground mb-2">
                  {tMeet('text12')}
                </p>
                <p className="font-medium text-primary">info@cissociety.ca</p>
                <p className="text-sm text-muted-foreground mt-2">{tMeet('text13')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
