"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface CommandGameKbdProps {
  children: React.ReactNode
  variant?: "default" | "small"
}

export function CommandGameKbd({ children, variant = "default" }: CommandGameKbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center rounded border border-gray-300 bg-gray-50/60 font-medium text-gray-600",
        variant === "default" && "w-4 h-4 text-xs leading-5",
        variant === "small" && "px-1.5 py-0.5 text-[9.6px] font-semibold leading-[10.4px]",
      )}
    >
      {children}
    </kbd>
  )
}
