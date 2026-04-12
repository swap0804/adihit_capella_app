import type { MediaAsset } from "@/lib/types";

const MEDIA_BASE = "/images/media";
const MEDIA_SIZE = {
  width: 1280,
  height: 860,
};

const mediaAssetsBySlug = {
  "income-tax-services": {
    src: `${MEDIA_BASE}/income-tax-services.jpg`,
    alt: "Tax forms, calculator, and filing documents arranged for direct tax review",
    caption: "Income tax advisory",
    ...MEDIA_SIZE,
  },
  "gst-services": {
    src: `${MEDIA_BASE}/gst-services.jpg`,
    alt: "Consultants reviewing indirect tax and accounting documents on an office desk",
    caption: "GST compliance",
    ...MEDIA_SIZE,
  },
  "audit-and-assurance": {
    src: `${MEDIA_BASE}/audit-and-assurance.jpg`,
    alt: "Audit review meeting with laptops, pencils, and financial working papers",
    caption: "Audit and assurance",
    ...MEDIA_SIZE,
  },
  "accounting-and-bookkeeping": {
    src: `${MEDIA_BASE}/accounting-and-bookkeeping.jpg`,
    alt: "Financial charts, calculator, and reports prepared for bookkeeping review",
    caption: "Accounting support",
    ...MEDIA_SIZE,
  },
  "company-registration-and-startup-services": {
    src: `${MEDIA_BASE}/company-registration-and-startup-services.jpg`,
    alt: "Startup team meeting around laptops in a modern conference room",
    caption: "Startup setup",
    ...MEDIA_SIZE,
  },
  "roc-and-compliance-services": {
    src: `${MEDIA_BASE}/roc-and-compliance-services.jpg`,
    alt: "Professional document signing and corporate paperwork review",
    caption: "ROC compliance",
    ...MEDIA_SIZE,
  },
  "financial-consulting": {
    src: `${MEDIA_BASE}/financial-consulting.jpg`,
    alt: "Laptop with analytics dashboard for financial consulting and performance review",
    caption: "Financial consulting",
    ...MEDIA_SIZE,
  },
  "legal-services": {
    src: `${MEDIA_BASE}/legal-services.jpg`,
    alt: "Legal documents being reviewed and signed at a professional meeting table",
    caption: "Legal advisory",
    ...MEDIA_SIZE,
  },
  "fmcg-and-consumer-goods": {
    src: `${MEDIA_BASE}/fmcg-and-consumer-goods.jpg`,
    alt: "Supermarket shelves stocked with consumer goods and retail products",
    caption: "FMCG advisory",
    ...MEDIA_SIZE,
  },
  "banking-and-nbfc": {
    src: `${MEDIA_BASE}/banking-and-nbfc.jpg`,
    alt: "Modern finance office building representing banking and NBFC advisory",
    caption: "Banking and NBFC",
    ...MEDIA_SIZE,
  },
  "infrastructure-and-real-estate": {
    src: `${MEDIA_BASE}/infrastructure-and-real-estate.jpg`,
    alt: "Large real estate construction project with cranes and towers under development",
    caption: "Infrastructure and real estate",
    ...MEDIA_SIZE,
  },
  "it-and-saas": {
    src: `${MEDIA_BASE}/it-and-saas.jpg`,
    alt: "Laptop showing business analytics dashboard for SaaS finance operations",
    caption: "IT and SaaS",
    ...MEDIA_SIZE,
  },
  "warehousing-and-logistics": {
    src: `${MEDIA_BASE}/warehousing-and-logistics.jpg`,
    alt: "Warehouse aisle with packed shelves and inventory ready for logistics operations",
    caption: "Warehousing and logistics",
    ...MEDIA_SIZE,
  },
  "education-and-trusts": {
    src: `${MEDIA_BASE}/education-and-trusts.jpg`,
    alt: "Modern education institution building for trust and governance advisory",
    caption: "Education and trusts",
    ...MEDIA_SIZE,
  },
  "monthly-tax-bulletin-february-2026": {
    src: `${MEDIA_BASE}/monthly-tax-bulletin-february-2026.jpg`,
    alt: "Tax forms, calculator, coffee, and notes prepared for a monthly tax bulletin",
    caption: "Monthly tax bulletin",
    ...MEDIA_SIZE,
  },
  "compliance-architecture-for-growth-stage-companies": {
    src: `${MEDIA_BASE}/compliance-architecture-for-growth-stage-companies.jpg`,
    alt: "Corporate documents being reviewed during a compliance planning discussion",
    caption: "Compliance architecture",
    ...MEDIA_SIZE,
  },
  "funding-readiness-and-the-modern-startup-finance-stack": {
    src: `${MEDIA_BASE}/funding-readiness-and-the-modern-startup-finance-stack.jpg`,
    alt: "Startup team meeting with laptops for funding readiness and finance planning",
    caption: "Funding readiness",
    ...MEDIA_SIZE,
  },
  "notice-readiness-for-modern-finance-teams": {
    src: `${MEDIA_BASE}/notice-readiness-for-modern-finance-teams.jpg`,
    alt: "Finance review meeting with laptops and documents for notice readiness",
    caption: "Notice readiness",
    ...MEDIA_SIZE,
  },
} satisfies Record<string, MediaAsset>;

type MediaAssetKey = keyof typeof mediaAssetsBySlug;

const mediaAssets: Record<string, MediaAsset> = mediaAssetsBySlug;

