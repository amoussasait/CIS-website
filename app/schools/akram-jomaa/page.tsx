import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Palette, MapPin, Phone, Mail, Globe } from "lucide-react"

export const metadata = {
  title: "Akram Jomaa Islamic School | CISS",
  description: "K-12 Islamic education in Calgary, Alberta - Founded 1992 - Over 1,000 students",
}

export default function AkramJomaaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-elementary-learning.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Akram Jomaa Islamic School</h1>
          <p className="text-xl text-white/90">K-12 Islamic Education | The Whole Child, The Whole Way</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-6">
            <p className="text-accent font-semibold">The Whole Child, The Whole Way</p>
          </div>
          <h2 className="text-4xl font-bold mb-6">Building Strong Foundations Since 1992</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Akram Jomaa Islamic School is a K-12 institution serving over 1,000 students with more than 70 dedicated
            staff members. We provide a welcoming and caring learning environment inspired by the rich ethos of Islam,
            aimed at cultivating spiritually mature, strong Canadian Muslims.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In partnership with Prairie Rose Public Schools (formalized June 2025), we continue as a crucial alternative
            education program within the public school system, significantly enhancing educational opportunities while
            honoring our religious beliefs, values, and diverse cultures.
          </p>
        </div>
      </section>

      {/* Three Priorities */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Three Core Priorities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Aligned with Prairie Rose Public Schools' goals to ignite minds, forge futures, and kindle hearts
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Literacy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Students demonstrate literacy competencies to participate fully and successfully in living, learning,
                  and work. We implement the science of reading, disciplinary literacy, and effective writing strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Palette className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Numeracy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Students demonstrate the ability, confidence, and willingness to engage with quantitative or spatial
                  information to make informed decisions in all aspects of daily living.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Wellness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Students demonstrate knowledge, skills, and experiences to improve health and well-being across five
                  domains: Spiritual, Intellectual, Physical, Social, and Emotional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">People of Ihsan: Spiritual Excellence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Akram Jomaa, we endeavor to be people of Ihsan (Spiritual Excellence) by embodying seven core values:
                Sincerity, Trustworthiness, Compassion, Courage, Patience, Gratitude, and Humility.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We believe that acquiring knowledge is a foundational attribute of the human being and that every student
                has the capacity to learn and grow. Our teachers follow in the footsteps of Prophet Muhammad (peace be
                upon him), cognizant of their professional role, religious responsibility, and spiritual significance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We serve a remarkably diverse community of learners from various African, Middle Eastern, and South Asian
                countries, unified by their high motivation to succeed in academic and religious pursuits.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/quran-learning-children.jpg"
                alt="Children learning Quran"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Quick Facts</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Grades Served</h3>
                <p className="text-muted-foreground">Kindergarten through Grade 12 (K-12)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Founded</h3>
                <p className="text-muted-foreground">Serving Calgary since 1992</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Student Enrollment</h3>
                <p className="text-muted-foreground">Over 1,000 K-12 students</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Staff</h3>
                <p className="text-muted-foreground">Over 70 dedicated full-time staff members</p>
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
                <h3 className="font-bold mb-2">Partnership</h3>
                <p className="text-muted-foreground">Prairie Rose Public Schools (since June 2025)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">School Hours</h3>
                <p className="text-muted-foreground">Opens 7:55 AM on school days</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Student Diversity</h3>
                <p className="text-muted-foreground">African, Middle Eastern, South Asian heritage</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Support Programs</h3>
                <p className="text-muted-foreground">ELL support, RTI model, special education</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Visit Us</h2>

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
                        <p className="text-sm text-muted-foreground">2612 37 Ave NE, Calgary, AB T1Y 5L2</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:+14032482773" className="hover:text-accent transition-colors">(403) 248-2773</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:aj.info@prrd8.ca" className="hover:text-accent transition-colors">aj.info@prrd8.ca</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Website</p>
                        <p className="text-sm text-muted-foreground">
                          <a href="https://www.akramjomaa.ca" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.akramjomaa.ca</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Schedule a Visit</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We welcome families to tour our campus and meet our dedicated educators. Contact us to schedule a
                    personalized visit.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg">
                      <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="https://aj.myprps.com/documents/5187bd29-e060-4334-8b21-dcb4d03600d5/EducationPlan_2025-2030.pdf" target="_blank" rel="noopener noreferrer">
                        Education Plan 2025-2030
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
