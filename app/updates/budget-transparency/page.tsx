import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ArrowLeft, FileText, Users, DollarSign } from "lucide-react"

export default function BudgetTransparencyPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />

      {/* Header */}
      <section className="bg-primary/5 border-b">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">IMPORTANT UPDATE</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Budget Clarity & Governance Transparency
          </h1>
          <p className="text-xl text-muted-foreground">
            A message from the CISS Board of Directors
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
                Assalamu Alaikum wa Rahmatullahi wa Barakatuh dear parents,
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8 space-y-4">
              <p>
                We sincerely thank you for your engagement, care, and continued commitment to Calgary
                Islamic School. The level of involvement reflects a shared responsibility for the success of our
                school and the well-being of our children.
              </p>

              <p>
                We acknowledge the concerns raised following the recent town hall, particularly regarding tuition
                changes and transparency. These are important matters, and we are committed to addressing them
                clearly and constructively.
              </p>
            </div>

            {/* Information to be Provided */}
            <Card className="mb-8 border-accent/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Information We Will Provide</h2>
                <p className="mb-4">With respect to the information requested, we will be providing the following:</p>
                <ul className="space-y-2">
                  <li>CISS bylaws (publicly available and to be posted on our website)</li>
                  <li>Presentation materials from recent parent meetings</li>
                  <li>A summary of financial information, with audited financial statements shared in line with fiscal timelines</li>
                  <li>A structured communication channel with the Board</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  We are working to organize this information and will share it within a reasonable timeframe.
                </p>
              </CardContent>
            </Card>

            <p className="mb-8">
              Regarding the fee adjustment, we would like to reiterate the key factor behind this change:
            </p>

            {/* Budget Structure */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                1. How the Budget is Structured
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-bold">Alternative Program Cost</th>
                      <th className="text-right p-4 font-bold">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Non-Certificated Teachers (19.3)</td>
                      <td className="text-right p-4 font-semibold">$1,993,609</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">Insurance, Supply, Utilities & Maintenance</td>
                      <td className="text-right p-4 font-semibold">$733,595</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Janitorial & Support Staffing</td>
                      <td className="text-right p-4 font-semibold">$621,852</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">AP Education Assistance</td>
                      <td className="text-right p-4 font-semibold">$250,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">General & Administration</td>
                      <td className="text-right p-4 font-semibold">$204,236</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">Building Lease</td>
                      <td className="text-right p-4 font-semibold">$900,000</td>
                    </tr>
                    <tr className="bg-accent/10 font-bold">
                      <td className="p-4">Total</td>
                      <td className="text-right p-4 text-lg">$4,703,292</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <p>
                  The cost of the Non-Certificated Teachers remains the largest component of the budget, with
                  approximately $2.0 million. When combined with janitorial, support staff, and the proposed AP
                  education Assistance, staffing represents the largest portion of total costs.
                </p>

                <p>
                  The 2026–2027 budget was developed through a detailed review of actual operating
                  requirements, including staffing levels, program delivery, and facility obligations. Each
                  component—teaching staff, support staff, and building operations—was assessed based on
                  current needs, contractual commitments, and anticipated cost increases. A key factor in this year's
                  budget is that CISS is now fully responsible for all wages and benefits associated with the Islamic
                  / Qur'anic Alternative Program, which represents a structural change in cost responsibility. The
                  budget was finalized by consolidating these elements into a single operating plan designed to
                  ensure the school's financial sustainability while maintaining the quality of both academic and
                  Islamic programming.
                </p>
              </div>
            </div>

            {/* Teacher Cost Breakdown */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                2. What Does a Non-Certificated Teacher Cost Include?
              </h2>

              <Card className="mb-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Example: Non-Certificated Teacher with base salary of $75,000
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span>Base Salary:</span>
                      <span className="font-semibold">$75,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Vacation Pay:</span>
                      <span className="font-semibold">~$3,700</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>CPP / EI / WCB:</span>
                      <span className="font-semibold">~$5,800</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Disability and Extended Health Benefits:</span>
                      <span className="font-semibold">~$9,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Pension (LAPP):</span>
                      <span className="font-semibold">~$6,800</span>
                    </div>
                    <div className="border-t-2 border-primary/30 pt-3 flex justify-between items-center">
                      <span className="font-bold text-lg">Total CISS Cost:</span>
                      <span className="font-bold text-lg text-accent">~$100,800</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <p>
                  The cost of a Non-Certificated Teacher includes more than base salary. It reflects the full
                  employer cost, including vacation pay, CPP, EI, health benefits, and other standard contributions
                  required in the education sector. These are not discretionary costs, but necessary components of
                  employing qualified staff.
                </p>

                <p>
                  Our Non-Certificated Teachers play a critical role in delivering the Islamic, Arabic, and Qur'anic
                  programs. Ensuring they are fairly compensated is essential to maintaining program quality,
                  stability, and continuity for our students.
                </p>
              </div>
            </div>

            {/* Governance */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                3. Governance & Responsibility
              </h2>

              <Card className="mb-6 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">The Board of Directors is responsible for:</h3>
                  <ul className="space-y-2">
                    <li>Ensuring financial sustainability</li>
                    <li>Overseeing operations</li>
                    <li>Setting school fees based on actual costs</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <p>
                  We recognize that communication should have been clearer and earlier. We are implementing
                  more structured and consistent communication moving forward, along with opportunities for
                  parent input in long-term planning.
                </p>

                <p>
                  We remain committed to working constructively with our parent community and ensuring
                  Calgary Islamic School continues to provide strong academic and Islamic education.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="mt-12 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <p className="mb-4">
                We ask Allah (SWT) to guide us and grant us wisdom.
              </p>
              <p className="font-arabic mb-2">
                Wassalamu Alaikum wa Rahmatullahi wa Barakatuh,
              </p>
              <p className="font-semibold">
                CISS Board of Directors
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Questions or Concerns?</h3>
                  <p className="text-muted-foreground mb-4">
                    We welcome your feedback and are here to address any questions you may have.
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Contact us:</p>
                    <a href="mailto:info@cissociety.ca" className="text-primary hover:underline font-semibold text-lg">
                      info@cissociety.ca
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <a href="mailto:info@cissociety.ca">Email Us</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/parents">Parent Resources</Link>
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
