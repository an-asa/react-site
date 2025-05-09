import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className='w-full'>
      <nav>
        <div className='hidden md:flex'>
          <ul>
            <li className='hover:text-foreground transition-colors'>
              <Link href='#'>About</Link>
            </li>
          </ul>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='md:hidden'>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <ul>
              <li className='hover:text-foreground transition-colors'>
                <Link href='#'>About</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
