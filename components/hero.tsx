import heroPhoto from "@/public/hero-photo.jpeg"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import Link from "next/link"
import { MapPinIcon, MailIcon, DownloadIcon } from "lucide-react"
import Image from "next/image"

function heroTitle() {
  return (
      <h1 className='font-serif text-4xl font-bold tracking-tighter'>
        Hi, I&#39;m Jan!
      </h1>
  )
}

function heroSubtitle() {
  return (
      <h2 className='text-lg'>
        I&#39;m a software specialist with solid experience in testing and test
        automation.
      </h2>
  )
}

function heroContent() {
  return (
    <div>
      <p>
        With over five years of experience with complex government projects,
        I&#39;ve learned how to collaborate, adapt and contribute where it
        counts.
      </p>
      <br />
      <p>
        I&#39;m currently looking for an opportunity to work on new, exciting
        projects. If you think I&#39;d fit into your team, feel free to{" "}
        <Link
          href='/contact'
          className='text-white/70 underline underline-offset-4 transition-colors hover:text-white'
        >
          contact me.
        </Link>
      </p>
      <Button asChild variant='accent' className='mt-8'>
        <a href='/cv_jzygadlo.pdf' className='flex' download>
          <DownloadIcon className='mt-0.5 h-4 w-4' />
          <span className='text-sm'>Download my CV</span>
        </a>
      </Button>
    </div>
  )
}

function heroFooterContent() {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <MapPinIcon className='h-4 w-4' />
        <p className='text-sm'>South West England, United Kingdom</p>
      </div>
      <div className='mt-2 flex items-center gap-2'>
        <MailIcon className='h-4 w-4' />
        <p className='text-sm'>jan.zygadlo.0@gmail.com</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div className='relative flex h-150 sm:h-200 w-full'>
      <Image
        src={heroPhoto}
        placeholder='blur'
        alt='Banner photo'
        fill={true}
        objectFit='cover'
        unoptimized={true}
      />
      <div className='mx-auto flex w-full max-w-3xl justify-end p-8'>
        <div className='overflow-y-scroll overflow-x-clip h-full min-w-60 w-3/5 grid content-between rounded-lg bg-linear-to-r from-black/30 to-black/90 p-8 text-white backdrop-blur'>
          <div>
            {heroTitle()}
            {heroSubtitle()}
            <Separator className='my-4 bg-white' />
            {heroContent()}
          </div>
          <Separator className='my-4 bg-white' />
          {heroFooterContent()}
        </div>
      </div>
    </div>
  )
}
