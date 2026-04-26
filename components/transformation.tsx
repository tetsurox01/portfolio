"use client"

import { useEffect, useRef } from "react"
import { X, Check, ArrowRight } from "lucide-react"

const rows = [
  {
    before: "Hours lost to manual data entry every week",
    after: "Workflows run automatically — zero manual entry",
  },
  {
    before: "Leads falling through the cracks",
    after: "CRM pipeline nurtures every contact, every time",
  },
  {
    before: "Inconsistent processes depending on who's on shift",
    after: "Documented, repeatable systems anyone can run",
  },
  {
    before: "Disconnected tools requiring copy-paste between apps",
    after: "Connected tools that talk to each other in real time",
  },
  {
    before: "Growing pains when trying to scale",
    after: "Operations that scale with your business",
  },
  {
    before: "Constantly firefighting and reactive",
    after: "Running a business with operational leverage",
  },
]

export function Transformation() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll("[data-animate]")
            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("animate-fade-up")
                el.classList.remove("opacity-0", "translate-y-6")
              }, i * 80)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="transformation" ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div data-animate className="opacity-0 translate-y-6 mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            The Shift
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Before &amp; After Automation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            This is what changes when your operations run on systems instead of effort.
          </p>
        </div>

        {/* Column headers */}
        <div
          data-animate
          className="opacity-0 translate-y-6 mb-4 hidden grid-cols-[1fr_auto_1fr] gap-4 sm:grid"
        >
          <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-2.5">
            <X size={14} className="shrink-0 text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
              Before
            </span>
          </div>
          <div className="w-8" />
          <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5">
            <Check size={14} className="shrink-0 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              After
            </span>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-3">
          {rows.map((row, i) => (
            <div
              key={i}
              data-animate
              className="opacity-0 translate-y-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr]"
            >
              {/* Before */}
              <div className="flex items-start gap-3 rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-3.5">
                <X size={14} className="mt-0.5 shrink-0 text-red-400" />
                <p className="text-sm leading-relaxed text-muted-foreground">{row.before}</p>
              </div>

              {/* Arrow */}
              <div className="hidden items-center justify-center sm:flex">
                <ArrowRight size={16} className="text-muted-foreground/40" />
              </div>

              {/* After */}
              <div className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3.5">
                <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/80">{row.after}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-animate className="opacity-0 translate-y-6 mt-12 text-center">
          <a
            href="#contact"
            className="btn-ripple inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 active:scale-95"
          >
            Start the shift — book a free call
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
