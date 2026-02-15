"use client"

import CommandGameMenu from "@/components/command-game-menu/CommandGameMenu"

export default function Home() {
  const handleSelect = (id: string) => {
    console.log(`Selected command: ${id}`)
    // Add your command handling logic here
  }

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center p-4 sm:p-8 items-start mb-0 mt-[0] pt-20 sm:pt-44">
      <div className="text-center space-y-8 w-full max-w-md sm:max-w-none">
        <div className="flex justify-center">
          <CommandGameMenu onSelect={handleSelect} />
        </div>

        <div className="text-sm text-gray-500 space-y-2"></div>
      </div>
    </main>
  )
}
