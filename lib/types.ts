export interface Director {
  name: string
  position: string
  bio: string
  image?: string
}

export interface Announcement {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: "announcement" | "board-update" | "campus-news"
  author?: string
}

export interface FAQ {
  question: string
  answer?: string
  intro?: string
  bullets?: string[]
  category: "admissions" | "academics" | "islamic-studies" | "general" | "tuition" | "communication" | "programs" | "financial-support" | "governance"
}

export interface ContactRoute {
  title: string
  description: string
  email: string
  responseTime: string
}

export interface School {
  name: string
  slug: string
  level: string
  description: string
}
