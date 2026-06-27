export type LinkItem = {
  label: string;
  href: string;
};

export type NavItem = LinkItem & {
  description?: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  keywords?: string[];
};

export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: LinkItem;
  secondaryCta?: LinkItem;
  tags?: string[];
  stats?: StatItem[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  overview: string[];
  benefits: string[];
  differentiators: string[];
  promo: {
    title: string;
    description: string;
    cta: LinkItem;
  };
  buildBetter: {
    title: string;
    description: string;
  };
  accordion: Array<{
    title: string;
    content: string;
  }>;
  offerings?: Array<{
    title: string;
    content: string;
  }>;
  whyChoose?: Array<{
    title: string;
    content: string;
  }>;
  faqs?: Array<{
    title: string;
    content: string;
  }>;
  finalCta?: {
    title: string;
    description: string;
    label: string;
    href: string;
  };
  seo: SeoConfig;
};

export type InsightCard = {
  title: string;
  description: string;
  href: string;
  category?: string;
  label?: string;
  date?: string;
};

export type Testimonial = {
  name: string;
  company: string;
  review: string;
};

export type NewsItem = {
  title: string;
  description: string;
  href: string;
  date: string;
};

export type LeaderProfile = {
  name: string;
  role: string;
  summary: string;
  expertise: string[];
};

export type IndustryEntry = {
  slug: string;
  title: string;
  summary: string;
  intro: string[];
  solutions: Array<{
    title: string;
    detail: string;
  }>;
  latestThinking: InsightCard[];
  leaders: string[];
  seo: SeoConfig;
};

export type ResourcePost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
  highlights: string[];
  tags: string[];
  bulletin: {
    title: string;
    description: string;
    ctaLabel: string;
  };
  seo: SeoConfig;
};

export type CareerOpening = {
  id: string;
  title: string;
  location: string;
  department: string;
  jobType: string;
  workStyle: string;
  postedAt: string;
  summary: string;
  responsibilities: string[];
};

export type JobEmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Contract'
  | 'Internship'
  | 'Temporary'
  | 'Remote'
  | 'Hybrid';

export type BackendJob = {
  _id: string;
  jobTitle: string;
  department: string;
  jobDescription: string;
  rolesAndResponsibilities: string[];
  requiredQualifications: string[];
  skillsRequired: string[];
  location: string;
  employmentType: JobEmploymentType;
  experience: string;
  salaryRange?: string | null;
  openings: number;
  applicationDeadline?: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type JobCard = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: JobEmploymentType;
  experience: string;
  salaryRange?: string | null;
  summary: string;
  openings: number;
  applicationDeadline?: string | null;
};

export type JobApplicationFormValues = {
  fullName: string;
  mobileNumber: string;
  email: string;
  totalExperience: string;
  relevantExperience: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  currentLocation: string;
  willingToRelocate: boolean;
  linkedinProfile: string;
};

export type OfficeLocation = {
  city: string;
  address: string;
  phone: string;
  email: string;
  mapLabel?: string;
  mapQuery?: string;
  mapUrl?: string;
};

export type ChatQuickAction = LinkItem & {
  description: string;
};

export type InfoCard = {
  title: string;
  description: string;
  cta: LinkItem;
};

export type AwardItem = {
  title: string;
  detail: string;
};

export type ValueCard = {
  title: string;
  description: string;
};
