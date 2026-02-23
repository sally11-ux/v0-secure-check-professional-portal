"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ChevronDown, Shield, Lock, Eye } from "lucide-react"

function Particle({ delay, x }: { delay: number; x: number }) {
  return (
    <div
      className="absolute w-1 h-1 bg-gold/30 rounded-full"
      style={{
        left: `${x}%`,
        animation: `particle-float ${8 + Math.random() * 6}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[100px]" />

        {/* Floating geometric elements */}
        <div className="absolute top-[20%] left-[10%] animate-float opacity-20">
          <Shield className="h-16 w-16 text-gold" />
        </div>
        <div className="absolute top-[30%] right-[15%] animate-float-slow opacity-15">
          <Lock className="h-12 w-12 text-gold" />
        </div>
        <div className="absolute bottom-[25%] left-[20%] animate-float opacity-10" style={{ animationDelay: "2s" }}>
          <Eye className="h-14 w-14 text-gold" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Particles */}
        {mounted &&
          Array.from({ length: 20 }).map((_, i) => (
            <Particle key={i} delay={i * 0.5} x={Math.random() * 100} />
          ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-gold/20 bg-gold/5 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Shield className="h-4 w-4 text-gold" />
          <span className="text-sm font-medium text-gold">Centro Homologado — Ministerio del Interior</span>
        </div>

        {/* Heading */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Protegemos lo que
          <br />
          <span className="text-gold-gradient">mas importa</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Formacion especializada en seguridad privada, vigilancia y proteccion.
          Mas de 15 anos formando a los mejores profesionales del sector.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[600ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#formacion"
            className="group flex items-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Ver Formacion
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#nosotros"
            className="flex items-center gap-2 px-8 py-4 border border-gold/30 text-foreground font-semibold rounded-xl hover:bg-gold/5 hover:border-gold/50 transition-all duration-300"
          >
            Conocenos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 text-gold" />
      </div>
    </section>
  )
}
