import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import {
  industryEntries,
  resourcePosts,
  serviceCategories,
} from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Sitemap",
  description: "Human-readable sitemap page for Adihit Capella.",
  path: "/sitemap-page",
});

const coreRoutes = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function SitemapPage() {
  return (
    <>
      <PageHero
        centered
        eyebrow="Sitemap"
        title="A human-readable overview of the website structure."
        description="This page mirrors the SEO sitemap while giving visitors a quick way to jump into major sections."
      />
      <section className="section-shell">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="surface-card p-6">
              <SectionHeading
                eyebrow="Main routes"
                title="Core pages"
                description="Top-level navigation routes across the site."
              />
              <div className="grid gap-3">
                {coreRoutes.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--brand)]"
                  >
                    {item.label}
                  </Link>
                ))}
                {siteConfig.legalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[var(--muted)] transition hover:text-[var(--brand)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card p-6">
              <SectionHeading
                eyebrow="Dynamic content"
                title="Content-driven pages"
                description="Services, industries, and resources generated from local data."
              />
              <div className="grid gap-5 text-sm">
                <div>
                  <p className="font-medium text-white">Services</p>
                  <div className="mt-2 grid gap-2">
                    {serviceCategories.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="text-[var(--muted)] transition hover:text-[var(--brand)]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">Industries</p>
                  <div className="mt-2 grid gap-2">
                    {industryEntries.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/industries/${item.slug}`}
                        className="text-[var(--muted)] transition hover:text-[var(--brand)]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">Resources</p>
                  <div className="mt-2 grid gap-2">
                    {resourcePosts.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/resources/${item.slug}`}
                        className="text-[var(--muted)] transition hover:text-[var(--brand)]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
