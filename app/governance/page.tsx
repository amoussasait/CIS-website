import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Heart, GraduationCap, Users2, School } from "lucide-react"

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

      {/* School Principals */}
      <section className="py-20 px-6 bg-muted/30">
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
