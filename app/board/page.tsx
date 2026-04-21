import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, DollarSign, FileText, Handshake, BookOpen, Globe } from "lucide-react"
import { directors } from "@/lib/data/directors"

export const metadata = {
  title: "Board of Directors | CISS",
  description:
    "Meet the Calgary Islamic School Society Board of Directors - dedicated leaders providing governance, oversight, and strategic direction for Islamic education in Calgary.",
}

export default function BoardPage() {
  const committees = [
    { name: "Finance Committee", icon: DollarSign },
    { name: "Governance Committee", icon: FileText },
    { name: "Parent Engagement Committee", icon: Handshake },
    { name: "Strategic Planning Committee", icon: Target },
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
          <p className="text-xl text-white/90 text-pretty">Governance, Trust, and Service to Our Community</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Leadership Committed to Excellence</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty mb-6">
            The CISS Board of Directors provides strategic oversight and governance for Calgary Islamic School Society.
            Our board members are dedicated community leaders who bring diverse expertise in education, business,
            healthcare, technology, and community service.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            We are committed to transparency, accountability, and building trust with parents and the broader Calgary
            Muslim community. Our governance ensures that CISS schools maintain the highest standards of academic
            excellence integrated with Islamic values.
          </p>
        </div>
      </section>

      {/* Board Responsibilities */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Board Responsibilities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Ensuring accountability, strategic planning, and community trust
          </p>

          <Card className="mb-12 border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our Governance Foundation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Ensuring community trust is the cornerstone of CISS Board governance. The Board governs by setting
                    vision, policies, and goals, focusing on student achievement, and overseeing budgets, finances, and
                    facilities.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Board prepares students for future success by ensuring bilingual (English and Arabic) quality
                    education, representing Islamic community values, and prioritizing financial accountability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Governance and Oversight</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Providing strategic direction and ensuring the schools operate in accordance with Islamic principles,
                  educational best practices, and legal requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <DollarSign className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Financial Stewardship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ensuring responsible financial management, budget oversight, and long-term sustainability of CISS
                  schools
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Student Achievement Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Setting goals and policies that prioritize student success through bilingual education (English and
                  Arabic) and integrated Islamic values
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Community Representation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Representing Islamic community values, building strong partnerships with parents, and maintaining open
                  communication with the Calgary Muslim community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Board</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Experienced professionals united in their commitment to Islamic education and community service
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
          <h2 className="text-4xl font-bold text-center mb-12">Board Committees</h2>

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
          <h2 className="text-4xl font-bold text-center mb-8">Board Meetings</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The CISS Board of Directors meets monthly to discuss governance matters, review financial reports, and
                make strategic decisions. Board meetings follow proper procedures and maintain minutes for transparency.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Parents and community members may request to address the board by contacting the board secretary in
                advance. We value input from our community and maintain open channels of communication.
              </p>
              <div className="bg-accent/5 border-2 border-accent/20 rounded-lg p-6">
                <h3 className="font-bold mb-2 text-lg">Contact the Board</h3>
                <p className="text-muted-foreground mb-2">
                  For governance questions, board meeting requests, or policy inquiries:
                </p>
                <p className="font-medium text-primary">info@cissociety.ca</p>
                <p className="text-sm text-muted-foreground mt-2">Response time: Within 1-2 business days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
