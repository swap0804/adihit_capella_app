"use client";

import { X } from "lucide-react";
import { useState } from "react";

import { PlaceholderMedia } from "@/components/placeholder-media";
import type { LeaderProfile } from "@/lib/types";

type LeaderShowcaseProps = {
  leaders: LeaderProfile[];
};

export function LeaderShowcase({ leaders }: LeaderShowcaseProps) {
  const [selected, setSelected] = useState<LeaderProfile | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {leaders.map((leader) => (
          <button
            type="button"
            key={leader.name}
            className="surface-card group overflow-hidden p-4 text-left transition hover:-translate-y-1"
            onClick={() => setSelected(leader)}
          >
            <PlaceholderMedia
              label={leader.name}
              detail={leader.role}
              heightClassName="min-h-[220px]"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">{leader.name}</h3>
              <p className="mt-1 text-sm text-[var(--brand)]">{leader.role}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {leader.summary}
              </p>
            </div>
          </button>
        ))}
      </div>
      {selected ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[rgba(1,7,14,0.78)] p-4 backdrop-blur-md">
          <div className="surface-card w-full max-w-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--brand)]">
                  Our leader
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {selected.name}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{selected.role}</p>
              </div>
              <button
                type="button"
                className="rounded-full border border-[rgba(151,201,255,0.18)] p-2"
                onClick={() => setSelected(null)}
                aria-label="Close leader details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
              {selected.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {selected.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(151,201,255,0.18)] px-3 py-1.5 text-sm text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
