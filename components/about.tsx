import { Button } from "@/components/ui/button"
import Image from "next/image"
import SectionTitle from "./section-title"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="About us"
          subtitle="Professional exterior remodeling services for residential properties in Lowell, MA and surrounding areas."
        />

        <div className="mt-12 md:mt-16">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Column - Image with Overlay */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/aboutimage.jpg"
                  alt="Professional roofing and home improvement work by WN Home Improvement in Lowell, MA"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                Transform Your Home's Exterior <span className="text-primary">with Expert Craftsmanship</span>
              </h3>

              <div className="space-y-4">
                <p className="text-gray-600">
                  WN Home Improvement Inc is a high-quality home improvement company serving Lowell, MA and surrounding
                  areas. With nearly a decade of experience in roofing and over 10 years in painting, we specialize in
                  complete exterior remodeling.
                </p>

                <p className="text-gray-600">
                  Our experienced professionals use innovative techniques to deliver the best and most impressive
                  results for your home, ensuring modernity, safety, aesthetics, and lasting value.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Expert Roofing</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Siding & Gutters</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Quality Materials</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">Free Estimates</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button className="group bg-primary hover:bg-primary-dark text-white transition-all duration-300 cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
