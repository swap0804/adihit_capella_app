"use client";

import Link from 'next/link';
import { ArrowLeft, BriefcaseBusiness, CalendarDays, CircleAlert, MapPin, Sparkles } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { JobApplicationForm } from '@/components/job-application-form';
import { fetchJobById } from '@/lib/job-api';
import type { BackendJob } from '@/lib/types';

export function JobDetailsView() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');
  const [job, setJob] = useState<BackendJob | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadJob() {
      if (!jobId) {
        setJob(null);
        setError('Choose a role from the openings list to see the full details.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');
        const data = await fetchJobById(jobId, controller.signal);
        setJob(data);
      } catch (loadError) {
        if (loadError instanceof Error && loadError.name === 'AbortError') {
          return;
        }

        setJob(null);
        setError(
          loadError instanceof Error
            ? loadError.message
            : 'Unable to load the selected role.',
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadJob();

    return () => controller.abort();
  }, [jobId]);

  if (loading) {
    return <JobDetailsSkeleton />;
  }

  if (error || !job) {
    return (
      <div className="rounded-[2rem] border border-sky-200 bg-white p-8 shadow-[0_18px_55px_rgba(14,165,233,0.12)]">
        <div className="flex items-start gap-3">
          <CircleAlert className="mt-0.5 h-5 w-5 text-sky-500" />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Job details are not available yet.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
              {error}
            </p>
            <Link
              href="/careers"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
      <article className="rounded-[2rem] border border-sky-200 bg-white p-6 shadow-[0_18px_55px_rgba(14,165,233,0.12)] md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
            {job.department}
          </span>
          <span className="inline-flex rounded-full bg-sky-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-900">
            {job.employmentType}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {job.jobTitle}
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-700">
          {job.jobDescription}
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <DetailChip icon={<MapPin className="h-4 w-4" />} label="Location" value={job.location} />
          <DetailChip
            icon={<BriefcaseBusiness className="h-4 w-4" />}
            label="Experience"
            value={job.experience}
          />
          <DetailChip
            icon={<CalendarDays className="h-4 w-4" />}
            label="Salary"
            value={job.salaryRange || 'Competitive'}
          />
        </div>

        <DetailSection title="Roles & Responsibilities" items={job.rolesAndResponsibilities} />
        <DetailSection title="Required Qualifications" items={job.requiredQualifications} />
        <DetailSection title="Skills Required" items={job.skillsRequired} />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <InfoCard label="Openings" value={String(job.openings)} />
          <InfoCard label="Application Deadline" value={formatDeadline(job.applicationDeadline)} />
          <InfoCard label="Active Status" value={job.isActive ? 'Open' : 'Closed'} />
        </div>
      </article>

      <JobApplicationForm key={job._id} jobId={job._id} jobTitle={job.jobTitle} />
    </div>
  );
}

function DetailChip({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50 p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">
        <span className="text-sky-500">{icon}</span>
        {label}
      </div>
      <p className="mt-2 text-sm font-medium text-slate-950">{value}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.4rem] border border-sky-200 bg-sky-50 p-4 shadow-[0_10px_30px_rgba(14,165,233,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-800">{label}</p>
      <p className="mt-2 text-sm font-medium text-slate-950">{value}</p>
    </div>
  );
}

function DetailSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-[1.2rem] border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700"
          >
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatDeadline(value?: string | null) {
  if (!value) {
    return 'Not specified';
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
}

function JobDetailsSkeleton() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
      <div className="rounded-[2rem] border border-sky-200 bg-white p-6 shadow-[0_18px_55px_rgba(14,165,233,0.12)] md:p-8">
        <div className="h-6 w-28 animate-pulse rounded-full bg-sky-100" />
        <div className="mt-5 h-10 w-3/4 animate-pulse rounded-2xl bg-sky-50" />
        <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-sky-50" />
        <div className="mt-3 h-4 w-11/12 animate-pulse rounded-full bg-sky-50" />
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-20 animate-pulse rounded-[1.5rem] bg-sky-50" />
          ))}
        </div>
        <div className="mt-8 grid gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-32 animate-pulse rounded-[1.5rem] bg-sky-50" />
          ))}
        </div>
      </div>
      <div className="h-[640px] animate-pulse rounded-[2rem] border border-sky-200 bg-white shadow-[0_18px_55px_rgba(14,165,233,0.12)]" />
    </div>
  );
}
