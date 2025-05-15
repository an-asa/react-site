"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 bg-[url('../resources/William_Morris_-_tilable_vectorized_Venetian.svg')] border-b z-50 backdrop-blur-sm">
      <nav className='mx-auto max-w-3xl flex items-center justify-between gap-10 p-6'>
        {/* Large screen navigation */}
        <ul className='hidden sm:flex gap-8 items-center justify-center font-bold '>
          <li className='mr-12 text-2xl'>
            <Link href="/">Jan Zygadlo</Link>
          </li>
          <li className='hover:text-foreground/50 transition-colors'>
            <Link href='#'>About</Link>
          </li>
          <li className='hover:text-foreground/50 transition-colors'>
            <Link href='#'>About</Link>
          </li>
          <li className='hover:text-foreground/50 transition-colors'>
            <Link href='#'>About</Link>
          </li>
        </ul>
        {/* Small screen navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='sm:hidden'>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='max-w-3xs'>
            <SheetHeader className='border-b-2 border-b-foreground/10'>
              <SheetTitle className='font-bold'>
                <Link href="/">JZ</Link>
              </SheetTitle>
            </SheetHeader>
            <ul className='grid gap-8 px-4 mt-2'>
              <li className='hover:text-foreground/50 transition-colors'>
                <Link href='#'>About</Link>
              </li>
              <li className='hover:text-foreground/50 transition-colors'>
                <Link href='#'>About</Link>
              </li>
              <li className='hover:text-foreground/50 transition-colors'>
                <Link href='#'>About</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
        <Link href="/" className='sm:hidden font-bold text-2xl'>Jan Zygadlo</Link>
        <Button variant='ghost' size='icon' onClick={theme == "light" ? () => setTheme("dark") : () => setTheme("light")}>
          <SunIcon className='visible dark:hidden'/>
          <MoonIcon className='hidden dark:flex'/>
        </Button>
      </nav>
    </header>
  )
}
