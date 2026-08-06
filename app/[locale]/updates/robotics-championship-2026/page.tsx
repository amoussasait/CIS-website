import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ArrowLeft, Trophy, Award } from "lucide-react"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

export default async function RoboticsChampionshipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('RoboticsChampionshipPage')
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />

      {/* Header */}
      <section className="bg-primary/5 border-b">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Button variant="ghost" asChild className="mb-6">
            <Link href={`/${locale}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back_home')}
            </Link>
          </Button>

          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">{t('category')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Images and Video Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/robotics-2026/image-1.jpeg"
                    alt="Robotics Competition - Team Photo 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/robotics-2026/image-2.jpeg"
                    alt="Robotics Competition - Team Photo 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/robotics-2026/image-3.jpeg"
                    alt="Robotics Competition - Team Photo 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <video
                    controls
                    className="w-full h-full"
                    src="/images/robotics-2026/video-1.mp4"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8 space-y-4">
              <p className="font-arabic text-lg">
                {t('alhamdulillah')}
              </p>

              <p>
                {t('content_intro')}
              </p>

              <Card className="mb-6 bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{t('achievement_title')}</h3>
                      <p className="text-muted-foreground">{t('achievement_description')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p>
                {t('content_para1')}
              </p>

              <p>
                {t('content_para2')}
              </p>
            </div>

            {/* Recognition Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('recognition_title')}</h2>
              <div className="space-y-4">
                <p>
                  {t('recognition_para1')}
                </p>

                <p>
                  {t('recognition_para2')}
                </p>
              </div>
            </div>

            {/* Strategic Vision */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('vision_title')}</h2>
              <div className="space-y-4">
                <p>
                  {t('vision_para1')}
                </p>

                <p>
                  {t('vision_para2')}
                </p>

                <p>
                  {t('vision_para3')}
                </p>

                <p>
                  {t('vision_para4')}
                </p>
              </div>
            </div>

            {/* Commitment to Excellence */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{t('commitment_title')}</h2>
              <div className="space-y-4">
                <p>
                  {t('commitment_para1')}
                </p>

                <p className="font-semibold text-lg">
                  {t('commitment_vision')}
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="mt-12 p-6 bg-accent/5 rounded-lg border border-accent/20">
              <p className="mb-4">
                {t('closing_para1')}
              </p>
              <p className="font-arabic mb-2">
                {t('closing_dua')}
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  )
}
