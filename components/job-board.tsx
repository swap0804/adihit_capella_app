"use client";

import { CalendarClock, BriefcaseBusiness, MapPin, Search } from "lucide-react";
import { useDeferredValue, useState } from "react";

import { formatDate } from "@/lib/utils";
import type { CareerOpening } from "@/lib/types";

type JobBoardProps = {
  jobs: CareerOpening[];
  title?: string;
  description?: string;
};

export function JobBoard({
  jobs,
  title = "Open roles",
  description = "Search and filter placeholder openings. Replace or extend these entries later from the local data file.",
}: JobBoardProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All");
  const [department, setDepartment] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [workStyle, setWorkStyle] = useState("All");
  const deferredQuery = useDeferredValue(query);

  const locations = ["All", ...new Set(jobs.map((job) => job.location))];
  const departments = ["All", ...new Set(jobs.map((job) => job.department))];
  const jobTypes = ["All", ...new Set(jobs.map((job) => job.jobType))];
  const workStyles = ["All", ...new Set(jobs.map((job) => job.workStyle))];

  const filtered = jobs.filter((job) => {
    const matchQuery =
      !deferredQuery ||
      `${job.title} ${job.department} ${job.summary}`
        .toLowerCase()
        .includes(deferredQuery.toLowerCase());
    const matchLocation = location === "All" || job.location === location;
    const matchDepartment = department === "All" || job.department === department;
    const matchType = jobType === "All" || job.jobType === jobType;
    const matchStyle = workStyle === "All" || job.workStyle === workStyle;

    return matchQuery && matchLocation && matchDepartment && matchType && matchStyle;
  });

  return (
    <section className="section-shell">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
        <p className="mt-4 text-base leading-8 text-[var(--muted)]">
          {description}
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="surface-card h-fit p-5">
          <div className="rounded-full border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
            <label className="flex items-center gap-3">
              <Search className="h-4 w-4 text-[var(--brand)]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search jobs"
                className="w-full bg-transparent text-sm text-white outline-none"
              />
            </label>
          </div>
          <div className="mt-5 grid gap-4">
            <FilterSelect
              label="Location"
              value={location}
              options={locations}
              onChange={setLocation}
            />
            <FilterSelect
              label="Department"
              value={department}
              options={departments}
              onChange={setDepartment}
            />
            <FilterSelect
              label="Job Type"
              value={jobType}
              options={jobTypes}
              onChange={setJobType}
            />
            <FilterSelect
              label="Work Style"
              value={workStyle}
              options={workStyles}
              onChange={setWorkStyle}
            />
          </div>
        </aside>
        <div className="grid gap-4">
          {filtered.map((job) => (
            <article key={job.id} className="surface-card p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                    {job.summary}
                  </p>
                </div>
                <div className="rounded-full border border-[rgba(151,201,255,0.16)] px-4 py-2 text-sm text-[var(--brand)]">
                  {job.jobType}
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.12)] px-3 py-2">
                  <MapPin className="h-4 w-4 text-[var(--brand)]" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.12)] px-3 py-2">
                  <BriefcaseBusiness className="h-4 w-4 text-[var(--brand)]" />
                  {job.department}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.12)] px-3 py-2">
                  <CalendarClock className="h-4 w-4 text-[var(--brand)]" />
                  Posted {formatDate(job.postedAt)}
                </span>
              </div>
              <ul className="mt-5 grid gap-2 text-sm leading-7 text-[var(--muted)]">
                {job.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <span className="mt-[0.8rem] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          {filtered.length === 0 ? (
            <div className="surface-card p-6 text-sm text-[var(--muted)]">
              No roles match the current filters. Adjust the search or add new roles
              in the local data file.
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function FilterSelect({ label, value, options, onChange }: FilterSelectProps) {
  return (
    <label className="grid gap-2 text-sm text-[var(--muted)]">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-[1.1rem] border border-[rgba(151,201,255,0.16)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-white outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[var(--bg-soft)]">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
