import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { HomeServicesCarousel } from "@/components/home-services-carousel";
import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { QuoteCarousel } from "@/components/quote-carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getMediaBySlug, getMediaForKeywords } from "@/lib/media";
import { createMetadata } from "@/lib/seo";
import {
  homeDifferenceIntro,
  homeDifferenceCards,
  homeHero,
  newsItems,
  resourcePosts,
  serviceCategories,
  testimonials,
} from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Adihit Capella | Futuristic CA, Legal & Finance Consultancy",
  description:
    "SEO-first corporate website for Adihit Capella covering legal, tax, audit, compliance, and financial consulting services.",
  path: "/",
});

const homeHeroMediaSlides = [
  getMediaBySlug("company-registration-and-startup-services"),
  getMediaBySlug("financial-consulting"),
  getMediaBySlug("funding-readiness-and-the-modern-startup-finance-stack"),
  getMediaBySlug("audit-and-assurance"),
].filter((media): media is NonNullable<typeof media> => Boolean(media));

export default function HomePage() {
  return (
    <>
      <PageHero
        {...homeHero}
        mediaLabel='Advisory focus'
        mediaSlides={homeHeroMediaSlides}
        showSocial
      />

      <section className='section-shell'>
        <div className='mb-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end'>
          <SectionHeading
            eyebrow='Services'
            title='The expertise your business needs, working together.'
            description='From setting up a company to managing tax, audit, finance, legal and recurring compliance, we bring specialist advice and dependable execution under one roof.'
          />
          <div className='grid gap-3 sm:grid-cols-3 lg:grid-cols-1'>
            {[
              'Clear advice, without unnecessary complexity',
              'Accurate execution and reliable follow-through',
              'Support that evolves as your business grows',
            ].map((item) => (
              <div
                key={item}
                className='flex items-start gap-3 border-t border-[var(--card-border)] pt-3 text-sm font-medium leading-6 text-[var(--text-strong)]'
              >
                <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]' />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <HomeServicesCarousel services={serviceCategories} />
      </section>

      <section className='section-shell'>
        <div className='hero-grid items-start'>
          <Reveal>
            <SectionHeading
              eyebrow='Adihit Capella difference'
              title='The Adihit Capella Difference'
              description={homeDifferenceIntro.join(' ')}
            />
          </Reveal>
          <div className='grid gap-4'>
            {homeDifferenceCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className='surface-card p-5'>
                  <div className='inline-flex items-center gap-3'>
                    <div className='grid h-10 w-10 place-items-center rounded-full bg-[rgba(106,214,255,0.12)] text-[var(--brand)]'>
                      <CheckCircle2 className='h-5 w-5' />
                    </div>
                    <h3 className='text-lg font-semibold text-white'>
                      {item.title}
                    </h3>
                  </div>
                  <p className='mt-4 text-sm leading-7 text-[var(--muted)]'>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='section-shell'>
        <SectionHeading
          eyebrow='Latest insights & more'
          title='Thought leadership slots built for articles, bulletins, and campaign-led advisory content.'
          description='Use these cards for blogs, articles, budget updates, or sector commentary once your editorial calendar is ready.'
        />
        <div className='grid gap-4 lg:grid-cols-4'>
          {resourcePosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 60}>
              <Link
                href={`/resources/${post.slug}`}
                className='surface-card block h-full p-4 transition hover:-translate-y-1'
              >
                <PlaceholderMedia
                  label={post.category}
                  detail='Featured image placeholder'
                  heightClassName='min-h-[180px]'
                  media={getMediaForKeywords(post.seo.keywords)}
                />
                <div className='mt-5'>
                  <p className='text-sm uppercase tracking-[0.18em] text-[var(--brand)]'>
                    {post.category}
                  </p>
                  <h3 className='mt-3 text-xl font-semibold text-white'>
                    {post.title}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-[var(--muted)]'>
                    {post.excerpt}
                  </p>
                  <span className='card-read-more mt-5 inline-flex items-center gap-2 text-sm font-medium'>
                    Read more
                    <ArrowRight className='h-4 w-4' />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='bg-[#061b3a] px-5 py-16 md:px-8 md:py-20'>
        <Reveal>
          <QuoteCarousel items={testimonials} />
        </Reveal>
      </section>

      <section className='section-shell'>
        <SectionHeading
          eyebrow='News'
          title='Flexible announcement and news blocks for updates, campaigns, and important notices.'
          description='Use this row for firm announcements, service launches, tax alerts, hiring campaigns, or sector updates.'
        />
        <div className='grid gap-4 lg:grid-cols-3'>
          {newsItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <Link href={item.href} className='surface-card block h-full p-5'>
                <p className='text-sm text-[var(--brand)]'>
                  {formatDate(item.date)}
                </p>
                <h3 className='mt-4 text-xl font-semibold text-white'>
                  {item.title}
                </h3>
                <p className='mt-3 text-sm leading-7 text-[var(--muted)]'>
                  {item.description}
                </p>
                <span className='card-read-more mt-5 inline-flex items-center gap-2 text-sm font-medium'>
                  Read more
                  <ArrowRight className='h-4 w-4' />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className='section-shell'>
        <div className='hero-grid items-start'>
          <Reveal>
            <div className='surface-card h-full p-6 md:p-8'>
              <span className='eyebrow'>Get in touch</span>
              <h2 className='mt-5 text-3xl font-semibold text-white md:text-5xl'>
                Start with a quick enquiry and shape the site content later.
              </h2>
              <p className='mt-5 text-base leading-8 text-[var(--muted)]'>
                The left panel is intentionally content-friendly. You can
                replace this copy with your real firm introduction, contact
                numbers, or service-specific pitch later.
              </p>
              <div className='mt-8'>
                <PlaceholderMedia
                  label='Contact visual'
                  detail='Use a founder image, office photo, or branded illustration here.'
                  heightClassName='min-h-[260px]'
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className='surface-card p-6 md:p-8'>
              <ContactForm source='homepage' />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
