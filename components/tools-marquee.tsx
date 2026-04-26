"use client"

import { useEffect, useRef } from "react"

interface Tool {
  name: string
  logo: string
}

const tools: Tool[] = [
  {
    name: "Zapier",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg",
  },
  {
    name: "Make",
    logo: "/make-logo.png",
  },
  {
    name: "n8n",
    logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
  },
  {
    name: "GoHighLevel",
    logo: "/ghl-logo.png",
  },
  {
    name: "OpenAI",
    logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
  },
  {
    name: "Google Workspace",
    logo: "https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg",
  },
  {
    name: "Airtable",
    logo: "https://cdn.worldvectorlogo.com/logos/airtable-1.svg",
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
  {
    name: "Slack",
    logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  {
    name: "REST APIs",
    logo: "https://cdn-icons-png.flaticon.com/512/8297/8297437.png",
  },
]

function ToolItem({ tool }: { tool: Tool }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50 hover:shadow-md hover:shadow-primary/5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5">
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
          crossOrigin="anonymous"
        />
      </div>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  )
}

export function ToolsMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

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
    <section id="tools" ref={sectionRef} className="px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div data-animate className="opacity-0 translate-y-6 mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Tech Stack
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools & Platforms
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            The automation platforms, AI tools, and integrations I work with daily
            to build powerful workflow systems.
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div data-animate className="opacity-0 translate-y-6 relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling track */}
        <div ref={marqueeRef} className="marquee-track flex w-max gap-4">
          {tools.map((tool) => (
            <ToolItem key={`a-${tool.name}`} tool={tool} />
          ))}
          {/* Duplicate set for seamless loop */}
          {tools.map((tool) => (
            <ToolItem key={`b-${tool.name}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
