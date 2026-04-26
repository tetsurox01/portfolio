import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ResultsBar } from "@/components/results-bar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Transformation } from "@/components/transformation"
import { HowIWork } from "@/components/how-i-work"
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
        <ResultsBar />
        <div className="section-divider mx-auto max-w-5xl" />
        <About />
        <div className="section-divider mx-auto max-w-5xl" />
        <Services />
        <div className="section-divider mx-auto max-w-5xl" />
        <Transformation />
        <div className="section-divider mx-auto max-w-5xl" />
        <HowIWork />
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
