"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, LayoutGroup } from "framer-motion"
import { CommandGameButton } from "./CommandGameButton"
import { CommandGamePalette } from "./CommandGamePalette"

interface CommandGameMenuProps {
  shortcutHint?: boolean
  onSelect?: (id: string) => void
}

export default function CommandGameMenu({ shortcutHint = true, onSelect }: CommandGameMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleSelect = useCallback(
    (id: string) => {
      onSelect?.(id)
      handleClose()
    },
    [onSelect, handleClose],
  )

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault()
        if (isOpen) {
          handleClose()
        } else {
          handleOpen()
        }
      } else if (event.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, handleOpen, handleClose])

  return (
    <div className="relative">
      <LayoutGroup>
        <AnimatePresence>
          {!isOpen ? (
            <CommandGameButton key="button" onClick={handleOpen} shortcutHint={shortcutHint} />
          ) : (
            <CommandGamePalette key="palette" onClose={handleClose} onSelect={handleSelect} />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  )
}
