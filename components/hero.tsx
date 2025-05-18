import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { MapPinIcon, MailIcon, DownloadIcon } from "lucide-react"

export default function Hero() {
  return (
    <div className="flex h-200 w-full bg-[url('/hero-photo.jpg')] bg-cover bg-top">
      <div className='mx-auto flex w-full max-w-3xl justify-center p-8 sm:justify-end md:px-0'>
        <div className='from-black/40 to-black/90 text-white grid content-between h-full w-max rounded-lg bg-linear-to-r p-8 backdrop-blur sm:w-3/5'>
          <div className='inline-block text-pretty'>
            <h1 className='font-serif text-4xl font-bold'>Hi, I&#39;m Jan!</h1>
            <h2 className='text-xl'>
              I&#39;m a software engineer with a strong basis in testing and
              test automation.
            </h2>
            <Separator className='my-6 bg-white' />
            <p>
              Having worked on national-scale projects in the government sector
              for over five years, I bring a wide set of skills to your dev
              team.
            </p>
            <br />
            <p>
              I&#39;m currently looking for a new opportunity to work on new,
              exciting projects. If you think I&#39;d fit into your team, feel
              free to contact me.
            </p>
            <Button asChild className='mt-8 bg-emerald-500 text-white'>
                <a href='/cv_jzygadlo.pdf' className="flex" download>
                    <DownloadIcon className='mt-0.5 h-4 w-4' />
                    <span className='text-sm'>Download my CV</span> 
                </a>
            </Button>
          </div>
          <div className=''>
            <Separator className='my-6 bg-white' />
            <div className='mt-8 flex items-center gap-2'>
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
