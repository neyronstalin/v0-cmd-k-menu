"use client"

import type React from "react"

import { CommandGroup } from "@/components/ui/command"

interface CommandGameSectionProps {
  title: string
  children: React.ReactNode
}

export function CommandGameSection({ title, children }: CommandGameSectionProps) {
  return (
    <CommandGroup>
      <div className="px-3 py-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide leading-5 text-left">{title}</div>
      </div>
      <div className="px-2 pb-2 space-y-1">{children}</div>
    </CommandGroup>
  )
}
