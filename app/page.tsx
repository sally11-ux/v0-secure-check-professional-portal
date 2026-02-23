"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Features />
      <Pricing />
      <Process />
      <Testimonials />
      <CtaBanner />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
