import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Download, Users, Building2, DollarSign, TrendingUp, GraduationCap } from "lucide-react"

export default function TownHallMarch2026() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Parent Town Hall</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              CISS Parent Town Hall - March 2026
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              March 30, 2026
            </p>
            <p className="text-lg mb-8">
              A comprehensive update on CISS achievements, partnership with Prairie Rose Public Schools,
              budget breakdown, and facility improvements.
            </p>
            <Button size="lg" asChild>
              <a href="/documents/CISS-Town-Hall-March-2026.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Full Presentation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Board Members</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>2026 CISS Board</CardTitle>
                <CardDescription>
                  9-member board with community and institutional representation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-semibold">Abdulrahman Abbas</p>
                      <p className="text-sm text-muted-foreground">MCC Representative</p>
                    </div>
                    <Badge>Chairman</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-semibold">Dr. Mohammed Abdel-Hafez</p>
                      <p className="text-sm text-muted-foreground">AJ Parents Representative</p>
                    </div>
                    <Badge>Vice Chair</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-semibold">Marwa Ajram</p>
                      <p className="text-sm text-muted-foreground">OBK Parents Representative</p>
                    </div>
                    <Badge>Secretary & Treasurer</Badge>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Madina Kalaf</p>
                    <p className="text-sm text-muted-foreground">OBK Parents Representative</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Ali Moussa</p>
                    <p className="text-sm text-muted-foreground">AJ Parents Representative</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Dr. Hoda Kilani</p>
                    <p className="text-sm text-muted-foreground">MCC Representative</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Mohamed Zohiri</p>
                    <p className="text-sm text-muted-foreground">MCC Representative</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Omar El-Hajjar</p>
                    <p className="text-sm text-muted-foreground">MCC Representative and AJ parent</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="font-semibold">Basir Saleh</p>
                    <p className="text-sm text-muted-foreground">Independent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Partnership with Prairie Rose Public Schools</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Partnership (2025-2026)</CardTitle>
                <CardDescription>
                  CISS has formally joined Prairie Rose Public Schools (PRPS)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">About PRPS</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Innovative, growth-focused school board</li>
                    <li>Committed to academic excellence</li>
                    <li>Focus on technology integration & extracurricular enrichment</li>
                    <li>Supports long-term vision for academic strength and expansion</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg mb-2">What This Means for Us</h3>
                  <div className="grid gap-3">
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">High-Quality Alberta Curriculum</p>
                      <p className="text-sm text-muted-foreground">Access to curriculum supported by a public board</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">Enhanced Opportunities</p>
                      <p className="text-sm text-muted-foreground">More educational and extracurricular opportunities</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">Long-term Sustainability</p>
                      <p className="text-sm text-muted-foreground">Enhanced growth for Calgary Islamic School</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">2026-2027 Budget & Fees</h2>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Reality</CardTitle>
                  <CardDescription>Understanding our costs and funding</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                      <span className="font-medium">Total Educational and Operating Cost</span>
                      <span className="text-xl font-bold">$4.7M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <span className="font-medium">Alberta Education O&M Funding</span>
                      <span className="text-xl font-bold text-green-700 dark:text-green-400">$1.0M</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                      <span className="font-medium">Remaining to be Funded</span>
                      <span className="text-xl font-bold text-amber-700 dark:text-amber-400">$3.7M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Budget Breakdown</CardTitle>
                  <CardDescription>Where your fees go (Total: $4,703,292)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary">
                      <div>
                        <p className="font-medium">Non-Certificated Teachers (19.3)</p>
                        <p className="text-sm text-muted-foreground">43% of total budget</p>
                      </div>
                      <span className="font-bold">$1,993,609</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/70">
                      <div>
                        <p className="font-medium">Building Lease & Upgrades</p>
                        <p className="text-sm text-muted-foreground">19% of total budget</p>
                      </div>
                      <span className="font-bold">$900,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/50">
                      <div>
                        <p className="font-medium">Insurance, Supply, Utilities & Maintenance</p>
                        <p className="text-sm text-muted-foreground">16% of total budget</p>
                      </div>
                      <span className="font-bold">$733,595</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/40">
                      <div>
                        <p className="font-medium">Janitorial & Support Staffing</p>
                        <p className="text-sm text-muted-foreground">13% of total budget</p>
                      </div>
                      <span className="font-bold">$621,852</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/30">
                      <div>
                        <p className="font-medium">AP Education Assistance</p>
                        <p className="text-sm text-muted-foreground">5% of total budget</p>
                      </div>
                      <span className="font-bold">$250,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border-l-4 border-primary/20">
                      <div>
                        <p className="font-medium">General & Administration</p>
                        <p className="text-sm text-muted-foreground">4% of total budget</p>
                      </div>
                      <span className="font-bold">$204,236</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * Majority of costs are staffing (approximately $3 million)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2026-2027 Fee Structure</CardTitle>
                  <CardDescription>Annual tuition fees per student</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Grades / Program</th>
                          <th className="text-right py-3 px-4">First Child</th>
                          <th className="text-right py-3 px-4">Additional Child(ren)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">KG – Grade 9</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,450</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,250</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Grades 10 – 12</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,690</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,490</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Tahfeez Program</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,690</td>
                          <td className="text-right py-3 px-4 font-semibold">$2,490</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>Why Fees Are Changing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Uphold & maintain educational standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Ensure long-term sustainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Structural change in cost responsibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Full funding of Islamic program by CISS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Need to eliminate operating deficit</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Improvements Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Facility Improvements</h2>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Improvements</CardTitle>
                  <CardDescription>Recent campus upgrades at OBK & AJ</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Full HVAC rejuvenation at AJ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>New roof and stucco for the tower at OBK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Repair of elevator at OBK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Completed all drawings for new washrooms at AJ</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Planned Improvements</CardTitle>
                  <CardDescription>
                    $4.7 million in upgrades (phased over multiple years)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Badge>Priority 1</Badge>
                        Akram Jomaa Campus
                      </h3>
                      <div className="space-y-2 ml-6">
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>Roofing renovation</span>
                          <span className="font-semibold">$1,650,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>Full Kitchen / Canteen</span>
                          <span className="font-semibold">$500,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>Washrooms renovation</span>
                          <span className="font-semibold">$250,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>Painting / Interior & Exterior Upgrades</span>
                          <span className="font-semibold">$150,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-primary pl-3">
                          <span>Elevators</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Badge>Priority 1</Badge>
                        OBK Campus
                      </h3>
                      <div className="space-y-2 ml-6">
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>Roofing renovation</span>
                          <span className="font-semibold">$680,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>HVAC renovation</span>
                          <span className="font-semibold">$400,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>Playground renovation</span>
                          <span className="font-semibold">$225,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>Painting / Interior & Exterior Upgrades</span>
                          <span className="font-semibold">$150,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-accent pl-3">
                          <span>Elevators</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Badge variant="outline">Priority 2 & 3</Badge>
                        Additional Projects
                      </h3>
                      <div className="space-y-2 ml-6">
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>GYM recoating (Both campuses)</span>
                          <span className="font-semibold">$75,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>Playground renovation (AJ)</span>
                          <span className="font-semibold">$225,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>Reflective screen for windows (AJ)</span>
                          <span className="font-semibold">$50,000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 border-l-2 border-muted-foreground pl-3">
                          <span>2nd floor extension (AJ)</span>
                          <span className="font-semibold">$275,000</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm">
                        <strong>Note:</strong> These upgrades are phased over multiple years and are not funded solely
                        through annual fees. Community fundraising efforts will support these improvements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Protecting Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Our Commitment</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>What We Are Protecting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>The sustainability of the program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>Islamic identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>Quran & Arabic education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>Future of our children</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>Strengthen education standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>Enhance student engagement and experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>Maintain Islamic identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">•</span>
                      <span>Full review of Islamic / Quranic curriculum</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="pt-6">
                <blockquote className="text-center text-lg italic">
                  "Innovation + Infrastructure = A better experience for our students"
                </blockquote>
                <p className="text-center mt-4 font-medium">
                  Together, we are building a stronger future for our school and our children.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Full Presentation</h2>
          <p className="text-lg mb-8 opacity-90">
            Download the complete Town Hall presentation for detailed information
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/documents/CISS-Town-Hall-March-2026.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
