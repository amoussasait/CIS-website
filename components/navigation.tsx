"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [schoolsOpen, setSchoolsOpen] = useState(false)

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:font-semibold focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center h-20 relative">
            <Link href="/" className="absolute left-0 text-primary hover:text-accent transition-colors" aria-label="CISS Home">
              <Logo />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button
                className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1"
                aria-label="About menu"
                aria-haspopup="true"
              >
                About
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <Link
                    href="/about"
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">About CISS</div>
                    <div className="text-xs text-muted-foreground">Mission, Vision & Values</div>
                  </Link>
                  <Link
                    href="/board"
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">Board of Directors</div>
                    <div className="text-xs text-muted-foreground">Leadership & Governance</div>
                  </Link>
                  <Link
                    href="/governance"
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">Governance & Roles</div>
                    <div className="text-xs text-muted-foreground">Organizational Structure</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1"
                aria-label="Our Schools menu"
                aria-haspopup="true"
              >
                Our Schools
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="p-2">
                  <Link
                    href="/schools/akram-jomaa"
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">Akram Jomaa Islamic School</div>
                    <div className="text-xs text-muted-foreground">Elementary</div>
                  </Link>
                  <Link
                    href="/schools/omar-ibn-al-khattab"
                    className="block px-4 py-3 hover:bg-accent/10 rounded-md transition-colors"
                  >
                    <div className="font-medium">Omar Ibn Al-Khattab School</div>
                    <div className="text-xs text-muted-foreground">Secondary</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/parents" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
              For Parents
            </Link>
            <Link href="/news" className="text-sm font-medium hover:text-accent transition-colors">
              News
            </Link>
            <Button asChild size="sm">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-0 p-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full px-4 py-3 hover:bg-accent/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  About
                  <ChevronDown className={cn("w-4 h-4 transition-transform", aboutOpen && "rotate-180")} />
                </button>
                {aboutOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/about"
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      About CISS
                    </Link>
                    <Link
                      href="/board"
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      Board of Directors
                    </Link>
                    <Link
                      href="/governance"
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      Governance & Roles
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setSchoolsOpen(!schoolsOpen)}
                  className="w-full px-4 py-3 hover:bg-accent/10 rounded-lg transition-colors flex items-center justify-between"
                >
                  Our Schools
                  <ChevronDown className={cn("w-4 h-4 transition-transform", schoolsOpen && "rotate-180")} />
                </button>
                {schoolsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <Link
                      href="/schools/akram-jomaa"
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      Akram Jomaa Islamic School
                    </Link>
                    <Link
                      href="/schools/omar-ibn-al-khattab"
                      className="block px-4 py-2 hover:bg-accent/10 rounded-lg transition-colors text-sm"
                    >
                      Omar Ibn Al-Khattab School
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/parents" className="px-4 py-3 bg-accent/10 font-medium rounded-lg transition-colors">
                For Parents
              </Link>
              <Link href="/news" className="px-4 py-3 hover:bg-accent/10 rounded-lg transition-colors">
                News
              </Link>
              <div className="px-4 pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  )
}
