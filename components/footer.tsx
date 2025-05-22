import { LinkedinIcon, GithubIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className='mt-18 block'>
        <div className="max-w-3xl w-full mx-auto text-center p-8">
            <div className="border-t border-t-foreground/10 mx-auto flex items-center gap-24 justify-center p-8">
                <a href="https://www.linkedin.com/in/jzygadlo/">
                    <span className='sr-only'>LinkedIn</span>
                    <LinkedinIcon className='hover:text-foreground/50 transition-colors' />
                </a>
                <a href="https://github.com/an-asa">
                    <span className='sr-only'>Github</span>
                    <GithubIcon className='hover:text-foreground/50 transition-colors' />
                </a>
                <a href="mailto:jan.zygadlo.0@gmail.com">
                    <span className='sr-only'>Email</span>
                    <MailIcon className='hover:text-foreground/50 transition-colors' />
                </a>
            </div>
            <div className="space-y-2 mb-8">
                <p className='text-sm text-muted-foreground'>© 2025 Jan Zygadło. All rights reserved.</p>
                <Link href="/privacy" className='underline-offset-4 underline text-sm text-muted-foreground hover:text-muted-foreground/50'>Privacy policy</Link>
            </div>
        </div>
    </footer>
  )
}