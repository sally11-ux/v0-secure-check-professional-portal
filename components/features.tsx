"use client"

import { useIntersection } from "@/hooks/use-intersection"
import {
  ShieldCheck,
  GraduationCap,
  Briefcase,
  CalendarClock,
  Banknote,
  TrendingUp,
} from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Centro Homologado",
    text: "Autorizados por el Ministerio del Interior. Tu formacion tiene validez oficial garantizada en todo el territorio nacional.",
  },
  {
    icon: GraduationCap,
    title: "Docentes Profesionales",
    text: "Exmiembros de fuerzas de seguridad y profesionales en activo con decadas de experiencia real en el sector.",
  },
  {
    icon: Briefcase,
    title: "Bolsa de Empleo",
    text: "Red de mas de 200 empresas de seguridad que contratan directamente a nuestros egresados con prioridad.",
  },
  {
    icon: CalendarClock,
    title: "Horarios Flexibles",
    text: "Turnos de manana y tarde para que puedas compaginar tu formacion con tu vida personal y profesional.",
  },
  {
    icon: Banknote,
    title: "Financiacion a Medida",
    text: "Pagos fraccionados sin intereses. Descuentos para desempleados y colectivos especiales disponibles.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Probados",
    text: "98% de aprobados en primera convocatoria. Los resultados hablan por nosotros curso tras curso.",
  },
]

export function Features() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="ventajas" className="relative py-32 bg-navy-light" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Por que elegirnos
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            La diferencia <span className="text-gold-gradient">SecureCheck</span>
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            No somos un centro de formacion mas. Somos tu mejor inversion para
            una carrera solida en seguridad privada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group glass-card rounded-2xl p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <div className="p-3 rounded-xl bg-gold/10 text-gold inline-block mb-5 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
