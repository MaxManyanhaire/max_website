"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { Project } from "../../data/projects"
import { cn } from "../../lib/utils"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const isLeft = project.layout === "left"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn("grid md:grid-cols-2 gap-12 items-center", isLeft ? "" : "md:grid-flow-dense")}
    >
      {/* Text Content */}
      <div className={cn("space-y-6", isLeft ? "" : "md:col-start-2")}>
        <div>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">{project.title}</h2>
          <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <button className="px-6 py-2.5 bg-secondary hover:bg-accent rounded-lg text-sm font-medium transition-colors">
          CASE STUDY
        </button>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={cn("relative", isLeft ? "" : "md:col-start-1 md:row-start-1")}
      >
        <div className="relative rounded-2xl overflow-hidden bg-card shadow-2xl">
          <img src={project.image || "/placeholder.svg"} alt={project.imageAlt} className="w-full h-auto" />
        </div>
      </motion.div>
    </motion.div>
  )
}
