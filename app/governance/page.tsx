import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Heart, GraduationCap, Users2, School, Building2, BookOpen, UserCheck, DollarSign, MessageSquare, FileText, Target, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Governance & Roles | CISS",
  description:
    "Understanding the roles and responsibilities of CISS, MCFC/MCC, parents, school councils, and principals in our educational community",
}

export default function GovernancePage() {
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
            Governance Structure & Roles
          </h1>
          <p className="text-xl text-white/90 text-pretty">Understanding our collaborative educational community</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">A Shared Responsibility</h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            The success of our Islamic education community depends on clear roles, strong partnerships, and shared
            commitment. Each organization and individual plays a vital role in supporting student achievement and
            Islamic character development.
          </p>
        </div>
      </section>

      {/* Board Leadership */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Board Leadership</h2>
            <p className="text-lg text-muted-foreground">Executive positions guiding CISS strategic direction</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">Chairman</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">Vice Chairman</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">Secretary</h3>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">Treasurer</h3>
              </CardContent>
            </Card>
          </div>

          {/* Committees */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Board Committees</h2>
            <p className="text-lg text-muted-foreground">Specialized teams driving key initiatives</p>
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
                  href="/documents/CISS-Bylaws-Nov-2025.pdf"
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
                  <h2 className="text-3xl font-bold mb-3">Calgary Islamic School Society (CISS)</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    Governing Society & Strategic Leadership
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  CISS is the registered non-profit society that provides governance, oversight, and strategic
                  direction for all Islamic School of Calgary operations.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Responsibilities:</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Governance & Oversight:</strong> Setting policies, bylaws, and strategic direction for
                        all schools under CISS
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Financial Stewardship:</strong> Budget approval, financial oversight, fee structures,
                        and ensuring long-term sustainability
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Hiring & Leadership:</strong> Appointing school principals and senior administration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Strategic Planning:</strong> Long-term expansion planning, including future campus
                        development and new educational initiatives
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Accountability & Transparency:</strong> Reporting to the community, maintaining open
                        communication with parents, and ensuring schools meet their mission
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Compliance:</strong> Ensuring adherence to Alberta Education requirements, legal
                        obligations, and Islamic principles
                      </span>
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
                  <h2 className="text-3xl font-bold mb-3">
                    Muslim Community Foundation of Calgary (MCFC) / Muslim Community Council (MCC)
                  </h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    Community Ownership & Facility Management
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  MCFC/MCC owns and manages the physical facilities and properties used by CISS schools, serving the
                  broader Calgary Muslim community.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Responsibilities:</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Property Ownership:</strong> Owning and maintaining school buildings and facilities on
                        behalf of the community
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Facility Management:</strong> Building maintenance, repairs, capital improvements, and
                        safety compliance
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Rental Agreements:</strong> Establishing lease terms and facility use agreements with
                        CISS
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Community Asset Management:</strong> Ensuring facilities serve the broader Muslim
                        community needs beyond school hours
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Strategic Partnership:</strong> Collaborating with CISS on facility planning and
                        expansion projects
                      </span>
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
                  <h2 className="text-3xl font-bold mb-3">Parents</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    First Educators & Essential Partners
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Parents are the primary educators of their children and essential partners in the Islamic education
                  process. The school supports and extends the Islamic values taught at home.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Responsibilities:</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Home-School Partnership:</strong> Reinforcing Islamic values, academic expectations, and
                        behavioral standards at home
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Supporting Learning:</strong> Ensuring students complete homework, attend school
                        regularly, and are prepared for learning
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Communication:</strong> Maintaining open dialogue with teachers and school
                        administration, attending parent-teacher meetings
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Volunteer & Engagement:</strong> Participating in school events, volunteering when
                        possible, and contributing to school community
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Feedback & Input:</strong> Providing constructive feedback, raising concerns through
                        proper channels, and participating in surveys
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Financial Commitment:</strong> Paying tuition fees on time and supporting fundraising
                        efforts when possible
                      </span>
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
                  <h2 className="text-3xl font-bold mb-3">School Parents Council</h2>
                  <p className="text-lg text-accent font-semibold mb-4">Parent Voice & Community Building</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  The School Parents Council represents parent interests, facilitates communication between families and
                  school administration, and organizes community-building activities.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Responsibilities:</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Parent Representation:</strong> Serving as a collective voice for parents in discussions
                        with school administration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Communication Bridge:</strong> Facilitating two-way communication between parents and
                        school leadership
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Event Organization:</strong> Planning and executing school events, fundraisers, and
                        community activities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Volunteer Coordination:</strong> Recruiting and organizing parent volunteers for school
                        activities and needs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Advisory Role:</strong> Providing input on school policies, programs, and improvements
                        from a parent perspective
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Community Building:</strong> Fostering a strong, connected parent community that
                        supports all families
                      </span>
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
                  <h2 className="text-3xl font-bold mb-3">Program Advisory Group (PAG)</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    Alternative Program Guidance & Community Input
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  The Program Advisory Group provides advice and feedback to the CISS Board and administration on matters
                  related to the Alternative Program, ensuring parent and community voices are heard in program decisions.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Composition & Key Responsibilities:</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Diverse Membership:</strong> Composed of parents, community members, CISS board members,
                        and school administration
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Program Effectiveness:</strong> Regular meetings to discuss and assess the effectiveness of
                        the Alternative Program
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Community Needs Assessment:</strong> Identifying and addressing community educational needs
                        and expectations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Strategic Input:</strong> Providing input on program direction, policies, and innovative
                        initiatives
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Continuous Improvement:</strong> Recommending enhancements and improvements to ensure the
                        Alternative Program meets its objectives
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Stakeholder Voice:</strong> Ensuring parent and community perspectives are integrated into
                        program planning and decision-making
                      </span>
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
                  <h2 className="text-3xl font-bold mb-3">School Principals</h2>
                  <p className="text-lg text-accent font-semibold mb-4">
                    Educational Leadership & Day-to-Day Operations
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  School principals are appointed by CISS to provide educational leadership, manage daily operations,
                  and ensure high-quality Islamic education is delivered at their campus.
                </p>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Key Responsibilities:</h3>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Educational Leadership:</strong> Setting academic standards, curriculum implementation,
                        and ensuring educational excellence
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Staff Management:</strong> Hiring, supervising, and evaluating teachers and school
                        staff; providing professional development
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Student Well-being:</strong> Ensuring safe, nurturing learning environment; addressing
                        student discipline and support needs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Parent Communication:</strong> Maintaining regular communication with families,
                        addressing concerns, and building strong partnerships
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Budget Management:</strong> Managing school budget within CISS financial guidelines,
                        resource allocation, and operational efficiency
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Compliance & Reporting:</strong> Ensuring Alberta Education compliance, maintaining
                        student records, and reporting to CISS Board
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Islamic Environment:</strong> Fostering Islamic character development, maintaining
                        Islamic values in all school operations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Community Engagement:</strong> Building relationships with parents, engaging with School
                        Parents Council, and representing the school in the community
                      </span>
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
            <h2 className="text-4xl font-bold mb-6">Working Together for Student Success</h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Our governance structure is built on collaboration, clear accountability, and shared commitment to Islamic
              education excellence. Each role supports and strengthens the others, creating a comprehensive educational
              community that serves our students and families.
            </p>
          </div>

          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Lines of Communication</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">For Day-to-Day School Matters:</h4>
                  <p className="text-muted-foreground">Teacher → Principal → CISS Administration</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">For Governance & Policy:</h4>
                  <p className="text-muted-foreground">Parents → School Parents Council → CISS Board</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">For Facility Issues:</h4>
                  <p className="text-muted-foreground">Principal → CISS → MCFC/MCC</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-lg">For General Inquiries:</h4>
                  <p className="text-muted-foreground">
                    Contact{" "}
                    <a href="mailto:info@cissociety.ca" className="text-primary font-semibold hover:underline">
                      info@cissociety.ca
                    </a>
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
