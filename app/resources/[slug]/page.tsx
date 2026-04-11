import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { createArticleSchema, createBreadcrumbSchema, createMetadata } from "@/lib/seo";
import { resourcePosts } from "@/lib/content";
import { getMediaForKeywords } from "@/lib/media";
import { absoluteUrl, formatDate } from "@/lib/utils";

type ResourceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return resourcePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ResourceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = resourcePosts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Resource not found",
      description: "Requested resource could not be found.",
      path: `/resources/${slug}`,
    });
  }

  return createMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: `/resources/${slug}`,
    keywords: post.seo.keywords,
  });
}

export default async function ResourceDetailPage({
  params,
}: ResourceDetailPageProps) {
  const { slug } = await params;
  const post = resourcePosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/resources/${post.slug}`);
  const postMedia = getMediaForKeywords(post.seo.keywords);

  return (
    <>
      <StructuredData
        data={createArticleSchema({
          title: post.title,
          description: post.excerpt,
          url: pageUrl,
          datePublished: post.date,
        })}
      />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: "Home", url: absoluteUrl("/") },
          { name: "Resources", url: absoluteUrl("/resources") },
          { name: post.title, url: pageUrl },
        ])}
      />

      <section className="section-shell pb-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: post.title },
          ]}
        />
      </section>

      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        cta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "All resources", href: "/resources" }}
        centered
      />

      <section className="section-shell">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="surface-card p-6 md:p-8">
            <p className="text-sm text-[var(--brand)]">
              {formatDate(post.date)} • {post.readTime}
            </p>
            <div className="mt-6 grid gap-5">
              {post.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-[var(--muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(151,201,255,0.18)] px-3 py-1.5 text-sm text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
          <div className="grid gap-4">
            <div className="surface-card p-5">
              <h2 className="text-xl font-semibold text-white">Key highlights</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--muted)]">
                {post.highlights.map((highlight) => (
                  <li key={highlight} className="surface-card-muted p-4">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <PlaceholderMedia
              label="Article image placeholder"
              detail="Replace with report cover, blog hero image, or editorial artwork."
              heightClassName="min-h-[260px]"
              media={postMedia}
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card hero-grid items-center p-6 md:p-8">
          <div>
            <span className="eyebrow">Featured bulletin</span>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              {post.bulletin.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {post.bulletin.description}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
            >
              {post.bulletin.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <PlaceholderMedia
            label="Download preview"
            detail="This card can later contain a real report preview or PDF thumbnail."
            heightClassName="min-h-[300px]"
            media={postMedia}
          />
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Promotional information"
          title="Route content readers toward the most relevant next step."
          description="This section is ideal for a contextual CTA that connects the article topic to a service offering."
        />
        <div className="hero-grid items-center">
          <Reveal>
            <div className="surface-card h-full p-6 md:p-8">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Explore the related advisory capability behind this topic.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                When your final content is ready, use this block to cross-link
                readers into a service page, consultation offer, or download.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]"
              >
                Visit the page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <PlaceholderMedia
              label="Promotional image"
              detail="Professional business image placeholder"
              heightClassName="min-h-[300px]"
              media={postMedia}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
