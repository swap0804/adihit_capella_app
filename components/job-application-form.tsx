"use client";

import { CheckCircle2, CloudUpload, Loader2, Mail, Phone, Link2 } from 'lucide-react';
import type { FormEvent, ReactNode } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { submitJobApplication } from '@/lib/job-api';
import type { JobApplicationFormValues } from '@/lib/types';

const EMPTY_VALUES: JobApplicationFormValues = {
  fullName: '',
  mobileNumber: '',
  email: '',
  totalExperience: '',
  relevantExperience: '',
  currentCTC: '',
  expectedCTC: '',
  noticePeriod: '',
  currentLocation: '',
  willingToRelocate: true,
  linkedinProfile: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^(?:\+91)?[6-9]\d{9}$/;
const LINKEDIN_REGEX = /^https?:\/\/(?:www\.)?linkedin\.com\/.+$/i;
const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

type FieldErrors = Partial<Record<keyof JobApplicationFormValues | 'resume', string>>;

type JobApplicationFormProps = {
  jobId?: string | null;
  jobTitle?: string;
};

export function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const [values, setValues] = useState<JobApplicationFormValues>(EMPTY_VALUES);
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  function updateValue<K extends keyof JobApplicationFormValues>(
    key: K,
    value: JobApplicationFormValues[K],
  ) {
    setValues((current) => ({
      ...current,
      [key]: value,
    }));

    setFieldErrors((current) => ({
      ...current,
      [key]: undefined,
    }));
  }

  function validateField(key: keyof JobApplicationFormValues, value: string) {
    const trimmed = value.trim();

    switch (key) {
      case 'fullName':
        if (!trimmed) return 'Full name is required.';
        if (!/^[a-zA-Z][a-zA-Z\s'.-]{1,79}$/.test(trimmed)) {
          return 'Enter a valid full name.';
        }
        return '';
      case 'mobileNumber':
        if (!trimmed) return 'Mobile number is required.';
        if (!MOBILE_REGEX.test(trimmed)) {
          return 'Enter a valid 10-digit mobile number.';
        }
        return '';
      case 'email':
        if (!trimmed) return 'Email address is required.';
        if (!EMAIL_REGEX.test(trimmed)) {
          return 'Enter a valid email address.';
        }
        return '';
      case 'totalExperience':
        if (!trimmed) return 'Total experience is required.';
        if (!/^\d+$/.test(trimmed)) {
          return 'Total experience must be a number.';
        }
        if (Number(trimmed) < 0 || Number(trimmed) >= 100) {
          return 'Total experience must be less than 100.';
        }
        return '';
      case 'relevantExperience':
        if (!trimmed) return 'Relevant experience is required.';
        if (!/^\d+$/.test(trimmed)) {
          return 'Relevant experience must be a number.';
        }
        if (Number(trimmed) < 0 || Number(trimmed) >= 100) {
          return 'Relevant experience must be less than 100.';
        }
        if (
          values.totalExperience.trim() &&
          Number(trimmed) > Number(values.totalExperience)
        ) {
          return 'Relevant experience cannot be greater than total experience.';
        }
        return '';
      case 'currentCTC':
      case 'expectedCTC':
        if (!trimmed) return `${key === 'currentCTC' ? 'Current' : 'Expected'} CTC is required.`;
        if (!/^(?=.*\d)[\w\s.,+\-()/]{1,80}$/i.test(trimmed)) {
          return 'Enter a valid CTC amount.';
        }
        return '';
      case 'noticePeriod':
        if (!trimmed) return 'Notice period is required.';
        if (!/^\d+$/.test(trimmed)) {
          return 'Notice period must be a number.';
        }
        if (Number(trimmed) < 0 || Number(trimmed) > 365) {
          return 'Notice period must not exceed 365 days.';
        }
        return '';
      case 'currentLocation':
        if (!trimmed) return 'Current location is required.';
        if (!/^[a-zA-Z][a-zA-Z\s'.-]{1,79}$/.test(trimmed)) {
          return 'Enter a valid location.';
        }
        return '';
      case 'linkedinProfile':
        if (!trimmed) return '';
        if (!LINKEDIN_REGEX.test(trimmed)) {
          return 'Enter a valid LinkedIn profile URL.';
        }
        return '';
      case 'willingToRelocate':
        return '';
      default:
        return '';
    }
  }

  function validateResume(selectedResume: File | null) {
    if (!selectedResume) {
      return 'Please upload your resume.';
    }

    if (!ACCEPTED_TYPES.includes(selectedResume.type)) {
      return 'Resume must be a PDF, DOC, or DOCX file.';
    }

    if (selectedResume.size > MAX_FILE_SIZE) {
      return 'Resume must be 5 MB or smaller.';
    }

    return '';
  }

  function validateAll() {
    const nextErrors: FieldErrors = {};

    (Object.keys(values) as Array<keyof JobApplicationFormValues>).forEach((key) => {
      const message = validateField(key, String(values[key] ?? ''));
      if (message) {
        nextErrors[key] = message;
      }
    });

    const resumeMessage = validateResume(resume);
    if (resumeMessage) {
      nextErrors.resume = resumeMessage;
    }

    const totalExperienceValue = Number(values.totalExperience);
    const relevantExperienceValue = Number(values.relevantExperience);
    if (
      Number.isFinite(totalExperienceValue) &&
      Number.isFinite(relevantExperienceValue) &&
      relevantExperienceValue > totalExperienceValue
    ) {
      nextErrors.relevantExperience = 'Relevant experience cannot be greater than total experience.';
    }

    return nextErrors;
  }

  function handleFieldBlur(key: keyof JobApplicationFormValues) {
    const message = validateField(key, String(values[key] ?? ''));
    setFieldErrors((current) => ({
      ...current,
      [key]: message || undefined,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!jobId) {
      setError('Select a job before submitting your application.');
      return;
    }

    const nextErrors = validateAll();
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    try {
      setStatus('submitting');
      setError('');
      setFieldErrors({});

      const submission = submitJobApplication(
        jobId,
        {
          ...values,
          fullName: values.fullName.trim(),
          mobileNumber: values.mobileNumber.trim(),
          email: values.email.trim(),
          totalExperience: values.totalExperience.trim(),
          relevantExperience: values.relevantExperience.trim(),
          currentCTC: values.currentCTC.trim(),
          expectedCTC: values.expectedCTC.trim(),
          noticePeriod: values.noticePeriod.trim(),
          currentLocation: values.currentLocation.trim(),
          linkedinProfile: values.linkedinProfile.trim(),
        },
        resume as File,
      );

      const response = await toast.promise(submission, {
        pending: 'Submitting application...',
        success: {
          render({ data }) {
            const payload = data as { message?: string };
            return payload.message || 'Your application has been submitted.';
          },
        },
        error: {
          render({ data }) {
            return data instanceof Error
              ? data.message
              : 'We could not submit your application just now.';
          },
        },
      });

      setStatus('success');
      setSuccessMessage(response.message || 'Your application has been submitted.');
      setValues(EMPTY_VALUES);
      setResume(null);
    } catch (submitError) {
      setStatus('idle');
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'We could not submit your application just now.',
      );
    }
  }

  return (
    <div className="rounded-[2rem] border border-sky-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:sticky lg:top-6">
      <div className="rounded-[1.6rem] border border-sky-200 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-900">
          Quick Apply
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
          Apply for {jobTitle || 'this role'}
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          Submit your details and resume.
        </p>
      </div>

      {status === 'success' ? (
        <div className="mt-5 rounded-[1.6rem] border border-emerald-100 bg-emerald-50 p-5 text-emerald-900">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <CheckCircle2 className="h-5 w-5" />
            Application received
          </div>
          <p className="mt-2 text-sm leading-7">{successMessage}</p>
        </div>
      ) : null}

      {error ? (
        <div className="mt-5 rounded-[1.4rem] border border-rose-100 bg-rose-50 p-4 text-sm leading-7 text-rose-700">
          {error}
        </div>
      ) : null}

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <TextInput
          label="Full Name"
          value={values.fullName}
          onChange={(value) => updateValue('fullName', value)}
          onBlur={() => handleFieldBlur('fullName')}
          placeholder="Enter your full name"
          autoComplete="name"
          error={fieldErrors.fullName}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <TextInput
            label="Mobile Number"
            value={values.mobileNumber}
            onChange={(value) => updateValue('mobileNumber', value)}
            onBlur={() => handleFieldBlur('mobileNumber')}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            icon={<Phone className="h-4 w-4" />}
            error={fieldErrors.mobileNumber}
          />
          <TextInput
            label="Email"
            value={values.email}
            onChange={(value) => updateValue('email', value)}
            onBlur={() => handleFieldBlur('email')}
            placeholder="you@example.com"
            autoComplete="email"
            icon={<Mail className="h-4 w-4" />}
            error={fieldErrors.email}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <TextInput
            label="Total Experience"
            value={values.totalExperience}
            onChange={(value) => updateValue('totalExperience', value)}
            onBlur={() => handleFieldBlur('totalExperience')}
            placeholder="5"
            inputMode="numeric"
            type="number"
            min={0}
            max={99}
            step={1}
            error={fieldErrors.totalExperience}
          />
          <TextInput
            label="Relevant Experience"
            value={values.relevantExperience}
            onChange={(value) => updateValue('relevantExperience', value)}
            onBlur={() => handleFieldBlur('relevantExperience')}
            placeholder="4"
            inputMode="numeric"
            type="number"
            min={0}
            max={99}
            step={1}
            error={fieldErrors.relevantExperience}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <TextInput
            label="Current CTC"
            value={values.currentCTC}
            onChange={(value) => updateValue('currentCTC', value)}
            onBlur={() => handleFieldBlur('currentCTC')}
            placeholder="8 LPA"
            inputMode="decimal"
            error={fieldErrors.currentCTC}
          />
          <TextInput
            label="Expected CTC"
            value={values.expectedCTC}
            onChange={(value) => updateValue('expectedCTC', value)}
            onBlur={() => handleFieldBlur('expectedCTC')}
            placeholder="10 LPA"
            inputMode="decimal"
            error={fieldErrors.expectedCTC}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <TextInput
            label="Notice Period"
            value={values.noticePeriod}
            onChange={(value) => updateValue('noticePeriod', value)}
            onBlur={() => handleFieldBlur('noticePeriod')}
            placeholder="30 Days"
            inputMode="numeric"
            type="number"
            min={0}
            max={365}
            step={1}
            error={fieldErrors.noticePeriod}
          />
          <TextInput
            label="Current Location"
            value={values.currentLocation}
            onChange={(value) => updateValue('currentLocation', value)}
            onBlur={() => handleFieldBlur('currentLocation')}
            placeholder="Mumbai"
            error={fieldErrors.currentLocation}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <SelectField
            label="Willing to Relocate"
            value={String(values.willingToRelocate)}
            onChange={(value) =>
              updateValue('willingToRelocate', value === 'true')
            }
          />
          <TextInput
            label="LinkedIn Profile"
            value={values.linkedinProfile}
            onChange={(value) => updateValue('linkedinProfile', value)}
            onBlur={() => handleFieldBlur('linkedinProfile')}
            placeholder="https://www.linkedin.com/in/your-name"
            icon={<Link2 className="h-4 w-4" />}
            error={fieldErrors.linkedinProfile}
          />
        </div>

        <label className="grid gap-1.5">
          <span className="text-sm font-semibold text-slate-900">Upload Resume</span>
          <div className="rounded-[1.4rem] border border-dashed border-sky-200 bg-white px-4 py-4">
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(event) => {
                const selectedFile = event.target.files?.[0] ?? null;
                setResume(selectedFile);
                setFieldErrors((current) => ({
                  ...current,
                  resume: validateResume(selectedFile) || undefined,
                }));
              }}
              className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-sky-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-sky-500"
            />
            <p className="mt-2 text-xs leading-6 text-slate-500">
              PDF, DOC, or DOCX up to 5 MB.
            </p>
            {resume ? (
              <p className="mt-2 text-sm font-medium text-slate-900">
                Selected: {resume.name}
              </p>
            ) : null}
            <div className="min-h-5">
              {fieldErrors.resume ? (
                <p className="mt-2 text-sm font-medium text-rose-600">
                  {fieldErrors.resume}
                </p>
              ) : null}
            </div>
          </div>
        </label>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting
            </>
          ) : (
            <>
              <CloudUpload className="h-4 w-4" />
              Submit Application
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
  icon,
  error,
  onBlur,
  inputMode,
  type = 'text',
  min,
  max,
  step,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  icon?: ReactNode;
  error?: string;
  onBlur?: () => void;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold text-slate-900">{label}</span>
      <div className={`flex h-12 items-center gap-2 rounded-[1.2rem] border bg-white px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] ${error ? 'border-rose-300' : 'border-sky-100'}`}>
        {icon ? <span className="text-sky-500">{icon}</span> : null}
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          type={type}
          min={min}
          max={max}
          step={step}
          aria-invalid={Boolean(error)}
          className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
      <div className="min-h-5">
        {error ? <p className="text-sm font-medium text-rose-600">{error}</p> : null}
      </div>
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-semibold text-slate-900">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-[1.2rem] border border-sky-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none"
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </label>
  );
}
