"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "header-solid" : "header-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 ${isScrolled ? "py-3" : "py-4"} transition-padding duration-300`}>
        <div className="flex items-center justify-between">
          <a className="z-10 cursor-pointer">
            {/* Conditional rendering of logos based on scroll position */}
            {isScrolled ? (
              <Image
                src="/logoblack.png"
                alt="WN Home Improvement Logo"
                width={120}
                height={60}
                className={`${isScrolled ? "h-12" : "h-14"} w-auto transition-all duration-300`}
              />
            ) : (
              <Image
                src="/logowhite.png"
                alt="WN Home Improvement Logo"
                width={120}
                height={60}
                className="h-14 w-auto transition-opacity duration-300"
              />
            )}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <NavLinks textColor={isScrolled ? "text-black" : "text-white"} />
          </nav>

          {/* Restyled Contact Button */}
          <Button
            className={`hidden md:inline-flex transition-all duration-300 wobble-on-hover cursor-pointer ${
              isScrolled ? "bg-primary text-white hover:bg-primary" : "bg-white text-primary hover:bg-white"
            }`}
          >
            Get Free Quote
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="text-black" size={24} />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide from right */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] w-[80%] max-w-sm bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top Header with Logo and Close Button */}
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <Image
              src="/logoblackpure.png"
              alt="WN Home Improvement Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Header */}
          <div className="p-4 border-b-2 border-primary">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-4">
            <MobileNavLink onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileServicesLink onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </nav>

          {/* Spacer */}
          <div className="flex-grow"></div>

          {/* Contact Button */}
          <div className="p-4 border-t border-gray-100">
            <Button className="bg-primary hover:bg-primary text-white w-full py-5 wobble-on-hover cursor-pointer">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

function NavLinks({ textColor, onClick }: { textColor: string; onClick?: () => void }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <>
      <a className={`${textColor} hover:text-primary font-medium nav-link-underline cursor-pointer`}>Home</a>

      {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <a
          className={`${textColor} hover:text-primary font-medium nav-link-underline cursor-pointer flex items-center gap-1`}
        >
          Services
          <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
        </a>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border transition-all duration-200 ${
            isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <div className="py-2">
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Roof Replacement
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Roof Repair
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Siding Installation
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Gutters & Downspouts
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Soffit & Fascia
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Deck Construction
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Painting
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer transition-colors">
              Skylights
            </a>
          </div>
        </div>
      </div>

      <a className={`${textColor} hover:text-primary font-medium nav-link-underline cursor-pointer`}>Gallery</a>
      <a className={`${textColor} hover:text-primary font-medium nav-link-underline cursor-pointer`}>Contact</a>
    </>
  )
}

function MobileNavLink({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) {
  return (
    <a className="text-lg py-3 border-b border-gray-100 text-gray-800 hover:text-primary cursor-pointer flex items-center transition-colors">
      {children}
    </a>
  )
}

function MobileServicesLink({ onClick }: { onClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100">
      <a
        className="text-lg py-3 text-gray-800 hover:text-primary cursor-pointer flex items-center justify-between transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </a>
      {isOpen && (
        <div className="pl-4 pb-2">
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Roof Replacement
          </a>
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Roof Repair
          </a>
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Siding Installation
          </a>
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Gutters & Downspouts
          </a>
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Soffit & Fascia
          </a>
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Deck Construction
          </a>
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Painting
          </a>
          <a className="block py-2 text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors">
            Skylights
          </a>
        </div>
      )}
    </div>
  )
}
