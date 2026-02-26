"use client"

import { useEffect, useRef } from "react"
import { Phone, Search, Puzzle, FlaskConical, Rocket } from "lucide-react"

const steps = [
    {
        number: 1,
        title: "Discovery Call",
        description:
            "We discuss your current processes and pain points to understand what needs automating.",
        icon: Phone,
    },
    {
        number: 2,
        title: "Process Mapping",
        description:
            "I analyze your workflow to find the cleanest, most efficient automation approach.",
        icon: Search,
    },
    {
        number: 3,
        title: "Automation Build",
        description:
            "Building your automation with proper logic, error handling, and documentation.",
        icon: Puzzle,
    },
    {
        number: 4,
        title: "Testing & QA",
        description:
            "Thorough testing to ensure everything works reliably before going live.",
        icon: FlaskConical,
    },
    {
        number: 5,
        title: "Deployment & Support",
        description:
            "Launch your automation with documentation and ongoing support to keep things running.",
        icon: Rocket,
    },
]

export function HowIWork() {
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
            { threshold: 0.05 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="process" ref={sectionRef} className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                {/* Section header */}
                <div data-animate className="opacity-0 translate-y-6 mb-16 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                        Process
                    </p>
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        How I Work
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                        A transparent process that ensures you understand and own your automation.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line (desktop) */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:block" />

                    <div className="space-y-10 lg:space-y-16">
                        {steps.map((step, index) => {
                            const isLeft = index % 2 === 0
                            const Icon = step.icon

                            return (
                                <div
                                    key={step.number}
                                    data-animate
                                    className="opacity-0 translate-y-6"
                                >
                                    <div
                                        className={`flex flex-col items-center gap-6 lg:flex-row ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Card */}
                                        <div className="w-full lg:w-[45%]">
                                            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 card-glow">
                                                <h3 className="mb-2 text-lg font-bold text-foreground">
                                                    {step.title}
                                                </h3>
                                                <p className="text-sm leading-relaxed text-muted-foreground">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Icon + Number (center) */}
                                        <div className="relative flex shrink-0 items-center justify-center lg:w-[10%]">
                                            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-md shadow-primary/10 border border-primary/20 ring-1 ring-primary/10 transition-transform duration-300 hover:scale-110">
                                                <Icon size={24} />
                                                {/* Number badge */}
                                                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Spacer for the other side */}
                                        <div className="hidden w-[45%] lg:block" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
