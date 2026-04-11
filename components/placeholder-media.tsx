import Image from "next/image";

import type { MediaAsset } from "@/lib/types";

type PlaceholderMediaProps = {
  label: string;
  detail?: string;
  heightClassName?: string;
  media?: MediaAsset;
};

export function PlaceholderMedia({
  label,
  detail = "Replace this area with your final image, illustration, or video.",
  heightClassName = "min-h-[320px]",
  media,
}: PlaceholderMediaProps) {
  if (media) {
    return (
      <div className={`media-placeholder ${heightClassName}`}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          unoptimized
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 44vw, 92vw"
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(1,7,14,0.02)_30%,rgba(1,7,14,0.76))]" />
        <div className="relative z-20 flex h-full flex-col justify-end p-5 md:p-6">
          <h3 className="max-w-sm text-xl font-semibold leading-tight text-white md:text-2xl">
            {media.caption || label}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className={`media-placeholder ${heightClassName} p-6`}>
      <div className="flex h-full flex-col justify-between rounded-[1.3rem] bg-[rgba(255,255,255,0.02)] p-6">
        <div>
          <span className="eyebrow">Media Slot</span>
          <h3 className="mt-4 text-2xl font-semibold text-white">{label}</h3>
        </div>
        <div className="space-y-3">
          <div className="h-2 w-28 rounded-full bg-[rgba(106,214,255,0.45)]" />
          <div className="h-2 w-40 rounded-full bg-[rgba(121,240,209,0.24)]" />
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
}
