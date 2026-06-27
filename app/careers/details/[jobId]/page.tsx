import Link from 'next/link';
import { ArrowLeft, BriefcaseBusiness, CalendarDays, CircleAlert, MapPin, Sparkles } from 'lucide-react';

import { JobApplicationForm } from '@/components/job-application-form';
import { fetchJobById, fetchJobs } from '@/lib/job-api';
import { createMetadata } from '@/lib/seo';

const OBJECT_ID_REGEX = /^[a-f\d]{24}$/i;

type JobDetailsPageProps = {
  params: Promise<{
    jobId: string;
  }>;
};

export async function generateStaticParams() {
  try {
    const payload = await fetchJobs();
    return (payload.data ?? [])
      .filter((job) => job.isActive)
      .map((job) => ({ jobId: job._id }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: JobDetailsPageProps) {
  const { jobId } = await params;

  if (!OBJECT_ID_REGEX.test(jobId)) {
    return createMetadata({
      title: 'Job details',
      description: 'View the full job description and apply through the quick application form.',
      path: `/careers/details/${jobId}`,
    });
  }

  try {
    const job = await fetchJobById(jobId);

    return createMetadata({
      title: `${job.jobTitle} | Careers`,
      description: job.jobDescription,
      path: `/careers/details/${jobId}`,
    });
  } catch {
    return createMetadata({
      title: 'Job details',
      description: 'View the full job description and apply through the quick application form.',
      path: `/careers/details/${jobId}`,
    });
  }
}

export default async function JobDetailsPage({
  params,
}: JobDetailsPageProps) {
  const { jobId } = await params;

  if (!OBJECT_ID_REGEX.test(jobId)) {
    return <InvalidJobIdState />;
  }

  const job = await fetchJobById(jobId).catch(() => null);

  if (!job) {
    return <NotFoundState />;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">
      <article className="rounded-[2rem] border border-sky-200 bg-white p-6 shadow-[0_18px_55px_rgba(14,165,233,0.12)] md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
            {job.department}
          </span>
          <span className="inline-flex rounded-full bg-sky-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-900">
            {job.employmentType}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
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

function InvalidJobIdState() {
  return (
    <div className="rounded-[2rem] border border-sky-200 bg-white p-8 shadow-[0_18px_55px_rgba(14,165,233,0.12)]">
      <div className="flex items-start gap-3">
        <CircleAlert className="mt-0.5 h-5 w-5 text-sky-500" />
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Job details are not available yet.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
            The selected job link is invalid.
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

function NotFoundState() {
  return (
    <div className="rounded-[2rem] border border-sky-200 bg-white p-8 shadow-[0_18px_55px_rgba(14,165,233,0.12)]">
      <div className="flex items-start gap-3">
        <CircleAlert className="mt-0.5 h-5 w-5 text-sky-500" />
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Job details are not available yet.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
            The selected role could not be found.
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

function DetailChip({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-sky-200 bg-white p-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
        <span className="text-sky-500">{icon}</span>
        {label}
      </div>
      <p className="mt-2 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.4rem] border border-sky-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">{label}</p>
      <p className="mt-2 text-sm font-medium text-slate-900">{value}</p>
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
      <h2 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-[1.2rem] border border-sky-200 bg-white px-4 py-3 text-sm leading-7 text-slate-700"
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
