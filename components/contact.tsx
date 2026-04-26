"use client"

import { useEffect, useRef } from "react"
import { Mail, MapPin, ArrowRight, CalendarCheck, Clock, CheckCircle2 } from "lucide-react"

const callBenefits = [
  "Map out exactly what's costing you the most time",
  "Identify your highest-ROI automation opportunities",
  "Get a honest assessment — no pitch, no pressure",
  "Walk away with a clear picture of what's possible",
]

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left — CTA copy */}
          <div data-animate className="opacity-0 translate-y-6">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Ready to Reclaim Your Time?
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Book a Free 30-Minute Discovery Call
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Pick a time that works for you. We{"'"}ll talk through your current workflows,
              identify what{"'"}s costing you the most, and figure out whether automation is
              the right solution — no commitment required.
            </p>

            {/* What you get on the call */}
            <ul className="mt-7 space-y-3">
              {callBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="mt-9 space-y-3">
              <a
                href="mailto:roxlicahayag@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                  <Mail size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="truncate text-sm font-medium text-foreground">roxlicahayag@gmail.com</p>
                </div>
                <ArrowRight size={14} className="shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Manila, Philippines</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Call Length</p>
                  <p className="text-sm font-medium text-foreground">30 minutes — free, no obligation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Cal.com embed */}
          <div data-animate className="opacity-0 translate-y-6 card-glow rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-6 pb-2">
              <div className="flex items-center gap-2">
                <CalendarCheck size={18} className="text-primary" />
                <h3 className="text-base font-semibold text-foreground">
                  Pick a time below
                </h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                No forms, no emails — just pick a slot and we{"'"}ll talk.
              </p>
            </div>
            <div className="px-4 pb-4">
              <div className="w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://cal.com/automate-with-rox?embed=true&theme=dark&hideEventTypeDetails=false"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  loading="lazy"
                  className="rounded-xl"
                  style={{ minHeight: "600px", border: "none" }}
                  title="Book a discovery call with Roxli"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Powered by{" "}
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Cal.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
