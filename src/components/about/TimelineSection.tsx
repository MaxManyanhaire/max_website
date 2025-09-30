"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { TimelineItem } from "../../data/about"

interface TimelineSectionProps {
  timeline: TimelineItem[]
}

export function TimelineSection({ timeline }: TimelineSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="space-y-12">
      {timeline.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="space-y-3"
        >
          <h3 className="text-xs font-medium text-muted-foreground tracking-wider">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
