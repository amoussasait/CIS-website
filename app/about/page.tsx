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
import { siteConfig } from "@/lib/site-config"
import Link from "next/link"

export const metadata = {
  title: "About CISS | Calgary Islamic School Society",
  description:
    "Learn about Calgary Islamic School Society's mission, vision, beliefs, values, and commitment to excellence in Islamic education",
}

export default function AboutPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">About CISS</h1>
          <p className="text-xl text-white/90">Serving Calgary's Muslim Community with Excellence</p>
        </div>
      </section>

      {/* CISS Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Calgary Islamic School Society</h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              CISS is the governing society overseeing Islamic School of Calgary operations. We provide strategic
              leadership, governance, and oversight for our schools, ensuring they deliver excellent Islamic education
              that prepares students for success in this life and the hereafter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Governance & Oversight</h3>
                <p className="text-sm text-muted-foreground">Strategic direction and accountability</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Strategic Planning</h3>
                <p className="text-sm text-muted-foreground">Long-term growth and expansion</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Users2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Community Trust</h3>
                <p className="text-sm text-muted-foreground">Transparency and parent partnership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="py-16 px-6 bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Motto</h2>
          <p className="text-4xl md:text-5xl font-bold text-primary mb-6">{siteConfig.motto}</p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This motto encapsulates our commitment to nurturing well-rounded individuals who are grounded in Islamic
            faith, equipped with knowledge, and prepared to innovate and lead in an ever-changing world.
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
                <h2 className="text-3xl font-bold mb-4">Mission</h2>
                <p className="text-muted-foreground leading-relaxed">{siteConfig.mission}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-accent mb-4" />
                <h2 className="text-3xl font-bold mb-4">Vision</h2>
                <p className="text-muted-foreground leading-relaxed">{siteConfig.vision}</p>
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
              <h2 className="text-3xl font-bold mb-4">Beliefs</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{siteConfig.beliefs}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Distinguishing Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">What Makes CISS Schools Distinctive</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our unique approach integrates Islamic values with academic excellence, preparing students for success in
              both worlds
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
                    <h3 className="text-xl font-bold mb-2">Sunni Islamic Studies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive Islamic education grounded in the Qur'an and Sunnah, teaching the tradition and values
                      of Sunni Islam with qualified Islamic studies teachers
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
                    <h3 className="text-xl font-bold mb-2">Arabic Language Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Strong Arabic language program from Kindergarten through Grade 12, developing proficiency in reading,
                      writing, and understanding Arabic as a living language
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
                    <h3 className="text-xl font-bold mb-2">Qur'an Memorization (Tahfeeth)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Structured Tahfeeth program promoting Qur'an memorization and understanding, helping students develop
                      a deep connection with the sacred text
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
                    <h3 className="text-xl font-bold mb-2">Character & Communication</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Focus on Islamic character building, respect for others, and effective communication skills that
                      prepare students to be confident, articulate leaders
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
                    <h3 className="text-xl font-bold mb-2">Active Canadian Citizenship</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Empowering Muslim students to become active and responsible participants in building a diverse,
                      respectful, and harmonious Canadian society while maintaining strong Islamic identity
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
              <h2 className="text-3xl font-bold mb-6">Values</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {siteConfig.values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-medium">{value}</span>
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
            <h2 className="text-4xl font-bold mb-4">Guiding Principles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide our educational approach and decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.guidingPrinciples.map((principle, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{principle.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Our Priorities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic priorities that drive our commitment to student success and educational excellence
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-accent/20 bg-accent/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  1. ABC Model - Achievement, Behaviour, Celebrating
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Achievement</h4>
                    <p className="text-sm text-muted-foreground">
                      Fostering a high-performance culture with high expectations for all students
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Behaviour</h4>
                    <p className="text-sm text-muted-foreground">
                      Students demonstrate respectful, responsible, and safe behaviors rooted in Islamic values
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Celebrating</h4>
                    <p className="text-sm text-muted-foreground">
                      Recognizing and celebrating excellence, achievement, and growth at all levels
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  2. Strengthen Early Learning and Develop Literacy and Numeracy Foundation
                </h3>
                <p className="text-muted-foreground">
                  Building strong foundational skills in literacy and numeracy from Kindergarten through Grade 3,
                  ensuring every student has the tools for lifelong learning success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  3. Continually Improve Student Wellness, Connection and Cultural Identity
                </h3>
                <p className="text-muted-foreground">
                  Prioritizing mental health, wellness, and cultural connection while building strong Islamic identity
                  and character development in all students.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">4. Continually Improve Quality of Programs and Services</h3>
                <p className="text-muted-foreground">
                  Embracing a continuous improvement approach through regular assessment and enhancement of all
                  educational programs and services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  5. Champion Innovation and Continue to Strengthen Career Education and Apprenticeships
                </h3>
                <p className="text-muted-foreground">
                  Preparing students for future careers through innovation, 21st century skills development, and strong
                  career education pathways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CISS Responsibilities */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">CISS Responsibilities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            As the governing society, CISS ensures accountability, transparency, and excellence across all schools
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Governance and Oversight</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Providing strategic direction, policy development, and ensuring schools operate according to Islamic
                  principles and educational best practices
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Strategic Planning and Growth</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Planning future expansion, including unified campus development and exploring online education
                  opportunities for the community
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Community Trust and Transparency</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Building strong partnerships with parents, maintaining open communication, and upholding the trust
                  placed in us by the Calgary Muslim community
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Supporting Existing Campuses</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Ensuring Akram Jomaa Islamic School and Omar Ibn Al-Khattab School have the resources, support, and
                  leadership needed for excellence
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
            <h2 className="text-4xl font-bold mb-4">Governance Documents</h2>
            <p className="text-xl text-muted-foreground">
              Access official CISS governance documents and bylaws
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
                    <h3 className="text-xl font-bold mb-2">CISS Bylaws</h3>
                    <p className="text-sm text-muted-foreground mb-1">Amended November 2025</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Official bylaws governing the conduct and operations of Calgary Islamic School Society, including membership, board structure, and governance procedures.
                </p>
                <div className="text-center text-primary font-semibold text-lg">Coming Soon</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Special Resolutions</h3>
                    <p className="text-sm text-muted-foreground mb-1">October 27, 2025</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Special resolutions of members regarding bylaw and objectives amendments, approved by the membership on October 27, 2025.
                </p>
                <div className="text-center text-primary font-semibold text-lg">Coming Soon</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accountability & Parent Partnership */}
      <section className="py-20 px-6 bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <Users2 className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Commitment to Parents and Community</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty mb-8">
            CISS believes that education is a shared responsibility. We are committed to transparent governance, regular
            communication, and genuine partnership with parents. Your trust drives our commitment to accountability and
            excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We value your input and welcome your engagement. Together, we build a learning community that produces
            leaders through faith, knowledge, and ingenuity.
          </p>
        </div>
      </section>

      {/* Governance Structure Link */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-xl transition-shadow">
            <CardContent className="p-12 text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Understanding Our Governance Structure</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Learn about the roles and responsibilities of CISS, MCFC/MCC, parents, school parents councils, and
                school principals in our collaborative educational community.
              </p>
              <Button asChild size="lg">
                <Link href="/governance">View Governance & Roles</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
