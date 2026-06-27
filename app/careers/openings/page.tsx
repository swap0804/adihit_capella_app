import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Career Openings',
  description: 'Career openings have moved to the main careers page.',
  path: '/careers/openings',
});

export default function CareerOpeningsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] border border-sky-100 bg-white p-8 shadow-[0_18px_55px_rgba(14,165,233,0.08)]">
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          <Sparkles className="h-4 w-4" />
          Careers updated
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Open roles now live on the main careers page.
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          We moved the active jobs list, details, and application flow into <span className="font-semibold text-slate-900">/careers</span> so the layout matches the reference document more closely.
        </p>
        <Link
          href="/careers"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0ea5e9,#60a5fa)] px-6 py-3 text-sm font-semibold text-white"
        >
          Go to Careers
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
