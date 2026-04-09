"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-center flex-1">
            Important: School registration for 2026-2027 is now open.{" "}
            <a href="/registration" className="underline hover:no-underline">
              Learn more
            </a>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-accent-foreground/10 rounded transition-colors flex-shrink-0"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
