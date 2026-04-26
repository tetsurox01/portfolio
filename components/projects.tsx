"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { X, ChevronRight } from "lucide-react"

type ToolCategory = "All" | "Make" | "n8n" | "GoHighLevel" | "Zapier"

interface CaseStudy {
  problem: string
  solution: string
  results: string[]
}

interface Project {
  title: string
  description: string
  image: string
  tool: ToolCategory
  features: string[]
  caseStudy: CaseStudy
}

const projects: Project[] = [
  {
    title: "Automated Financial Reporting Integration",
    description:
      "Automated pipeline that syncs Xero financial data with Asana tasks, routes through iterators and Google Sheets for reconciliation and report generation.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Make%20-%20Automated%20Financial%20Reporting%20Integration%20%28Xero%20to%20Asana%29-9boW7t7t3SE5b4Ve6tyeqj5yrMNyw4.png",
    tool: "Make",
    features: ["Xero API Integration", "Router Logic", "Google Sheets Sync", "Asana Upload"],
    caseStudy: {
      problem: "The client's finance team spent 8+ hours weekly manually extracting data from Xero, cross-referencing in spreadsheets, and updating Asana tasks for each report cycle.",
      solution: "Built an end-to-end Make scenario that pulls financial data from Xero via API, routes transactions through iterators for categorization, syncs reconciled data to Google Sheets, and automatically creates/updates Asana tasks with report attachments.",
      results: [
        "Reduced reporting time from 8 hours to under 15 minutes",
        "Eliminated manual data entry errors",
        "Real-time financial visibility for the team via Asana",
      ],
    },
  },
  {
    title: "Asana to Xero Sync",
    description:
      "Bi-directional sync workflow between Asana task management and Xero accounting, with intelligent routing and text aggregation for consolidated financial reports.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Make%20-%20Asana%20to%20Xero%20Sync-JxdcJ7KhDpt8bM9lpcwuw2hWd86Ti9.png",
    tool: "Make",
    features: ["Bi-directional Sync", "Iterator Processing", "Text Aggregation", "Attachment Upload"],
    caseStudy: {
      problem: "Project managers tracked billable work in Asana but had to manually re-enter data into Xero for invoicing, causing delays and discrepancies between systems.",
      solution: "Created a bi-directional sync using Make that watches both Asana and Xero for changes, routes updates through intelligent filters, aggregates text data for consolidated entries, and uploads supporting attachments automatically.",
      results: [
        "Bi-directional sync running in real-time",
        "Invoicing turnaround cut from 3 days to same-day",
        "Zero discrepancies between project management and accounting",
      ],
    },
  },
  {
    title: "Gmail Attachments Sorter",
    description:
      "AI-powered email attachment processor that uses Google Gemini AI to classify and extract structured data from Gmail attachments, then organizes them in Drive and Sheets.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Make%20-%20Gmail%20Attachements%20Sorter-6x7I6oytDyt69iLtMNkaLnjHPec9sW.png",
    tool: "Make",
    features: ["Google Gemini AI", "Data Extraction", "Google Drive Sorting", "Email Notification"],
    caseStudy: {
      problem: "The client received 50+ email attachments daily (invoices, receipts, contracts) and spent hours manually sorting, renaming, and filing them into the correct Google Drive folders.",
      solution: "Deployed a Make automation powered by Google Gemini AI that reads each attachment, classifies the document type, extracts key data (vendor, amount, date), sorts files into the right Drive folders, logs metadata to Google Sheets, and sends a daily summary email.",
      results: [
        "50+ attachments processed automatically per day",
        "99% classification accuracy with Gemini AI",
        "Saved 2+ hours of daily manual filing work",
      ],
    },
  },
  {
    title: "ASMR Video Creator",
    description:
      "Automated video content pipeline using Google Gemini for prompt generation, JWT-authenticated video API for generation, with error filtering and YouTube upload.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n8n%20-%20ASMR%20Video%20Creator-yyVVVAS9pa9YUs0UNIDPxR7Ovo5gig.png",
    tool: "n8n",
    features: ["AI Prompt Generation", "Video Generation API", "Error Handling", "YouTube Upload"],
    caseStudy: {
      problem: "A content creator wanted to scale their ASMR YouTube channel but spent 4-5 hours per video on scripting, generation, and uploading — limiting output to 2-3 videos per week.",
      solution: "Built an n8n workflow that uses Google Gemini to generate creative ASMR prompts, sends them to a JWT-authenticated video generation API, filters out failed renders, and automatically uploads successful videos to YouTube with optimized metadata.",
      results: [
        "Video production scaled from 3 to 15+ per week",
        "Fully hands-off content pipeline",
        "Built-in error handling prevents failed uploads",
      ],
    },
  },
  {
    title: "Marketing Sales Funnel Automation",
    description:
      "Complete lead nurturing funnel with automated email sequences, follow-up reminders, priority-based agent assignment, and CRM integration via Google Sheets.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n8n%20-%20Marketing%20Sales%20Funnel%20Automation-uLbWnhVWzIln2RD4P9uS9AaqThOvKt.png",
    tool: "n8n",
    features: ["Lead Scoring", "Multi-step Email Sequence", "Agent Rotation", "Priority Routing"],
    caseStudy: {
      problem: "The sales team had no structured follow-up process — leads were falling through the cracks, and there was no visibility into which leads were hot vs. cold.",
      solution: "Designed a complete sales funnel in n8n with lead scoring, multi-step email sequences triggered by behavior, priority-based agent assignment with round-robin rotation, and CRM tracking via Google Sheets.",
      results: [
        "Lead response time reduced from 24 hours to under 5 minutes",
        "30% increase in lead-to-meeting conversion",
        "Full pipeline visibility for the sales team",
      ],
    },
  },
  {
    title: "AI Agent Workflow",
    description:
      "Intelligent email classifier using GPT-4.1-mini that routes messages to specialized AI agents (Customer Support with Claude 3.7, Priority handler) for automated responses and drafts.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n8n%20-%20AI%20Agent%20Workflow-DNKK06wD4HAwlg6Q2N9apSvpGueOjL.png",
    tool: "n8n",
    features: ["GPT-4.1 Classifier", "Claude 3.7 Agent", "Multi-Agent System", "Auto-labeling"],
    caseStudy: {
      problem: "The client's support inbox received 100+ emails daily. Manually reading, classifying, and routing each email consumed 3-4 hours of staff time and caused delayed responses.",
      solution: "Built a multi-agent AI system in n8n: GPT-4.1-mini classifies incoming emails by type and urgency, then routes them to specialized agents — Claude 3.7 handles customer support with context-aware drafts, while a priority handler escalates urgent issues with auto-labeling.",
      results: [
        "100+ emails classified and routed automatically daily",
        "Average response time dropped from 4 hours to 15 minutes",
        "Support team focuses only on complex, escalated issues",
      ],
    },
  },
  {
    title: "AI Voice Receptionist",
    description:
      "Full AI receptionist system with sub-workflows for client lookup, booking, rescheduling, cancellation, availability checking, and call log summaries.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n8n%20-%20AI%20Voice%20Receptionist-v43kub3um9zzOGP9q08c3G9PNlj38G.png",
    tool: "n8n",
    features: ["Voice Processing", "Calendar Integration", "Client Management", "Call Logging"],
    caseStudy: {
      problem: "A service business was missing calls during peak hours and after hours, losing potential bookings. Hiring a full-time receptionist wasn't cost-effective.",
      solution: "Developed an AI voice receptionist in n8n with sub-workflows for client lookup, real-time availability checking, booking/rescheduling/cancellation, and automated call log summaries sent to the business owner.",
      results: [
        "24/7 call handling without hiring staff",
        "Zero missed booking opportunities",
        "Automated call summaries for every interaction",
      ],
    },
  },
  {
    title: "AI Customer Support Workflow",
    description:
      "AI-driven customer support using text classification, Google Gemini Flash 2.0 with RAG knowledge base and OpenAI embeddings for intelligent email responses.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/n8n%20-%20AI%20Customer%20Support%20Workflow-wjY0YGq2EqCDNg7rTCwxUeiWzJQuKp.png",
    tool: "n8n",
    features: ["Gemini Flash 2.0", "RAG Knowledge Base", "OpenAI Embeddings", "Auto-Reply"],
    caseStudy: {
      problem: "Customer support agents repeatedly answered the same questions, and response quality varied depending on the agent. The knowledge base existed but was rarely referenced.",
      solution: "Built an AI support system using Gemini Flash 2.0 with a RAG architecture — incoming emails are classified, matched against a vectorized knowledge base using OpenAI embeddings, and auto-replied with accurate, consistent answers.",
      results: [
        "70% of support tickets resolved automatically",
        "Consistent, knowledge-base-backed responses",
        "Support team reassigned to high-value tasks",
      ],
    },
  },
  {
    title: "Appointment Confirmation",
    description:
      "Streamlined appointment workflow that automatically processes booking status changes, manages tags, sends confirmation emails, and updates opportunity records.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GHL%20-%20Appointment%20Confirmation-vrsSMWWNNzPC0wLruhxFDGf6A2Rcex.png",
    tool: "GoHighLevel",
    features: ["Status Triggers", "Tag Management", "Email Automation", "Opportunity Updates"],
    caseStudy: {
      problem: "Appointment no-shows were high because clients didn't receive timely confirmations. Staff manually sent confirmation emails and updated CRM records, often missing steps.",
      solution: "Created a GoHighLevel workflow triggered by booking status changes that automatically manages contact tags, sends branded confirmation emails, and updates the opportunity pipeline — all without manual intervention.",
      results: [
        "No-show rate reduced by 40%",
        "100% of bookings receive instant confirmation",
        "CRM records always up-to-date automatically",
      ],
    },
  },
  {
    title: "Lead Capture, Assign Task, Notify User",
    description:
      "Intelligent lead routing system that classifies form submissions by urgency (Hot, Warm, Cold), assigns to users, formats currency data, creates tasks, and sends notifications.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GHL%20-%20Lead%20Capture%2C%20Assign%20Task%2C%20Notify%20User-tkOjdiYrZ9pKvryZCk8xOeLu0iB0W5.png",
    tool: "GoHighLevel",
    features: ["Lead Scoring by Urgency", "Auto Assignment", "Currency Formatting", "Internal Alerts"],
    caseStudy: {
      problem: "Incoming leads from web forms were all treated the same — no prioritization, no instant assignment, and sales reps discovered new leads hours later when checking the CRM.",
      solution: "Built a GHL workflow that classifies each lead by urgency (Hot, Warm, Cold) based on form data, auto-assigns to the right team member, formats currency fields, creates follow-up tasks, and sends instant internal notifications.",
      results: [
        "Hot leads contacted within 2 minutes of submission",
        "Even distribution of leads across the sales team",
        "Full audit trail with automatic task creation",
      ],
    },
  },
  {
    title: "Complete Lead Action Automation",
    description:
      "Comprehensive lead lifecycle manager triggered by Asana task updates, with path-based routing for different deal stages and automated email communication at each step.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zapier%20-%20Complete%20Lead%20Action%20Automation-c2ANKOMUy56qikMznkodp1OpcdHaME.png",
    tool: "Zapier",
    features: ["Multi-path Routing", "Deal Stage Tracking", "Gmail Integration", "Google Drive Folders"],
    caseStudy: {
      problem: "The sales process had multiple stages but transitions were manual — reps forgot to send stage-specific emails, create deal folders, or update tracking sheets when moving deals forward.",
      solution: "Created a Zapier automation triggered by Asana task status updates that routes through different paths based on deal stage, sends the right templated email via Gmail, creates organized Google Drive folders, and logs every transition.",
      results: [
        "100% of deal stage transitions trigger correct actions",
        "Consistent client communication at every stage",
        "Organized deal folders created automatically",
      ],
    },
  },
  {
    title: "AI Content Repurposing",
    description:
      "AI-powered content pipeline that transcribes files from Google Drive, generates blog posts using Zapier AI, then loops and publishes to Facebook Pages and LinkedIn.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zapier%20-%20AI%20Content%20Repurposing-VuZ0Zu9CxKPkpMft015Svp3TmBhy0i.png",
    tool: "Zapier",
    features: ["AI Transcription", "Blog Generation", "Multi-platform Publishing", "Content Looping"],
    caseStudy: {
      problem: "The client had hours of recorded content (podcasts, webinars) sitting unused in Google Drive. Repurposing into blog posts and social media was too time-consuming to do manually.",
      solution: "Built a Zapier pipeline that automatically transcribes audio/video files from Drive, uses Zapier AI to generate SEO-optimized blog posts, then loops through and publishes to Facebook Pages and LinkedIn with platform-specific formatting.",
      results: [
        "Every recording automatically becomes 3+ pieces of content",
        "Multi-platform publishing with zero manual work",
        "Content output increased 5x without extra effort",
      ],
    },
  },
  {
    title: "Automated Leads Enrichment",
    description:
      "Lead enrichment pipeline using Apollo for data enrichment with priority-based routing, Google Sheets logging, Slack notifications, and AI-generated personalized emails.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automated%20Leads%20Enrichment-8j5fOvNuzS1EB4v32cHau56NrJAtRA.png",
    tool: "Zapier",
    features: ["Apollo Enrichment", "Priority Routing", "Slack Notifications", "AI Email Drafts"],
    caseStudy: {
      problem: "The outbound sales team received raw lead lists with minimal data — reps spent 30+ minutes per lead researching company info, finding the right contact, and writing personalized outreach emails.",
      solution: "Deployed a Zapier workflow that enriches each lead via Apollo (job title, company size, industry), routes by priority score, logs enriched data to Google Sheets, alerts the team via Slack, and generates AI-personalized outreach emails ready to send.",
      results: [
        "Lead research time reduced from 30 minutes to zero",
        "Personalized outreach emails generated automatically",
        "Sales team focuses purely on conversations, not research",
      ],
    },
  },
]

