"use client";

import { FormEvent, useState } from "react";

const businessTypes = [
  "Restaurant or cafe",
  "Salon or spa",
  "Trade business",
  "Professional services",
  "Retail shop",
  "Health or wellness",
  "Other local business"
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formId) {
      setStatus("success");
      form.reset();
      return;
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 border border-line bg-white p-6 shadow-soft">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Business name
          <input name="businessName" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Business owner name
          <input name="ownerName" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input name="email" type="email" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss" />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Phone
          <input name="phone" type="tel" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Type of business
        <select name="businessType" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss">
          <option value="">Select one</option>
          {businessTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        What do you need?
        <textarea name="message" required rows={5} className="resize-y border border-line px-4 py-3 font-normal outline-none focus:border-moss" />
      </label>
      <label className="grid gap-2 text-sm font-semibold">
        How did you hear about us?
        <input name="referral" className="border border-line px-4 py-3 font-normal outline-none focus:border-moss" />
      </label>
      <button className="bg-ink px-5 py-4 font-bold text-white transition hover:bg-rust">
        Request a Free Consultation
      </button>
      {status === "success" ? (
        <p className="border-l-2 border-moss bg-moss/10 px-4 py-3 text-sm font-semibold text-moss">
          Thanks. Your enquiry has been captured and I will follow up shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="border-l-2 border-rust bg-clay/10 px-4 py-3 text-sm font-semibold text-rust">
          Something went wrong. Please try again or email me directly.
        </p>
      ) : null}
    </form>
  );
}
