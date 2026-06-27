import { Suspense } from 'react';

import { createMetadata } from '@/lib/seo';

import { JobDetailsView } from '@/components/job-details-view';

export const metadata = createMetadata({
  title: 'Job Details',
  description: 'View the full job description and apply through the quick application form.',
  path: '/careers/openings/view',
});

export default function JobDetailsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
          Job details
        </p>
      </div>
      <Suspense fallback={<JobDetailsFallback />}>
        <JobDetailsView />
      </Suspense>
    </div>
  );
}

function JobDetailsFallback() {
  return (
    <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-[0_18px_55px_rgba(14,165,233,0.08)]">
      <div className="h-6 w-32 animate-pulse rounded-full bg-sky-100" />
      <div className="mt-5 h-10 w-3/4 animate-pulse rounded-2xl bg-sky-50" />
      <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-sky-50" />
      <div className="mt-3 h-4 w-11/12 animate-pulse rounded-full bg-sky-50" />
      <div className="mt-8 h-[540px] animate-pulse rounded-[2rem] bg-sky-50" />
    </div>
  );
}
