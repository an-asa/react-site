import { useForm, ValidationError } from "@formspree/react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqaqjbqk")
  if (state.succeeded) {
    return (
      <Card className="items-center"><p>Your message has been sent. Thank you!</p></Card>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Contact me</CardTitle>
          <CardDescription>Let&apos;s get in touch.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor='email'>Email address</Label>
                <Input placeholder='youraddress@domain.com' id='email' type='email' name='email' />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor='message'>Your message</Label>
                <Textarea placeholder='Hello, Jan...' id='message' name='message' />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
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
  )
}
