"use client"

import { useEffect, useRef } from "react"
import { Clock, TrendingDown, FileCheck, Users } from "lucide-react"

const results = [
  {
    icon: Clock,
    stat: "10–25 hrs/week",
    label: "of manual work eliminated per client",
  },
  {
    icon: TrendingDown,
    stat: "Up to 60%",
    label: "reduction in manual workload",
  },
  {
    icon: FileCheck,
    stat: "100%",
    label: "of systems delivered with documentation",
  },
  {
    icon: Users,
    stat: "Service businesses",
    label: "coaches, agencies, consultants",
  },
]

export function ResultsBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-item]")
            items.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-up")
                el.classList.remove("opacity-0", "translate-y-4")
              }, i * 90)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-y border-border bg-secondary/40 px-6 py-10">
      <div ref={barRef} className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r) => {
          const Icon = r.icon
          return (
            <div
              key={r.label}
              data-item
              className="opacity-0 translate-y-4 flex items-start gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-base font-bold text-foreground leading-tight">{r.stat}</p>
                <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{r.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
