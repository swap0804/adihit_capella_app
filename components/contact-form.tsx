"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type ContactFormProps = {
  compact?: boolean;
  source?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const googleSheetsEndpoint =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL?.trim() ?? "";

export function ContactForm({
  compact = false,
  source = "website",
}: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const isConfigured = googleSheetsEndpoint.length > 0;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = new URLSearchParams({
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      requirement: String(formData.get("requirement") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      source,
      userAgent: navigator.userAgent,
      submittedAt: new Date().toISOString(),
    });

    setSubmitState("submitting");

    try {
      await fetch(googleSheetsEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  function handleReset() {
    setSubmitState("idle");
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm text-[var(--muted)]">
          Name
          <input
            autoComplete="name"
            name="name"
            required
            placeholder="Your name"
            className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none transition focus:border-[var(--brand)]"
          />
        </label>
        <label className="grid gap-2 text-sm text-[var(--muted)]">
          Email
          <input
            autoComplete="email"
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
            autoComplete="tel"
            inputMode="tel"
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
          required
          rows={compact ? 4 : 5}
          placeholder="Tell us about your requirement"
          className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none transition focus:border-[var(--brand)]"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={
            submitState === "submitting" ||
            submitState === "success" ||
            !isConfigured
          }
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          {submitState === "submitting"
            ? "Sending enquiry..."
            : submitState === "success"
              ? "Enquiry sent"
              : "Submit enquiry"}
        </button>
        <span className="text-sm text-[var(--muted)]">
          {submitState === "success"
            ? "Thanks. Your enquiry has been added to the Google Sheets pipeline."
            : submitState === "error"
              ? "We couldn't send the enquiry right now. Please try again."
              : isConfigured
                ? "This form posts directly to your Google Sheets web app."
                : "Add NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL to enable live enquiry collection."}
        </span>
        {submitState === "success" ? (
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-medium text-[var(--brand)] transition hover:text-white"
          >
            Send another enquiry
          </button>
        ) : null}
      </div>
    </form>
  );
}
