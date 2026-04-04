import Link from "next/link";
import { ArrowRight, Globe2, Star } from "lucide-react";

import { AwardsCarousel } from "@/components/awards-carousel";
import { LeaderShowcase } from "@/components/leader-showcase";
import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import {
  aboutInfoCards,
  aboutValueCards,
  awards,
  leaders,
  presenceStats,
} from "@/lib/content";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Adihit Capella, our vision, leadership, presence, and integrated legal, tax, audit, and finance advisory approach.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title="A modern advisory identity built around clarity, trust, and structured execution."
        description="This page is designed to tell the firm story with enough depth for decision-makers while keeping the layout visually premium and easy to update."
        cta={{ label: "Meet our team", href: "#leaders" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        mediaLabel="About Adihit Capella banner"
      />

      <section className="section-shell">
        <div className="hero-grid items-center">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="How we work"
                title="Lead with diagnosis, then move into execution with calm precision."
                description="Use this space for the firm origin, operating philosophy, or a concise leadership message once your final content is ready."
              />
              <div className="grid gap-4">
                {aboutValueCards.map((item, index) => (
                  <Reveal key={item.title} delay={index * 70}>
                    <div className="surface-card p-5">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PlaceholderMedia
              label="How we work visual"
              detail="Ideal for a corporate banner, office interaction image, or executive portrait."
              heightClassName="min-h-[420px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,rgba(44,125,255,0.22),rgba(121,240,209,0.14))] p-[1px]">
          <div className="grid gap-4 rounded-[1.75rem] bg-[rgba(5,14,27,0.94)] p-6 md:grid-cols-4">
            {presenceStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.4rem] bg-[rgba(255,255,255,0.03)] px-4 py-5"
              >
                <div className="text-3xl font-semibold text-white">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="surface-card p-6 md:p-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-2 text-sm text-[var(--brand)]">
              <Star className="h-4 w-4" />
              Deliver excellence
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              We go beyond checklist work to deliver sharper advisory value.
            </h2>
            <div className="mt-6 grid gap-3 text-sm text-[var(--muted)] md:grid-cols-3">
              <div className="surface-card-muted p-4">Clear scope and ownership</div>
              <div className="surface-card-muted p-4">Commercially aware advice</div>
              <div className="surface-card-muted p-4">Responsive and polished delivery</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Information"
          title="Three strategic pillars that explain what clients can expect from the firm."
          description="These equal-height cards mirror the structured, visual-first layout from your references while staying content-editable."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {aboutInfoCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <div className="surface-card flex h-full flex-col p-4">
                <PlaceholderMedia
                  label={card.title}
                  detail="Replace with a service-specific image or icon-led illustration."
                  heightClassName="min-h-[220px]"
                />
                <div className="mt-5 flex flex-1 flex-col">
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
                    {card.description}
                  </p>
                  <Link
                    href={card.cta.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]"
                  >
                    {card.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="hero-grid items-stretch">
          <Reveal>
            <div className="surface-card h-full p-6 md:p-8">
              <span className="eyebrow">Subscribe</span>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
                Stay updated with the latest insights, alerts, and advisory thinking.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Swap this placeholder with your newsletter, subscription workflow,
                or content download strategy.
              </p>
              <Link
                href="/resources"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
              >
                Click here
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card h-full p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-2 text-sm text-[var(--brand)]">
                <Globe2 className="h-4 w-4" />
                Global network
              </div>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
                Position the firm as connected, experienced, and ready for complex mandates.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                This CTA block is ready for network information, alliances, or a
                stronger credibility message once your final content is available.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]"
              >
                Know more about our global network
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Awards & recognitions"
          title="A slider-ready lane for awards, certifications, and credibility markers."
          description="Replace these placeholders with logos, recognitions, rankings, or partner badges when they are available."
        />
        <Reveal>
          <AwardsCarousel items={awards} />
        </Reveal>
      </section>

      <section id="leaders" className="section-shell">
        <SectionHeading
          eyebrow="Our leaders"
          title="Leadership cards with a click-to-open profile experience."
          description="The modal interaction is already in place, so you can later add bios, credentials, and final portraits without rebuilding the section."
        />
        <LeaderShowcase leaders={leaders} />
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="surface-card flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <span className="eyebrow">Contact us</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Ready to turn this polished structure into your final public site?
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
            >
              Contact the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
