"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-light text-foreground">Say Hi</h3>
      <p className="text-muted-foreground">
        If You'd Like To Connect, Collaborate, Or Just Say Hi:{" "}
        <a href="mailto:maxwell.manyanhaire@gmail.com" className="text-foreground hover:underline">
          maxwell.manyanhaire@gmail.com
        </a>
      </p>
    </motion.div>
  )
}
