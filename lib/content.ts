import type {
  AwardItem,
  CareerOpening,
  HeroContent,
  IndustryEntry,
  InfoCard,
  LeaderProfile,
  NewsItem,
  ResourcePost,
  ServiceCategory,
  StatItem,
  Testimonial,
  ValueCard,
} from "@/lib/types";

export const homeHero: HeroContent = {
  eyebrow: "Legal • Tax • Audit • Finance",
  title: "Future-ready advisory for businesses that need clarity, compliance, and confident growth.",
  description:
    "Adihit Capella blends CA-firm discipline with strategic legal and finance consulting. This v1 site is structured for strong SEO, premium credibility, and easy content replacement when your final brand assets are ready.",
  cta: { label: "Schedule Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
  tags: ["adihit capella", "ca firm", "consultancy", "legal advisory", "finance advisory"],
  stats: [
    { value: "360°", label: "Integrated advisory support" },
    { value: "24/7", label: "Always-on contact pathways" },
    { value: "8+", label: "Core service verticals" },
  ],
};

export const homeDifferenceCards: ValueCard[] = [
  {
    title: "Cross-functional expertise",
    description:
      "Bring tax, legal, finance, and governance thinking into one coordinated advisory flow.",
  },
  {
    title: "Leadership-first communication",
    description:
      "Design pages and pathways that make decision-makers feel informed, guided, and in control.",
  },
  {
    title: "Built for growth",
    description:
      "Start with structured placeholders today and scale to richer content, forms, and integrations later.",
  },
];

export const presenceStats: StatItem[] = [
  { value: "12+", label: "Years of combined advisory exposure" },
  { value: "150+", label: "Engagement types supported" },
  { value: "25+", label: "Industry workflows understood" },
  { value: "PAN India", label: "Remote-first consultation reach" },
];

export const aboutValueCards: ValueCard[] = [
  {
    title: "How we work",
    description:
      "Every engagement begins with a diagnosis of risk, reporting needs, and business intent before execution starts.",
  },
  {
    title: "Vision-led advisory",
    description:
      "We aim to help founders, finance teams, and enterprise leaders make faster, safer, more strategic decisions.",
  },
  {
    title: "Operational clarity",
    description:
      "Our model simplifies compliance, governance, tax, and financial decision-making into actionable steps.",
  },
];

export const aboutInfoCards: InfoCard[] = [
  {
    title: "Corporate legal precision",
    description:
      "Structure contracts, notices, and transactions with practical legal thinking and business context.",
    cta: { label: "View legal services", href: "/services/legal-services" },
  },
  {
    title: "Finance-backed growth planning",
    description:
      "Support expansion, cash flow, budgeting, valuation, and investment decisions with advisory discipline.",
    cta: { label: "Explore consulting", href: "/services/financial-consulting" },
  },
  {
    title: "Compliance confidence",
    description:
      "Coordinate ROC, GST, audit, and tax workflows in one structured operating rhythm.",
    cta: { label: "See compliance services", href: "/services/roc-and-compliance-services" },
  },
];

export const awards: AwardItem[] = [
  { title: "Trusted Compliance Partner", detail: "Placeholder recognition 2026" },
  { title: "Emerging Advisory Brand", detail: "Placeholder recognition 2025" },
  { title: "Tax Strategy Excellence", detail: "Placeholder recognition 2025" },
  { title: "Startup Advisory Impact", detail: "Placeholder recognition 2024" },
  { title: "Client Experience Mention", detail: "Placeholder recognition 2024" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Founder, Consumer Brand",
    company: "FMCG Client",
    review:
      "The site structure mirrors the way Adihit Capella works in practice: proactive, organised, and commercially sharp. It feels premium without becoming distant.",
  },
  {
    name: "Director, Logistics Group",
    company: "Warehousing & Logistics",
    review:
      "We wanted legal, tax, and finance guidance to feel connected. The positioning and service flow communicate that blend very clearly.",
  },
  {
    name: "Co-founder, SaaS Venture",
    company: "Technology Startup",
    review:
      "The advisory story is modern, polished, and highly credible. It speaks to founders who need both compliance and growth thinking.",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Budget season preparedness toolkit for growing businesses",
    description:
      "Placeholder editorial slot for tax and compliance developments your team wants to spotlight later.",
    href: "/resources/monthly-tax-bulletin-february-2026",
    date: "2026-02-15",
  },
  {
    title: "Common compliance blind spots in high-growth companies",
    description:
      "Use this content block for a short insight, firm announcement, or targeted lead-generation message.",
    href: "/resources/compliance-architecture-for-growth-stage-companies",
    date: "2026-01-27",
  },
  {
    title: "How advisory teams can reduce response time during notice handling",
    description:
      "A flexible space for urgent updates, statutory alerts, or campaign-led thought leadership pieces.",
    href: "/resources/notice-readiness-for-modern-finance-teams",
    date: "2025-12-09",
  },
];

export const leaders: LeaderProfile[] = [
  {
    name: "Aarav Mehta",
    role: "Managing Partner",
    summary:
      "Leads cross-border tax, reporting, and strategic advisory engagements with a focus on board-level clarity.",
    expertise: ["Tax strategy", "Financial governance", "Business structuring"],
  },
  {
    name: "Naina Kapoor",
    role: "Partner, Legal & Regulatory",
    summary:
      "Advises on disputes, corporate documentation, commercial contracts, and regulatory preparedness.",
    expertise: ["Corporate legal", "Dispute resolution", "Regulatory advisory"],
  },
  {
    name: "Rohan Suri",
    role: "Director, Audit & Assurance",
    summary:
      "Builds audit frameworks that improve internal visibility, process control, and reporting confidence.",
    expertise: ["Internal audit", "Process review", "Risk controls"],
  },
  {
    name: "Ishita Rao",
    role: "Director, Startup & Finance Consulting",
    summary:
      "Supports founders with fundraising readiness, cash flow planning, and virtual CFO operating models.",
    expertise: ["Startup finance", "CFO advisory", "Forecasting"],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "income-tax-services",
    title: "Income Tax Services",
    subtitle: "Strategic direct tax planning and filing support for individuals, founders, and growing companies.",
    summary:
      "Cover return filing, scrutiny support, tax planning, NRI matters, appeals, and high-signal advisory for complex tax questions.",
    phone: "+91 91440 02997",
    overview: [
      "Plan filings and advisory with a workflow that reduces last-minute risk and documentation stress.",
      "Create a clearer line of sight across return accuracy, notices, capital gains, and long-term tax efficiency.",
    ],
    benefits: [
      "ITR filing support from ITR-1 to ITR-7",
      "Tax audit and scrutiny readiness",
      "NRI taxation and capital gains advisory",
      "Representation, appeals, and notice response support",
    ],
    differentiators: [
      "Structured compliance calendars",
      "Decision support for founders and HNIs",
      "Practical response pathways for notices and scrutiny",
    ],
    promo: {
      title: "Sharper income tax planning for every stage of growth",
      description:
        "Use this strip for a topical campaign, budget message, or seasonal filing push tied to your content calendar.",
      cta: { label: "Talk to our advisors", href: "/contact" },
    },
    buildBetter: {
      title: "Build better tax outcomes",
      description:
        "Adihit Capella combines filing accuracy with strategic interpretation, helping teams reduce exposure while preserving commercial momentum.",
    },
    accordion: [
      {
        title: "Return filing and review",
        content:
          "Prepare, review, and file returns with a process that is suitable for both simple and multi-entity situations.",
      },
      {
        title: "Notice handling and scrutiny support",
        content:
          "Coordinate documentation, interpretation, and response timelines with clear ownership and escalation support.",
      },
      {
        title: "Strategic tax planning",
        content:
          "Map planned transactions and investments against tax impact before decisions are finalised.",
      },
    ],
    seo: {
      title: "Income Tax Services | Adihit Capella",
      description:
        "Income tax filing, planning, scrutiny support, appeals, and NRI taxation advisory by Adihit Capella.",
      keywords: ["income tax services", "tax advisory", "itr filing"],
    },
  },
  {
    slug: "gst-services",
    title: "GST Services",
    subtitle: "GST compliance, reporting, reconciliation, and advisory support built for operating discipline.",
    summary:
      "Streamline GST registration, filings, audits, refunds, ITC advisory, and notice handling with scalable workflows.",
    phone: "+91 91440 02936",
    overview: [
      "Reduce compliance friction with a central structure for registration, filing cycles, and documentation readiness.",
      "Support finance teams with cleaner reconciliations, sharper input credit visibility, and faster response handling.",
    ],
    benefits: [
      "GST registration, amendment, and setup",
      "Periodic return filing including GSTR-1, 3B, 9, and 9C",
      "Audit, reconciliation, and refund processing support",
      "ITC advisory, e-invoicing, and e-way bill enablement",
    ],
    differentiators: [
      "Operating-model friendly filing support",
      "Notice preparedness and audit defence",
      "Data-led reconciliation mindset",
    ],
    promo: {
      title: "Keep GST operations clean, scalable, and always inspection-ready",
      description:
        "Ideal for a future announcement about GST season, process redesign, or sector-specific compliance guidance.",
      cta: { label: "Request GST consultation", href: "/contact" },
    },
    buildBetter: {
      title: "Build better indirect tax control",
      description:
        "The focus is not just filing output, but process accuracy, credit discipline, and repeatable compliance hygiene.",
    },
    accordion: [
      {
        title: "Registration and setup",
        content:
          "Support the initial structure, amendment cycles, and implementation of GST compliance workflows across business units.",
      },
      {
        title: "Returns and reconciliations",
        content:
          "Create a repeatable rhythm for periodic filings, data checks, and reconciliation-driven issue detection.",
      },
      {
        title: "Refunds, notices, and audits",
        content:
          "Build response readiness for refunds, departmental communication, and GST audit scenarios.",
      },
    ],
    seo: {
      title: "GST Services | Adihit Capella",
      description:
        "GST registration, return filing, audit, reconciliation, refund, and advisory services by Adihit Capella.",
      keywords: ["gst return filing", "gst registration", "gst audit"],
    },
  },
  {
    slug: "audit-and-assurance",
    title: "Audit & Assurance",
    subtitle: "Independent review frameworks that improve reporting confidence and operating trust.",
    summary:
      "Deliver statutory, internal, due diligence, bank, NGO, and process audits that align with real business decisions.",
    phone: "+91 91440 03015",
    overview: [
      "Approach audits as strategic visibility tools instead of end-stage compliance burdens.",
      "Support leadership with findings that identify risk, strengthen controls, and clarify next steps.",
    ],
    benefits: [
      "Statutory audit and tax audit execution",
      "Internal, bank, and due diligence audits",
      "NGO/trust review support",
      "System and process audit observations",
    ],
    differentiators: [
      "Boardroom-friendly reporting",
      "Operational risk visibility",
      "Evidence-backed improvement recommendations",
    ],
    promo: {
      title: "Move from audit completion to actionable assurance",
      description:
        "A good slot for a campaign on risk governance, reporting maturity, or transaction readiness.",
      cta: { label: "Speak with audit specialists", href: "/contact" },
    },
    buildBetter: {
      title: "Build better assurance outcomes",
      description:
        "Audit work should produce clarity and confidence, not only checklists. This template is designed to present that value cleanly.",
    },
    accordion: [
      {
        title: "Assurance design",
        content:
          "Scope the engagement around statutory obligations, operational risks, and stakeholder expectations.",
      },
      {
        title: "Fieldwork and findings",
        content:
          "Document observations in a structured way that can be understood by both finance and leadership teams.",
      },
      {
        title: "Remediation support",
        content:
          "Translate findings into process actions, control improvements, and reporting recommendations.",
      },
    ],
    seo: {
      title: "Audit & Assurance Services | Adihit Capella",
      description:
        "Statutory, internal, tax, GST, bank, and process audit services designed for stronger reporting and controls.",
      keywords: ["audit and assurance", "internal audit", "statutory audit"],
    },
  },
  {
    slug: "accounting-and-bookkeeping",
    title: "Accounting & Bookkeeping",
    subtitle: "Reliable accounting support for founders and finance teams that need control without operational drag.",
    summary:
      "Handle monthly books, finalisation, MIS reporting, P&L preparation, and virtual CFO support through structured delivery.",
    phone: "+91 91440 03029",
    overview: [
      "Present finance operations as a strategic backbone rather than a back-office obligation.",
      "Support leaders with timely numbers, cleaner reports, and stronger month-end confidence.",
    ],
    benefits: [
      "Monthly bookkeeping and account finalisation",
      "Balance sheet and P&L preparation",
      "MIS reporting and finance dashboards",
      "Virtual CFO support for growth-stage teams",
    ],
    differentiators: [
      "Founder-friendly finance reporting",
      "Reliable month-end routines",
      "Scalable bookkeeping structures",
    ],
    promo: {
      title: "Finance operations that stay decision-ready",
      description:
        "Use this area for a positioning message around MIS, CFO support, reporting quality, or cash visibility.",
      cta: { label: "Book a finance review", href: "/contact" },
    },
    buildBetter: {
      title: "Build better reporting discipline",
      description:
        "The site language here is designed to reassure business owners that clean books and strong reporting can coexist with growth.",
    },
    accordion: [
      {
        title: "Daily and monthly accounting rhythm",
        content:
          "Create predictable bookkeeping cycles with clearer responsibilities and cleaner supporting schedules.",
      },
      {
        title: "Management reporting and MIS",
        content:
          "Translate raw accounting data into management-ready insight with structured reports and summaries.",
      },
      {
        title: "Virtual CFO support",
        content:
          "Add higher-order thinking around budgeting, working capital, and financial prioritisation without building a full in-house team.",
      },
    ],
    seo: {
      title: "Accounting & Bookkeeping Services | Adihit Capella",
      description:
        "Bookkeeping, MIS, financial reporting, account finalisation, and virtual CFO services for growing businesses.",
      keywords: ["bookkeeping services", "virtual cfo", "mis reporting"],
    },
  },
  {
    slug: "company-registration-and-startup-services",
    title: "Company Registration & Startup Services",
    subtitle: "Launch-ready advisory for founders building formal, compliant, and investor-aware operating structures.",
    summary:
      "Support company setup, LLP and partnership registrations, startup recognition, trademarking, PAN/TAN, IEC, and more.",
    phone: "+91 91440 03029",
    overview: [
      "Guide founders from idea-stage structure decisions to the practical compliance tasks needed for launch.",
      "Use this section to highlight clarity, speed, and confidence during early-stage setup.",
    ],
    benefits: [
      "Private limited, LLP, partnership, and OPC registration",
      "Startup India and MSME registration",
      "PAN, TAN, shop act, and IEC support",
      "Trademark and foundational compliance setup",
    ],
    differentiators: [
      "Founder-first setup guidance",
      "Entity choice support with future-state thinking",
      "Connected legal and finance advisory",
    ],
    promo: {
      title: "Help new ventures launch with fewer blind spots",
      description:
        "Position this space around speed to launch, investor readiness, or simplified compliance for founders.",
      cta: { label: "Discuss your startup setup", href: "/contact" },
    },
    buildBetter: {
      title: "Build better foundations",
      description:
        "This service story is designed to make complex setup work feel credible, modern, and founder-friendly.",
    },
    accordion: [
      {
        title: "Entity selection and registration",
        content:
          "Match the structure to ownership, tax, governance, and fundraising goals before registration begins.",
      },
      {
        title: "Initial compliance stack",
        content:
          "Support the first layer of registrations, filings, and documentation needed for day-one operations.",
      },
      {
        title: "Founder advisory",
        content:
          "Provide guidance on practical next steps, from bookkeeping and GST to early-stage finance readiness.",
      },
    ],
    seo: {
      title: "Company Registration & Startup Services | Adihit Capella",
      description:
        "Company registration, LLP setup, Startup India registration, trademark, PAN/TAN, and startup advisory support.",
      keywords: ["company registration", "startup services", "llp registration"],
    },
  },
  {
    slug: "roc-and-compliance-services",
    title: "ROC & Compliance Services",
    subtitle: "Corporate compliance management for companies that need consistency, visibility, and lower execution risk.",
    summary:
      "Manage annual filings, director KYC, LLP filing, share transfer compliance, and corporate change events with confidence.",
    phone: "+91 91440 02989",
    overview: [
      "Position governance as a smooth operating system rather than an afterthought.",
      "Keep boards, founders, and finance teams aligned around recurring corporate compliance responsibilities.",
    ],
    benefits: [
      "Annual filing including AOC-4 and MGT-7",
      "Director KYC and event-based updates",
      "Share transfer and address/director changes",
      "LLP annual compliance support",
    ],
    differentiators: [
      "Calendar-led compliance discipline",
      "Clear visibility on event-based filings",
      "Structured documentation tracking",
    ],
    promo: {
      title: "Stay ahead of ROC obligations with cleaner governance routines",
      description:
        "A strong spot for future communication around annual filing season, board governance, or corporate housekeeping.",
      cta: { label: "Strengthen compliance", href: "/contact" },
    },
    buildBetter: {
      title: "Build better governance discipline",
      description:
        "The design of this page balances authority and approachability, especially for mid-market and founder-led businesses.",
    },
    accordion: [
      {
        title: "Annual corporate filings",
        content:
          "Coordinate recurring statutory submissions with a consistent preparation and review cycle.",
      },
      {
        title: "Event-based compliance",
        content:
          "Support changes in directors, registered address, shareholding, or ownership structure with timely execution.",
      },
      {
        title: "Governance support",
        content:
          "Improve filing visibility and internal preparedness with better timelines, records, and accountability.",
      },
    ],
    seo: {
      title: "ROC & Compliance Services | Adihit Capella",
      description:
        "Annual ROC filing, director KYC, LLP compliance, share transfer, and corporate housekeeping support.",
      keywords: ["roc compliance", "annual filing", "director kyc"],
    },
  },
  {
    slug: "financial-consulting",
    title: "Financial Consulting",
    subtitle: "Advisory support for growth planning, valuation, funding readiness, and sharper financial decisions.",
    summary:
      "Help organisations plan business setup, project reports, loan/CMA data, financial planning, valuation, cash flow, and budgets.",
    phone: "+91 91440 02982",
    overview: [
      "Use this page to communicate strategy, modelling, and decision support for businesses that need more than routine compliance.",
      "Blend commercial clarity with finance discipline across growth, cost, and capital decisions.",
    ],
    benefits: [
      "Business setup and project report preparation",
      "Loan, CMA data, and funding support",
      "Cash flow, budgeting, and forecasting",
      "Valuation, planning, and cost optimisation advisory",
    ],
    differentiators: [
      "Founder and CFO aligned decision support",
      "Growth-stage planning with finance rigour",
      "Flexible advisory structure",
    ],
    promo: {
      title: "Translate finance into practical decisions and investor-ready communication",
      description:
        "Ideal for future positioning around capital planning, valuation, or performance improvement advisory.",
      cta: { label: "Explore finance consulting", href: "/contact" },
    },
    buildBetter: {
      title: "Build better business outcomes",
      description:
        "This section is intentionally framed around decision quality, not only reporting outputs, to strengthen premium positioning.",
    },
    accordion: [
      {
        title: "Planning and modelling",
        content:
          "Support budgets, forecasts, cash flow plans, and scenario thinking with structured financial models.",
      },
      {
        title: "Funding and lender readiness",
        content:
          "Prepare CMA data, project reports, and narratives that make financial logic easier to present externally.",
      },
      {
        title: "Performance improvement",
        content:
          "Identify cost, margin, and cash conversion opportunities through a business-aware financial lens.",
      },
    ],
    seo: {
      title: "Financial Consulting | Adihit Capella",
      description:
        "Financial planning, valuation, cash flow, project reports, CMA data, and startup funding support.",
      keywords: ["financial consulting", "business valuation", "cash flow management"],
    },
  },
  {
    slug: "legal-services",
    title: "Legal Services",
    subtitle: "Corporate and dispute advisory for businesses operating in regulated, high-stakes, or fast-moving environments.",
    summary:
      "Cover litigation, arbitration, employment, privacy, M&A, restructuring, white collar matters, commercial law, and more.",
    phone: "+91 91440 01215",
    overview: [
      "Showcase legal capability with a structure that feels strategic, corporate, and decision-maker friendly.",
      "Connect legal services to transactions, compliance, disputes, labour, data protection, and sector-specific issues.",
    ],
    benefits: [
      "Litigation, arbitration, and dispute resolution",
      "Corporate, commercial, M&A, and private equity support",
      "Employment, labour, privacy, and data protection",
      "Real estate, banking, NBFC, white collar, and restructuring advisory",
    ],
    differentiators: [
      "Commercially aware legal positioning",
      "Multi-domain coverage for modern businesses",
      "Structured escalation and response support",
    ],
    promo: {
      title: "Legal strategy that supports operations, transactions, and risk management together",
      description:
        "Use this strip for thought leadership on regulation, disputes, M&A, or legal risk preparedness.",
      cta: { label: "Connect with legal advisors", href: "/contact" },
    },
    buildBetter: {
      title: "Build better legal resilience",
      description:
        "The page design is tailored to position legal services as high-value strategic advisory, not just reactive support.",
    },
    accordion: [
      {
        title: "Corporate and commercial",
        content:
          "Support transactions, contracts, governance, restructuring, and day-to-day legal decision-making.",
      },
      {
        title: "Dispute and regulatory response",
        content:
          "Create clearer pathways for escalation, representation, and issue management when risk surfaces.",
      },
      {
        title: "Sector-specific legal support",
        content:
          "Shape legal execution around industry realities such as finance, real estate, employment, and privacy.",
      },
    ],
    seo: {
      title: "Legal Services | Adihit Capella",
      description:
        "Corporate legal, disputes, M&A, labour, privacy, banking, real estate, and regulatory advisory services.",
      keywords: ["legal consultancy", "corporate legal", "dispute resolution"],
    },
  },
];

export const industryEntries: IndustryEntry[] = [
  {
    slug: "fmcg-and-consumer-goods",
    title: "FMCG & Consumer Goods",
    summary:
      "Support fast-moving businesses with tax discipline, channel controls, and finance visibility that keeps pace with distribution complexity.",
    intro: [
      "Consumer businesses move quickly and depend on strong operational cadence. Advisory support needs to match that speed without losing control.",
      "This page template is designed for sector-specific messaging, strong visuals, and expandable solution narratives.",
    ],
    solutions: [
      {
        title: "Indirect tax and distributor compliance",
        detail: "Handle GST, reconciliations, and transactional controls across fast-moving supply and retail networks.",
      },
      {
        title: "Working capital and margin visibility",
        detail: "Improve stock, collection, and spend visibility through stronger reporting and finance reviews.",
      },
      {
        title: "Growth-stage governance",
        detail: "Prepare the business for expansion, investor attention, or increased process expectations.",
      },
    ],
    latestThinking: [
      {
        title: "How FMCG businesses can tighten distributor compliance cycles",
        description: "Placeholder industry insight for sector-led SEO and thought leadership.",
        href: "/resources/compliance-architecture-for-growth-stage-companies",
      },
      {
        title: "Inventory visibility as a finance control signal",
        description: "Add a future article focused on reporting discipline in channel-heavy businesses.",
        href: "/resources/funding-readiness-and-the-modern-startup-finance-stack",
      },
      {
        title: "Margins, working capital, and growth trade-offs",
        description: "Showcase sector advisory depth with short, readable perspective pieces.",
        href: "/resources/notice-readiness-for-modern-finance-teams",
      },
    ],
    leaders: ["Aarav Mehta", "Ishita Rao"],
    seo: {
      title: "FMCG & Consumer Goods Advisory | Adihit Capella",
      description:
        "Legal, tax, compliance, and financial advisory for FMCG and consumer goods businesses.",
      keywords: ["fmcg advisory", "consumer goods consulting"],
    },
  },
  {
    slug: "banking-and-nbfc",
    title: "Banking & NBFC",
    summary:
      "Navigate regulated environments with stronger governance, legal oversight, reporting, and audit preparedness.",
    intro: [
      "Financial institutions operate under higher scrutiny and tighter timelines. Messaging here should convey control, stability, and technical depth.",
      "The layout gives enough structure for high-value sectors without becoming dense or intimidating.",
    ],
    solutions: [
      {
        title: "Regulatory and compliance review",
        detail: "Support process checks, reporting routines, and control design for regulated financial operations.",
      },
      {
        title: "Audit and risk visibility",
        detail: "Use audit-led frameworks to identify process gaps, documentation weaknesses, and escalation risk.",
      },
      {
        title: "Commercial and legal support",
        detail: "Handle contracts, notices, data concerns, and regulatory communication with a practical legal lens.",
      },
    ],
    latestThinking: [
      {
        title: "What a stronger control environment looks like in NBFC operations",
        description: "Placeholder article positioning for sector-specific advisory credibility.",
        href: "/resources/compliance-architecture-for-growth-stage-companies",
      },
      {
        title: "Why governance language matters in stakeholder communication",
        description: "Future thought leadership slot for a legal or finance perspective piece.",
        href: "/resources/notice-readiness-for-modern-finance-teams",
      },
      {
        title: "Linking internal audit to decision-making",
        description: "Short insight card for high-intent financial services visitors.",
        href: "/resources/funding-readiness-and-the-modern-startup-finance-stack",
      },
    ],
    leaders: ["Naina Kapoor", "Rohan Suri"],
    seo: {
      title: "Banking & NBFC Advisory | Adihit Capella",
      description:
        "Legal, regulatory, audit, tax, and reporting advisory for banking and NBFC organisations.",
      keywords: ["nbfc advisory", "banking compliance consulting"],
    },
  },
  {
    slug: "infrastructure-and-real-estate",
    title: "Infrastructure & Real Estate",
    summary:
      "Coordinate transaction, compliance, tax, and documentation support across capital-intensive projects and property-led businesses.",
    intro: [
      "Infrastructure and real estate engagements often involve layered documentation, long timelines, and multi-party execution.",
      "This template balances visual impact with the trust signals decision-makers expect in project-heavy sectors.",
    ],
    solutions: [
      {
        title: "Entity structuring and documentation",
        detail: "Support SPVs, contracts, board approvals, and transaction documentation across project stages.",
      },
      {
        title: "Tax and project reporting readiness",
        detail: "Create stronger control over indirect tax, reporting cycles, and project-linked financial submissions.",
      },
      {
        title: "Regulatory response and dispute support",
        detail: "Prepare for notices, escalations, and commercially sensitive legal matters with sharper issue management.",
      },
    ],
    latestThinking: [
      {
        title: "Project reporting habits that reduce execution surprises",
        description: "Ideal for future content focused on risk, projects, and governance.",
        href: "/resources/compliance-architecture-for-growth-stage-companies",
      },
      {
        title: "A practical guide to documentation discipline in real estate deals",
        description: "Sector-led long-form content can plug directly into this layout later.",
        href: "/resources/notice-readiness-for-modern-finance-teams",
      },
      {
        title: "How finance and legal teams can work more closely on project-heavy mandates",
        description: "Use for thought leadership or cross-sell positioning.",
        href: "/resources/funding-readiness-and-the-modern-startup-finance-stack",
      },
    ],
    leaders: ["Naina Kapoor", "Aarav Mehta"],
    seo: {
      title: "Infrastructure & Real Estate Advisory | Adihit Capella",
      description:
        "Advisory services for infrastructure and real estate companies across tax, legal, compliance, and finance.",
      keywords: ["real estate consulting", "infrastructure advisory"],
    },
  },
  {
    slug: "it-and-saas",
    title: "IT & SaaS",
    summary:
      "Support fast-scaling technology businesses with startup compliance, contracts, finance systems, and funding readiness.",
    intro: [
      "Technology businesses often need advisory that moves as fast as product and revenue decisions.",
      "This industry page is tuned for startup and SaaS visitors who want modern language, speed, and strategic support.",
    ],
    solutions: [
      {
        title: "Startup structuring and funding readiness",
        detail: "Align registrations, reporting, and finance narratives with future fundraising conversations.",
      },
      {
        title: "Revenue operations and reporting visibility",
        detail: "Improve cash flow planning, MIS, and founder reporting around growth metrics and runway.",
      },
      {
        title: "Commercial contracts and compliance layers",
        detail: "Support legal documentation, privacy sensitivity, and ongoing corporate compliance.",
      },
    ],
    latestThinking: [
      {
        title: "The finance stack every growth-stage startup should clean up early",
        description: "A strong SEO anchor for founder-intent traffic.",
        href: "/resources/funding-readiness-and-the-modern-startup-finance-stack",
      },
      {
        title: "What investors notice in finance and compliance hygiene",
        description: "Use for future campaign-led insight content.",
        href: "/resources/compliance-architecture-for-growth-stage-companies",
      },
      {
        title: "Simple legal workflows that reduce startup drag",
        description: "A clean slot for legal-for-startups education pieces.",
        href: "/resources/notice-readiness-for-modern-finance-teams",
      },
    ],
    leaders: ["Ishita Rao", "Naina Kapoor"],
    seo: {
      title: "IT & SaaS Advisory | Adihit Capella",
      description:
        "Startup, SaaS, and technology advisory across finance, legal, tax, compliance, and fundraising readiness.",
      keywords: ["startup consulting", "saas finance advisory"],
    },
  },
  {
    slug: "warehousing-and-logistics",
    title: "Warehousing & Logistics",
    summary:
      "Design compliance, contract, and reporting structures for businesses that depend on movement, timing, and operational precision.",
    intro: [
      "Logistics businesses need operationally aware advisory, especially where tax, documentation, and commercial risk intersect.",
      "This page gives room for industry-specific depth while staying clean and conversion-focused.",
    ],
    solutions: [
      {
        title: "Transaction and movement compliance",
        detail: "Support e-way bill, invoice discipline, GST coordination, and documentation readiness.",
      },
      {
        title: "Contracting and commercial controls",
        detail: "Strengthen vendor, client, and partner documentation across high-frequency operations.",
      },
      {
        title: "Operational finance reporting",
        detail: "Improve visibility into margins, route economics, and cash discipline through stronger reporting structures.",
      },
    ],
    latestThinking: [
      {
        title: "Where logistics businesses lose compliance time",
        description: "Placeholder insight card for sector-specific trust building.",
        href: "/resources/compliance-architecture-for-growth-stage-companies",
      },
      {
        title: "Contracts, claims, and coordination in logistics environments",
        description: "A future legal insight that fits this template naturally.",
        href: "/resources/notice-readiness-for-modern-finance-teams",
      },
      {
        title: "Using reporting to improve logistics decision velocity",
        description: "Operational finance storytelling slot.",
        href: "/resources/funding-readiness-and-the-modern-startup-finance-stack",
      },
    ],
    leaders: ["Rohan Suri", "Aarav Mehta"],
    seo: {
      title: "Warehousing & Logistics Advisory | Adihit Capella",
      description:
        "Tax, legal, compliance, and finance advisory for warehousing and logistics companies.",
      keywords: ["logistics consulting", "warehousing compliance"],
    },
  },
  {
    slug: "education-and-trusts",
    title: "Educational Institutions & Trusts",
    summary:
      "Support trusts, schools, and education-led organisations with governance, audit, tax, and compliance clarity.",
    intro: [
      "Trust and education environments need advisory that understands both statutory requirements and mission-oriented operating realities.",
      "This layout gives space for credibility, clarity, and softer institutional messaging.",
    ],
    solutions: [
      {
        title: "Trust audit and reporting",
        detail: "Support ongoing audit, finalisation, and documentation needs with structured communication.",
      },
      {
        title: "Tax and exemption sensitivity",
        detail: "Plan filing and compliance approaches that respect entity nature and statutory requirements.",
      },
      {
        title: "Governance and policy support",
        detail: "Improve board-facing communication, policy documentation, and operational discipline.",
      },
    ],
    latestThinking: [
      {
        title: "Governance basics for education-led institutions",
        description: "Placeholder sector article for institutions and trustees.",
        href: "/resources/compliance-architecture-for-growth-stage-companies",
      },
      {
        title: "How trusts can strengthen reporting clarity",
        description: "Use this for future audits or governance-led content.",
        href: "/resources/notice-readiness-for-modern-finance-teams",
      },
      {
        title: "When policy design improves day-to-day operations",
        description: "A flexible insight slot tied to governance advisory.",
        href: "/resources/funding-readiness-and-the-modern-startup-finance-stack",
      },
    ],
    leaders: ["Rohan Suri", "Naina Kapoor"],
    seo: {
      title: "Education & Trust Advisory | Adihit Capella",
      description:
        "Advisory services for educational institutions and trusts across audit, governance, tax, and compliance.",
      keywords: ["trust audit", "education institution advisory"],
    },
  },
];

export const resourcePosts: ResourcePost[] = [
  {
    slug: "monthly-tax-bulletin-february-2026",
    title: "Monthly Tax Bulletin - February 2026",
    excerpt:
      "A flexible bulletin template for tax updates, compliance watch-outs, and practical takeaways for leadership teams.",
    category: "Newsletter",
    date: "2026-02-25",
    readTime: "6 min read",
    highlights: [
      "Budget-linked tax considerations for finance leaders",
      "Filing observations that deserve early action",
      "Notice readiness checkpoints for internal teams",
    ],
    body: [
      "This resource template is built for a polished bulletin experience that can be updated with your own final copy later.",
      "The structure supports key highlights, a downloadable callout, service promotion, and supporting tag-based discovery.",
      "Use this space for short paragraphs, bullet-led updates, and commentary that balances technical credibility with readability.",
    ],
    tags: ["tax bulletin", "budget updates", "compliance", "adihit capella"],
    bulletin: {
      title: "Download the Monthly Tax Bulletin",
      description:
        "Replace this placeholder with a real downloadable PDF, visual preview, and your final editorial summary.",
      ctaLabel: "Download bulletin",
    },
    seo: {
      title: "Monthly Tax Bulletin - February 2026 | Adihit Capella",
      description:
        "Monthly tax bulletin covering key highlights, compliance updates, and advisory notes from Adihit Capella.",
      keywords: ["monthly tax bulletin", "tax newsletter"],
    },
  },
  {
    slug: "compliance-architecture-for-growth-stage-companies",
    title: "Compliance architecture for growth-stage companies",
    excerpt:
      "How scaling businesses can bring legal, ROC, GST, and reporting duties into one more durable operating rhythm.",
    category: "Article",
    date: "2026-01-14",
    readTime: "7 min read",
    highlights: [
      "Why fragmented compliance ownership creates avoidable risk",
      "How to map recurring vs event-based obligations",
      "What founders should expect from a healthier advisory operating model",
    ],
    body: [
      "Growth-stage companies often outgrow informal compliance habits before leadership realises it.",
      "This article template is designed to showcase advisory thinking that is strategic, structured, and easy to scan.",
      "The design supports high-intent SEO content while keeping the experience premium and clean.",
    ],
    tags: ["roc", "compliance", "startup", "legal consultancy"],
    bulletin: {
      title: "Need help designing a stronger compliance framework?",
      description:
        "Promote a service, downloadable checklist, or consultation offer in this featured callout area.",
      ctaLabel: "Visit the services page",
    },
    seo: {
      title: "Compliance Architecture for Growth-Stage Companies | Adihit Capella",
      description:
        "Learn how growth-stage companies can structure legal, tax, and governance compliance more effectively.",
      keywords: ["compliance consulting", "growth stage company compliance"],
    },
  },
  {
    slug: "funding-readiness-and-the-modern-startup-finance-stack",
    title: "Funding readiness and the modern startup finance stack",
    excerpt:
      "A founder-friendly perspective on the finance systems, reporting discipline, and advisory structure investors expect.",
    category: "Insight",
    date: "2025-12-18",
    readTime: "5 min read",
    highlights: [
      "What cleaner reporting signals to investors",
      "How cash flow planning changes fundraising confidence",
      "Why compliance hygiene influences diligence outcomes",
    ],
    body: [
      "For many startups, fundraising readiness is as much about operational discipline as it is about story and traction.",
      "This page template is ready for long-form founder education, campaign content, or sector-specific advisory messaging.",
      "It also creates strong internal linking opportunities to startup services, financial consulting, and industry pages.",
    ],
    tags: ["startup finance", "fundraising", "virtual cfo", "consultancy"],
    bulletin: {
      title: "Explore startup and finance advisory services",
      description:
        "Use this featured area to connect content readers to a relevant service line or consultation pathway.",
      ctaLabel: "Explore startup services",
    },
    seo: {
      title: "Funding Readiness and the Modern Startup Finance Stack | Adihit Capella",
      description:
        "Startup finance, reporting, compliance, and fundraising readiness insights from Adihit Capella.",
      keywords: ["startup finance", "funding readiness"],
    },
  },
  {
    slug: "notice-readiness-for-modern-finance-teams",
    title: "Notice readiness for modern finance teams",
    excerpt:
      "A practical look at how documentation habits, escalation pathways, and advisor coordination reduce notice stress.",
    category: "Guide",
    date: "2025-11-05",
    readTime: "8 min read",
    highlights: [
      "Why response readiness starts before a notice arrives",
      "What documentation should stay accessible at all times",
      "How cross-functional coordination reduces avoidable risk",
    ],
    body: [
      "Notice handling becomes more manageable when documentation, ownership, and escalation routes are already defined.",
      "This article format gives you a polished place to publish highly practical, search-friendly advisory content.",
      "Use it to build trust, educate prospects, and direct visitors into relevant service pathways.",
    ],
    tags: ["notice handling", "tax advisory", "audit readiness", "ca firm"],
    bulletin: {
      title: "Speak with our notice handling team",
      description:
        "Turn content traffic into enquiries with a service-relevant callout that stays visible within the article.",
      ctaLabel: "Contact the team",
    },
    seo: {
      title: "Notice Readiness for Modern Finance Teams | Adihit Capella",
      description:
        "Notice handling, response readiness, and documentation practices for finance and compliance teams.",
      keywords: ["notice handling", "scrutiny support", "tax notice advisory"],
    },
  },
];

export const careerOpenings: CareerOpening[] = [
  {
    id: "fin-associate-01",
    title: "Finance & Compliance Associate",
    location: "Nagpur",
    department: "Advisory",
    jobType: "Full-time",
    workStyle: "On-site",
    postedAt: "2026-03-10",
    summary:
      "Support recurring compliance execution, reporting preparation, and client coordination across tax and finance mandates.",
    responsibilities: [
      "Assist with filing schedules, documentation reviews, and client coordination.",
      "Prepare working papers and maintain compliance trackers.",
      "Support seniors on recurring advisory and finance assignments.",
    ],
  },
  {
    id: "legal-analyst-01",
    title: "Legal Analyst",
    location: "Nagpur",
    department: "Legal",
    jobType: "Full-time",
    workStyle: "Hybrid",
    postedAt: "2026-02-28",
    summary:
      "Work on research, documentation, notice response support, and corporate legal tasks for active client matters.",
    responsibilities: [
      "Draft research notes and assist with legal documentation.",
      "Support contract review and regulatory response workflows.",
      "Coordinate with internal teams on matter progress and deadlines.",
    ],
  },
  {
    id: "articleship-01",
    title: "CA Articleship - Assurance & Tax",
    location: "Nagpur",
    department: "Articleship",
    jobType: "Articleship",
    workStyle: "On-site",
    postedAt: "2026-03-18",
    summary:
      "An immersive articleship track with exposure to audit, tax, compliance, and client-facing execution.",
    responsibilities: [
      "Assist on audit and taxation assignments.",
      "Support documentation, reconciliations, and filing workflows.",
      "Participate in reviews, client calls, and team learning sessions.",
    ],
  },
  {
    id: "startup-consulting-01",
    title: "Startup Consulting Associate",
    location: "Remote",
    department: "Finance Consulting",
    jobType: "Full-time",
    workStyle: "Remote",
    postedAt: "2026-01-29",
    summary:
      "Partner with startup-focused engagements on reporting, fundraising readiness, and virtual CFO support.",
    responsibilities: [
      "Help build MIS and founder-facing finance decks.",
      "Assist with planning, budgeting, and investor readiness workflows.",
      "Translate analysis into practical client recommendations.",
    ],
  },
  {
    id: "intern-content-01",
    title: "Content & Research Intern",
    location: "Nagpur",
    department: "Marketing",
    jobType: "Internship",
    workStyle: "Hybrid",
    postedAt: "2026-03-02",
    summary:
      "Support sector research, thought leadership content, and website resource development with advisory teams.",
    responsibilities: [
      "Research market, legal, tax, and finance topics.",
      "Help turn technical material into readable editorial content.",
      "Coordinate with design and advisory stakeholders.",
    ],
  },
  {
    id: "audit-manager-01",
    title: "Audit Manager",
    location: "Mumbai",
    department: "Audit",
    jobType: "Full-time",
    workStyle: "Hybrid",
    postedAt: "2026-02-04",
    summary:
      "Lead assurance engagements, guide client teams, and help shape stronger audit reporting frameworks.",
    responsibilities: [
      "Own end-to-end assurance planning and delivery.",
      "Review findings and present recommendations clearly.",
      "Mentor junior team members across assignments.",
    ],
  },
];

export const careerCards: InfoCard[] = [
  {
    title: "Working at Adihit Capella",
    description:
      "Explore our work culture, learning environment, and the kind of advisory problems teams solve here.",
    cta: { label: "View culture", href: "/careers#life-at-adihit" },
  },
  {
    title: "Articleship",
    description:
      "See how students and early-career professionals can build hands-on exposure across advisory functions.",
    cta: { label: "Explore articleship", href: "/careers/articleship" },
  },
  {
    title: "Call Now",
    description:
      "Use this highlighted card for direct hiring or internship enquiries while you add final team contact details.",
    cta: { label: "Contact the hiring team", href: "/contact" },
  },
];

export const careerBenefits: ValueCard[] = [
  {
    title: "Work culture",
    description:
      "Join a team that values calm execution, collaborative thinking, and polished client communication.",
  },
  {
    title: "Career growth",
    description:
      "Build exposure across tax, legal, audit, and finance instead of getting boxed into a single repetitive track.",
  },
  {
    title: "Learning rhythm",
    description:
      "Grow through active assignments, internal reviews, and practical exposure to advisory work.",
  },
];

export const officeGallery = [
  "Boardroom strategy session",
  "Team workshop and knowledge sharing",
  "Client presentation rehearsal",
  "Culture and celebration moments",
  "Focused advisory workstations",
  "Training and onboarding sessions",
];

export const contactCards: InfoCard[] = [
  {
    title: "Careers",
    description:
      "Invite students, professionals, and referral candidates to explore openings, articleship, and growth paths.",
    cta: { label: "See openings", href: "/careers/openings" },
  },
  {
    title: "Business Enquiry",
    description:
      "Use this card for direct firm support, contact numbers, or a short CTA for consultation requests.",
    cta: { label: "Speak to our team", href: "/contact" },
  },
];

export const resourceTags = Array.from(
  new Set(resourcePosts.flatMap((post) => post.tags)),
);
