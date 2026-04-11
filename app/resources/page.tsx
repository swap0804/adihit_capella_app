import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getMediaForKeywords } from "@/lib/media";
import { createMetadata } from "@/lib/seo";
import { resourcePosts, resourceTags } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Adihit Capella resources page for articles, newsletters, tax bulletins, and advisory insights across legal, tax, audit, and finance topics.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        centered
        eyebrow="Resources"
        title="Articles, bulletins, and advisory insights designed to support both SEO and trust-building."
        description="The content system is local-data driven for now, so your team can replace placeholders with final articles without changing the layout."
        cta={{ label: "Explore all services", href: "/services" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="section-shell">
        <SectionHeading
          eyebrow="Latest resources"
          title="A flexible content grid for articles, newsletters, and insight-led campaigns."
          description="Each card is already connected to a dynamic article template so you can grow the resource library later."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {resourcePosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 60}>
              <Link href={`/resources/${post.slug}`} className="surface-card block h-full p-4 transition hover:-translate-y-1">
                <PlaceholderMedia
                  label={post.category}
                  detail="Featured image placeholder"
                  heightClassName="min-h-[180px]"
                  media={getMediaForKeywords(post.seo.keywords)}
                />
                <div className="mt-5">
                  <p className="text-sm text-[var(--brand)]">
                    {formatDate(post.date)} • {post.readTime}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card p-6 md:p-8">
          <SectionHeading
            eyebrow="Key highlights"
            title="A section designed for short, high-value updates that make the page feel current."
            description="This layout can hold monthly updates, finance notes, or legal highlights without needing a redesign."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {resourcePosts[0]?.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="surface-card-muted p-4 text-sm leading-7 text-[var(--muted)]">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card hero-grid items-center p-6 md:p-8">
          <div>
            <span className="eyebrow">Monthly tax bulletin</span>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              {resourcePosts[0]?.bulletin.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {resourcePosts[0]?.bulletin.description}
            </p>
            <Link
              href={`/resources/${resourcePosts[0]?.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
            >
              {resourcePosts[0]?.bulletin.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <PlaceholderMedia
            label="Bulletin preview"
            detail="Use this for the PDF cover, report thumbnail, or newsletter artwork."
            heightClassName="min-h-[320px]"
            media={getMediaForKeywords(resourcePosts[0]?.seo.keywords)}
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="hero-grid items-center">
          <Reveal>
            <div className="surface-card h-full p-6 md:p-8">
              <span className="eyebrow">Promotional information</span>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
                Guide readers from content into your most relevant advisory offers.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                This split block is ideal for pointing visitors toward a service
                line after they read a resource or bulletin.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]"
              >
                Visit the services page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <PlaceholderMedia
              label="Promotional image slot"
              detail="Replace with a professional consulting image, business visual, or campaign graphic."
              heightClassName="min-h-[320px]"
              media={getMediaForKeywords(resourcePosts[1]?.seo.keywords)}
            />
          </Reveal>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Tags"
          title="Tag-based discovery can become a simple internal content system."
          description="These tags are auto-generated from the local data file so they stay consistent as resources grow."
        />
        <div className="flex flex-wrap gap-3">
          {resourceTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(151,201,255,0.18)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
