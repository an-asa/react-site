import { LinkedinIcon, GithubIcon, MailIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className='py-8 '>
        <div className='max-w-3xl border-t border-t-foreground/10 mx-auto flex items-center gap-24 justify-center pt-8'>
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
    </footer>
  )
}