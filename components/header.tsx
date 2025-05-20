"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { LargeScreenNavigation, SmallScreenNavigation } from "./navigation"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed w-full top-0 border-b z-50 bg-card">
      <nav className='mx-auto max-w-4xl flex justify-between p-4'>
        {/* Small screen navigation */}
        <SmallScreenNavigation className="md:hidden" />
        <div className="flex gap-8">
          <div className="-my-4 p-4 tracking-tighter font-serif text-white font-bold text-3xl bg-[url('/William_Morris_-_tilable_vectorized_Venetian.svg')] bg-size-[auto_300px] bg-emerald-500">
            <div>
              <Link href="/">Jan Zygadło</Link>
            </div>
          </div>
          {/* Large screen navigation */}
          <LargeScreenNavigation className="hidden md:flex" />
        </div>
        <Button variant='ghost' size='icon' onClick={theme == "light" ? () => setTheme("dark") : () => setTheme("light")}>
          <SunIcon className='visible dark:hidden'/>
          <MoonIcon className='hidden dark:flex'/>
        </Button>
      </nav>
    </header>
  )
}
