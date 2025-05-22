"use client"

import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
      <div className="max-w-3xl w-full mx-auto mt-26 p-8 tracking-tight">
        <div className="block space-y-2">
          <h1 className="text-2xl font-bold">Contact me</h1>
          <p>If you wish to contact me regarding a job offer, or even any questions, comments or suggestions, feel free to reach out to me using the form below.</p>
          <p className="pb-8">Alternatively, you can contact me via e-mail or social media linked in the footer at the bottom of this page.</p>
          <ContactForm />
        </div>
      </div>
  );
}
