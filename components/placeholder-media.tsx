import Image from "next/image";

import { getRelatedMedia } from "@/lib/media";
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
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(1,7,14,0.02)_30%,rgba(1,7,14,0.76))]" />
      <div className="relative z-20 flex h-full flex-col justify-end p-5 md:p-6">
        <h3 className="max-w-sm text-xl font-semibold leading-tight text-[#fff] md:text-2xl">
          {resolvedMedia.caption || label}
        </h3>
      </div>
    </div>
  );
}
