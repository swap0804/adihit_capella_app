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
  label,
  slides,
  heightClassName = "min-h-[720px]",
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
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(2,6,12,0.86)_0%,rgba(2,6,12,0.56)_44%,rgba(2,6,12,0.2)_100%),linear-gradient(180deg,rgba(2,6,12,0.08)_0%,rgba(2,6,12,0.72)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(155,207,79,0.18),transparent_30%),radial-gradient(circle_at_70%_74%,rgba(118,212,215,0.1),transparent_34%)]" />
      <div className="relative z-20 mx-auto flex min-h-[inherit] max-w-[var(--max-width)] flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36">
        <div className="max-w-3xl">
          {content.eyebrow ? (
            <span className="inline-flex rounded-full border border-[rgba(155,207,79,0.32)] bg-[rgba(5,10,18,0.42)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#b9ef75] backdrop-blur-md">
              {content.eyebrow}
            </span>
          ) : null}
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#f8fbff] drop-shadow-[0_4px_24px_rgba(0,0,0,0.46)] md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d6e2f2] drop-shadow-[0_3px_16px_rgba(0,0,0,0.42)]">
            {content.description}
          </p>
          {content.actions ? (
            <div className="mt-8 flex flex-wrap gap-4 [&_a.border]:!text-[#f8fbff]">
              {content.actions}
            </div>
          ) : null}
        </div>

        <div className="mt-12 flex items-center justify-between gap-5">
          <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-[#b9ef75] md:inline-flex">
            {active.caption || label}
          </span>
          <CarouselControls
            index={index}
            slides={slides}
            setIndex={setIndex}
          />
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
