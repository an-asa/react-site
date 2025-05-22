import Link from "next/link"

export default function Privacy() {
  return (
    <div className="mx-auto mt-26 w-full max-w-3xl px-8 tracking-tight">
      <div className="inline-block space-y-2">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <p>This document outlines how your data is handled when navigating this site. The owner of this personal website as referred to in this document is Jan Zygadło. This document was last updated on <strong>May 21, 2025.</strong></p>
        <h2 className="text-lg font-bold mt-6">What data is collected</h2>
        <p>Your data may be collected on this website through the use of the contact form. This data consists of the e-mail address and message included in the form and is collected upon its submission by you. No other personal data is collected.</p>
        <h2 className="text-lg font-bold mt-6">How your data is processed and shared</h2>
        <p>The contact form through which your data is submitted is powered by Formspree. Formspree is a third party service which processes your data to deliver it to the website&#39;s owner and does not share this data with any other parties. Formspree&#39;s full privacy policy is available <Link className="underline-offset-4 underline text-muted-foreground hover:text-muted-foreground/50" href="https://formspree.io/legal/privacy-policy/">here</Link>.</p>
        <p>Once your data is submitted, it is sent to the inbox of owner of this site. This inbox is hosted by Gmail, which processes your data only to facilitate correspondence in accordance with its <Link className="underline-offset-4 underline text-muted-foreground hover:text-muted-foreground/50" href="https://policies.google.com/privacy?hl=en-GB">privacy policy</Link>. Following this, the data is not shared with other parties and is used only for further correspondence between you and the site&#39;s owner.</p>
        <h2 className="text-lg font-bold mt-6">How your data is stored</h2>
        <p>Your data in the form of correspondence is securely stored in the site owner&#39;s e-mail inbox, hosted by Gmail. It will be stored only for as long as it is needed to facilitate communication between you and the site&#39;s owner, after which it will be removed without undue delay.</p>
        <h2 className="text-lg font-bold mt-6">Your rights</h2>
        <p>You have the right to request access to your data, as well as the right to request its rectification or deletion. You may also withdraw consent to this privacy policy. You can do so by contacting the site&#39;s owner at jan.zygadlo.0@gmail.com.</p>
        <h2 className="text-lg font-bold mt-6">Changes to this privacy policy</h2>
        <p>If changes are made to this privacy policy, this document will be updated with the most recent version.</p>
      </div>
    </div>
  )
}
