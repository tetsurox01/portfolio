"use client"

import { useEffect, useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Automation Specialist & AI Workflow Architect",
    company: "Freelance / Independent Consultant",
    period: "Present",
    bullets: [
      "Design and implement end-to-end automation systems for service-based businesses and digital entrepreneurs.",
      "Build AI-enhanced workflows for lead generation, CRM management, email marketing, and client onboarding.",
      "Develop multi-step automations integrating Zapier, Make, and n8n with external APIs.",
      "Automate accounting and financial reporting processes for small businesses.",
      "Create GHL automation systems for sales pipelines, appointment booking, and follow-up sequences.",
      "Reduce manual workload for clients by up to 60% through process optimization and automation redesign.",
    ],
    tags: [
      "Zapier",
      "Make",
      "n8n",
      "GoHighLevel",
      "OpenAI API",
      "CRM",
      "Webhooks",
    ],
  },
]

export function Experience() {
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
              }, i * 100)
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
    <section id="experience" ref={sectionRef} className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Background
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
        </div>

        <div>
          {experiences.map((exp) => (
            <div
              key={exp.role}
              data-animate
              className="opacity-0 translate-y-6 relative border-l-2 border-primary/30 pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

              <div className="mb-2 flex items-center gap-2">
                <Briefcase size={16} className="text-primary" />
                <span className="font-mono text-xs text-primary">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {exp.company}
              </p>

              <ul className="mt-6 space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
