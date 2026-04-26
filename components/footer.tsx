import Image from "next/image"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">

          {/* Brand */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a href="#" className="flex items-center gap-2.5 group" aria-label="Automate With Rox — home">
              <div className="relative h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Automate With Rox logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Automate With <span className="text-primary">Rox</span>
              </span>
            </a>
            <p className="max-w-[220px] text-xs leading-relaxed text-muted-foreground text-center sm:text-left">
              Custom automation systems for service-based businesses. Built, tested, and documented.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:roxlicahayag@gmail.com"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Email
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} Roxli Cahayag · Automate With Rox. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground">
            Manila, Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}
