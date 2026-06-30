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
import { useTranslations } from "next-intl"

export default function FutureCampusPage() {
  const t = useTranslations('FutureCampusPage')

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">{t('text1')}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto text-pretty">
            {t('text2')}
          </p>
        </div>
      </section>

      {/* Vision Overview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('text3')}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            {t('text4')}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text5')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Building2 className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text6')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text7')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text8')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text9')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text10')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text11')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text12')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text13')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text14')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text15')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Leaf className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text16')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text17')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text18')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text19')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text20')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3">{t('text21')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text22')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text23')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text24')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t('text25')}</span>
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
            <h2 className="text-4xl font-bold mb-4">{t('text26')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('text27')}
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t('text28')}
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('text29')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t('text30')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('text31')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {t('text32')}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('text33')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      {t('text34')}
                    </label>
                    <select
                      id="interest"
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      <option value="">{t('text35')}</option>
                      <option value="donate">{t('text36')}</option>
                      <option value="fundraise">{t('text37')}</option>
                      <option value="volunteer">{t('text38')}</option>
                      <option value="learn-more">{t('text39')}</option>
                      <option value="other">{t('text40')}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t('text41')}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('text42')}
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {submitted ? t('text44') : t('text43')}
                </Button>

                {submitted && <p className="text-center text-sm text-accent">{t('text45')}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('text46')}</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div className="w-0.5 h-full bg-border mt-2" />
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold mb-2">{t('text47')}</h3>
                <p className="text-muted-foreground">{t('text48')}</p>
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
                <h3 className="text-xl font-bold mb-2">{t('text49')}</h3>
                <p className="text-muted-foreground">{t('text50')}</p>
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
                <h3 className="text-xl font-bold mb-2">{t('text51')}</h3>
                <p className="text-muted-foreground">{t('text52')}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('text53')}</h3>
                <p className="text-muted-foreground">{t('text54')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
