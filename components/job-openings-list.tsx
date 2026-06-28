"use client";

import Link from 'next/link';
import { ArrowRight, BadgeInfo, BriefcaseBusiness, Building2, Clock3, CircleDot, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';

import type { JobCard } from '@/lib/types';

type JobOpeningsListProps = {
  jobs: JobCard[];
  error?: string;
};

export function JobOpeningsList({ jobs, error }: JobOpeningsListProps) {
  if (error) {
    return (
      <div className="rounded-[1.5rem] border border-sky-200 bg-white p-6 shadow-[0_12px_32px_rgba(14,165,233,0.08)]">
        <p className="text-sm font-semibold text-slate-900">Jobs are loading slowly.</p>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-700">{error}</p>
        <p className="mt-4 text-sm text-sky-700">Please refresh the page after the backend is available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* <div className="flex items-center gap-2 px-1">
        <CircleDot className="h-4 w-4 text-emerald-500" />
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          Open Positions <span className="text-sm font-medium text-slate-500">({jobs.length})</span>
        </h2>
      </div> */}

      {jobs.length === 0 ? (
        <div className="rounded-[1.25rem] border border-slate-200 bg-white p-8 text-center text-sm text-slate-700 shadow-[0_8px_22px_rgba(15,23,42,0.05)]">
          No current openings available.
        </div>
      ) : (
        <div className="space-y-3">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="rounded-[1rem] border border-slate-200 bg-white px-4 py-4 shadow-[0_8px_22px_rgba(15,23,42,0.04)] transition hover:border-sky-200 hover:shadow-[0_12px_28px_rgba(14,165,233,0.08)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold tracking-tight text-slate-900 sm:text-[1.05rem]">
                      {job.title}
                    </h3>
                    {/* <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                      Open
                    </span> */}
                  </div>

                  <p className="mt-1.5 max-w-4xl text-sm leading-6 text-slate-600">{job.summary}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-600">
                    <InfoItem icon={<Building2 className="h-3.5 w-3.5" />} label={job.department} />
                    <InfoItem icon={<MapPin className="h-3.5 w-3.5" />} label={job.location} />
                    <InfoItem icon={<BriefcaseBusiness className="h-3.5 w-3.5" />} label={job.employmentType} />
                    <InfoItem icon={<Clock3 className="h-3.5 w-3.5" />} label={job.experience} />
                    {job.salaryRange ? <InfoItem icon={<BadgeInfo className="h-3.5 w-3.5" />} label={job.salaryRange} /> : null}
                  </div>
                </div>

                <Link
                  href={`/careers/details/${job.id}`}
                  className="job-card-read-more inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-[0.75rem] bg-[#12264a] px-4 py-2.5 text-sm font-semibold transition hover:bg-[#0d1f3f]"
                  style={{ color: '#ffffff' }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function InfoItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1.5 text-slate-700">
      <span className="text-sky-600">{icon}</span>
      {label}
    </span>
  );
}
