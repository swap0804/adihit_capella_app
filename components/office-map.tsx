import { PlaceholderMedia } from "@/components/placeholder-media";
import type { OfficeLocation } from "@/lib/types";

type OfficeMapProps = {
  office: OfficeLocation;
};

function getMapQuery(office: OfficeLocation) {
  return office.mapQuery || office.address || `${office.city}, India`;
}

function getMapLabel(office: OfficeLocation) {
  return office.mapLabel || office.address || office.city || "Office";
}

export function OfficeMap({ office }: OfficeMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const mapQuery = getMapQuery(office);
  const mapLabel = getMapLabel(office);
  const openInMapsUrl =
    office.mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  if (!apiKey) {
    return (
      <div className="space-y-4">
        <PlaceholderMedia
          label="Office location map"
          detail="Add NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY during local setup or build-time deploy configuration to render the live office map here."
          heightClassName="min-h-[360px]"
        />
        <a
          href={openInMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
        >
          Open in Google Maps
        </a>
      </div>
    );
  }

  const params = new URLSearchParams({
    key: apiKey,
    q: mapQuery,
  });
  const embedUrl = `https://www.google.com/maps/embed/v1/place?${params.toString()}`;

  return (
    <div className="space-y-4">
      <div className="surface-card p-2">
        <div className="overflow-hidden rounded-[1.5rem]">
          <iframe
            title={`${mapLabel} map`}
            src={embedUrl}
            className="h-[360px] w-full border-0 md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
      <a
        href={openInMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
