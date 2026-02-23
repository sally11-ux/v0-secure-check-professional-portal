"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { MessageCircle, ClipboardCheck, BookOpen, Award } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    num: "01",
    title: "Solicita Informacion",
    text: "Contacta con nosotros y recibe asesoramiento gratuito y personalizado sobre el programa que mejor se adapta a tus necesidades y objetivos.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "Matriculate",
    text: "Completa tu inscripcion de forma sencilla. Ofrecemos facilidades de pago y financiacion a tu medida sin intereses.",
  },
  {
    icon: BookOpen,
    num: "03",
    title: "Formate",
    text: "Accede a clases presenciales con profesionales en activo, practicas reales y material didactico de primer nivel actualizado.",
  },
  {
    icon: Award,
    num: "04",
    title: "Certificate",
    text: "Supera las pruebas oficiales con nuestra preparacion intensiva y obtén tu habilitacion profesional reconocida en todo el pais.",
  },
]

export function Process() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="proceso" className="relative py-32 bg-navy-light" ref={ref}>
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(201,168,76,1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Proceso
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Tu camino hacia la <span className="text-gold-gradient">profesion</span>
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            En solo 4 pasos estaras listo para comenzar tu carrera en seguridad
            privada con la mejor preparacion del mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-gold/30 to-gold/5" />
              )}

              <div className="glass-card rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-4 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-all duration-300">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-xs font-bold tracking-widest text-gold mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
