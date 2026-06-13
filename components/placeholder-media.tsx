import Image from "next/image";

import { getRelatedMedia } from "@/lib/media";
import type { MediaAsset } from "@/lib/types";

type PlaceholderMediaProps = {
  label: string;
  detail?: string;
  heightClassName?: string;
  media?: MediaAsset;
  bottomGradient?: boolean;
  sideGradient?: boolean;
};

export function PlaceholderMedia({
  label,
  detail = "Replace this area with your final image, illustration, or video.",
  heightClassName = "min-h-[320px]",
  media,
  bottomGradient = false,
  sideGradient = false,
}: PlaceholderMediaProps) {
  const resolvedMedia = media ?? getRelatedMedia(label, detail);

  return (
    <div className={`media-placeholder ${heightClassName}`}>
      <Image
        src={resolvedMedia.src}
        alt={resolvedMedia.alt}
        fill
        unoptimized
        sizes="(min-width: 1280px) 520px, (min-width: 768px) 44vw, 92vw"
        className="z-0 object-cover"
      />
      {bottomGradient ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[38%] bg-gradient-to-t from-[#0b4f9c]/30 via-[#55aef5]/10 to-transparent"
        />
      ) : null}
      {sideGradient ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[22%] bg-gradient-to-r from-[#7cc7ff]/20 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[22%] bg-gradient-to-l from-[#7cc7ff]/20 to-transparent"
          />
        </>
      ) : null}
    </div>
  );
}
