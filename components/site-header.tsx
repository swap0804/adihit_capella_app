"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header fixed left-0 right-0 top-0 z-40 px-3 py-3">
      <div className="pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between rounded-[1.4rem] border border-[var(--card-border)] bg-[var(--header-bg-strong)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:px-6">
        <Link href="/" aria-label="Adihit Capella home">
          <BrandMark priority />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav-link"
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
        <div className="pointer-events-auto mx-auto mt-3 max-w-[1240px] rounded-[1.4rem] border border-[var(--card-border)] bg-[var(--header-bg-strong)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
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
