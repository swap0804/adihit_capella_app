import { Star } from "lucide-react";

import type { Testimonial } from "@/lib/types";

type QuoteCarouselProps = {
  items: Testimonial[];
};

export function QuoteCarousel({ items }: QuoteCarouselProps) {
  const visibleItems = items.slice(0, 3);

  return (
    <div>
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7ec8ff]">
          Client reviews
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#fff] md:text-4xl">
          What Our Clients Say
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {visibleItems.map((item, index) => (
          <article
            key={item.name}
            className={`border bg-[#20375d] p-8 ${
              index === 1 ? "border-[#3d8fe8]" : "border-[#385071]"
            }`}
          >
            <div className="flex gap-1 text-[#ffd338]" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-4 w-4 fill-current"
                  strokeWidth={0}
                />
              ))}
            </div>
            <blockquote className="mt-5 text-sm font-semibold italic leading-7 text-blue-50">
              &quot;{item.review}&quot;
            </blockquote>
            <div className="mt-7 flex items-center gap-4">
              <div className="grid h-11 w-11 place-items-center bg-[#3d8fe8] text-sm font-bold text-[#fff]">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-[#fff]">{item.name}</p>
                <p className="text-xs text-blue-200">{item.company}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
