"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { CommandGameKbd } from "./CommandGameKbd"

interface CommandGameButtonProps {
  onClick: () => void
  shortcutHint?: boolean
}

const SMOOTH_SPRING = { type: "spring", stiffness: 200, damping: 30, mass: 1 } as const

export function CommandGameButton({ onClick, shortcutHint }: CommandGameButtonProps) {
  return (
    <motion.button
      layoutId="commandMenu"
      onClick={onClick}
      className="group relative flex items-center gap-2 px-4 py-3 bg-white rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 focus:outline-none w-full sm:min-w-[320px] sm:w-auto"
      transition={SMOOTH_SPRING}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        willChange: "transform",
      }}
    >
      <Search size={16} className="text-gray-400 flex-shrink-0" />
      <span className="flex-1 text-left text-sm text-gray-400 font-normal leading-[14px]">Search for anything</span>
      {shortcutHint && (
        <div className="hidden xs:flex items-center gap-1">
          <CommandGameKbd>⌘</CommandGameKbd>
          <CommandGameKbd>K</CommandGameKbd>
        </div>
      )}
    </motion.button>
  )
}
