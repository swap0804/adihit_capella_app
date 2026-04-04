import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { industryEntries } from "@/lib/content";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Industry-focused legal, tax, audit, compliance, and finance advisory pages for FMCG, NBFC, infrastructure, startups, logistics, and education sectors.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector pages that balance authority, clarity, and room for case-led advisory messaging."
        description="This listing page routes visitors into industry-specific pages with expandable solutions, leadership context, and content-led trust signals."
        cta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Browse resources", href: "/resources" }}
        mediaLabel="Industries overview visual"
      />

      <section className="section-shell">
        <SectionHeading
          eyebrow="Industry focus"
          title="Every industry card can evolve into a strong sector-specific landing page."
          description="That gives you better SEO targeting, cleaner user journeys, and room for future case studies or thought leadership."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industryEntries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 60}>
              <Link href={`/industries/${industry.slug}`} className="surface-card flex h-full flex-col p-4 transition hover:-translate-y-1">
                <PlaceholderMedia
                  label={industry.title}
                  detail="Large circular or sector-specific image can be placed here later."
                  heightClassName="min-h-[200px]"
                />
                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="text-2xl font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
                    {industry.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]">
                    Explore industry
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
