import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getMediaForKeywords } from "@/lib/media";
import { createMetadata } from "@/lib/seo";
import { serviceCategories } from "@/lib/content";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore Adihit Capella services across income tax, GST, audit, bookkeeping, startup setup, ROC compliance, finance consulting, and legal advisory.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A service architecture built for SEO depth, premium presentation, and easy future expansion."
        description="Each service can scale into a dedicated landing page with structured content blocks, accordions, and conversion pathways."
        cta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Explore industries", href: "/industries" }}
        mediaLabel="Services overview image"
        showSocial
      />

      <section className="section-shell">
        <div className="hero-grid items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Advisory overview"
              title="Use this page to orient visitors before they choose a more specific capability."
              description="The left-right structure supports explanatory content, process messaging, or a visual flowchart when your final assets are ready."
            />
            <ul className="grid gap-3 text-sm leading-7 text-[var(--muted)]">
              <li className="surface-card-muted p-4">
                Present integrated service logic instead of isolated capability lists.
              </li>
              <li className="surface-card-muted p-4">
                Build stronger internal linking from services to industries and resources.
              </li>
              <li className="surface-card-muted p-4">
                Keep future service additions content-driven through the shared data model.
              </li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <PlaceholderMedia
              label="Services infographic placeholder"
              detail="Use this space for a process diagram, business solutions image, or branded service illustration."
              heightClassName="min-h-[420px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)]">
              Promotional strip
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Highlight campaigns, announcements, or strategic firm positioning here.
            </h2>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-5 py-3 text-sm text-white transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            Read more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Service categories"
          title="Every card below links into a reusable detail template."
          description="This makes it easy to expand content later while keeping the design system consistent across the whole site."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <article className="surface-card flex h-full flex-col p-5">
                <PlaceholderMedia
                  label={service.title}
                  detail={service.subtitle}
                  heightClassName="min-h-[200px]"
                  media={getMediaForKeywords(service.seo.keywords)}
                />
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--brand)]">
                    {service.phone}
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted)]">
                  {service.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.differentiators.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(151,201,255,0.16)] px-3 py-1.5 text-xs text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]"
                >
                  Explore service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
