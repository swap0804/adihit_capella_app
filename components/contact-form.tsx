"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type ContactFormProps = {
  compact?: boolean;
};

export function ContactForm({ compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm text-[var(--muted)]">
          Name
          <input
            name="name"
            required
            placeholder="Your name"
            className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none transition focus:border-[var(--brand)]"
          />
        </label>
        <label className="grid gap-2 text-sm text-[var(--muted)]">
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none transition focus:border-[var(--brand)]"
          />
        </label>
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm text-[var(--muted)]">
          Phone number
          <input
            name="phone"
            placeholder="+91"
            className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none transition focus:border-[var(--brand)]"
          />
        </label>
        <label className="grid gap-2 text-sm text-[var(--muted)]">
          Requirement
          <input
            name="requirement"
            placeholder="Tax, legal, audit, or finance support"
            className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none transition focus:border-[var(--brand)]"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-[var(--muted)]">
        Message
        <textarea
          name="message"
          rows={compact ? 4 : 5}
          placeholder="Tell us about your requirement"
          className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none transition focus:border-[var(--brand)]"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
        >
          Submit enquiry
        </button>
        <span className="text-sm text-[var(--muted)]">
          {submitted
            ? "Demo success state active. Connect your email or CRM later."
            : "Demo form only for now. Add your backend when ready."}
        </span>
      </div>
    </form>
  );
}
