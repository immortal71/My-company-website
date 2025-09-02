import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Trovesx Enterprise - Multi-Industry Innovation Leader",
  description:
    "From retail to AI-powered fintech to pharmaceutical dominance. Trovesx Enterprise is reshaping industries through strategic innovation and social responsibility.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${montserrat.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
