import { fetchJobs, mapJobsToCards } from '@/lib/job-api';
import type { JobCard } from '@/lib/types';

import { JobOpeningsList } from '@/components/job-openings-list';

export async function JobOpeningsBrowser() {
  let jobs: JobCard[] = [];
  let error = '';

  try {
    const payload = await fetchJobs();
    jobs = mapJobsToCards((payload.data ?? []).filter((job) => job.isActive));
  } catch {
    error = 'Unable to load live openings right now.';
  }

  return <JobOpeningsList jobs={jobs} error={error} />;
}
