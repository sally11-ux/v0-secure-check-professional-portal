"use client"

import { useState } from "react"
import { useIntersection } from "@/hooks/use-intersection"
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react"

export function Contact() {
  const { ref, isVisible } = useIntersection()
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState("loading")
    setErrorMsg("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      nombre: formData.get("nombre") as string,
      telefono: formData.get("telefono") as string,
      email: formData.get("email") as string,
      curso: formData.get("curso") as string,
      mensaje: formData.get("mensaje") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        setFormState("error")
        setErrorMsg(result.error || "Error al enviar el formulario.")
        return
      }

      setFormState("success")
      form.reset()
    } catch {
      setFormState("error")
      setErrorMsg("Error de conexion. Intentelo de nuevo.")
    }
  }

  return (
    <section id="contacto" className="relative py-32 bg-navy-light" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <span
            className={`inline-block text-sm font-semibold tracking-widest uppercase text-gold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Contacto
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Tienes <span className="text-gold-gradient">preguntas?</span>
          </h2>
          <p
            className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Estamos aqui para ayudarte. Contactanos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {[
              {
                icon: Phone,
                label: "Telefono",
                value: "+34 654 987 278",
                href: "tel:+34654987278",
              },
              {
                icon: Mail,
                label: "Email",
                value: "davidlopezz1342@gmail.com",
                href: "mailto:davidlopezz1342@gmail.com",
              },
              {
                icon: MapPin,
                label: "Direccion",
                value: "Calle Julio Burel 43, Linares, Jaen",
                href: "https://maps.google.com/?q=Calle+Julio+Burel+43+Linares+Jaen",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group glass-card rounded-2xl p-6 flex items-start gap-5 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="shrink-0 p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground font-semibold group-hover:text-gold transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="glass-card rounded-2xl p-8 md:p-10">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="p-4 rounded-full bg-green-500/10 text-green-400 mb-6">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Mensaje enviado</h3>
                  <p className="text-muted-foreground mb-8">
                    Hemos recibido tu solicitud. Nos pondremos en contacto contigo lo antes posible.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="px-6 py-3 border border-gold/30 text-foreground rounded-xl hover:bg-gold/5 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                        Nombre <span className="text-gold">*</span>
                      </label>
                      <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        placeholder="Tu nombre completo"
                        className="px-4 py-3 rounded-xl bg-navy/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                        Telefono <span className="text-gold">*</span>
                      </label>
                      <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        placeholder="Tu telefono"
                        className="px-4 py-3 rounded-xl bg-navy/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Tu correo electronico"
                      className="px-4 py-3 rounded-xl bg-navy/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="curso" className="text-sm font-medium text-foreground">
                      Curso de interes <span className="text-gold">*</span>
                    </label>
                    <select
                      id="curso"
                      name="curso"
                      required
                      defaultValue=""
                      className="px-4 py-3 rounded-xl bg-navy/50 border border-border text-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all appearance-none"
                    >
                      <option value="" disabled className="text-muted-foreground">
                        Seleccionar curso...
                      </option>
                      <option value="Vigilante de Seguridad">Vigilante de Seguridad</option>
                      <option value="Vigilante de Seguridad Premium">
                        Vigilante de Seguridad Premium
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      placeholder="Cuentanos mas sobre lo que necesitas..."
                      className="px-4 py-3 rounded-xl bg-navy/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm text-red-400 bg-red-400/10 px-4 py-3 rounded-xl">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-primary-foreground font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
