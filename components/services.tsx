"use client"

import { useEffect, useRef } from "react"
import {
  Zap,
  Bot,
  Link2,
  BarChart3,
  Users,
  Workflow,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "End-to-end automation systems using Zapier, Make, and n8n to streamline your operations and eliminate repetitive tasks.",
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Integrating OpenAI and AI APIs into your workflows to create intelligent automations that learn and adapt.",
  },
  {
    icon: Link2,
    title: "API Integrations",
    description:
      "Connecting your tools seamlessly with custom webhooks and REST API integrations for a unified ecosystem.",
  },
  {
    icon: Users,
    title: "CRM Automation",
    description:
      "GoHighLevel and CRM automation for lead nurturing, sales pipelines, appointment booking, and follow-up sequences.",
  },
  {
    icon: BarChart3,
    title: "Process Optimization",
    description:
      "Analyzing and redesigning business processes to reduce manual workload by up to 60% through strategic automation.",
  },
  {
    icon: Zap,
    title: "Financial Automation",
    description:
      "Leveraging accounting expertise to automate financial reporting, invoicing, and bookkeeping for small businesses.",
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
            }, index * 100)
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
      className="opacity-0 translate-y-6 card-glow group cursor-pointer rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 active:scale-[0.98]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 ring-1 ring-primary/10">
        <Icon size={22} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            What I Do
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I design systems that align with financial logic, operational
            efficiency, and scalable growth — bridging the gap between business
            operations and AI-driven automation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
