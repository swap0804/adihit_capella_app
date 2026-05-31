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
    </div>
  );
}
