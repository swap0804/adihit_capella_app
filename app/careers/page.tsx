import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { careerBenefits, careerCards, officeGallery } from "@/lib/content";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Explore careers at Adihit Capella including openings, articleship, work culture, and learning opportunities.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="A modern careers experience for professionals, students, and future collaborators."
        description="This hub gives you space to present culture, articleship, openings, and direct contact pathways in one polished flow."
        cta={{ label: "See openings", href: "/careers/openings" }}
        secondaryCta={{ label: "Explore articleship", href: "/careers/articleship" }}
        mediaLabel="Careers banner"
      />

      <section className="section-shell">
        <SectionHeading
          eyebrow="Top options"
          title="Three clear entry points for different talent journeys."
          description="This card row follows the reference structure while staying flexible enough for later copy, icons, and final visual styling."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {careerCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 70}>
              <Link
                href={card.cta.href}
                className={`surface-card block h-full p-5 transition hover:-translate-y-1 ${
                  card.title === "Call Now"
                    ? "border-[rgba(255,107,129,0.35)]"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                  {card.title === "Call Now" ? (
                    <PhoneCall className="h-5 w-5 text-[var(--danger)]" />
                  ) : (
                    <ArrowRight className="h-5 w-5 text-[var(--brand)]" />
                  )}
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {card.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="life-at-adihit" className="section-shell">
        <Reveal>
          <div className="surface-card overflow-hidden p-4 md:p-6">
            <PlaceholderMedia
              label="Working at Adihit Capella banner"
              detail="Use a wide culture image, leadership visual, or office collage in this strip."
              heightClassName="min-h-[280px]"
            />
          </div>
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="hero-grid items-start">
          <Reveal>
            <PlaceholderMedia
              label="Life at Adihit Capella video or image"
              detail="Embed a YouTube video here later or use an office story visual."
              heightClassName="min-h-[360px]"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card h-full p-6 md:p-8">
              <SectionHeading
                eyebrow="Life at Adihit Capella"
                title="Show the culture behind the consulting work."
                description="This panel is ready for your real employer brand story, team philosophy, and a stronger message around learning and growth."
              />
              <div className="grid gap-4 md:grid-cols-3">
                {careerBenefits.map((benefit) => (
                  <div key={benefit.title} className="surface-card-muted p-4">
                    <h3 className="text-base font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="surface-card mx-auto max-w-3xl p-6 text-center md:p-8">
            <span className="eyebrow">Work with us</span>
            <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">
              Build a career around real advisory exposure and strong client communication.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Use this centered block for a stronger employer message, direct
              application CTA, or firm culture pitch.
            </p>
            <Link
              href="/careers/openings"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
            >
              Explore more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Life at office"
          title="A grid-ready gallery for events, training, culture, and team moments."
          description="These placeholders can later become a more visual office story without any layout changes."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {officeGallery.map((item, index) => (
            <Reveal key={item} delay={index * 60}>
              <PlaceholderMedia
                label={item}
                detail="Gallery image placeholder"
                heightClassName="min-h-[220px]"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
