"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react"


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
              }, i * 120)
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
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Emerald glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.17 155 / 0.35), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Tag */}
        <div data-animate className="opacity-0 mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            Automation Specialist &amp; AI Workflow Architect
          </span>
        </div>

        <h1 data-animate className="opacity-0 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-primary">Automation Specialist</span> &amp;{" "}
          <span className="text-primary">AI Workflow Architect</span>{" "}
          for Scalable Business Systems
        </h1>

        <p data-animate className="opacity-0 mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          I help businesses streamline operations through business process
          automation, CRM automation, and AI integrations using Zapier,
          Make, n8n, and GoHighLevel — eliminating manual work
          and building scalable backend systems.
        </p>

        <div data-animate className="opacity-0 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="btn-ripple inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
          >
            <Mail size={16} />
            Get In Touch
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01ee6dc7c9c30f412f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30 active:scale-95"
          >
            <ArrowUpRight size={16} />
            Hire Me on Upwork
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30 active:scale-95"
          >
            View My Work
          </a>
        </div>


        {/* Scroll indicator */}
        <div data-animate className="opacity-0 mt-16 flex justify-center">
          <a
            href="#services"
            className="animate-bounce text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to services"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
