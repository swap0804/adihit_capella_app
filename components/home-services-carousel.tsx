"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { PlaceholderMedia } from "@/components/placeholder-media";
import { getMediaForKeywords } from "@/lib/media";
import type { ServiceCategory } from "@/lib/types";

type HomeServicesCarouselProps = {
  services: ServiceCategory[];
};

export function HomeServicesCarousel({
  services,
}: HomeServicesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-service-card]");
    const gap = 16;
    const distance = card ? card.offsetWidth + gap : track.clientWidth;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Explore our service areas
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="View previous services"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--card-border)] text-[var(--text-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="View next services"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--card-border)] text-[var(--text-strong)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service) => (
          <article
            key={service.slug}
            data-service-card
            className="surface-card service-card flex h-auto min-w-[85%] snap-start flex-col p-4 sm:min-w-[48%] lg:min-w-[calc((100%-3rem)/4)]"
          >
            <PlaceholderMedia
              label={service.title}
              detail={service.subtitle}
              heightClassName="min-h-[220px]"
              media={getMediaForKeywords(service.seo.keywords)}
            />
            <div className="mt-5 flex flex-1 flex-col">
              <h3 className="text-xl font-bold leading-7 text-[var(--text-strong)]">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
                {service.subtitle}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="card-read-more mt-5 inline-flex items-center gap-2 text-sm font-medium"
              >
                Explore service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
