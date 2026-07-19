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

const currentWebsiteOptions = [
  "No website yet",
  "Yes, but it needs updating",
  "Yes, and I want something new",
  "Not sure"
];

const clarityOptions = [
  "Not sure yet",
  "I have a rough idea",
  "I know the pages I need",
  "I need help deciding"
];

const goalOptions = [
  "Explain services",
  "Bring in enquiries",
  "Show prices",
  "Show work or photos",
  "Take booking or enquiry requests",
  "Replace social media links"
];

const contentOptions = [
  "I need help with wording",
  "I have some wording or photos",
  "I have most of the content ready"
];

const timelineOptions = [
  "As soon as possible",
  "2-6 weeks",
  "2-3 months",
  "No rush"
];

const budgetOptions = [
  "Under £750",
  "£750-£1,200",
  "£1,200-£1,800",
  "£1,800+",
  "Not sure yet"
];

const concernOptions = [
  "Cost",
  "Time",
  "Knowing what to write",
  "Technical setup",
  "Choosing the right pages",
  "Getting enquiries"
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
    <form onSubmit={handleSubmit} className="grid gap-7 border border-line bg-white p-6 shadow-soft" data-reveal="lift">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-moss">
          Project enquiry
        </p>
        <h2 className="mt-2 text-2xl font-bold">Tell me about your website.</h2>
        <p className="mt-3 text-sm leading-6 text-ink/70">
          This takes about 30 seconds. It helps me understand what you need and
          whether I am the right fit before we talk.
        </p>
      </div>

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

      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold">Do you have a website currently?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {currentWebsiteOptions.map((option) => (
            <label key={option} className="flex gap-3 border border-line px-4 py-3 text-sm font-semibold">
              <input type="radio" name="currentWebsite" value={option} required className="mt-1 accent-[#5d7d69]" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold">Do you know what you want?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {clarityOptions.map((option) => (
            <label key={option} className="flex gap-3 border border-line px-4 py-3 text-sm font-semibold">
              <input type="radio" name="projectClarity" value={option} required className="mt-1 accent-[#5d7d69]" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold">What does the site need to help with?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {goalOptions.map((option) => (
            <label key={option} className="flex gap-3 border border-line px-4 py-3 text-sm font-semibold">
              <input type="checkbox" name="websiteGoals" value={option} className="mt-1 accent-[#5d7d69]" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          What content do you already have?
          <select name="contentReadiness" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss">
            <option value="">Select one</option>
            {contentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          When would you like it live?
          <select name="timeline" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss">
            <option value="">Select one</option>
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Budget range
          <select name="budgetRange" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss">
            <option value="">Select one</option>
            {budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Biggest worry
          <select name="biggestWorry" required className="border border-line px-4 py-3 font-normal outline-none focus:border-moss">
            <option value="">Select one</option>
            {concernOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold">
        Anything else useful before we talk?
        <textarea
          name="message"
          rows={4}
          className="resize-y border border-line px-4 py-3 font-normal outline-none focus:border-moss"
          placeholder="A few notes about the business, current site, or what you want the website to do."
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold">
        How did you hear about us?
        <input name="referral" className="border border-line px-4 py-3 font-normal outline-none focus:border-moss" />
      </label>

      <p className="border-l-2 border-rust bg-paper px-4 py-3 text-sm font-semibold leading-6 text-ink/75">
        Sending this is free and does not lock you into anything. I will reply
        with whether I think I can help and what the next step would be.
      </p>

      <button className="bg-ink px-5 py-4 font-bold text-white transition hover:bg-rust">
        Send Project Enquiry
      </button>

      {status === "success" ? (
        <p className="border-l-2 border-moss bg-moss/10 px-4 py-3 text-sm font-semibold text-moss">
          Thanks. Your enquiry has been sent and I will follow up shortly.
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
