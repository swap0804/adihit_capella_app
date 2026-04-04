import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { AccordionList } from "@/components/accordion-list";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LeaderShowcase } from "@/components/leader-showcase";
import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { industryEntries, leaders } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

type IndustryDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return industryEntries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryEntries.find((item) => item.slug === slug);

  if (!industry) {
    return createMetadata({
      title: "Industry not found",
      description: "Requested industry page could not be found.",
      path: `/industries/${slug}`,
    });
  }

  return createMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${slug}`,
    keywords: industry.seo.keywords,
  });
}

export default async function IndustryDetailPage({
  params,
}: IndustryDetailPageProps) {
  const { slug } = await params;
  const industry = industryEntries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/industries/${industry.slug}`);
  const selectedLeaders = leaders.filter((leader) =>
    industry.leaders.includes(leader.name),
  );

  return (
    <>
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Industries", url: absoluteUrl("/industries") },
          { name: industry.title, url: pageUrl },
        ])}
      />

      <section className="section-shell pb-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: industry.title },
          ]}
        />
      </section>

      <PageHero
        eyebrow="Industry detail"
        title={industry.title}
        description={industry.summary}
        cta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Submit RFP", href: "/contact" }}
        mediaLabel={`${industry.title} sector visual`}
      />

      <section className="section-shell">
        <div className="hero-grid items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Industry explanation"
              title="Narrative space for sector context, advisory challenges, and commercial nuance."
              description="Keep this copy industry-specific later to improve search relevance and conversion quality."
            />
            <div className="grid gap-4">
              {industry.intro.map((paragraph) => (
                <div key={paragraph} className="surface-card-muted p-4 text-sm leading-7 text-[var(--muted)]">
                  {paragraph}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PlaceholderMedia
              label={`${industry.title} explanatory visual`}
              detail="This area is ready for a sector image, case-study visual, or campaign asset."
              heightClassName="min-h-[420px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Our latest thinking"
          title="Three content cards that connect sector visitors to deeper insight."
          description="This row is designed for case studies, articles, or perspective pieces tied to the selected industry."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {industry.latestThinking.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <Link href={item.href} className="surface-card block h-full p-4">
                <PlaceholderMedia
                  label={item.title}
                  detail="Featured image placeholder"
                  heightClassName="min-h-[170px]"
                />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Our solutions"
          title="Expandable service rows designed for sector-specific solution storytelling."
          description="Each accordion item can later carry a more detailed explanation of how the firm works inside this industry."
        />
        <AccordionList
          items={industry.solutions.map((solution) => ({
            title: solution.title,
            content: solution.detail,
          }))}
        />
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Our leaders"
          title="Leadership context strengthens trust on sector-specific pages."
          description="This reuses the same modal card system from the About page while letting each industry highlight the most relevant experts."
        />
        <LeaderShowcase leaders={selectedLeaders} />
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="surface-card flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <span className="eyebrow">Let&apos;s connect</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Ready to build a more tailored advisory conversation for this sector?
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Use this CTA for a consultation, RFP workflow, or sector-specific enquiry.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
            >
              Schedule consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
