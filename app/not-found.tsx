import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell">
      <div className="surface-card mx-auto max-w-2xl p-8 text-center">
        <span className="eyebrow">Not found</span>
        <h1 className="mt-5 text-4xl font-semibold text-white">
          The page you requested does not exist.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          Return to the homepage or browse the service and resource sections.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center rounded-full bg-[linear-gradient(135deg,var(--brand),var(--accent))] px-5 py-3 font-semibold text-slate-950"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
