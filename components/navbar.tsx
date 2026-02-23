"use client"

import { useState, useEffect } from "react"
import { Shield, Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ventajas", label: "Ventajas" },
  { href: "#formacion", label: "Formacion" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative">
            <Shield className="h-8 w-8 text-gold transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Secure<span className="text-gold">Check</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-gold transition-colors duration-300 rounded-lg hover:bg-gold/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-4 px-5 py-2.5 text-sm font-semibold bg-gold text-primary-foreground rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Contactar
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-light/98 backdrop-blur-xl border-t border-gold/10 animate-slide-up">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-muted-foreground hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 text-center font-semibold bg-gold text-primary-foreground rounded-lg"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
