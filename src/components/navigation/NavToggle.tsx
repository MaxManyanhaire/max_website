"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { Section } from "../../App"
import { cn } from "../../lib/utils"

interface NavToggleProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

export function NavToggle({ activeSection, onSectionChange }: NavToggleProps) {
  return (
    <div className="relative bg-secondary rounded-full p-1 flex items-center gap-1">
      {/* Animated background indicator */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          layoutId="activeSection"
          className="absolute inset-y-1 bg-background rounded-full"
          initial={false}
          animate={{
            x: activeSection === "work" ? 4 : "calc(100% + 4px)",
            width: activeSection === "work" ? 60 : 68,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </AnimatePresence>

      {/* Buttons */}
      <button
        onClick={() => onSectionChange("work")}
        className={cn(
          "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
          activeSection === "work" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <motion.span
          animate={{
            scale: activeSection === "work" ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          work
        </motion.span>
      </button>

      <button
        onClick={() => onSectionChange("about")}
        className={cn(
          "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
          activeSection === "about" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <motion.span
          animate={{
            scale: activeSection === "about" ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          about
        </motion.span>
      </button>
    </div>
  )
}
