export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          Roxli<span className="text-primary">.</span>
        </a>

        <p className="text-sm text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Roxli Cahayag. All rights reserved.`}
        </p>

        <div className="flex gap-6">
          <a
            href="mailto:roxlicahayag@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href="tel:+639566315780"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  )
}
