import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Heart, ArrowRight, Ticket, Users } from "lucide-react"

export const metadata = {
  title: "News & Updates | CISS",
  description: "Latest news, events, and announcements from CISS",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/islamic-school-news.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">News & Updates</h1>
          <p className="text-xl text-white/90">Stay informed about CISS happenings</p>
        </div>
      </section>

      {/* News Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Town Hall March 2026 Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Town Hall
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Parent Town Hall - March 2026</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive update on CISS achievements, Prairie Rose Public Schools partnership, 2026-2027 budget breakdown, fee structure, and planned facility improvements.
                </p>
                <Button asChild className="w-full">
                  <Link href="/updates/town-hall-march-2026" className="flex items-center justify-center gap-2">
                    View Full Update
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* School Fee Adjustment Letter Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Important Notice
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">School Fee Adjustment Letter</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Official letter from the CISS Board of Directors explaining the school fee adjustment for the 2026-2027 academic year, including the Board's authority and justification.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="/documents/School-Fee-Adjustment-Letter-2026-2027.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Read Full Letter (PDF)
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Budget Transparency Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                    Board Update
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Budget Clarity & Governance Transparency</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Message from the CISS Board of Directors regarding the 2026-2027 budget, fee adjustments, and our commitment to transparency.
                </p>
                <Button asChild className="w-full">
                  <Link href="/updates/budget-transparency" className="flex items-center justify-center gap-2">
                    Read Full Update
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Registration Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Registration
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">2026-2027 Registration Now Open</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  School registration for the 2026-2027 academic year is now open. View fee structures, important dates, and application requirements.
                </p>
                <Button asChild className="w-full">
                  <Link href="/registration" className="flex items-center justify-center gap-2">
                    View Registration Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fundraiser Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                    Fundraiser
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Historic Fundraiser Dinner</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are just hours away from our HISTORIC Dinner! We are not just raising money; we are building a legacy of health (Halal Kitchen) and faith (Modern Washrooms) for every student at Akram Jomaa.
                </p>
                <p className="text-primary font-semibold mb-4">
                  Seats are filling up fast! Please book your tickets today to help us finalize catering and logistics.
                </p>
                <p className="text-sm text-muted-foreground italic mb-6">
                  May Allah reward you for being the backbone of this school.
                </p>
                <Button asChild className="w-full">
                  <a 
                    href="https://buytickets.at/calgaryislamicschoolakramjomaacampus/2114371" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-4 h-4" />
                    Get Your Tickets
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
