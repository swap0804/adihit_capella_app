"use client";

import Link from "next/link";
import { MessageSquare, SendHorizonal, X } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/lib/site-config";

export function BharatChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 rounded-full border border-[rgba(151,201,255,0.18)] bg-[rgba(6,16,31,0.9)] px-4 py-3 text-sm text-white shadow-[0_14px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
      >
        <MessageSquare className="h-4 w-4" />
        Chat with an Expert
      </button>
      {open ? (
        <div className="surface-card fixed bottom-6 right-6 z-50 w-[min(360px,calc(100vw-1.5rem))] overflow-hidden">
          <div className="flex items-center justify-between border-b border-[rgba(151,201,255,0.12)] px-4 py-4">
            <div>
              <p className="font-semibold text-white">Bharat</p>
              <p className="text-sm text-[var(--muted)]">Virtual assistant</p>
            </div>
            <button
              type="button"
              className="rounded-full border border-[rgba(151,201,255,0.18)] p-2"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4 px-4 py-5">
            <div className="rounded-[1.2rem] bg-[rgba(255,255,255,0.03)] p-4 text-sm leading-7 text-[var(--muted)]">
              Hi I&apos;m Bharat, your virtual assistant. How can we help you?
            </div>
            <div className="grid gap-3">
              {siteConfig.chatQuickActions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[1.2rem] border border-[rgba(151,201,255,0.16)] px-4 py-3 transition hover:border-[var(--brand)] hover:bg-[rgba(106,214,255,0.06)]"
                >
                  <p className="font-medium text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
            <label className="block">
              <span className="sr-only">Type your message</span>
              <div className="flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-2">
                <input
                  className="w-full bg-transparent py-1 text-sm text-white outline-none"
                  placeholder="Type your message..."
                />
                <button
                  type="button"
                  className="grid h-9 w-9 place-items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] text-slate-950"
                  aria-label="Send message"
                >
                  <SendHorizonal className="h-4 w-4" />
                </button>
              </div>
            </label>
          </div>
        </div>
      ) : null}
    </>
  );
}
