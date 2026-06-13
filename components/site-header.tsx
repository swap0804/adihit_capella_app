"use client";

import Link from "next/link";
import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";
import type { LinkItem } from "@/lib/types";

type SiteHeaderProps = {
  services: LinkItem[];
};

export function SiteHeader({ services }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 border-b border-[var(--card-border)] bg-[var(--header-bg-strong)]">
      <div className="pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" aria-label="Adihit Capella home">
          <BrandMark priority />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {siteConfig.navItems.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="site-nav-link inline-flex items-center gap-1.5"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[390px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--header-bg-strong)] p-3 shadow-2xl shadow-black/30">
                    <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                      Our services
                    </p>
                    <div className="grid gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="rounded-xl px-3 py-2.5 text-sm leading-5 text-[var(--text-strong)] transition hover:bg-white/5 hover:text-[var(--brand)] focus-visible:bg-white/5 focus-visible:text-[var(--brand)]"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/services"
                      className="mt-2 block rounded-xl border border-[var(--card-border)] px-3 py-2.5 text-center text-sm font-semibold text-[var(--brand)] transition hover:border-[var(--brand)]"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="site-nav-link"
              >
                {item.label}
              </Link>
            ),
          )}
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
        <div className="pointer-events-auto mx-auto max-w-[1240px] border-t border-[var(--card-border)] bg-[var(--header-bg-strong)] p-4 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {siteConfig.navItems.map((item) =>
              item.href === "/services" ? (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <div className="ml-3 mt-1 grid gap-1 border-l border-[var(--card-border)] pl-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-lg px-3 py-2 text-sm leading-5 text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--brand)]"
                        onClick={() => setOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
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
