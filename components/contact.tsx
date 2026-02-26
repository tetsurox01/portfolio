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
              {"Have a project in mind or want to automate your business processes? I'd love to hear from you. Let's discuss how I can help streamline your operations."}
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

          {/* Right — contact form */}
          <div data-animate className="opacity-0 translate-y-6 card-glow rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Send a Message
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="btn-ripple rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
