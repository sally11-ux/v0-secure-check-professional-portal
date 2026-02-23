"use client"

import { useIntersection } from "@/hooks/use-intersection"
import { useCounter } from "@/hooks/use-counter"
import { Award, Users, Clock, Building2 } from "lucide-react"

function StatItem({
  icon: Icon,
  end,
  suffix,
  label,
  isVisible,
}: {
  icon: React.ElementType
  end: number
  suffix: string
  label: string
  isVisible: boolean
}) {
  const count = useCounter(end, isVisible)

  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="p-4 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function Stats() {
  const { ref, isVisible } = useIntersection()

  const stats = [
    { icon: Award, end: 98, suffix: "%", label: "Tasa de aprobados" },
    { icon: Users, end: 5000, suffix: "+", label: "Alumnos formados" },
    { icon: Clock, end: 15, suffix: "+", label: "Anos de experiencia" },
    { icon: Building2, end: 200, suffix: "+", label: "Empresas colaboradoras" },
  ]

  return (
    <section ref={ref} className="relative py-24 bg-navy-light border-y border-gold/5">
      <div className="absolute inset-0 animate-shimmer" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
