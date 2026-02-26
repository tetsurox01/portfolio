"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

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
                {/* Section header */}
                <div data-animate className="opacity-0 translate-y-6 mb-12 text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                        About Me
                    </p>
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Who I Am
                    </h2>
                </div>

                {/* Content: Photo + Text */}
                <div
                    data-animate
                    className="opacity-0 translate-y-6 card-glow grid gap-8 lg:grid-cols-[300px_1fr] rounded-2xl border border-border bg-card p-8 sm:p-10 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
                >
                    {/* Photo */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative h-[320px] w-[280px] sm:h-[360px] sm:w-[300px] overflow-hidden rounded-xl border-2 border-primary/20 shadow-lg shadow-primary/5">
                            <Image
                                src="/roxli.jpg"
                                alt="Roxli Cahayag — Automation Specialist & AI Workflow Architect"
                                fill
                                className="object-cover object-top"
                                sizes="300px"
                                priority
                            />
                            {/* Subtle gradient overlay at bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                        <p>
                            {"I'm "}
                            <span className="font-semibold text-foreground">Roxli Cahayag</span>
                            {" — an Automation Specialist and AI Workflow Architect helping growing businesses streamline operations and scale smarter."}
                        </p>

                        <p>
                            With a background in accounting, I understand how businesses operate
                            at a structural level — from financial systems to backend workflows.
                            Today, I design high-performance automation systems using{" "}
                            <span className="font-medium text-primary">Zapier</span>,{" "}
                            <span className="font-medium text-primary">Make</span>,{" "}
                            <span className="font-medium text-primary">n8n</span>, and{" "}
                            <span className="font-medium text-primary">GoHighLevel</span>{" "}
                            to eliminate repetitive work, optimize CRM processes, and integrate
                            AI into daily operations.
                        </p>

                        <div className="my-6 border-l-2 border-primary/40 pl-5">
                            <p className="text-base font-medium text-foreground italic">
                                {"I don't just connect apps."}
                            </p>
                            <p className="mt-1 text-base font-medium text-foreground italic">
                                I build scalable systems that reduce errors, increase efficiency,
                                and create real operational leverage.
                            </p>
                        </div>

                        <p>
                            {"If you're ready to replace manual processes with intelligent automation, I'm here to architect the system that supports your next level of growth."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
