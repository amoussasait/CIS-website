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
                We sincerely thank you for your engagement, your candid feedback, and your continued commitment to
                Calgary Islamic School. The level of involvement reflects a shared responsibility for the success of our
                school and the well-being of our children.
              </p>

              <p>
                Following the recent town hall, we understand that many parents have concerns regarding the fee
                adjustment for the 2026–2027 academic year, as well as questions related to transparency, process, and
                communication. These are valid concerns, and we are committed to addressing them clearly and
                constructively.
              </p>
            </div>

            {/* Process and Approval */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Process and Approval</h2>
              <div className="space-y-4">
                <p>
                  The fee adjustment was developed through a detailed review of the school's operating requirements and
                  submitted through the appropriate process, including review and approval by Prairie Rose School Division.
                </p>
                <p>
                  We recognize that while the approval process was followed, parent communication and engagement should
                  have been earlier and clearer. This is an area we are actively improving.
                </p>
              </div>
            </div>

            {/* Understanding the Budget Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold">Understanding the Budget</h2>
              <p className="mt-2">
                The 2026–2027 budget reflects the actual cost of delivering both academic and Islamic programming.
              </p>
            </div>

            {/* Budget Structure */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Alternative Program Cost Breakdown</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-bold">Alternative Program Requirements</th>
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
                      <td className="p-4">Building Lease & Upgrades</td>
                      <td className="text-right p-4 font-semibold">$900,000</td>
                    </tr>
                    <tr className="bg-accent/10 font-bold">
                      <td className="p-4">Total</td>
                      <td className="text-right p-4 text-lg">$4,703,292</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                Staffing remains the largest component of the budget. Teaching staff alone represent approximately $2.0
                million. When combined with support staff and student services (including but not limited to Alternative
                Program education assistance, janitorial, day porters, caretakers, maintenance staff and security), staffing
                represents the largest portion of total costs required to deliver the program.
              </p>
            </div>

            {/* The Financial Reality */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">The Financial Reality</h2>
              <Card className="mb-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <ul className="space-y-3 text-lg">
                    <li>• Total Educational and Operating Cost: ~$4.7M</li>
                    <li>• Alberta Education O&M Funding: ~$1.0M</li>
                    <li>• Remaining to be Funded: ~$3.7M</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Fee Structure */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">2026 – 2027 Fee Structure</h2>

              <h3 className="text-xl font-bold mb-4">Fees Calculation</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse mb-6">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">CISS 2026 – 2027 Budget</td>
                      <td className="text-right p-3 font-semibold">$4,703,292</td>
                      <td className="text-center p-3 font-semibold">A</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-3">Alberta Education O&M allocation to CISS (based on 1545 students)</td>
                      <td className="text-right p-3 font-semibold">$1,006,736</td>
                      <td className="text-center p-3 font-semibold">B</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Remaining Budget to be Funded (A - B = C)</td>
                      <td className="text-right p-3 font-semibold">$3,696,556</td>
                      <td className="text-center p-3 font-semibold">C</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-3">Estimated Number of Students</td>
                      <td className="text-right p-3 font-semibold">1545</td>
                      <td className="text-center p-3 font-semibold">D</td>
                    </tr>
                    <tr className="bg-accent/10 font-bold">
                      <td className="p-3">Weighted Average Fee per Student (C / D)</td>
                      <td className="text-right p-3 text-lg">$2,393</td>
                      <td className="text-center p-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold mb-4">2026 – 2027 Fees</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-4 font-bold">Grades / Program</th>
                      <th className="text-right p-4 font-bold">Total Annual Fee First Child</th>
                      <th className="text-right p-4 font-bold">Additional Child(ren)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">KG – Grade 9</td>
                      <td className="text-right p-4 font-semibold">$2,450</td>
                      <td className="text-right p-4 font-semibold">$2,250</td>
                    </tr>
                    <tr className="border-b bg-muted/30">
                      <td className="p-4">Grades 10 – 12</td>
                      <td className="text-right p-4 font-semibold">$2,690</td>
                      <td className="text-right p-4 font-semibold">$2,490</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">Tahfeez Program</td>
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
                The cost of a Non-Certificated Teacher includes more than base salary. It reflects the full employer cost
                required to employ qualified staff, including vacation pay, CPP, EI, health benefits, and pension
                contributions. These are standard across the education sector.
              </p>

              <p>
                For example, a teacher with a base salary of $75,000 represents a total employer cost of approximately
                $100,000 once these required contributions are included.
              </p>

              <p>
                This reflects the true cost of delivering instruction and is consistent with standard employment practices
                across schools.
              </p>

              <p className="font-semibold">
                Our Non-Certificated Teachers play a critical role in delivering Islamic, Arabic, and Quranic
                instruction. Ensuring they are fairly compensated is essential to maintaining program quality,
                stability, and continuity for our students.
              </p>
            </div>

            {/* Facilities Explanation */}
            <div className="mb-8 space-y-4">
              <p>
                Furthermore, the school operates within leased facilities, and these costs form part of the day-to-day
                operating requirements necessary to deliver the program (including but not limited to lease payment,
                cleaning supplies, waste disposal, general maintenance and repairs, insurance and utilities). For context, the
                lease rate is significantly below typical market rates, and the total reflects the size of the space required to
                operate a full school program. <strong>Please note the majority of the lease value is dedicated to improving the
                school campuses.</strong>
              </p>
            </div>

            {/* Alberta Education Framework */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Alignment with Alberta Education Framework</h2>
              <div className="space-y-4">
                <p>
                  Alternative program fees are intended to cover costs directly related to delivering the programs that are{" "}
                  <strong>NOT funded through Alberta Education</strong>.
                </p>

                <p>
                  Alberta Education provides Operations and Maintenance (O&M) funding to Prairie Rose School Division
                  to support the basic operation and upkeep of school facilities. This funding is allocated at the division level
                  and is based primarily on student enrollment.
                </p>

                <p>
                  As part of this structure, approximately $1 million in O&M funding is applied to support the operation of
                  Calgary Islamic School. This funding helps offset facility and operational costs; however, it does not fully
                  cover the total cost of operating the school, which is approximately $4.7 million annually.
                </p>
              </div>
            </div>

            {/* Board Authority */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">The Board's Authority to Set School Fees</h2>
              <div className="space-y-4">
                <p>
                  CISS was registered as a not-for-profit organization on September 4, 2024, and subsequently obtained
                  charitable status effective January 15, 2026.
                </p>

                <p>
                  The Board of Directors operates under a formal governance framework established by the Societies Act
                  (Alberta, RSA 2000, c S-14) and the Society's Bylaws, which were adopted on October 27, 2025.
                </p>

                <p className="font-semibold">
                  Section 15 of the CISS Bylaws expressly grants the Board this authority:
                </p>

                <Card className="mb-4 bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <p className="italic mb-4">
                      "The Board shall determine School Fees payable each school year. Parents shall be notified in writing of
                      such fees for the forthcoming [year] no later than April 1 of each year."
                    </p>
                    <p className="italic">
                      "School Fees" is a defined term in the Bylaws and includes tuition fees, activity or trip fees, technology
                      fees, capital improvement fees, alternative program fees, and any other ancillary fees. The power to set
                      these fees rests exclusively with the Board of Directors and does not require a membership vote or
                      referendum. This is consistent with how not-for-profit societies in Alberta are governed, where operational
                      financial decisions are entrusted to the elected and appointed board.
                    </p>
                  </CardContent>
                </Card>

                <p>
                  The Board exercised this authority following a thorough review of the Society's financial position,
                  operating requirements, and the needs of the school community. The fee adjustment was passed by Board
                  resolution and is effective for the upcoming school year.
                </p>
              </div>
            </div>

            {/* Governance and Responsibility */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Governance and Responsibility</h2>
              <div className="space-y-4">
                <p>
                  The Board of Directors is responsible for ensuring the financial sustainability of the school, overseeing
                  operations, and setting school fees in accordance with the Society's Bylaws and governance framework.
                </p>

                <p>
                  The Board includes parent representation, with a majority of current members being parents of students
                  within the school, including individuals who represent the parent body. This structure is intended to ensure
                  that parent perspectives are part of Board-level discussions and decision-making.
                </p>

                <p>
                  We recognize that while representation exists at the Board level, broader parent communication and
                  engagement should have been stronger. We are committed to improving this moving forward through more
                  structured and consistent communication.
                </p>
              </div>
            </div>

            {/* Our Commitment to Transparency */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Commitment to Transparency</h2>
              <div className="space-y-4">
                <p>
                  CISS has been taking steps to establish more structured communication processes with parents. In response
                  to recent feedback, we are accelerating these efforts through the following actions:
                </p>

                <ul className="space-y-2 ml-6 list-disc">
                  <li>Establishing a structured communication channel through an official website to support ongoing engagement with the Board</li>
                  <li>Sharing the Society's Bylaws and governance documents on the official website</li>
                  <li>Providing a clear financial summary, with financial statements shared in accordance with fiscal timelines</li>
                  <li>Sharing relevant materials that are important to parents</li>
                </ul>

                <p>
                  We are currently organizing this information and will share it through our new CISS website
                  (cissociety.ca), which is under development and expected to be available in the coming weeks.
                </p>
              </div>
            </div>

            {/* Moving Forward Together */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Moving Forward Together</h2>
              <div className="space-y-4">
                <p>
                  The Board of Directors serves this community voluntarily. Every Director — elected or appointed —
                  receives no remuneration. Our singular focus is the success and wellbeing of your children and the longterm sustainability of this school as a premier Islamic educational institution in Calgary.
                </p>

                <p>
                  We are building something meaningful here — a school rooted in Islamic values, academic excellence, and
                  a deep love of the Quran. That mission requires a sound financial foundation, and this fee adjustment is part
                  of ensuring that foundation remains strong.
                </p>

                <p>
                  We thank you for your patience, your candour, and your continued commitment to this school community.
                  If you have further questions or wish to discuss this matter directly, please do not hesitate to reach out to
                  the school office or any member of the Board.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="mt-12 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <p className="mb-4">
                We ask Allah (SWT) to guide us and grant us wisdom in serving this community.
              </p>
              <p className="font-arabic mb-2">
                Wassalamu Alaikum wa Rahmatullahi wa Barakatuh,
              </p>
              <p className="font-semibold mb-1">
                The Board of Directors
              </p>
              <p className="font-semibold">
                Calgary Islamic School Society
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
