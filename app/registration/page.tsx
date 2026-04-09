import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, FileText, ExternalLink, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Registration 2026-2027 | Calgary Islamic School Society",
  description: "Application process and alternative program fees for the 2026-2027 school year at Akram Jomaa and Omar Bin Al-Khattab campuses.",
}

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/islamic-school-reception.jpg')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration 2026-2027</h1>
          <p className="text-xl max-w-2xl">Application process and program fees for Akram Jomaa and Omar Bin Al-Khattab campuses</p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-6 bg-accent/10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-accent">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Important Update</h2>
                  <p className="text-muted-foreground">
                    Prairie Rose Public Schools and the Calgary Islamic School Society are sharing an update regarding the 2026-2027 application process and alternative program fees for the Akram Jomaa and Omar Bin Al-Khattab campuses.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    At the recommendation of the Calgary Islamic School Society, the Prairie Rose Public Schools Board of Trustees approved an adjustment to alternative program fees for the 2026-2027 school year. The change reflects the continued growth of the program and the increasing complexity of Arabic, Qur'anic, and Islamic studies instruction, where students may be learning at different proficiency levels and require additional support. It also helps ensure fees remain aligned and competitive with similar faith-based and alternative programs in the Calgary region.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">Program Fees 2026-2027</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold">Grades</th>
                  <th className="p-4 text-left font-semibold">Total Annual Fee</th>
                  <th className="p-4 text-left font-semibold">First Child</th>
                  <th className="p-4 text-left font-semibold">Additional Child(ren)</th>
                  <th className="p-4 text-left font-semibold">Returning Student Deposit</th>
                  <th className="p-4 text-left font-semibold">Prospective Student Application Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Kindergarten - Grade 9</td>
                  <td className="p-4">$2,450</td>
                  <td className="p-4">$2,250</td>
                  <td className="p-4">$250</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$50</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 font-medium">Kindergarten Assessment Fee</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4">N/A</td>
                  <td className="p-4">$100</td>
                  <td className="p-4">$100</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Grades 10 - 12</td>
                  <td className="p-4">$2,690</td>
                  <td className="p-4">$2,490</td>
                  <td className="p-4">$250</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$50</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="p-4 font-medium">Tahfeez Program</td>
                  <td className="p-4">$2,690</td>
                  <td className="p-4">$2,490</td>
                  <td className="p-4">$250</td>
                  <td className="p-4">$50</td>
                  <td className="p-4">$50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-4">
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Declaration of Intent to Return:</strong> A $250 deposit (non-refundable) is required for current students and is applied toward the total annual program fee.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>New Student Applications:</strong> Require a $50 non-refundable application fee, with an additional $100 assessment fee for kindergarten applicants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Need to Know */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">What You Need to Know Before You Apply</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p>Applications for the 2026-2027 school year open <strong>Monday, March 16, 2026</strong>.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p>Current students will see the <strong>Declaration of Intent to Return deposit</strong> in School Cash.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p>New students must submit the <strong>Prospective Student Application</strong> through PowerSchool Enrollment and complete the required School Cash payment.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p>Applications are reviewed by the school and are <strong>not processed on a first-come, first-served basis</strong>.</p>
              </CardContent>
            </Card>

            <Card className="border-accent">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p><strong>Current student application deadline: April 15, 2026</strong></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learn More Links */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Learn More</h2>
          <p className="text-center text-muted-foreground mb-8">
            Please review the admissions pages for full details about eligibility, fees, timelines, and application requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Akram Jomaa Campus</h3>
                <p className="text-muted-foreground mb-4">Kindergarten through Grade 6</p>
                <Button asChild className="w-full">
                  <a href="https://aj.myprps.com/admission-registration" target="_blank" rel="noopener noreferrer">
                    Admissions Information
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Omar Bin Al-Khattab Campus</h3>
                <p className="text-muted-foreground mb-4">Grades 7 through 12</p>
                <Button asChild className="w-full">
                  <a href="https://obk.myprps.com/admission-registration" target="_blank" rel="noopener noreferrer">
                    Admissions Information
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Thank you for your continued support as Prairie Rose Public Schools and the Calgary Islamic School Society work together to support strong programming for Calgary Islamic School students.
            </p>
            <Button variant="outline" asChild>
              <a href="https://drive.google.com/file/d/1-IDwYxkmln7_FIwmQBpVBAHXsnV1UW7Z/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                Read the Full Letter
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
