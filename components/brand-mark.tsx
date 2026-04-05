export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="brand-mark-panel glow-ring relative grid h-11 w-11 place-items-center rounded-2xl">
        <span className="text-[var(--text-inverse)] text-lg font-black tracking-[0.2em]">
          A
        </span>
      </div>
      <div>
        <p className="text-[0.72rem] uppercase tracking-[0.3em] text-[var(--brand)]">
          Adihit Capella
        </p>
        <p className="text-sm text-[var(--muted)]">
          Legal, Tax, Audit & Finance Advisory
        </p>
      </div>
    </div>
  );
}
