import Link from 'next/link';
import { ArrowRight, GraduationCap, Handshake, Sparkles } from 'lucide-react';

import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Articleship',
  description: 'Explore articleship opportunities and learn how the careers experience is structured.',
  path: '/careers/articleship',
});

const highlights = [
  'Practical exposure across audit, tax, finance, and compliance.',
  'Mentorship-focused learning with real client communication.',
  'A polished path into the openings list when you are ready to apply.',
];

export default function ArticleshipPage() {
  return (
    <div className="space-y-10 pb-8 text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-[linear-gradient(135deg,rgba(224,242,254,0.95),rgba(255,255,255,0.98),rgba(219,234,254,0.72))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(125,211,252,0.22),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Articleship
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Grow through practical work, guidance, and real responsibility.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              This page keeps the same airy blue-and-white visual language while focusing on learning, mentorship,
              and the bridge to live openings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/careers/openings"
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0ea5e9,#60a5fa)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(14,165,233,0.22)] transition hover:translate-y-[-1px]"
              >
                See Live Openings
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-300"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:px-8">
        <div className="rounded-[2.4rem] border border-sky-100 bg-white p-6 shadow-[0_18px_55px_rgba(14,165,233,0.08)] md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">What you get</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            A clear learning track with real work and friendly guidance.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-sky-100 bg-sky-50/70 p-4 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2.4rem] border border-sky-100 bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(255,255,255,1))] p-6 shadow-[0_18px_55px_rgba(14,165,233,0.08)]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
            <GraduationCap className="h-5 w-5" />
          </div>
          <p className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Structured, not noisy.</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The experience points toward the openings list when a candidate is ready to apply, without adding filters
            or extra clutter.
          </p>
          <div className="mt-6 rounded-[1.4rem] border border-sky-100 bg-white p-4 text-sm leading-7 text-slate-700">
            <Handshake className="mb-3 h-5 w-5 text-sky-600" />
            We keep the messaging focused on growth, responsibility, and smooth onboarding into live roles.
          </div>
        </div>
      </section>
    </div>
  );
}
