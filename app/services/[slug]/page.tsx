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
              eyebrow="About the service"
              title={service.title}
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
              Advisory focus
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
          title={service.offerings ? "Service offering details" : "How we support this service"}
          description={
            service.offerings
              ? "A detailed look at the professional support available within this service."
              : "A closer look at the practical service areas covered within this engagement."
          }
        />
        <AccordionList items={service.offerings ?? service.accordion} />
      </section>

      {service.whyChoose?.length ? (
        <section className="section-shell">
          <SectionHeading
            eyebrow="Why Adihit Capella"
            title="Why choose Adihit Capella?"
            description="Professional support designed around accuracy, practical execution, and dependable follow-through."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.whyChoose.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="surface-card h-full p-5">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.content}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {service.faqs?.length ? (
        <section className="section-shell">
          <SectionHeading
            eyebrow="FAQs"
            title={`Frequently asked questions about ${service.title}`}
            description="Clear answers to common questions about scope, compliance, and engagement requirements."
          />
          <AccordionList items={service.faqs} />
        </section>
      ) : null}

      {service.finalCta ? (
        <section className="section-shell pt-0">
          <div className="surface-card flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {service.finalCta.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                {service.finalCta.description}
              </p>
            </div>
            <Link
              href={service.finalCta.href}
              className="inline-flex shrink-0 items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
            >
              {service.finalCta.label}
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
}
