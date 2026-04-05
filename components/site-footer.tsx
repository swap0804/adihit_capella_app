import Link from "next/link";
import { MapPin, Phone, Send } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/social-icons";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const office = siteConfig.officeLocations[0];

  return (
    <footer className="section-shell pt-0">
      <div className="surface-card overflow-hidden p-6 md:p-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <BrandMark />
            <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
              Placeholder-ready corporate website for a futuristic CA, legal,
              and finance advisory brand. Swap content, numbers, and imagery
              later without changing the visual structure.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-2 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-2 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <Send className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand)]">
              Footer menu
            </p>
            <div className="mt-5 grid gap-3">
              {siteConfig.legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--muted)] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--brand)]">
              Follow & visit
            </p>
            <div className="space-y-3 text-sm text-[var(--muted)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-[var(--brand)]" />
                <span>{office?.address}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-[rgba(151,201,255,0.18)] p-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-[rgba(151,201,255,0.18)] p-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-[rgba(151,201,255,0.18)] p-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[rgba(151,201,255,0.12)] pt-5 text-sm text-[var(--muted)]">
          © 2026 Adihit Capella. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
