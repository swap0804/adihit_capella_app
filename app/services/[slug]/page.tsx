import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AccordionList } from "@/components/accordion-list";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { createBreadcrumbSchema, createMetadata, createServiceSchema } from "@/lib/seo";
import { serviceCategories } from "@/lib/content";
import { getMediaForKeywords } from "@/lib/media";
import { absoluteUrl } from "@/lib/utils";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);

  if (!service) {
    return createMetadata({
      title: "Service not found",
      description: "Requested service page could not be found.",
      path: `/services/${slug}`,
    });
  }

  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${slug}`,
    keywords: service.seo.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = serviceCategories.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const serviceMedia = getMediaForKeywords(service.seo.keywords);

  return (
    <>
      <StructuredData
        data={createServiceSchema({
          name: service.title,
          description: service.summary,
          url: pageUrl,
        })}
      />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services") },
          { name: service.title, url: pageUrl },
        ])}
      />

      <section className="section-shell pb-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </section>

      <PageHero
        eyebrow="Service detail"
        title={service.title}
        description={service.subtitle}
        cta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
        mediaLabel={`${service.title} hero`}
        media={serviceMedia}
        showSocial
      />

      <section className="section-shell">
        <div className="hero-grid items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Service information"
              title="Detailed service positioning with room for your final expertise copy."
              description={service.summary}
            />
            <div className="grid gap-4">
              {service.overview.map((paragraph) => (
                <div key={paragraph} className="surface-card-muted p-4 text-sm leading-7 text-[var(--muted)]">
                  {paragraph}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <PlaceholderMedia
              label={`${service.title} supporting visual`}
              detail="Replace with a process visual, infographic, or service-specific professional image."
              heightClassName="min-h-[420px]"
              media={serviceMedia}
            />
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--brand)]">
              Promotional text
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {service.promo.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
              {service.promo.description}
            </p>
          </div>
          <Link
            href={service.promo.cta.href}
            className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
          >
            {service.promo.cta.label}
          </Link>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Build better outcomes"
          title={service.buildBetter.title}
          description={service.buildBetter.description}
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {service.benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 70}>
              <div className="surface-card p-5 text-sm leading-7 text-[var(--muted)]">
                {benefit}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Detail information"
          title="Expandable rows ready for process details, FAQs, or deeper service explanations."
          description="This accordion pattern follows the corporate reference style while keeping the implementation lightweight and easy to update."
        />
        <AccordionList items={service.accordion} />
      </section>
    </>
  );
}
