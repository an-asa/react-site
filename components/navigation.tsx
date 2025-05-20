import Link from "next/link";

import { cn } from "@/lib/utils"
import { SheetContentPrimitive, Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { ChevronsLeft, MenuIcon } from "lucide-react";

type NavItem = {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Contact me", href: "/contact" },
    { name: "About me", href: "/about" }
];

function NavLink({ name, href }: NavItem) {
    return (
        <li className='hover:text-foreground/50 transition-colors'>
            <Link href={href}>{name}</Link>
        </li>
    )
}

export function LargeScreenNavigation({className}: React.ComponentProps<"div">) 
{
    return (
        <ul className={cn("flex items-center justify-center gap-8", className)}>
            {navItems.map((item, index) => (
                <NavLink key={index} name={item.name} href={item.href} />
            ))}
        </ul>
    )
}

export function SmallScreenNavigation({className}: React.ComponentProps<"button">) 
{
    return (
        <Sheet>
            <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className={cn(className)}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContentPrimitive side='left' className='max-w-3xs'>
            <SheetHeader className='flex items-end border-b bg-[url("/William_Morris_-_tilable_vectorized_Venetian.svg")] bg-size-[auto_300px] bg-emerald-500'>
                <SheetTitle className='sr-only'>Navigation</SheetTitle>
                <SheetClose className="text-white hover:bg-black/20 transition-colors p-1.5 rounded-md disabled:pointer-events-none">
                        <ChevronsLeft/>
                        <span className='sr-only'>Close</span>
                </SheetClose>
            </SheetHeader>
            <ul className="p-8 grid gap-8 text-xl">
                {navItems.map((item, index) => (
                    <NavLink key={index} name={item.name} href={item.href} />
                ))}
            </ul>
          </SheetContentPrimitive>
        </Sheet>
    )
}

export function NavigationItems(props: { items: string[]; vertical: boolean }) {
    const itemsList = props.items.map((item, index) => (
        <li key={index} className='hover:text-foreground/50 transition-colors'>
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
        </li>
    ));
    return (
        <ul className={`${props.vertical ? "grid p-8 text-xl gap-8" : "flex items-center justify-center gap-8"}`}>
            {itemsList}
        </ul>
    )
}