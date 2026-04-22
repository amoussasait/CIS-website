import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"
import { GraduationCap, Users, Heart, TrendingUp, Bell, BookOpen, Globe2, Award, Calendar } from "lucide-react"
import { announcements } from "@/lib/data/announcements"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/hero-education-bg.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Serving Calgary's Muslim community through excellent Islamic education
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed drop-shadow">
            Calgary Islamic School Society (CISS) oversees two campuses and is planning future growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg shadow-xl bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform font-bold">
              <Link href="/parents">For Parents</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg bg-white/20 backdrop-blur-sm border-2 border-white/70 text-white hover:bg-white hover:text-foreground shadow-lg hover:scale-105 transition-transform"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section id="main-content" className="py-16 px-6 bg-gradient-to-b from-primary/5 to-background border-b border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg font-semibold mb-1">Years of Service</div>
              <div className="text-sm text-muted-foreground">Serving Calgary families</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">500+</div>
              <div className="text-lg font-semibold mb-1">Students</div>
              <div className="text-sm text-muted-foreground">Across both campuses</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">2</div>
              <div className="text-lg font-semibold mb-1">Campuses</div>
              <div className="text-sm text-muted-foreground">Elementary & Secondary</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">K-12</div>
              <div className="text-lg font-semibold mb-1">Full Curriculum</div>
              <div className="text-sm text-muted-foreground">Complete education pathway</div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section - PROMINENT */}
      <section className="py-20 px-6 bg-accent/5 border-y-2 border-accent/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Bell className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">PRIORITY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Clear, consistent communication with parents is a priority
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Stay informed, connected, and engaged with everything happening at CISS
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-8 max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <Bell className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Announcements & Updates</h3>
                <div className="space-y-4 mb-6">
                  {announcements.slice(0, 3).map((announcement, index) => (
                    <Link key={announcement.id} href="/news" className="block">
                      <div className={`p-4 rounded-lg transition-colors cursor-pointer ${
                        index === 0
                          ? "bg-accent/10 border-2 border-accent/30 hover:border-accent/50"
                          : "bg-muted/50 hover:bg-muted"
                      }`}>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <p className={`text-sm font-bold mb-1 ${index === 0 ? "text-accent" : ""}`}>
                              {announcement.title}
                            </p>
                            <p className="text-xs text-muted-foreground mb-2">
                              {announcement.category === "achievement" ? "Achievement" : announcement.category === "board-update" ? "Board Update" : "Announcement"}
                            </p>
                            <p className="text-xs text-foreground/80">
                              {announcement.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/news">View All Announcements</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Ask CISS</h4>
                <p className="text-sm text-muted-foreground mb-4">Quick contact for questions and concerns</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Parent Portal</h4>
                <p className="text-sm text-muted-foreground mb-4">Access resources, forms, and calendars</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/parents">Visit Portal</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">FAQ</h4>
                <p className="text-sm text-muted-foreground mb-4">Find answers to common questions</p>
                <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                  <Link href="/parents#faq">View FAQ</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose CISS</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excellence in Islamic education for over two decades
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Two Campuses Serving Calgary</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive K-12 education across two well-established schools
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Academic Excellence & Islamic Values</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rigorous curriculum integrated with Islamic principles and character development
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Strong Partnership with Parents</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Open communication and collaboration between school, home, and community
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Planning for Future Growth</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strategic expansion including unified campus and online education
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Schools Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Schools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Two established campuses providing quality Islamic education in Calgary
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/akram-jomaa-school.jpg)",
                }}
              />
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-3">Akram Jomaa Islamic School</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kindergarten through Grade 12 education with a nurturing environment that builds strong academic and Islamic foundations
                </p>
                <Button asChild variant="default">
                  <Link href="/schools/akram-jomaa">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/obk-school.jpg)",
                }}
              />
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-3">Omar Ibn Al-Khattab School</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kindergarten through Grade 9 education focused on building strong academic foundations and Islamic character
                </p>
                <Button asChild variant="default">
                  <Link href="/schools/omar-ibn-al-khattab">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Beliefs, Values */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Calgary Islamic School strives to develop an enriched learning community that promotes academic
                  achievement, leadership, and Islamic values.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build and maintain a learning community that produces leaders through faith, knowledge, and
                  ingenuity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Beliefs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that education is a shared responsibility between the school, parents, and the community,
                  and that Islamic principles guide moral character, personal development, and lifelong learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Values</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span>Sincerity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span>Courage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span>Trustworthiness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span>Patience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span>Compassion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span>Gratitude</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span>Humility</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Temporarily hidden - Future Campus CTA */}
      {/* <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-primary/5 rounded-2xl p-12 border-2 border-primary/10">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Future Campus Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              CISS is planning a unified future campus. Stay informed about our expansion plans and how you can be part
              of this exciting development.
            </p>
            <Button size="lg" asChild>
              <Link href="/future-campus">Learn About Our Vision</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
