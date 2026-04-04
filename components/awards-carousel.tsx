"use client";

import { useEffect, useEffectEvent, useState } from "react";

import type { AwardItem } from "@/lib/types";

type AwardsCarouselProps = {
  items: AwardItem[];
};

export function AwardsCarousel({ items }: AwardsCarouselProps) {
  const [index, setIndex] = useState(0);

  const rotate = useEffectEvent(() => {
    setIndex((current) => (current + 1) % items.length);
  });

  useEffect(() => {
    const timer = window.setInterval(() => rotate(), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const visible = Array.from({ length: Math.min(3, items.length) }, (_, offset) => {
    return items[(index + offset) % items.length];
  });

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {visible.map((item) => (
        <div key={item.title} className="surface-card p-5">
          <div className="media-placeholder min-h-[170px] p-4">
            <div className="flex h-full flex-col justify-between rounded-[1.2rem] bg-[rgba(255,255,255,0.02)] p-4">
              <div className="text-sm uppercase tracking-[0.18em] text-[var(--brand)]">
                Award
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
