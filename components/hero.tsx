"use client"

import heroPhoto from "@/public/hero-photo.jpeg"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import Link from "next/link"
import {
  MapPinIcon,
  MailIcon,
  DownloadIcon,
  ChevronsDown,
  ChevronsDownIcon
} from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"

export default function Hero() {
  const [wasScrolled, setWasScrolled] = useState(false)
  const scrollableHeroContentRef = useRef<HTMLDivElement>(null)

  function handleScroll() {
    if (scrollableHeroContentRef.current) {
      if( scrollableHeroContentRef.current.scrollTop > 0 ) {
        setWasScrolled(true)
      } else {
        setWasScrolled(false)
      }
    }
  }
  function handleScrollButtonClick() {
    if (scrollableHeroContentRef.current) {
      scrollableHeroContentRef.current.scrollTop = scrollableHeroContentRef.current.scrollHeight;
    }
  }

  return (
    <div className='relative flex h-150 w-full sm:h-200'>
      <Image
        src={heroPhoto}
        placeholder='blur'
        alt='Banner photo'
        fill={true}
        objectFit='cover'
        unoptimized={true}
      />
      <div className='mx-auto flex w-full max-w-3xl justify-end sm:p-8'>
        <div className='flex h-full w-3/5 min-w-60 flex-col justify-between bg-linear-to-r from-black/30 to-black/90 p-8 text-white backdrop-blur sm:rounded-lg'>
          <div
            className='relative overflow-x-clip overflow-y-scroll scroll-smooth mask-b-from-90% mask-alpha pb-10'
            ref={scrollableHeroContentRef}
            onScroll={handleScroll}
          >
            {!wasScrolled ? (
              <div className='absolute flex h-full w-full items-end justify-center pb-4 sm:hidden'>
                <div className='z-20 flex rounded-full bg-black/80 p-2 animate-pulse hover:animate-none hover:bg-black transition-colors duration-200 cursor-pointer'
                  onClick={handleScrollButtonClick}>
                  <ChevronsDownIcon className='size-4' />
                </div>
              </div>
            ) : null}
            <h1 className='font-serif text-4xl font-bold tracking-tighter'>
              Hi, I&#39;m Jan!
            </h1>
            <h2 className='text-lg'>
              I&#39;m a software specialist with solid experience in testing and
              test automation.
            </h2>
            <Separator className='my-4 bg-white' />
            <p>
              With over five years of experience with complex government
              projects, I&#39;ve learned how to collaborate, adapt and
              contribute where it counts.
            </p>
            <br />
            <p>
              I&#39;m currently looking for an opportunity to work on new,
              exciting projects. If you think I&#39;d fit into your team, feel
              free to{" "}
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
          <div>
            <Separator className='my-4 bg-white' />
            <div className='flex items-center gap-2'>
              <MapPinIcon className='h-4 w-4' />
              <p className='text-sm'>South West England, United Kingdom</p>
            </div>
            <div className='mt-2 flex items-center gap-2'>
              <MailIcon className='h-4 w-4' />
              <p className='text-sm'>jan.zygadlo.0@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
