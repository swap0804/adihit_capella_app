"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

import type { Testimonial } from "@/lib/types";

type QuoteCarouselProps = {
  items: Testimonial[];
};

export function QuoteCarousel({ items }: QuoteCarouselProps) {
  const [index, setIndex] = useState(0);

  const advance = useEffectEvent(() => {
    setIndex((current) => (current + 1) % items.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => advance(), 4500);
    return () => window.clearInterval(timer);
  }, []);

  const active = items[index];

  return (
    <div className="surface-card overflow-hidden p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-2 text-sm text-[var(--brand)]">
          <Quote className="h-4 w-4" />
          Client voice
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full border border-[rgba(151,201,255,0.18)] p-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            onClick={() =>
              setIndex((current) => (current - 1 + items.length) % items.length)
            }
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-full border border-[rgba(151,201,255,0.18)] p-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
            onClick={() => setIndex((current) => (current + 1) % items.length)}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <blockquote className="mt-8 max-w-4xl text-xl leading-9 text-white md:text-3xl">
        “{active?.review}”
      </blockquote>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-medium text-white">{active?.name}</p>
          <p className="text-sm text-[var(--muted)]">{active?.company}</p>
        </div>
        <div className="flex gap-2">
          {items.map((item, itemIndex) => (
            <button
              key={item.name}
              type="button"
              className={`h-2.5 rounded-full transition ${
                itemIndex === index
                  ? "w-10 bg-[var(--brand)]"
                  : "w-2.5 bg-[rgba(151,201,255,0.25)]"
              }`}
              onClick={() => setIndex(itemIndex)}
              aria-label={`View testimonial ${itemIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
