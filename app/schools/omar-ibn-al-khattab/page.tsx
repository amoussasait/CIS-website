import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, BookOpen, Globe, Award, MapPin, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Omar Ibn Al-Khattab School | CISS",
  description: "Secondary education (7-12) in Calgary, Alberta",
}

export default function OmarIbnAlKhattabPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-secondary-students.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Omar Ibn Al-Khattab School</h1>
          <p className="text-xl text-white/90">Secondary Education | Grades 7-12</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Preparing for the Future</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Omar Ibn Al-Khattab School provides rigorous academic preparation, leadership development, and character
            formation for students in grades 7-12. We prepare young adults for success in higher education and
            meaningful careers while nurturing their faith and values.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Academic Programs</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Core Curriculum</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advanced English, Mathematics, Science, and Social Studies
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">World Languages</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Foreign language instruction and cultural studies
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Honors & AP</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  College-prep and advanced placement opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">College Prep</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SAT/ACT prep and university application support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Student Life & Activities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Athletics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Competitive sports teams including basketball, volleyball, track and field, and more
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Clubs & Organizations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Student government, honor society, debate team, MSA, and special interest clubs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Service Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Community service projects and outreach programs that develop compassion and leadership
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Islamic STEM Education Showcase */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/islamic-stem-education.jpg"
                alt="Students in STEM education"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Excellence in Faith and Academics</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Omar Ibn Al-Khattab School prepares students for university and career success while nurturing strong
                Islamic identity. Our rigorous curriculum combines advanced academics with Islamic studies, Arabic
                language, and character development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Students engage in critical thinking, scientific inquiry, and creative problem-solving while maintaining
                a strong connection to Islamic values and principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Facts</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Grades Served</h3>
                <p className="text-muted-foreground">Grades 7 through 12</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Graduation Rate</h3>
                <p className="text-muted-foreground">High college acceptance rate</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Student-Teacher Ratio</h3>
                <p className="text-muted-foreground">Small classes for individual attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Curriculum</h3>
                <p className="text-muted-foreground">Alberta Education curriculum with Islamic studies</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">School Hours</h3>
                <p className="text-muted-foreground">Opens 7:45 AM on school days</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Campus Features</h3>
                <p className="text-muted-foreground">Science labs, library, sports facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Visit Our Campus</h2>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">225 28 St SE, Calgary, AB T2A 5K4</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:+15873538900" className="hover:text-accent transition-colors">(587) 353-8900</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:info@obkschool.ca" className="hover:text-accent transition-colors">info@obkschool.ca</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Schedule a Campus Tour</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Experience our vibrant learning community firsthand. Schedule a tour to meet our faculty, see our
                    facilities, and learn about our programs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://obk.myprps.com/documents/d325ee5e-eea0-4159-ab91-12ec2e9eda16/2025-2026-Calgary-Islamic-School-OBK-Ed-Plan-pdf-1.pdf" target="_blank" rel="noopener noreferrer">
                        Education Plan 2025-2026
                      </a>
                    </Button>
                  </div>
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
