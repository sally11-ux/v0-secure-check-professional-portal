"use client"

import { useIntersection } from "@/hooks/use-intersection"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Que requisitos necesito para matricularme?",
    a: "Necesitas ser mayor de edad, tener nacionalidad espanola o de la UE (o permiso de residencia), no tener antecedentes penales, y superar las pruebas fisicas y psicotecnicas establecidas por la normativa vigente.",
  },
  {
    q: "Cuanto dura la formacion completa?",
    a: "El programa estandar tiene una duracion de 180 horas. El programa Premium se extiende a 280 horas, incluyendo la especializacion en escolta privado y las practicas garantizadas en empresa.",
  },
  {
    q: "Ofreceis facilidades de pago?",
    a: "Si, ofrecemos financiacion sin intereses hasta en 12 meses. Tambien disponemos de descuentos para desempleados, fuerzas armadas y cuerpos de seguridad del estado.",
  },
  {
    q: "Que tasa de aprobados teneis?",
    a: "Nuestra tasa de aprobados supera el 98% en la primera convocatoria, muy por encima de la media nacional. Esto se debe a nuestro metodo de preparacion intensiva y personalizada.",
  },
  {
    q: "Garantizais empleo al terminar?",
    a: "En el programa Premium, ofrecemos practicas garantizadas en empresas del sector y acceso prioritario a nuestra bolsa de empleo exclusiva con mas de 200 empresas colaboradoras.",
  },
  {
    q: "Las clases son presenciales u online?",
    a: "La formacion es presencial en nuestras instalaciones de Linares. Esto es obligatorio por normativa del Ministerio del Interior para la habilitacion como vigilante de seguridad.",
  },
]

export function Faq() {
  const { ref, isVisible } = useIntersection()

  return (
    <section id="faq" className="relative py-32" ref={ref}>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/3 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            FAQ
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Preguntas <span className="text-gold-gradient">frecuentes</span>
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Resolvemos tus dudas mas habituales sobre nuestra formacion.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border/50 hover:border-gold/20 transition-colors"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-gold py-6 text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
