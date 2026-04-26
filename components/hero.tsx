"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, CalendarCheck, ChevronRight } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: "13+", label: "Systems Delivered" },
  { value: "60%", label: "Avg. Manual Work Reduction" },
  { value: "5", label: "Automation Platforms" },
  { value: "100%", label: "Documented Handoff" },
]

export function Hero() {
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
                el.classList.remove("opacity-0")
              }, i * 130)
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
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Teal glow — top center */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14]"
        style={{ background: "radial-gradient(circle, oklch(0.70 0.13 210 / 0.5), transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Logo + available badge */}
        <div data-animate className="opacity-0 mb-7 flex flex-col items-center gap-3">
          <div className="relative h-20 w-20 drop-shadow-lg">
            <Image
              src="/logo.png"
              alt="Automate With Rox"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for new projects
          </span>
        </div>

        {/* Headline */}
        <h1 data-animate className="opacity-0 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Your business runs on{" "}
          <span className="text-primary">repetitive processes.</span>
          <br className="hidden sm:block" />
          {" "}Let{"'"}s automate them.
        </h1>

        {/* Subheadline */}
        <p data-animate className="opacity-0 mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Custom workflow systems for service-based businesses — built on{" "}
          <span className="font-medium text-foreground/80">Zapier</span>,{" "}
          <span className="font-medium text-foreground/80">Make</span>,{" "}
          <span className="font-medium text-foreground/80">n8n</span>, and{" "}
          <span className="font-medium text-foreground/80">AI</span> — so your team
          can focus on the work only you can do.
        </p>

        {/* CTAs */}
        <div data-animate className="opacity-0 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="btn-ripple inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
          >
            <CalendarCheck size={16} />
            Book a Free Discovery Call
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30 active:scale-95"
          >
            See My Work
            <ChevronRight size={15} />
          </a>
        </div>

        {/* Stats strip */}
        <div data-animate className="opacity-0 mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card/60 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:bg-card"
            >
              <p className="text-2xl font-bold text-primary">{s.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div data-animate className="opacity-0 mt-12 flex justify-center">
          <a
            href="#about"
            className="animate-bounce text-muted-foreground/50 transition-colors hover:text-primary"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
