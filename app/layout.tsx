import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Loader from "@/components/loader"
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/json-ld"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "WN Home Improvement Inc | Expert Roofing Services in Lowell, MA",
    template: "%s | WN Home Improvement Inc",
  },
  description:
    "Professional roofing contractor serving Lowell, MA and surrounding areas. Expert roof replacement, repair, siding, gutters, and exterior home improvement services with nearly a decade of experience.",
  keywords: [
    "roofing contractor",
    "roof replacement",
    "roof repair",
    "siding installation",
    "gutters",
    "Lowell MA",
    "WN Home Improvement",
    "exterior remodeling",
    "home improvement",
    "Massachusetts roofing",
    "soffit fascia",
    "deck construction",
    "roofing services",
  ],
  authors: [{ name: "WN Home Improvement Inc" }],
  creator: "WN Home Improvement Inc",
  publisher: "WN Home Improvement Inc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wnhomeimprovement.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "WN Home Improvement Inc | Expert Roofing Services in Lowell, MA",
    description:
      "Professional roofing contractor serving Lowell, MA and surrounding areas. Expert roof replacement, repair, siding, gutters, and exterior home improvement services.",
    url: "https://wnhomeimprovement.com",
    siteName: "WN Home Improvement Inc",
    images: [
      {
        url: "/aboutimage.jpg",
        width: 1200,
        height: 630,
        alt: "WN Home Improvement Inc - Professional Roofing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WN Home Improvement Inc | Expert Roofing Services in Lowell, MA",
    description:
      "Professional roofing contractor serving Lowell, MA and surrounding areas. Expert roof replacement, repair, siding, and gutters.",
    images: ["/aboutimage.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification=your_verification_code", // Replace with actual verification code when available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <LocalBusinessJsonLd />
            <WebsiteJsonLd />
            <Loader />
            <Header />
            {children}
            <Footer />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
