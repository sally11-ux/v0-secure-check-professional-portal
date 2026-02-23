"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { ArrowRight, Shield, CreditCard, Award } from "lucide-react"

export function CtaBanner() {
  const { ref, isVisible } = useIntersection()

  return (
    <section className="relative py-32 bg-navy-light overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 animate-gradient" style={{
        background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 50%, rgba(201,168,76,0.05) 100%)",
        backgroundSize: "200% 200%",
      }} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span
          className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold/20 bg-gold/5 text-sm font-medium text-gold transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Plazas limitadas — Proxima convocatoria abierta
        </span>

        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Tu futuro en seguridad{" "}
          <span className="text-gold-gradient">empieza aqui</span>
        </h2>

        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          No dejes pasar esta oportunidad. Unete a los mas de 5.000
          profesionales que ya han transformado su carrera con nosotros.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contacto"
            className="group flex items-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Reservar mi plaza
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#formacion"
            className="flex items-center gap-2 px-8 py-4 border border-gold/30 text-foreground font-semibold rounded-xl hover:bg-gold/5 hover:border-gold/50 transition-all duration-300"
          >
            Ver programas
          </a>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { icon: Shield, text: "Homologado por el Ministerio del Interior" },
            { icon: CreditCard, text: "Financiacion sin intereses" },
            { icon: Award, text: "98% tasa de aprobados" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon className="h-4 w-4 text-gold" />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
