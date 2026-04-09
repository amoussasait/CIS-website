"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Building2, Users, Leaf, BookOpen, Check } from "lucide-react"

export default function FutureCampusPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Future campus interest form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/future-campus-concept.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">Building Tomorrow, Together</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            Join us in creating a state-of-the-art unified campus that will serve generations of students
          </p>
        </div>
      </section>

      {/* Vision Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Vision for the Future</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            The CISS Future Campus will unite our community under one roof, providing world-class facilities,
            cutting-edge technology, and expanded opportunities for students from kindergarten through grade 12.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Campus Features</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Building2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Modern Facilities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>State-of-the-art classrooms with smart technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Advanced science and computer laboratories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Comprehensive library and media center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Multi-purpose auditorium for performances and events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Student Life Spaces</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Athletic fields and indoor gymnasium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Cafeteria and student common areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Music and arts studios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Outdoor learning and recreational spaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Sustainable Design</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Solar panels and energy-efficient systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Rainwater harvesting and conservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Natural ventilation and lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Native landscaping and green spaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">Educational Innovation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Flexible learning spaces for collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Maker spaces and innovation labs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Distance learning capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Accessibility features throughout</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved / Interest Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl text-muted-foreground">
              Express your interest in supporting or learning more about the Future Campus project
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(345) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      Interest Area *
                    </label>
                    <select
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      <option value="">Select an option</option>
                      <option value="donate">Making a Donation</option>
                      <option value="fundraise">Fundraising Support</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="learn-more">Learning More</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your interest in the Future Campus project..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {submitted ? "Thank you for your interest!" : "Submit Interest Form"}
                </Button>

                {submitted && <p className="text-center text-sm text-accent">We'll be in touch soon!</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Project Timeline</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-2">Planning & Design</h3>
                <p className="text-muted-foreground">Architectural planning and community consultation</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-2">Fundraising Campaign</h3>
                <p className="text-muted-foreground">Securing funding through donations and partnerships</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-2">Construction Phase</h3>
                <p className="text-muted-foreground">Building our dream campus with quality and care</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Grand Opening</h3>
                <p className="text-muted-foreground">Welcoming our students to their new home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
