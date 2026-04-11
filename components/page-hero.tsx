import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroMediaCarousel } from "@/components/hero-media-carousel";
import { PlaceholderMedia } from "@/components/placeholder-media";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/social-icons";
import { siteConfig } from "@/lib/site-config";
import type { HeroContent, MediaAsset } from "@/lib/types";

type PageHeroProps = HeroContent & {
  mediaLabel?: string;
  media?: MediaAsset;
  mediaSlides?: MediaAsset[];
  showSocial?: boolean;
  centered?: boolean;
};

function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href);
}

export function PageHero({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
  tags,
  stats,
  mediaLabel = "Hero image placeholder",
  media,
  mediaSlides,
  showSocial = false,
  centered = false,
}: PageHeroProps) {
  if (centered) {
    return (
      <section className="section-shell pt-10 md:pt-16">
        <div className="surface-card glow-ring overflow-hidden bg-[var(--hero-gradient)] px-6 py-14 text-center md:px-10">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {cta ? (
              isExternalHref(cta.href) ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )
            ) : null}
            {secondaryCta ? (
              isExternalHref(secondaryCta.href) ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.24)] px-5 py-3 text-white transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  {secondaryCta.label}
                </a>
              ) : (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.24)] px-5 py-3 text-white transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  {secondaryCta.label}
                </Link>
              )
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  const actions = (
    <>
      {cta ? (
        isExternalHref(cta.href) ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )
      ) : null}
      {secondaryCta ? (
        isExternalHref(secondaryCta.href) ? (
          <a
            href={secondaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.24)] px-5 py-3 text-white transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            {secondaryCta.label}
          </a>
        ) : (
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.24)] px-5 py-3 text-white transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            {secondaryCta.label}
          </Link>
        )
      ) : null}
    </>
  );

  const social = showSocial ? (
    <div className="mt-8 flex items-center gap-3 text-[var(--muted)]">
      <span className="text-sm uppercase tracking-[0.2em]">Follow</span>
      <div className="flex gap-2">
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[rgba(151,201,255,0.18)] p-2 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[rgba(151,201,255,0.18)] p-2 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          aria-label="Instagram"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[rgba(151,201,255,0.18)] p-2 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          aria-label="Facebook"
        >
          <FacebookIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  ) : null;

  if (mediaSlides?.length) {
    return (
      <section>
        <HeroMediaCarousel
          label={mediaLabel}
          slides={mediaSlides}
          heightClassName="min-h-[720px]"
          content={{
            eyebrow,
            title,
            description,
            actions,
          }}
        />
      </section>
    );
  }

  return (
    <section className="section-shell pt-10 md:pt-16">
      <div className="surface-card hero-panel overflow-hidden bg-[var(--hero-gradient)]">
        <div className="hero-grid items-center">
          <div className="relative z-10 p-2">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">{actions}</div>
            {tags?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[rgba(151,201,255,0.18)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-sm text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            {stats?.length ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="surface-card-muted rounded-[1.4rem] px-4 py-4"
                  >
                    <div className="text-2xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            {social}
          </div>
          <PlaceholderMedia
            label={mediaLabel}
            detail="This framed placeholder is ready for a corporate banner image, executive portrait, infographic, or campaign visual."
            heightClassName="min-h-[360px]"
            media={media}
          />
        </div>
      </div>
    </section>
  );
}
