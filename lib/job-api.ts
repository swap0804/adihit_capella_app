import type { BackendJob, JobApplicationFormValues, JobCard } from '@/lib/types';

type JobsListResponse = {
  success: boolean;
  total: number;
  page: number;
  limit: number;
  data: BackendJob[];
};

type JobDetailResponse = {
  success: boolean;
  data: BackendJob | null;
  message?: string;
};

type ApplicationResponse = {
  success: boolean;
  message?: string;
};

const DEFAULT_API_BASE_URL = 'http://localhost:8000';

export function getApiBaseUrl() {
  const rawValue = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, '');
  return rawValue || (process.env.NODE_ENV === 'development' ? DEFAULT_API_BASE_URL : '');
}

export function buildApiUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
}

export function mapJobToCard(job: BackendJob): JobCard {
  const summary = job.jobDescription.trim();

  return {
    id: job._id,
    title: job.jobTitle,
    department: job.department,
    location: job.location,
    employmentType: job.employmentType,
    experience: job.experience,
    salaryRange: job.salaryRange || null,
    summary: summary.length > 170 ? `${summary.slice(0, 167).trimEnd()}...` : summary,
    openings: job.openings ?? 1,
    applicationDeadline: job.applicationDeadline || null,
  };
}

export function mapJobsToCards(jobs: BackendJob[]) {
  return jobs.map(mapJobToCard);
}

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json().catch(() => null)) as T | null;

  if (!payload) {
    throw new Error('Unexpected response from the jobs API.');
  }

  return payload;
}

export async function fetchJobs(signal?: AbortSignal) {
  const response = await fetch(buildApiUrl('/api/jobs'), {
    method: 'GET',
    cache: 'no-store',
    signal,
  });

  const payload = await parseJsonResponse<JobsListResponse>(response);

  if (!response.ok || !payload.success) {
    throw new Error('Failed to load jobs.');
  }

  return payload;
}

export async function fetchJobById(jobId: string, signal?: AbortSignal) {
  const response = await fetch(buildApiUrl(`/api/jobs/${jobId}`), {
    method: 'GET',
    cache: 'no-store',
    signal,
  });

  const payload = await parseJsonResponse<JobDetailResponse>(response);

  if (!response.ok || !payload.success || !payload.data) {
    throw new Error(payload.message || 'Failed to load the selected job.');
  }

  return payload.data;
}

export async function submitJobApplication(
  jobId: string,
  values: JobApplicationFormValues,
  resume: File,
) {
  const formData = new FormData();

  formData.append('fullName', values.fullName);
  formData.append('mobileNumber', values.mobileNumber);
  formData.append('email', values.email);
  formData.append('totalExperience', values.totalExperience);
  formData.append('relevantExperience', values.relevantExperience);
  formData.append('currentCTC', values.currentCTC);
  formData.append('expectedCTC', values.expectedCTC);
  formData.append('noticePeriod', values.noticePeriod);
  formData.append('currentLocation', values.currentLocation);
  formData.append('willingToRelocate', String(values.willingToRelocate));

  if (values.linkedinProfile.trim()) {
    formData.append('linkedinProfile', values.linkedinProfile.trim());
  }

  formData.append('resume', resume);

  const response = await fetch(buildApiUrl(`/api/jobs/${jobId}/apply`), {
    method: 'POST',
    body: formData,
  });

  const payload = (await response.json().catch(() => null)) as ApplicationResponse | null;

  if (!response.ok || !payload?.success) {
    throw new Error(payload?.message || 'Failed to submit application.');
  }

  return payload;
}
