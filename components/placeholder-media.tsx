type PlaceholderMediaProps = {
  label: string;
  detail?: string;
  heightClassName?: string;
};

export function PlaceholderMedia({
  label,
  detail = "Replace this area with your final image, illustration, or video.",
  heightClassName = "min-h-[320px]",
}: PlaceholderMediaProps) {
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
