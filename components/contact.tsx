"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "roxlicahayag@gmail.com",
    href: "mailto:roxlicahayag@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 956 631 5780",
    href: "tel:+639566315780",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Manila, Philippines",
    href: "#",
  },
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
          {/* Left */}
          <div data-animate className="opacity-0 translate-y-6 text-center lg:text-left">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Get In Touch
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Let's Build Something Together"}
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {"Have a project in mind or want to automate your business processes? Book a free discovery call and let's discuss how I can help streamline your operations."}
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50 hover:shadow-md hover:shadow-primary/5 active:scale-[0.98]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right — Cal.com Booking */}
          <div data-animate className="opacity-0 translate-y-6 card-glow rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-6 pb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Book a Discovery Call
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Pick a time that works for you — free 30-minute consultation.
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