const categories: ToolCategory[] = ["All", "Zapier", "Make", "n8n", "GoHighLevel"]

/* ─── Case Study Modal ────────────────────────────────────────────── */
function CaseStudyModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  useEffect(() => {
    requestAnimationFrame(() => {
      overlayRef.current?.classList.remove("opacity-0")
      overlayRef.current
        ?.querySelector("[data-modal-content]")
        ?.classList.remove("scale-95", "opacity-0")
    })
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 transition-opacity duration-300 opacity-0"
    >
      <div
        data-modal-content
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 scale-95 opacity-0"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 border border-border text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:scale-110 active:scale-95"
          aria-label="Close case study"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl border-b border-border/30">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.tool} automation workflow`}
            fill
            className="object-contain bg-background/95"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm border border-border">
              {project.tool}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Case Study Sections */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Problem */}
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-[10px]">
                  !
                </span>
                The Problem
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-[10px]">
                  ✓
                </span>
                The Solution
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-xl border border-border bg-secondary/30 p-5">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Key Results
            </h4>
            <ul className="space-y-2">
              {project.caseStudy.results.map((result, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <ChevronRight
                    size={14}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Project Card ────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onCardClick,
}: {
  project: Project
  index: number
  onCardClick: (project: Project) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-up")
              entry.target.classList.remove("opacity-0", "translate-y-6")
            }, index * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      onClick={() => onCardClick(project)}
      className="opacity-0 translate-y-6 group flex flex-col overflow-hidden rounded-xl border border-border bg-card cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 active:scale-[0.98]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/30">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.tool} automation workflow screenshot`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Tool badge overlay */}
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm border border-border">
            {project.tool}
          </span>
        </div>
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
          <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm border border-border">
            View Case Study
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-base font-semibold text-foreground leading-snug">
          {project.title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary transition-colors hover:bg-primary/10"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Projects Section ────────────────────────────────────────────── */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ToolCategory>("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleCardClick = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  useEffect(() => {
    const filtered =
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.tool === activeFilter)
    setFilteredProjects(filtered)
  }, [activeFilter])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
            entry.target.classList.remove("opacity-0", "translate-y-6")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      const header = sectionRef.current.querySelector("[data-header]")
      if (header) observer.observe(header)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="work" className="px-6 py-24">
        <div ref={sectionRef} className="mx-auto max-w-6xl">
          {/* Section header */}
          <div data-header className="mb-12 max-w-2xl opacity-0 translate-y-6">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Portfolio
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Previous Work
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Real automation workflows I have built across different platforms. Click any project to view the full case study.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count =
                cat === "All" ? projects.length : projects.filter((p) => p.tool === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                >
                  {cat}
                  <span
                    className={`ml-1.5 text-xs ${activeFilter === cat ? "text-primary-foreground/70" : "text-muted-foreground/60"
                      }`}
                  >
                    ({count})
                  </span>
                </button>
              )
            })}
          </div>

          {/* Projects grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study modal */}
      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  )
}
