"use client"
import { ArrowRight } from "lucide-react"
import SectionTitle from "./section-title"
import BeforeAfterSlider from "./before-after-slider"
import { Button } from "@/components/ui/button"

// Sample before/after comparison data
const beforeAfterItems = [
  {
    id: 1,
    beforeImage: "/5.jpg",
    afterImage: "/5.jpg",
  },
  {
    id: 2,
    beforeImage: "/4.jpg",
    afterImage: "/4.jpg",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Before / After"
          subtitle="See the impressive transformations we've completed for homeowners in Lowell, MA and surrounding areas."
        />

        <div className="mt-12 mb-16">
          <BeforeAfterSlider items={beforeAfterItems} />
        </div>

        <div className="text-center">
          <Button className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 border border-primary text-sm sm:text-base font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white transition-colors duration-200 corner-fill-hover cursor-pointer">
            View More Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
