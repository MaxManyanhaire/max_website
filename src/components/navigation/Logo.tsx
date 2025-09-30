"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <span className="text-sm font-medium">M</span>
      </div>
    </motion.div>
  )
}
