"use client"
import { motion } from "framer-motion"
import { CommandItem } from "@/components/ui/command"
import { CommandGameKbd } from "./CommandGameKbd"
import type { LucideIcon } from "lucide-react"

interface CommandGameItemProps {
  icon: LucideIcon
  label: string
  shortcut?: string[]
  onSelect: () => void
}

export function CommandGameItem({ icon: Icon, label, shortcut, onSelect }: CommandGameItemProps) {
  return (
    <CommandItem
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-50/80 group transition-colors duration-200"
    >
      <motion.div className="flex items-center gap-3 flex-1">
        <Icon size={20} className="text-gray-500 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-900 leading-5">{label}</span>
      </motion.div>

      {shortcut && (
        <div className="flex items-center gap-1.5">
          {shortcut.map((key, index) => (
            <CommandGameKbd key={index}>{key}</CommandGameKbd>
          ))}
        </div>
      )}
    </CommandItem>
  )
}
