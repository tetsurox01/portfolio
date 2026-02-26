import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { HowIWork } from "@/components/how-i-work"
import { Experience } from "@/components/experience"
import { ToolsMarquee } from "@/components/tools-marquee"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider mx-auto max-w-5xl" />
        <About />
        <div className="section-divider mx-auto max-w-5xl" />
        <Services />
        <div className="section-divider mx-auto max-w-5xl" />
        <HowIWork />
        <div className="section-divider mx-auto max-w-5xl" />
        <Experience />
        <div className="section-divider mx-auto max-w-5xl" />
        <ToolsMarquee />
        <div className="section-divider mx-auto max-w-5xl" />
        <Projects />
        <div className="section-divider mx-auto max-w-5xl" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
