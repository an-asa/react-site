"use client"

import { useForm as useFormspreeForm } from "@formspree/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form"
import { useState } from "react"
import Link from "next/link"

export default function ContactForm() {
  const [state, handleSubmit] = useFormspreeForm("xqaqjbqk")
  const [sentEmail, setSentEmail] = useState("")
  const [sentMessage, setSentMessage] = useState("")
  const formSchema = z.object({
    email: z.string().email(),
    message: z.string().min(10, { message: "Your message must be at least 10 characters long." }).max(500, {message: "Your message must be shorter than 500 characters."})
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: ""
    }
  })
  function onSubmit(data: z.infer<typeof formSchema>) {
    handleSubmit(data)
    setSentEmail(data.email)
    setSentMessage(data.message)
  }

  if (state.succeeded) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your message has been sent. Thank you!</CardTitle>
        </CardHeader>
        <CardContent className='font-mono text-foreground/80 text-sm break-all'>
          <p>from: {sentEmail}</p>
          <p>---</p>
          <p>{sentMessage}</p>
        </CardContent>
      </Card>
    )
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Contact form</CardTitle>
            <CardDescription>By using this form you agree to the website&#39;s <Link href="/privacy" className="underline-offset-4 underline text-sm text-muted-foreground hover:text-muted-foreground/50">privacy policy.</Link></CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-2'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='youraddress@domain.com'
                          id='email'
                          type='email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='flex flex-col space-y-2'>
                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Hello, Jan...'
                          id='message'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant='accent' type='submit' disabled={state.submitting}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
