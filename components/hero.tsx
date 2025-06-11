"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const slides = [
  {
    image: "/1.avif",
    title: "Expert Roofing Solutions",
    description: "Professional roofing services with nearly a decade of experience in Lowell, MA",
  },
  {
    image: "/2.avif",
    title: "Complete Home Improvement",
    description: "From roofing to siding, gutters to decks - we transform your home's exterior",
  },
  {
    image: "/3.avif",
    title: "Quality You Can Trust",
    description: "High-quality materials and innovative techniques for lasting results",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title || "Professional roofing and home improvement services by WN Home Improvement"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].description}</p>

            {/* Buttons container */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* Get Free Estimate Button */}
              <Button className="flex-1 group relative overflow-hidden rounded-md bg-white text-primary hover:bg-primary hover:text-white transition-all duration-700 px-8 py-6 text-lg font-medium shadow-lg cursor-pointer">
                <span className="relative z-10">Get Free Estimate</span>
                <span className="absolute bottom-0 left-0 h-full w-0 bg-primary transition-all duration-700 group-hover:w-full"></span>
              </Button>
              {/* Call Button */}
              <Link
                href="tel:+19782101541"
                className="flex-1 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-md bg-white/20 border border-white/20 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative overflow-hidden group text-xs sm:text-base"
              >
                {/* Wobble effect on hover */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Phone size={14} className="group-hover:animate-[wiggle_0.5s_ease-in-out]" />
                <span className="relative group-hover:animate-[wiggle_0.5s_ease-in-out]">(978) 210-1541</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
