"use client"

import { useState } from "react"
import { Navigation } from "./components/navigation/Navigation"
import { HeroSection } from "./components/sections/HeroSection"
import { ProjectsSection } from "./components/sections/ProjectsSection"
import { AboutSection } from "./components/sections/AboutSection"
import { Footer } from "./components/footer/Footer"

export type Section = "work" | "about"

function App() {
  const [activeSection, setActiveSection] = useState<Section>("work")

  return (
    <div className="min-h-screen relative">
      {/* Background SVG */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portfolio-bg-6YNeSiuhlBJS2Xv3g74NHcIC7aLPBf.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

        {activeSection === "work" ? (
          <>
            <HeroSection />
            <ProjectsSection />
          </>
        ) : (
          <AboutSection />
        )}

        <Footer />
      </div>
    </div>
  )
}

export default App
