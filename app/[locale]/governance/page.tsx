import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Heart, GraduationCap, Users2, School, Building2, BookOpen, UserCheck, DollarSign, MessageSquare, FileText, Target, Download } from "lucide-react"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

export const metadata = {
  title: "Governance & Roles | CISS",
  description:
    "Understanding the roles and responsibilities of CISS, MCFC/MCC, parents, school councils, and principals in our educational community",
}

export default async function GovernancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const tIntro = await getTranslations('GovernancePage.Intro')
  const tLeader = await getTranslations('GovernancePage.Leadership')
  const tComm = await getTranslations('GovernancePage.Committees')
  const tCISS = await getTranslations('GovernancePage.CISS')
  const tMCFC = await getTranslations('GovernancePage.MCFC')
  const tParents = await getTranslations('GovernancePage.Parents')
  const tCouncils = await getTranslations('GovernancePage.Councils')
  const tPAG = await getTranslations('GovernancePage.PAG')
  const tPrincipals = await getTranslations('GovernancePage.Principals')
  const tCollab = await getTranslations('GovernancePage.Collaboration')
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
            {tIntro('text1')}
          </h1>
          <p className="text-xl text-white/90 text-pretty">{tIntro('text2')}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">{tIntro('text3')}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            {tIntro('text4')}
          </p>
        </div>
      </section>

      {/* Board Leadership */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">{tLeader('text1')}</h2>
            <p className="text-lg text-muted-foreground">{tLeader('text2')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tLeader('text3')}</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tLeader('text4')}</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tLeader('text5')}</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{tLeader('text6')}</h3>
              </CardContent>
            </Card>
          </div>

          {/* Committees */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{tComm('text1')}</h2>
            <p className="text-lg text-muted-foreground">{tComm('text2')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Buildings Committee */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Buildings Committee</h3>
                    <p className="text-sm text-accent font-medium">Lead: Abdulrahman Abbas</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Supervision on the school maintenance and project renovations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Education PRSD Liaison */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Education PRSD Liaison</h3>
                    <p className="text-sm text-accent font-medium">Lead: Hoda Kilani</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Arabic, Islamic, and Tahfeeth Programs</li>
                  <li>• Align both schools and support both principals</li>
                  <li>• Meet with instructors, identify needs, and recommend action steps</li>
                </ul>
              </CardContent>
            </Card>

            {/* HR Committee */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">HR Committee</h3>
                    <p className="text-sm text-accent font-medium">Lead: Dr. Mohammed Abdel-Hafez</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Review contracts of current employees and contractors and prospective recruitments</li>
                  <li>• Bring final recommendations to the Board for approval</li>
                </ul>
              </CardContent>
            </Card>

            {/* Finance & Fundraising */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Finance & Fundraising</h3>
                    <p className="text-sm text-accent font-medium">Co-Lead: Marwa Ajram</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Add a fundraising specialist to the committee</li>
                  <li>• First fundraising event to be coordinated with Principals</li>
                </ul>
              </CardContent>
            </Card>

            {/* Communications & Website */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Communications & Website</h3>
                    <p className="text-sm text-accent font-medium">Lead: Ali Moussa</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Website development and maintenance</li>
                  <li>• Parent communications</li>
                  <li>• General outreach and updates</li>
                </ul>
              </CardContent>
            </Card>

            {/* Governance */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Governance</h3>
                    <p className="text-sm text-accent font-medium">Lead: Mohamad Zohiri</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Review and update bylaws</li>
                  <li>• Define roles, responsibilities, and authorities</li>
                  <li>• Establish clear processes and procedures</li>
                </ul>
              </CardContent>
            </Card>

            {/* Strategy */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Strategy</h3>
                    <p className="text-sm text-accent font-medium">Lead: Basir Saleh</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Next strategy meeting: Sunday, March 29</li>
                  <li>• Long-term planning and vision alignment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bylaws Document */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">CISS Bylaws</h3>
                  <p className="text-muted-foreground">
                    Review our official bylaws governing the Calgary Islamic School Society operations and policies.
                  </p>
                </div>
                <Link
                  href="/documents/CISS Bylaws.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  View Bylaws
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CISS Role */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{tCISS('text1')}</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    {tCISS('text2')}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {tCISS('text3')}
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{tCISS('text4')}</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCISS('text5')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCISS('text6')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCISS('text7')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCISS('text8')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCISS('text9')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCISS('text10')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MCFC/MCC Role */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{tMCFC('text1')}</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    {tMCFC('text2')}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {tMCFC('text3')}
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{tMCFC('text4')}</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tMCFC('text5')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tMCFC('text6')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tMCFC('text7')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tMCFC('text8')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tMCFC('text9')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Parents Role */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{tParents('text1')}</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    {tParents('text2')}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {tParents('text3')}
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{tParents('text4')}</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tParents('text5')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tParents('text6')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tParents('text7')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tParents('text8')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tParents('text9')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tParents('text10')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Parents Council */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{tCouncils('text1')}</h2>
                  <p className="text-lg text-accent font-semibold mb-4">{tCouncils('text2')}</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {tCouncils('text3')}
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{tCouncils('text4')}</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCouncils('text5')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCouncils('text6')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCouncils('text7')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCouncils('text8')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCouncils('text9')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tCouncils('text10')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Advisory Group */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{tPAG('text1')}</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    {tPAG('text2')}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {tPAG('text3')}
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{tPAG('text4')}</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPAG('text5')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPAG('text6')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPAG('text7')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPAG('text8')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPAG('text9')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPAG('text10')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Principals */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{tPrincipals('text1')}</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    {tPrincipals('text2')}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {tPrincipals('text3')}
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">{tPrincipals('text4')}</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text5')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text6')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text7')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text8')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text9')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text10')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text11')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{tPrincipals('text12')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Collaboration Framework */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <School className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">{tCollab('text1')}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              {tCollab('text2')}
            </p>
          </div>

          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">{tCollab('text3')}</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">{tCollab('text4')}</h4>
                  <p className="text-muted-foreground">{tCollab('text5')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">{tCollab('text6')}</h4>
                  <p className="text-muted-foreground">{tCollab('text7')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">{tCollab('text8')}</h4>
                  <p className="text-muted-foreground">{tCollab('text9')}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">{tCollab('text10')}</h4>
                  <p className="text-muted-foreground">
                    {tCollab('text11')}
                  </p>
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
