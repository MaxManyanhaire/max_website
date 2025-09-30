"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface BentoImage {
  id: string
  src: string
  alt: string
  className: string
}

interface BentoGridProps {
  images: BentoImage[]
}

export function BentoGrid({ images }: BentoGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className={cn("relative rounded-2xl overflow-hidden bg-card", image.className)}
        >
          <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  )
}
