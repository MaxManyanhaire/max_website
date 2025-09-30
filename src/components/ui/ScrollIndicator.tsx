"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1.5"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-1 h-2 bg-muted-foreground rounded-full"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-foreground"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
