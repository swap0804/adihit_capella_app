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
    "Explore Adihit Capella services across company registration, finance, accounting, audit, GST, income tax, legal, and business compliance.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Business Advisory and Compliance Services Built for Long-term Growth"
        description="Our services are designed to keep your operations clear and organised. Trust our experts for practical, process-driven services that shape long-term business readiness."
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
              title="Services That Strengthen Modern Business Requirements"
              description="When it comes to audit, tax, finance, legal, accounting and process innovation, subject matter expertise becomes imperative. Adihit Capella combines practical advisory with accurate execution and long-term thinking."
            />
            <ul className="grid gap-3 text-sm leading-7 text-[var(--muted)]">
              <li className="surface-card-muted p-4">
                Practical, process-driven services that shape long-term business readiness.
              </li>
              <li className="surface-card-muted p-4">
                Clear registration, filing, compliance, consulting, and control support.
              </li>
              <li className="surface-card-muted p-4">
                Coordinated accountability across core professional service requirements.
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
        <SectionHeading
          eyebrow="Service categories"
          title="Nine services for modern business requirements."
          description="Each card links to a focused service page with deeper details and key service lists."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <article className="surface-card flex h-full flex-col p-5 service-card">
                <PlaceholderMedia
                  label={service.title}
                  detail={service.subtitle}
                  heightClassName="min-h-[200px]"
                  media={getMediaForKeywords(service.seo.keywords)}
                />
                <div className="mt-5">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#111827]">
                    {service.subtitle}
                  </p>
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-[#111827]">
                  {service.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.differentiators.map((item) => (
                    <span
                      key={item}
                      className="border border-[rgba(151,201,255,0.16)] px-3 py-1.5 text-xs text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="card-read-more mt-6 inline-flex items-center gap-2 text-sm font-medium"
                >
                  Read more
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
