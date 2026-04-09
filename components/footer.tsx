import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="mb-4 text-primary-foreground">
              <Logo />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Calgary Islamic School Society oversees two campuses and is planning future growth to serve Calgary's
              Muslim community through excellent Islamic education.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About & Schools */}
          <div>
            <h3 className="font-bold text-lg mb-4">About & Schools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About CISS
                </Link>
              </li>
              <li>
                <Link href="/board" className="opacity-90 hover:opacity-100 transition-opacity">
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link href="/governance" className="opacity-90 hover:opacity-100 transition-opacity">
                  Governance & Roles
                </Link>
              </li>
              <li>
                <Link href="/schools/akram-jomaa" className="opacity-90 hover:opacity-100 transition-opacity">
                  Akram Jomaa School (K-6)
                </Link>
              </li>
              <li>
                <Link href="/schools/omar-ibn-al-khattab" className="opacity-90 hover:opacity-100 transition-opacity">
                  Omar Ibn Al-Khattab (7-12)
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/parents" className="opacity-90 hover:opacity-100 transition-opacity">
                  For Parents
                </Link>
              </li>
              <li>
                <Link href="/news" className="opacity-90 hover:opacity-100 transition-opacity">
                  News
                </Link>
              </li>
              <li>
                <Link href="/registration" className="opacity-90 hover:opacity-100 transition-opacity">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@cissociety.ca" className="opacity-90 hover:opacity-100 transition-opacity hover:underline">
                  info@cissociety.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Calgary, AB</span>
              </li>
            </ul>

            <h4 className="font-bold text-sm mt-6 mb-3">School Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <div className="font-semibold">Akram Jomaa</div>
                <div>Mon-Fri: Until 4:15 PM</div>
              </li>
              <li>
                <div className="font-semibold">Omar Ibn Al-Khattab</div>
                <div>Mon-Fri: Until 3:30 PM</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Calgary Islamic School Society (CISS). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
