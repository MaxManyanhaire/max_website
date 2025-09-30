"use client"

import { motion } from "framer-motion"
import type { Section } from "../../App"
import { Logo } from "./Logo"
import { NavToggle } from "./NavToggle"
import { ExternalLink } from "lucide-react"

interface NavigationProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Logo />

        <NavToggle activeSection={activeSection} onSectionChange={onSectionChange} />

        <div className="flex items-center gap-6">
          <a
            href="mailto:maxwell.manyanhaire@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            email <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            resume <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
