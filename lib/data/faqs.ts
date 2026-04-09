import type { FAQ } from "@/lib/types"

export const faqs: FAQ[] = [
  {
    question: "Why have tuition fees increased?",
    intro: "Tuition increases are driven primarily by:",
    bullets: [
      "Staffing costs (teachers, educational assistants, and support staff)",
      "Program delivery (Arabic, Islamic studies, Tahfeeth, and other specialized programs)",
      "Facility and operational costs (rent, maintenance, utilities)",
      "General cost increases (supplies, transportation, and insurance)",
    ],
    answer: "Staffing represents the largest portion of overall expenses.",
    category: "tuition",
  },
  {
    question: "Why was this not communicated earlier?",
    intro: "We acknowledge that communication should have occurred earlier and more clearly. Going forward, we will:",
    bullets: [
      "Provide advance notice of any changes",
      "Share detailed explanations before implementation",
      "Improve ongoing communication with parents",
    ],
    category: "communication",
  },
  {
    question: "What improvements will families see as a result of the increase?",
    intro: "Our focus areas include:",
    bullets: [
      "Greater staffing stability and reduced classroom disruptions",
      "Strengthened academic delivery and oversight",
      "Improvements to student experience (including supervision and programming)",
      "Targeted facility and operational improvements",
    ],
    answer: "We recognize that some of these improvements are not yet visible and are working to address this.",
    category: "tuition",
  },
  {
    question: "Why do fees appear similar to private schools?",
    answer:
      "While the school receives some public funding, additional programs—particularly Arabic, Islamic studies, and specialized programming—require resources that are not fully covered by that funding.",
    category: "tuition",
  },
  {
    question: "Why are some programs (e.g., Tahfeeth) priced differently?",
    intro: "Program costs vary based on:",
    bullets: [
      "Staffing intensity",
      "Program structure and hours",
      "Specialized instruction requirements",
    ],
    answer: "We will provide clearer explanations of program-specific pricing.",
    category: "programs",
  },
  {
    question: "Are there supports for families facing financial difficulty?",
    intro: "We understand the financial impact on families and are currently reviewing:",
    bullets: [
      "Financial assistance options",
      "Payment flexibility",
      "Considerations for families with multiple children",
    ],
    answer: "Further updates will be shared shortly.",
    category: "financial-support",
  },
  {
    question: "Why are field trips and activities costly?",
    intro: "Costs may include transportation, facility access, and third-party providers.",
    answer: "We are reviewing these costs and exploring ways to reduce the financial impact where possible.",
    category: "programs",
  },
  {
    question: "How will communication improve?",
    intro: "We are implementing:",
    bullets: [
      "Regular parent updates",
      "Clear communication timelines for major decisions",
      "A more structured process for addressing parent questions",
    ],
    category: "communication",
  },
  {
    question: "How are decisions made by the school/board?",
    intro: "Decisions are made based on:",
    bullets: [
      "Operational requirements",
      "Financial sustainability",
      "Program delivery needs",
    ],
    answer: "We are working to provide greater transparency into these processes.",
    category: "governance",
  },
  {
    question: "Will fees continue to increase in future years?",
    intro: "Our goal is to improve stability and predictability in tuition planning.",
    answer: "We will provide clearer forward-looking guidance to help families plan ahead.",
    category: "tuition",
  },
]
