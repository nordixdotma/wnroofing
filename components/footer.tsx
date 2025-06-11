import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <a className="cursor-pointer">
              <Image
                src="/logowhite.png"
                alt="WN Home Improvement Logo"
                width={120}
                height={60}
                className="h-10 md:h-12 w-auto mb-3 md:mb-4 brightness-0 invert"
              />
            </a>
            <p className="mt-3 md:mt-4 text-gray-100 text-sm md:text-base">
              High-quality home improvement company serving Lowell, MA and surrounding areas. Expert roofing, siding,
              gutters, and exterior remodeling services.
            </p>
            <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-6">
              <SocialLink href="https://www.instagram.com/roofing_wn" icon={<Instagram size={16} />} />
              <SocialLink href="#" icon={<Facebook size={16} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Our Services</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <FooterLink>Roof Replacement</FooterLink>
              <FooterLink>Roof Repair</FooterLink>
              <FooterLink>Siding Installation</FooterLink>
              <FooterLink>Gutters & Downspouts</FooterLink>
              <FooterLink>Soffit & Fascia</FooterLink>
              <FooterLink>Deck Construction</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5 text-gray-100 shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">Lowell, MA and surrounding areas</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 text-gray-100" />
                <span className="text-sm md:text-base">(978) 210-1541</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5 text-gray-100" />
                <span className="text-sm md:text-base">wnhomeimprovementinc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separated copyright section */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row md:justify-between text-xs md:text-sm text-gray-100">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} WN Home Improvement Inc. All rights reserved.
          </p>
          <p className="text-center md:text-left mt-2 md:mt-0">
            Licensed & Insured • Serving Lowell, MA & Surrounding Areas
          </p>
        </div>
      </div>
    </footer>
  )
}

type SocialLinkProps = {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="bg-white/10 hover:bg-white/20 h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

type FooterLinkProps = {
  children: React.ReactNode
}

function FooterLink({ children }: FooterLinkProps) {
  return (
    <li>
      <a className="hover:text-gray-300 transition-colors footer-link text-sm md:text-base cursor-pointer">
        {children}
      </a>
    </li>
  )
}
