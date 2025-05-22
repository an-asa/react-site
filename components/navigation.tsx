import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  SheetContentPrimitive,
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "./ui/sheet"
import { Button } from "./ui/button"
import { ChevronsLeft, MenuIcon } from "lucide-react"

type NavItem = {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Contact me", href: "/contact" }
]

export function LargeScreenNavigation({
  className
}: React.ComponentProps<"div">) {
  return (
    <ul className={cn("flex items-center justify-center gap-8", className)}>
      {navItems.map((item, index) => (
        <li key={index} className='hover:text-foreground/50 transition-colors'>
          <Link key={index} href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function SmallScreenNavigation({
  className
}: React.ComponentProps<"button">) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className={cn(className)}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContentPrimitive side='left' className='max-w-3xs'>
        <SheetHeader className='flex items-end border-b bg-emerald-500 bg-[url("/William_Morris_-_tilable_vectorized_Venetian.svg")] bg-size-[auto_300px]'>
          <SheetTitle className='sr-only'>Navigation</SheetTitle>
          <SheetClose className='rounded-md p-1.5 text-white transition-colors hover:bg-black/20 disabled:pointer-events-none'>
            <ChevronsLeft />
            <span className='sr-only'>Close</span>
          </SheetClose>
        </SheetHeader>
        <ul className='grid gap-8 p-8 text-xl'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className='hover:text-foreground/50 transition-colors'
            >
              <SheetClose key={index} asChild>
                <Link key={index} href={item.href}>
                  {item.name}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContentPrimitive>
    </Sheet>
  )
}
