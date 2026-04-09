import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calendar,
  Bell,
  FileText,
  Mail,
  MessageCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import { faqs } from "@/lib/data/faqs"
import { contactRoutes } from "@/lib/data/contact-routes"
import { announcements } from "@/lib/data/announcements"

export const metadata = {
  title: "Parents & Communication Hub | CISS",
  description:
    "CISS Parent Communication Hub - Stay informed, connected, and engaged with announcements, newsletters, resources, and direct contact channels",
}

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/parents-communication-hub.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">Parents & Communication Hub</h1>
          <p className="text-xl text-white/90">Clear, consistent communication is a priority</p>
        </div>
      </section>

      {/* Priority Message */}
      <section className="py-12 px-6 bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <AlertCircle className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Communication is Our Priority</h2>
          <p className="text-lg text-muted-foreground">
            We are committed to keeping parents informed, engaged, and connected with everything happening at CISS
            schools. This hub is your central resource for announcements, contact channels, and important information.
          </p>
        </div>
      </section>

      {/* Contact Routing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How Can We Help?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're here to answer your questions and support your family
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {contactRoutes.map((route, index) => (
              <Card key={index} className="border-2 border-primary/10 hover:border-accent/30 transition-colors">
                <CardContent className="p-8">
                  <MessageCircle className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{route.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{route.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`mailto:${route.email}`} className="text-primary hover:underline font-medium">
                        {route.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{route.responseTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Feed */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold">Recent Announcements</h2>
          </div>

          <div className="space-y-4 mb-8">
            {announcements.map((announcement) => {
              const getAnnouncementLink = (id: string) => {
                if (id === "budget-transparency-2026") return "/updates/budget-transparency"
                if (id === "registration-2026") return "/registration"
                if (id === "fundraiser-dinner") return "/news"
                return "/news"
              }

              return (
                <Link key={announcement.id} href={getAnnouncementLink(announcement.id)} className="block">
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold px-2 py-1 bg-accent/10 text-accent rounded">
                              {announcement.category}
                            </span>
                            <span className="text-sm text-muted-foreground">{announcement.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{announcement.excerpt}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/news">View All News & Updates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Resources */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Resources & Quick Access</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">School Calendar</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  View upcoming events, holidays, and important dates for both campuses
                </p>
                <Button variant="outline">View Calendar</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">CISS Bylaws</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Access the official bylaws governing the Calgary Islamic School Society
                </p>
                <Button variant="outline">View Bylaws</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12">Tuition, Programs, and School Updates - Find answers to common questions</p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <div className="space-y-3">
                    {faq.intro && <p>{faq.intro}</p>}
                    {faq.bullets && (
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        {faq.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {faq.answer && <p>{faq.answer}</p>}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Need Help Sticky Card Concept */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-3">Need Help Now?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Contact us for any questions, concerns, or to book a meeting with CISS
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="mailto:info@cissociety.ca">Email info@cissociety.ca</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
