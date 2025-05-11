import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, MoonIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className='sticky top-0 bg-background/30 backdrop-blur-md z-50 border-b border-b-foreground/10'>
      <nav className='mx-auto max-w-3xl flex items-center justify-between gap-10 p-6'>
        {/* Large screen navigation */}
        <ul className='hidden sm:flex gap-8 items-center justify-center font-medium'>
          <li className='mr-2'>
          <Link href="/" className='font-bold'>JZ</Link>
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
            <Button variant='outline' size='icon' className='sm:hidden'>
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
        <Link href="/" className='sm:hidden font-bold'>JZ</Link>
        <Button variant='outline' size='icon'>
          <MoonIcon />
        </Button>
      </nav>
    </header>
  )
}
