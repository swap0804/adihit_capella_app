import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Career Details',
  description: 'Select a live job from the careers page to view the full details.',
  path: '/careers/details',
});

export default function CareersDetailsIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-sky-200 bg-white p-8 shadow-[0_18px_55px_rgba(14,165,233,0.12)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-800">
          Career details
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Select a role from the careers page.
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700">
          The SEO-friendly job detail pages live at <span className="font-semibold text-slate-900">/careers/details/[jobId]</span>.
        </p>
        <Link
          href="/careers"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to careers
        </Link>
      </div>
    </div>
  );
}
