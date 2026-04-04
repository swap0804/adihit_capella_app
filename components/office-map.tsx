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
    <div className='space-y-4'>
      <div className='surface-card p-2'>
        <div className='overflow-hidden rounded-[1.5rem]'>
          <iframe
            title={`${mapLabel} map`}
            src={embedUrl}
            className='h-[360px] w-full border-0 md:h-[420px]'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
      </div>
      <a
        href={openInMapsUrl}
        target='https://www.google.com/maps/place/HP+%26+Associates+LLP,+Chartered+Accountants/@19.2042571,73.0052232,21z/data=!4m9!1m2!2m1!1sadihit+capella+private+limited!3m5!1s0x3be7bf7fe02195ef:0xe171903a0a456b8c!8m2!3d19.2043897!4d73.005324!16s%2Fg%2F11pkjfzn7y?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D'
        rel='noreferrer'
        className='inline-flex items-center rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-3 text-sm text-[var(--muted)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]'
      >
        Open in Google Maps
      </a>
    </div>
  );
}
