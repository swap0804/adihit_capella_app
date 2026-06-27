import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import { JobOpeningsList } from '@/components/job-openings-list';
import { fetchJobs, mapJobsToCards } from '@/lib/job-api';
import type { JobCard } from '@/lib/types';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Careers',
  description: 'Explore live job openings',
  path: '/careers',
});

export const dynamic = 'force-dynamic';

export default async function CareersPage() {
  let error = '';
  let jobs: JobCard[] = [];

  try {
    const payload = await fetchJobs();
    jobs = mapJobsToCards((payload.data ?? []).filter((job) => job.isActive));
  } catch {
    error = 'Unable to load live openings right now.';
  }

  return (
    <div className="space-y-10 bg-sky-50 pb-12 text-slate-900">
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-200 bg-sky-700 shadow-[0_24px_80px_rgba(14,165,233,0.16)]">
          <div className="relative grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10 p-6 sm:p-10 lg:p-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-sky-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
                Join Our Team
              </span>
              {/* <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Join Our Team
              </h1> */}
              <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100">
                Explore current openings, read the role details, and apply from a clean, blue-sky and white careers
                experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#current-openings"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-800 shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition hover:translate-y-[-1px]"
                >
                  View Openings
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                >
                  Talk to Hiring Team
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-[460px] bg-sky-900">
              <Image
                src="/images/media/accounting-and-bookkeeping.jpg"
                alt="Careers banner"
                fill
                priority
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-sky-900/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-800">
            Current Open Positions
          </p>
        </div>
      </section>

      <section id="current-openings" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <JobOpeningsList jobs={jobs} error={error} />
      </section>
    </div>
  );
}
