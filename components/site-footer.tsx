import Link from "next/link";
import { MapPin, Phone, Send } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/social-icons";
import { serviceCategories } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const office = siteConfig.officeLocations[0];

  return (
    <footer className="bg-[#061b3a] px-5 py-12 text-[#fff] md:px-8">
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <BrandMark />
            <p className="max-w-md text-sm leading-7 text-blue-100">
              Adihit Capella supports businesses with registration, finance,
              compliance, ROC, and process-focused advisory for long-term
              operational readiness.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ec8ff]">
              Quick links
            </p>
            <div className="mt-5 grid gap-3">
              {[...siteConfig.navItems, ...siteConfig.legalLinks].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-blue-100 transition hover:text-[#7ec8ff]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ec8ff]">
              Services
            </p>
            <div className="mt-5 grid gap-3">
              {serviceCategories.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm text-blue-100 transition hover:text-[#7ec8ff]"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7ec8ff]">
              Contact details
            </p>
            <div className="space-y-3 text-sm text-blue-100">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-[#7ec8ff]" />
                <span>{office?.address}</span>
              </div>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-[#7ec8ff]"
              >
                <Phone className="h-4 w-4 text-[#7ec8ff]" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition hover:text-[#7ec8ff]"
              >
                <Send className="h-4 w-4 text-[#7ec8ff]" />
                {siteConfig.email}
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="border border-blue-200/30 p-3 text-blue-100 transition hover:border-[#7ec8ff] hover:text-[#7ec8ff]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="border border-blue-200/30 p-3 text-blue-100 transition hover:border-[#7ec8ff] hover:text-[#7ec8ff]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="border border-blue-200/30 p-3 text-blue-100 transition hover:border-[#7ec8ff] hover:text-[#7ec8ff]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-200/20 pt-5 text-sm text-blue-100">
          &copy; 2026 Adihit Capella. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
