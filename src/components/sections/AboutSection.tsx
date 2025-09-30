"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { aboutImages, timeline } from "../../data/about"
import { BentoGrid } from "../about/BentoGrid"
import { TimelineSection } from "../about/TimelineSection"
import { ContactSection } from "../about/ContactSection"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Bento Grid Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <BentoGrid images={aboutImages} />
        </motion.div>

        {/* About Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-16">About</h2>
        </motion.div>

        {/* Timeline */}
        <TimelineSection timeline={timeline} />

        {/* Contact */}
        <ContactSection />
      </div>
    </section>
  )
}
