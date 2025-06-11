"use client"

import { useState } from "react"
import { Phone, X, MessageCircle } from "lucide-react"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 left-4 sm:left-8 z-40 w-14 h-14 sm:w-16 sm:h-16">
      {/* Contact Options */}
      <div
        className={`absolute bottom-full mb-4 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* WhatsApp Button */}
        <button
          onClick={() => window.open("https://wa.me/19782101541", "_blank")}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 mb-4"
          aria-label="Contact via WhatsApp"
        >
          <WhatsAppIcon />
        </button>

        {/* Text/SMS Button */}
        <button
          onClick={() => window.open("sms:+19782101541", "_blank")}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 mb-4"
          aria-label="Send us a text message"
        >
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>

        {/* Phone Button */}
        <button
          onClick={() => window.open("tel:+19782101541")}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4A7AFF] hover:bg-[#3A5FCC] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Call us"
        >
          <Phone className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute bottom-0 left-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 animate-float ${
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-0" : "bg-green-500 hover:bg-green-600 rotate-0"
        }`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? (
          <X className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
        ) : (
          <Phone className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
        )}
      </button>
    </div>
  )
}

// WhatsApp SVG Icon
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="white"
      className="sm:w-8 sm:h-8"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