const keywordToMediaKey = {
  "about adihit capella banner": "financial-consulting",
  "advisory focus": "financial-consulting",
  "article image placeholder": "compliance-architecture-for-growth-stage-companies",
  "articleship culture visual": "company-registration-and-startup-services",
  "bulletin preview": "monthly-tax-bulletin-february-2026",
  "careers banner": "company-registration-and-startup-services",
  "contact visual": "legal-services",
  "download preview": "monthly-tax-bulletin-february-2026",
  "global network": "financial-consulting",
  "hero image placeholder": "financial-consulting",
  "how we work visual": "audit-and-assurance",
  "industries overview visual": "warehousing-and-logistics",
  "life at adihit capella video or image": "company-registration-and-startup-services",
  "office location map": "infrastructure-and-real-estate",
  "promotional image": "financial-consulting",
  "promotional image slot": "funding-readiness-and-the-modern-startup-finance-stack",
  "services infographic placeholder": "financial-consulting",
  "services overview image": "financial-consulting",
  "working at adihit capella banner": "company-registration-and-startup-services",
  "income tax services": "income-tax-services",
  "tax advisory": "income-tax-services",
  "itr filing": "income-tax-services",
  "gst return filing": "gst-services",
  "gst registration": "gst-services",
  "gst audit": "gst-services",
  "audit and assurance": "audit-and-assurance",
  "internal audit": "audit-and-assurance",
  "statutory audit": "audit-and-assurance",
  "bookkeeping services": "accounting-and-bookkeeping",
  "virtual cfo": "accounting-and-bookkeeping",
  "mis reporting": "accounting-and-bookkeeping",
  "company registration": "company-registration-and-startup-services",
  "startup services": "company-registration-and-startup-services",
  "llp registration": "company-registration-and-startup-services",
  "roc compliance": "roc-and-compliance-services",
  "annual filing": "roc-and-compliance-services",
  "director kyc": "roc-and-compliance-services",
  "financial consulting": "financial-consulting",
  "business valuation": "financial-consulting",
  "cash flow management": "financial-consulting",
  "legal consultancy": "legal-services",
  "corporate legal": "legal-services",
  "dispute resolution": "legal-services",
  "fmcg advisory": "fmcg-and-consumer-goods",
  "consumer goods consulting": "fmcg-and-consumer-goods",
  "nbfc advisory": "banking-and-nbfc",
  "banking compliance consulting": "banking-and-nbfc",
  "real estate consulting": "infrastructure-and-real-estate",
  "infrastructure advisory": "infrastructure-and-real-estate",
  "startup consulting": "it-and-saas",
  "saas finance advisory": "it-and-saas",
  "logistics consulting": "warehousing-and-logistics",
  "warehousing compliance": "warehousing-and-logistics",
  "trust audit": "education-and-trusts",
  "education institution advisory": "education-and-trusts",
  "student-focused banner": "education-and-trusts",
  "training collage": "education-and-trusts",
  "office story visual": "company-registration-and-startup-services",
  "office collage": "company-registration-and-startup-services",
  "office interaction image": "audit-and-assurance",
  "executive portrait": "financial-consulting",
  "corporate banner": "financial-consulting",
  "process diagram": "financial-consulting",
  "business solutions image": "financial-consulting",
  "professional consulting image": "financial-consulting",
  "campaign graphic": "funding-readiness-and-the-modern-startup-finance-stack",
  "support image": "legal-services",
  "careers image": "company-registration-and-startup-services",
  "gallery image placeholder": "company-registration-and-startup-services",
  "monthly tax bulletin": "monthly-tax-bulletin-february-2026",
  "tax newsletter": "monthly-tax-bulletin-february-2026",
  "compliance consulting": "compliance-architecture-for-growth-stage-companies",
  "growth stage company compliance": "compliance-architecture-for-growth-stage-companies",
  "startup finance": "funding-readiness-and-the-modern-startup-finance-stack",
  "funding readiness": "funding-readiness-and-the-modern-startup-finance-stack",
  "notice handling": "notice-readiness-for-modern-finance-teams",
  "scrutiny support": "notice-readiness-for-modern-finance-teams",
  "tax notice advisory": "notice-readiness-for-modern-finance-teams",
} satisfies Record<string, MediaAssetKey>;

const keywordMediaLookup: Record<string, MediaAssetKey> = keywordToMediaKey;

function normalizeKeyword(keyword: string) {
  return keyword.trim().toLowerCase().replace(/\s+/g, " ");
}

export function getMediaBySlug(slug: string): MediaAsset | undefined {
  return mediaAssets[slug];
}

export function getMediaForKeywords(keywords: string[] = []): MediaAsset | undefined {
  for (const keyword of keywords) {
    const mediaKey = keywordMediaLookup[normalizeKeyword(keyword)];

    if (mediaKey) {
      return mediaAssetsBySlug[mediaKey];
    }
  }

  return undefined;
}

export function getRelatedMedia(
  label: string,
  detail = "",
): MediaAsset {
  const directMedia = getMediaForKeywords([label, detail]);

  if (directMedia) {
    return directMedia;
  }

  const combined = normalizeKeyword(`${label} ${detail}`);

  for (const [keyword, mediaKey] of Object.entries(keywordMediaLookup)) {
    if (combined.includes(keyword)) {
      return mediaAssetsBySlug[mediaKey];
    }
  }

  return mediaAssetsBySlug["financial-consulting"];
}
