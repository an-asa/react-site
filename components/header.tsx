"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import NavigationItems from "./navigation-items"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const navigationItems = [ "Home", "Contact me" ]

  return (
    <header className="fixed w-full top-0 border-b z-50 bg-card">
      <nav className='mx-auto max-w-4xl flex justify-between p-4'>
        {/* Small screen navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='max-w-3xs'>
            <SheetHeader className="p-8.5 border-b bg-[url('/William_Morris_-_tilable_vectorized_Venetian.svg')] bg-size-[auto_300px] bg-emerald-500">
              <SheetTitle className='sr-only'>Navigation</SheetTitle>
            </SheetHeader>
            <NavigationItems items={navigationItems} vertical={true} />
          </SheetContent>
        </Sheet>
        <div className="flex gap-8">
          <div className="-my-4 p-4 tracking-tighter font-serif text-white font-bold text-3xl bg-[url('/William_Morris_-_tilable_vectorized_Venetian.svg')] bg-size-[auto_300px] bg-emerald-500">
            <div>
              <Link href="/">Jan Zygadło</Link>
            </div>
          </div>
          {/* Large screen navigation */}
          <div className="hidden md:flex">
            <NavigationItems items={navigationItems} vertical={false} />
          </div>
        </div>
        <Button variant='ghost' size='icon' onClick={theme == "light" ? () => setTheme("dark") : () => setTheme("light")}>
          <SunIcon className='visible dark:hidden'/>
          <MoonIcon className='hidden dark:flex'/>
        </Button>
      </nav>
    </header>
  )
}
