"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    initials: "CM",
    name: "Carlos Martinez",
    role: "Vigilante de Seguridad",
    text: "Gracias a SecureCheck aprobe a la primera. La formacion practica y el seguimiento personalizado marcan la diferencia frente a otros centros. No podria estar mas satisfecho con mi decision.",
    rating: 5,
  },
  {
    initials: "ML",
    name: "Maria Lopez",
    role: "Escolta Privado",
    text: "El programa Premium supero todas mis expectativas. Las practicas en empresa me permitieron conseguir trabajo antes de terminar el curso. La doble certificacion fue clave para mi carrera.",
    rating: 5,
  },
  {
    initials: "JR",
    name: "Javier Ruiz",
    role: "Vigilante de Seguridad",
    text: "El equipo docente es excepcional. Profesionales con experiencia real que te preparan para situaciones del dia a dia. Su cercania y dedicacion hacen que la formacion sea unica.",
    rating: 5,
  },
  {
    initials: "AF",
    name: "Ana Fernandez",
    role: "Vigilante Premium",
    text: "La doble certificacion del plan Premium me abrio puertas que no imaginaba. Ahora trabajo en proteccion VIP gracias a la formacion recibida. Sin duda la mejor inversion de mi vida.",
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="testimonios" className="relative py-32" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Testimonios
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Lo que dicen nuestros <span className="text-gold-gradient">alumnos</span>
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Miles de profesionales ya han confiado en nosotros. Estas son sus
            experiencias reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-8 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-gold/20 mb-4" />

              <p className="text-foreground leading-relaxed mb-6">
                {`"${t.text}"`}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
