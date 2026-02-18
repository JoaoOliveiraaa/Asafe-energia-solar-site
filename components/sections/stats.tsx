"use client"

import { useEffect, useRef, useState } from "react"
import { Sun, Users, Leaf, Award } from "lucide-react"

const stats = [
  {
    icon: Sun,
    value: 500,
    suffix: "+",
    label: "Projetos Realizados",
  },
  {
    icon: Users,
    value: 450,
    suffix: "+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Leaf,
    value: 12000,
    suffix: "",
    label: "Toneladas de CO2 Evitadas",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Anos de Experiencia",
  },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref} className="text-4xl font-bold text-accent md:text-5xl">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-8 shadow-xl md:grid-cols-4 md:gap-8 md:p-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-3 text-center"
          >
            <stat.icon className="h-8 w-8 text-primary" />
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <span className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
