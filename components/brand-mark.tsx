export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="glow-ring relative grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(106,214,255,0.95),rgba(44,125,255,0.72),rgba(4,17,31,1))] shadow-[0_16px_50px_rgba(44,125,255,0.28)]">
        <span className="text-lg font-black tracking-[0.2em] text-white">A</span>
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
