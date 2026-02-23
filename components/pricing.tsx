"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Check, Star, Zap, Crown } from "lucide-react"

const plans = [
  {
    name: "Vigilante de Seguridad",
    subtitle: "Plan Estandar",
    price: "7.500",
    hours: "180 horas",
    description:
      "Formacion basica homologada para obtener tu habilitacion profesional. Un buen punto de partida, aunque con menos soporte y sin las ventajas exclusivas del plan Premium.",
    features: [
      "Acceso a bolsa de empleo",
      "Preparacion examen oficial",
      "Material didactico incluido",
      "Practicas de tiro reglamentarias",
      "Area tecnico-profesional",
      "Area juridica y socioprofesional",
    ],
    highlighted: false,
  },
  {
    name: "Vigilante de Seguridad Premium",
    subtitle: "Plan Premium",
    price: "10.000",
    hours: "280 horas",
    description:
      "La formacion mas completa del mercado. Todo lo necesario para destacar desde el primer dia y acceder a los mejores puestos del sector. Incluye doble certificacion, mentorizacion 1 a 1 y practicas garantizadas en empresa.",
    features: [
      "Todo lo incluido en el plan estandar",
      "Soporte post-formacion 12 meses",
      "Acceso prioritario a ofertas de empleo",
      "Certificacion doble: Vigilante + Escolta",
      "Practicas garantizadas en empresa",
      "Mentorizacion personalizada 1 a 1",
      "Conduccion evasiva y proteccion VIP",
      "Defensa personal avanzada",
      "Especializacion en escolta privado",
    ],
    highlighted: true,
  },
]

export function Pricing() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="formacion" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Formacion
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Nuestros <span className="text-gold-gradient">Programas</span>
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Programas formativos homologados, disenados para prepararte y superar
            las pruebas oficiales con la mayor garantia de exito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                plan.highlighted
                  ? "bg-gradient-to-b from-gold/20 via-gold/5 to-transparent p-px"
                  : ""
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-gold text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-gold/30">
                  <Crown className="h-3.5 w-3.5" />
                  Mas Popular
                </div>
              )}

              <div
                className={`h-full rounded-3xl p-8 md:p-10 ${
                  plan.highlighted
                    ? "bg-navy-light"
                    : "glass-card"
                }`}
              >
                <div className="mb-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">
                    {plan.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-2xl font-bold text-gold">EUR</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">/ {plan.hours}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 pb-8 border-b border-border">
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-3 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-gold" : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`block text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gold text-primary-foreground hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                      : "border border-gold/30 text-foreground hover:bg-gold/5 hover:border-gold/50"
                  }`}
                >
                  {plan.highlighted ? (
                    <span className="flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4" />
                      Solicitar Informacion
                    </span>
                  ) : (
                    "Solicitar Informacion"
                  )}
                </a>

                {plan.highlighted && (
                  <p className="mt-4 text-center text-xs text-gold/70 flex items-center justify-center gap-1">
                    <Star className="h-3 w-3" />
                    Elegido por el 85% de nuestros alumnos
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
