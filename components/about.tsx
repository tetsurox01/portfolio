"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const differentiators = [
  "Accounting background — I understand how operations actually flow",
  "Business-first thinking — process before tool, always",
  "Full-stack execution — strategy, build, documentation, handoff",
  "AI-native — OpenAI integrations where they create real leverage",
  "ROI-focused — measured in hours saved and errors eliminated",
]

export function About() {
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
    <section id="about" ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div data-animate className="opacity-0 translate-y-6 mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            About
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Specialist Behind the Systems
          </h2>
        </div>

        <div
          data-animate
          className="opacity-0 translate-y-6 card-glow grid gap-8 lg:grid-cols-[280px_1fr] rounded-2xl border border-border bg-card p-8 sm:p-10 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
        >
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[320px] w-[260px] sm:h-[360px] sm:w-[280px] overflow-hidden rounded-xl border border-primary/20 shadow-lg shadow-primary/5">
              <Image
                src="/roxli.jpg"
                alt="Roxli Cahayag — Automation Specialist & AI Workflow Architect"
                fill
                className="object-cover object-top"
                sizes="280px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            <p>
              {"I'm "}
              <span className="font-semibold text-foreground">Roxli Cahayag</span>
              {" — an Automation Specialist and AI Workflow Architect based in Manila, Philippines. I build the systems that free service-based businesses from the work that shouldn't be manual in the first place."}
            </p>

            <p>
              I didn{"'"}t start in tech. I started in{" "}
              <span className="font-medium text-foreground">accounting</span>
              {" — and that foundation gave me something most automation specialists don't have: a structural understanding of how businesses actually operate. I see where processes break down, where errors compound, and where manual work quietly costs thousands of hours a year."}
            </p>

            <p>
              That background evolved into a full-stack automation practice. Today I design and deploy
              end-to-end systems using{" "}
              <span className="font-medium text-primary">Zapier</span>,{" "}
              <span className="font-medium text-primary">Make</span>,{" "}
              <span className="font-medium text-primary">n8n</span>,{" "}
              <span className="font-medium text-primary">GoHighLevel</span>, and the{" "}
              <span className="font-medium text-primary">OpenAI API</span>{" "}
              — turning chaotic, manual operations into lean, scalable machines.
            </p>

            <div className="my-1 rounded-xl border-l-[3px] border-primary/60 bg-primary/5 px-5 py-4">
              <p className="text-sm font-medium text-foreground italic leading-relaxed">
                {"\"We measure success in hours saved, errors eliminated, and revenue recovered — not in how many automations we built.\""}
              </p>
            </div>

            <ul className="mt-2 space-y-2">
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
