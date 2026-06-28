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
let didLogBaseUrl = false;

function logJobApi(event: string, details: Record<string, unknown>) {
  console.log(`[job-api] ${event}`, details);
}

export function getApiBaseUrl() {
  const rawValue = process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, '');
  const resolvedValue = rawValue || (process.env.NODE_ENV === 'development' ? DEFAULT_API_BASE_URL : '');

  if (!didLogBaseUrl) {
    didLogBaseUrl = true;
    logJobApi('base-url', {
      nodeEnv: process.env.NODE_ENV,
      runtime: typeof window === 'undefined' ? 'server' : 'client',
      rawEnv: process.env.NEXT_PUBLIC_API_BASE_URL ?? null,
      trimmedEnv: rawValue ?? null,
      resolved: resolvedValue || null,
    });
  }

  if (!resolvedValue) {
    console.warn('[job-api] NEXT_PUBLIC_API_BASE_URL is missing in production');
  }

  return resolvedValue;
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
  const url = buildApiUrl('/api/jobs');
  const startedAt = Date.now();

  logJobApi('request:start', {
    action: 'fetchJobs',
    method: 'GET',
    url,
  });

  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal,
    });

    const payload = await parseJsonResponse<JobsListResponse>(response);

    logJobApi('request:complete', {
      action: 'fetchJobs',
      method: 'GET',
      url,
      status: response.status,
      ok: response.ok,
      durationMs: Date.now() - startedAt,
      total: payload.total,
      itemsReturned: payload.data?.length ?? 0,
    });

    if (!response.ok || !payload.success) {
      throw new Error('Failed to load jobs.');
    }

    return payload;
  } catch (error) {
    logJobApi('request:error', {
      action: 'fetchJobs',
      method: 'GET',
      url,
      durationMs: Date.now() - startedAt,
      error: error instanceof Error ? error.message : String(error),
    });

    throw error;
  }
}

export async function fetchJobById(jobId: string, signal?: AbortSignal) {
  const url = buildApiUrl(`/api/jobs/${jobId}`);
  const startedAt = Date.now();

  logJobApi('request:start', {
    action: 'fetchJobById',
    method: 'GET',
    url,
    jobId,
  });

  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal,
    });

    const payload = await parseJsonResponse<JobDetailResponse>(response);

    logJobApi('request:complete', {
      action: 'fetchJobById',
      method: 'GET',
      url,
      jobId,
      status: response.status,
      ok: response.ok,
      durationMs: Date.now() - startedAt,
      found: Boolean(payload.data),
    });

    if (!response.ok || !payload.success || !payload.data) {
      throw new Error(payload.message || 'Failed to load the selected job.');
    }

    return payload.data;
  } catch (error) {
    logJobApi('request:error', {
      action: 'fetchJobById',
      method: 'GET',
      url,
      jobId,
      durationMs: Date.now() - startedAt,
      error: error instanceof Error ? error.message : String(error),
    });

    throw error;
  }
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

  const url = buildApiUrl(`/api/jobs/${jobId}/apply`);
  const startedAt = Date.now();

  logJobApi('request:start', {
    action: 'submitJobApplication',
    method: 'POST',
    url,
    jobId,
    fields: Object.keys(values),
    resumeName: resume.name,
    resumeType: resume.type,
    resumeSize: resume.size,
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    const payload = (await response.json().catch(() => null)) as ApplicationResponse | null;

    logJobApi('request:complete', {
      action: 'submitJobApplication',
      method: 'POST',
      url,
      jobId,
      status: response.status,
      ok: response.ok,
      durationMs: Date.now() - startedAt,
      success: Boolean(payload?.success),
    });

    if (!response.ok || !payload?.success) {
      throw new Error(payload?.message || 'Failed to submit application.');
    }

    return payload;
  } catch (error) {
    logJobApi('request:error', {
      action: 'submitJobApplication',
      method: 'POST',
      url,
      jobId,
      durationMs: Date.now() - startedAt,
      error: error instanceof Error ? error.message : String(error),
    });

    throw error;
  }
}
