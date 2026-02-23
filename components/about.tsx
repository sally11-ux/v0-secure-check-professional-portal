"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Target, Eye, UsersRound, BadgeCheck } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "Mision",
    text: "Formar profesionales altamente cualificados en seguridad privada, ofreciendo programas actualizados que cumplen con la normativa vigente del Ministerio del Interior.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Ser el centro de referencia nacional en formacion de seguridad privada, reconocidos por la excelencia de nuestros programas y la calidad de nuestros egresados.",
  },
  {
    icon: UsersRound,
    title: "Equipo Experto",
    text: "Nuestro equipo docente esta formado por profesionales con amplia experiencia en fuerzas de seguridad, vigilancia y proteccion civil con decadas de trayectoria.",
  },
  {
    icon: BadgeCheck,
    title: "Certificaciones",
    text: "Centro homologado por el Ministerio del Interior. Todas nuestras formaciones cumplen con los requisitos legales y normativos establecidos por la ley.",
  },
]

export function About() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="nosotros" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Sobre Nosotros
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Excelencia en <span className="text-gold-gradient">Seguridad</span>
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Desde 2009, SecureCheck se ha posicionado como lider en la formacion
            de profesionales de seguridad privada en Espana. Nuestra trayectoria
            avala la calidad de nuestra ensenanza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card rounded-2xl p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 p-3 rounded-xl bg-gold/10 text-gold">
                  <card.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
