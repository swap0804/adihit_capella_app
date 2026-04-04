"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionListProps = {
  items: AccordionItem[];
};

export function AccordionList({ items }: AccordionListProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.title}
            className="surface-card overflow-hidden rounded-[1.4rem]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="text-lg font-medium text-white">{item.title}</span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(151,201,255,0.18)] text-[var(--brand)]">
                {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {open ? (
              <div className="border-t border-[rgba(151,201,255,0.1)] px-5 pb-5 pt-4 text-sm leading-7 text-[var(--muted)] md:px-6">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
