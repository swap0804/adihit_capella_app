"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useEffect, useEffectEvent, useState } from "react";

import type { MediaAsset } from "@/lib/types";

type HeroMediaCarouselProps = {
  label: string;
  slides: MediaAsset[];
  heightClassName?: string;
  content: {
    eyebrow?: string;
    title: string;
    description: string;
    actions?: ReactNode;
  };
};

export function HeroMediaCarousel({
  slides,
  heightClassName = "min-h-[520px]",
  content,
}: HeroMediaCarouselProps) {
  const [index, setIndex] = useState(0);

  const advance = useEffectEvent(() => {
    setIndex((current) => (current + 1) % slides.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => advance(), 4800);
    return () => window.clearInterval(timer);
  }, []);

  const active = slides[index];

  if (!active) {
    return null;
  }

  return (
    <div>
      <div className={`relative isolate overflow-hidden ${heightClassName}`}>
        <Image
          src={active.src}
          alt={active.alt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div className="absolute bottom-6 left-5 right-5 z-10 mx-auto flex max-w-[var(--max-width)] justify-end md:left-8 md:right-8">
          <CarouselControls
            index={index}
            slides={slides}
            setIndex={setIndex}
          />
        </div>
      </div>

      <div className="section-shell py-12 md:py-16">
        <div className="max-w-4xl">
          {content.eyebrow ? (
            <span className="eyebrow">
              {content.eyebrow}
            </span>
          ) : null}
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {content.description}
          </p>
          {content.actions ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {content.actions}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CarouselControls({
  index,
  slides,
  setIndex,
}: {
  index: number;
  slides: MediaAsset[];
  setIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            className={`h-2.5 rounded-full transition ${
              slideIndex === index
                ? "w-9 bg-[var(--brand)]"
                : "w-2.5 bg-white/45 hover:bg-white/70"
            }`}
            onClick={() => setIndex(slideIndex)}
            aria-label={`Show hero image ${slideIndex + 1}`}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="rounded-full border border-white/25 bg-black/20 p-2.5 text-white backdrop-blur transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          onClick={() =>
            setIndex((current) => (current - 1 + slides.length) % slides.length)
          }
          aria-label="Previous hero image"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="rounded-full border border-white/25 bg-black/20 p-2.5 text-white backdrop-blur transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          onClick={() => setIndex((current) => (current + 1) % slides.length)}
          aria-label="Next hero image"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
