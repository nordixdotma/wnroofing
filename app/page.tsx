import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Process from "@/components/process"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import FloatingContact from "@/components/floating-contact"

export const metadata: Metadata = {
  title: "WN Home Improvement Inc | Expert Roofing Services in Lowell, MA",
  description:
    "Professional roofing contractor serving Lowell, MA and surrounding areas. Expert roof replacement, repair, siding, gutters, and exterior home improvement services with nearly a decade of experience.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
      <FloatingContact />
    </main>
  )
}
