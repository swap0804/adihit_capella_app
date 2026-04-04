"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between rounded-[1.8rem] border border-[rgba(151,201,255,0.15)] bg-[rgba(4,17,31,0.78)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl md:px-6">
        <Link href="/" aria-label="Adihit Capella home">
          <BrandMark />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-2 text-sm text-white transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <PhoneCall className="h-4 w-4" />
            Call now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Contact us
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex rounded-full border border-[rgba(151,201,255,0.18)] p-2 text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="mx-auto mt-3 max-w-[1240px] rounded-[1.8rem] border border-[rgba(151,201,255,0.15)] bg-[rgba(4,17,31,0.94)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:hidden">
          <nav className="grid gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--muted)] transition hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-3 text-sm text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Call now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-4 py-3 text-sm font-semibold text-slate-950"
              onClick={() => setOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
