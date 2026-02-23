"use client"

import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-gold" />
            <span className="text-lg font-bold text-foreground">
              Secure<span className="text-gold">Check</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-gold transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-gold transition-colors">Nosotros</a>
            <a href="#formacion" className="hover:text-gold transition-colors">Formacion</a>
            <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
          </div>

          <p className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} SecureCheck. Todos los derechos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
