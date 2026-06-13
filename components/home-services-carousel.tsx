"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";

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
  const isPausedRef = useRef(false);
  const dragRef = useRef({
    pointerId: 0,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
    active: false,
  });

  const scroll = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-service-card]");
    const gap = 16;
    const distance = card ? card.offsetWidth + gap : track.clientWidth;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const nextScrollLeft = track.scrollLeft + direction * distance;

    track.scrollTo({
      left:
        direction === 1 && nextScrollLeft > maxScrollLeft - 8
          ? 0
          : direction === -1 && nextScrollLeft < 8
            ? maxScrollLeft
            : nextScrollLeft,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isPausedRef.current && !document.hidden) {
        scroll(1);
      }
    }, 4000);

    return () => window.clearInterval(interval);
  }, [scroll]);

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const track = trackRef.current;
    if (!track) return;

    isPausedRef.current = true;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
      active: true,
    };
  };

  const drag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragRef.current;
    if (!track || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    const distance = event.clientX - dragState.startX;
    if (Math.abs(distance) > 5) {
      if (!dragState.moved) {
        dragState.moved = true;
        track.setPointerCapture(event.pointerId);
      }

      event.preventDefault();
      track.scrollLeft = dragState.startScrollLeft - distance;
    }
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragRef.current;
    if (!track || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    dragState.active = false;
    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          Explore our service areas
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 border-b border-[var(--brand)] pb-1 text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--text-strong)]"
        >
          View all services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="relative md:mx-7">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="View previous services"
          className="group absolute left-2 top-[35%] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#c8d9e8] bg-white text-[#123b6d] shadow-[0_4px_14px_rgba(8,42,92,0.12)] transition hover:border-[#1976d2] hover:text-[#1976d2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55aef5] focus-visible:ring-offset-2 md:-left-7 md:top-1/2 md:h-11 md:w-11 lg:-left-9"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <div
          ref={trackRef}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
          onFocusCapture={() => {
            isPausedRef.current = true;
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              isPausedRef.current = false;
            }
          }}
          onPointerDown={startDrag}
          onPointerMove={drag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={(event) => {
            if (dragRef.current.moved) {
              event.preventDefault();
              event.stopPropagation();
              dragRef.current.moved = false;
            }
          }}
          className="flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto pb-4 select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                bottomGradient
                sideGradient
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
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="View next services"
          className="group absolute right-2 top-[35%] z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-[#c8d9e8] bg-white text-[#123b6d] shadow-[0_4px_14px_rgba(8,42,92,0.12)] transition hover:border-[#1976d2] hover:text-[#1976d2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55aef5] focus-visible:ring-offset-2 md:-right-7 md:top-1/2 md:h-11 md:w-11 lg:-right-9"
        >
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
