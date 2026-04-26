"use client"

import { useEffect, useRef } from "react"
import {
  Workflow,
  Bot,
  Link2,
  BarChart3,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  outcome: string
  description: string
  bestFor: string
  startingFrom: string
}

const services: Service[] = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    outcome: "10–25 hrs/week eliminated",
    description:
      "End-to-end automation of your repetitive business processes using Zapier, Make, or n8n — fully built, tested, and documented before handoff.",
    bestFor: "Teams stuck in manual copy-paste loops across multiple tools",
    startingFrom: "From $500",
  },
  {
    icon: Bot,
    title: "AI-Powered Automations",
    outcome: "Intelligent workflows that think",
    description:
      "OpenAI and Claude API integrations wired into your existing workflows — email drafting, lead classification, ticket routing, and content generation at scale.",
    bestFor: "Businesses spending time on first-draft writing or manual sorting",
    startingFrom: "From $800",
  },
  {
    icon: Users,
    title: "CRM Automation & Pipeline",
    outcome: "2–5× lead response rate increase",
    description:
      "Full GoHighLevel setup with custom pipeline stages, automated follow-up sequences, appointment booking, and reporting — 100% of leads followed up, every time.",
    bestFor: "Coaches, consultants, and agencies with manual sales processes",
    startingFrom: "From $1,500",
  },
  {
    icon: Link2,
    title: "API & Custom Integrations",
    outcome: "Real-time sync between any tools",
    description:
      "Custom webhook and REST API bridges between tools that don't have native integrations — with error handling, retry logic, and full technical documentation.",
    bestFor: "Businesses with niche tools or failing off-the-shelf connectors",
    startingFrom: "From $600",
  },
  {
    icon: BarChart3,
    title: "Process Optimization Consulting",
    outcome: "A prioritized automation roadmap",
    description:
      "A structured audit of your current operations: we map what you have, rank opportunities by ROI, and deliver a clear roadmap — before touching a single workflow.",
    bestFor: "Businesses overwhelmed by operational chaos and unsure where to start",
    startingFrom: "From $500",
  },
  {
    icon: Zap,
    title: "Financial Automation",
    outcome: "Near-real-time financials, zero manual entry",
    description:
      "Automation of invoicing, payment reconciliation, bookkeeping data entry, and financial reporting — built with accounting-level accuracy from an accounting background.",
    bestFor: "Small businesses reconciling Stripe/PayPal into QuickBooks or Xero manually",
    startingFrom: "From $500",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-up")
              entry.target.classList.remove("opacity-0", "translate-y-6")
            }, index * 90)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-6 card-glow group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Icon + outcome badge */}
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 ring-1 ring-primary/10">
          <Icon size={22} />
        </div>
        <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary text-right leading-tight">
          {service.outcome}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      {/* Best for */}
      <p className="mb-5 text-xs text-muted-foreground/80 italic">
        Best for: {service.bestFor}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/60 pt-4">
        <span className="text-sm font-semibold text-foreground">{service.startingFrom}</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-all hover:gap-2"
        >
          {"Let's build this"}
          <ArrowRight size={12} />
        </a>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Gets Built
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Every engagement starts with your process, not a tool. Here{"'"}s what that looks
            like in practice — and what you can expect at the end.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          All projects are scoped and quoted individually after a free discovery call. Pricing ranges are starting estimates only.
        </p>
      </div>
    </section>
  )
}
