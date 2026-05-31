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
  eyebrow: "Audit | Tax | Finance | Legal",
  title: "Professional advisory for clearer decisions, stronger control, and long-term business readiness.",
  description:
    "Adihit Capella supports businesses with practical advisory, accurate execution, and organised compliance systems that help teams move forward with confidence.",
  cta: { label: "Schedule Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Services", href: "/services" },
  tags: ["adihit capella", "business advisory", "compliance", "finance consulting"],
  stats: [
    { value: "4", label: "Core service verticals" },
    { value: "1", label: "Coordinated advisory partner" },
    { value: "100%", label: "Process-focused execution" },
  ],
};

export const homeDifferenceIntro = [
  "Businesses in search of accuracy and consistency can partner with Adihit Capella for compliant advisory support. Our focus lies on practical outcomes. This includes better control, clearer decisions and strong process.",
  "Our team works multi-functional, with the objective of reducing complexity and increasing readiness. We create reliable systems that help teams and stakeholders to thrive and maintain long-term business sustainability.",
];

export const homeDifferenceCards: ValueCard[] = [
  {
    title: "Expert Financial Guidance",
    description:
      "We bring hands-on help to improve control and connect financial activities with business goals, so you can carry your business forward with clarity.",
  },
  {
    title: "End-to-End Compliance Support",
    description:
      "From business registration to filing and compliance, we help reduce missed deadlines, documentation gaps, and regulatory issues.",
  },
  {
    title: "Timely & Accurate Execution",
    description:
      "Our processes keep work structured, documents complete, and communication clear so momentum is protected.",
  },
  {
    title: "One-Stop Professional Solutions",
    description:
      "Coordinated audit, tax, finance, legal, accounting, and process support keeps accountability clear and saves time.",
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
    cta: { label: "View specialised services", href: "/services/specialised-business-compliance-services" },
  },
  {
    title: "Finance-backed growth planning",
    description:
      "Support expansion, cash flow, budgeting, valuation, and investment decisions with advisory discipline.",
    cta: { label: "Explore consulting", href: "/services/financial-consulting-services" },
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
    name: "Rajesh Mehta",
    company: "Director, Mehta Industries",
    review:
      "Adihit Capella has been our trusted CA partner for over 5 years. Their expertise in tax planning saved us significantly and their team is always responsive.",
  },
  {
    name: "Priya Sharma",
    company: "Founder, TechStart Solutions",
    review:
      "Outstanding service! They handled our company registration, GST setup, and monthly compliance seamlessly. Highly professional team.",
  },
  {
    name: "Amit Patel",
    company: "CEO, Patel Exports",
    review:
      "Their FEMA and NRI taxation expertise is top-notch. We have been handling all our international transactions with their guidance.",
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
    slug: "company-registration-and-startup-services",
    title: "Company Registration & Startup Services",
    subtitle: "Registration support, documentation guidance, and compliance-ready setup for new and growing businesses.",
    summary:
      "Give your business a professional start with clear registration support, documentation guidance, and compliance-ready setup. From entity selection to filings and essential regulations, we help you begin operations with a strong foundation.",
    phone: "+91 84338 80864",
    overview: [
      "Most businesses get the paperwork done. Fewer get it done correctly from the start. At Adihit Capella, we help startups, entrepreneurs, and growing businesses register, document, and comply in the right order with the right filings.",
      "Registering a business is step one, but the decisions made at that stage affect taxes, funding, ownership rights, liability, and operating flexibility for years.",
      "We guide founders and business owners through entity selection, documentation, authority coordination, and filings so the regulatory burden does not slow the launch.",
      "Beyond registration, we support PAN, TAN, MSME recognition, Startup India certification, trademarks, and Import-Export Codes depending on the nature of operations.",
    ],
    benefits: [
      "Private Limited Company Registration",
      "LLP Registration",
      "Partnership Firm Registration",
      "One Person Company Registration",
      "Startup India Registration",
      "MSME Registration",
      "Trademark Registration",
    ],
    differentiators: [
      "Entity selection guidance",
      "Compliance-ready setup",
      "Founder-focused documentation",
    ],
    promo: {
      title: "Start with a structure that can support future growth",
      description:
        "Clean registration and early compliance create credibility with banks, investors, vendors, and future stakeholders.",
      cta: { label: "Discuss your startup setup", href: "/contact" },
    },
    buildBetter: {
      title: "Key services",
      description:
        "Registration and setup support designed to reduce delays, avoid errors, and give the business a stronger foundation from day one.",
    },
    accordion: [
      {
        title: "Private Limited Company Registration",
        content:
          "We support incorporation, documentation, MoA and AoA drafting, and MCA coordination so your company is registered correctly from the start.",
      },
      {
        title: "LLP, Partnership, and OPC Registration",
        content:
          "We help with LLP agreements, DPIN applications, partnership deed drafting, firm registration, and OPC incorporation documentation.",
      },
      {
        title: "Startup, MSME, Trademark, and allied registrations",
        content:
          "We manage Startup India, MSME, trademark, PAN, TAN, and other setup registrations accurately and efficiently.",
      },
    ],
    seo: {
      title: "Company Registration & Startup Services | Adihit Capella",
      description:
        "Company registration, LLP setup, Startup India, MSME, trademark, PAN, TAN, and compliance-ready startup support.",
      keywords: ["company registration", "startup services", "llp registration"],
    },
  },
  {
    slug: "financial-consulting-services",
    title: "Financial Consulting Services",
    subtitle: "Practical financial consulting for budgeting, forecasting, cash flow, loan support, and investment planning.",
    summary:
      "Better planning and cash flow management are critical for informed business decisions. We guide budgeting, forecasting, loan support, investment planning, and cost control to improve stability and long-term readiness.",
    phone: "+91 84338 80864",
    overview: [
      "Financial decisions shape every part of a business, from day-to-day operations to long-term direction. We help businesses bring structure to their finances and make decisions backed by numbers, not assumptions.",
      "Most businesses reach a point where financial management becomes more complex than a spreadsheet can handle. Revenue grows, expenses multiply, loan requirements appear, and cash flow becomes harder to track.",
      "Our work looks at where money is going, where it should go, and what needs to change across budgeting discipline, cost structure, funding strategy, and reporting clarity.",
      "We assist with financial planning, budgeting, forecasting, CMA preparation, investment planning, cost reduction opportunities, and startup funding documentation.",
    ],
    benefits: [
      "Financial Planning",
      "Cash Flow Management",
      "Business Setup Advisory",
      "Budgeting & Forecasting",
      "Loan & CMA Preparation",
      "Cost Reduction Strategy",
      "Startup Funding Support",
    ],
    differentiators: [
      "Clear financial visibility",
      "Practical recommendations",
      "Decision-ready reporting",
    ],
    promo: {
      title: "Make financial decisions with clearer numbers",
      description:
        "Structured consulting helps leaders understand their finances, protect liquidity, and plan with greater confidence.",
      cta: { label: "Book a finance review", href: "/contact" },
    },
    buildBetter: {
      title: "Key services",
      description:
        "Financial consulting that keeps analysis straightforward, communication direct, and recommendations useful for real business decisions.",
    },
    accordion: [
      {
        title: "Financial planning and cash flow management",
        content:
          "We build practical financial plans and monitor inflows and outflows so liquidity can be protected without disrupting operations.",
      },
      {
        title: "Budgeting, forecasting, loan, and CMA support",
        content:
          "We set realistic financial targets, adjust forecasts as conditions change, and prepare CMA data and loan documentation for lender requirements.",
      },
      {
        title: "Cost reduction and startup funding support",
        content:
          "We analyse cost structures and help startups prepare projections and pitch-ready documentation that can stand up to review.",
      },
    ],
    seo: {
      title: "Financial Consulting Services | Adihit Capella",
      description:
        "Financial planning, cash flow management, budgeting, forecasting, CMA, cost reduction, and startup funding support.",
      keywords: ["financial consulting", "cash flow management", "business valuation"],
    },
  },
  {
    slug: "specialised-business-compliance-services",
    title: "Specialised Business & Compliance Services",
    subtitle: "Specialised advisory for internal controls, workflow controls, fraud risk, FEMA, RBI, NRI, and restructuring matters.",
    summary:
      "Evolving operations need support that emphasises compliance, restructuring, and control-focused advisory. We help build internal control systems, workflow controls, and fraud risk management measures for stronger compliance outcomes.",
    phone: "+91 84338 80864",
    overview: [
      "Routine compliance covers only part of what a growing business actually needs. As operations expand, companies face pressure to improve internal processes, control risk, stay current with regulations, and respond to structural change.",
      "We support internal control system setup, operational workflow controls, fraud risk management, and compliance controls for Indian companies.",
      "For companies with cross-border activity, we handle FEMA and RBI compliance, NRI compliance matters, and business restructuring advisory.",
      "Our experts work directly with management teams to understand how the business operates, find practical improvements, and build systems that stay useful beyond the initial engagement.",
    ],
    benefits: [
      "NRI Compliance Services",
      "FEMA & RBI Compliance",
      "Internal Control System Setup",
      "Operational Workflow Controls",
      "Fraud Risk Management",
      "Business Restructuring Advisory",
      "Compliance Controls for Indian Companies",
    ],
    differentiators: [
      "Control-focused advisory",
      "Indian compliance context",
      "Management-level process support",
    ],
    promo: {
      title: "Strengthen the systems behind everyday compliance",
      description:
        "Better controls reduce reporting errors, improve financial oversight, and bring discipline to functions that often go unmanaged as businesses scale.",
      cta: { label: "Strengthen your controls", href: "/contact" },
    },
    buildBetter: {
      title: "Key services",
      description:
        "Specialised business and compliance support built for Indian businesses operating in a changing regulatory environment.",
    },
    accordion: [
      {
        title: "NRI, FEMA, and RBI compliance",
        content:
          "We manage overseas regulatory reporting and cross-border compliance requirements so foreign transactions and ownership matters are handled without avoidable delays.",
      },
      {
        title: "Internal controls and workflow controls",
        content:
          "We bring structure to day-to-day operational and reporting functions, reducing inconsistencies and improving routine execution.",
      },
      {
        title: "Fraud risk, restructuring, and company controls",
        content:
          "We support fraud risk management, business restructuring, and practical compliance frameworks for Indian companies.",
      },
    ],
    seo: {
      title: "Specialised Business & Compliance Services | Adihit Capella",
      description:
        "Internal controls, workflow controls, fraud risk management, FEMA, RBI, NRI compliance, and restructuring advisory.",
      keywords: ["compliance consulting", "internal control", "fema rbi compliance"],
    },
  },
  {
    slug: "roc-and-compliance-services",
    title: "ROC & Compliance Services",
    subtitle: "ROC filing, director KYC, LLP returns, statutory updates, and MCA compliance handled with accuracy.",
    summary:
      "Our experts take care of ROC and compliance requirements with accuracy and timely follow-through. Whether it is annual filings, director KYC, or LLP returns, we help your business remain organised and reduce compliance risk.",
    phone: "+91 84338 80864",
    overview: [
      "Corporate compliance is not a task performed once a year. It is an ongoing responsibility that needs recurring attention and accurate documentation.",
      "Every company and LLP registered under the Ministry of Corporate Affairs must meet recurring obligations including annual filings, statutory records, and timely reporting of company changes.",
      "We handle ROC compliance across all stages of a company's lifecycle, including annual returns, financial statement submissions, director KYC, share transfer documentation, and event-based statutory filings.",
      "In addition to filings, we help improve internal compliance controls so documentation practices, filing workflows, and coordination reduce last-minute corrections.",
    ],
    benefits: [
      "Annual ROC Filing",
      "Director KYC Compliance",
      "LLP Annual Filing",
      "Change in Directors",
      "Registered Office Changes",
      "Share Transfer Compliance",
    ],
    differentiators: [
      "Reliable MCA filings",
      "Deadline-focused execution",
      "Clear statutory documentation",
    ],
    promo: {
      title: "Keep corporate compliance current and organised",
      description:
        "Clear processes, accurate paperwork, and reliable follow-through mean compliance is not a recurring source of stress.",
      cta: { label: "Request ROC support", href: "/contact" },
    },
    buildBetter: {
      title: "Key services",
      description:
        "ROC and MCA compliance support for recurring filings, statutory changes, director updates, and corporate documentation.",
    },
    accordion: [
      {
        title: "Annual ROC filing and LLP annual filing",
        content:
          "We prepare and file AOC-4, MGT-7, Form 8, Form 11, and mandatory annual compliance forms as applicable.",
      },
      {
        title: "Director KYC and director changes",
        content:
          "We manage DIR-3 KYC and DIN-related updates with the correct documentation and timelines.",
      },
      {
        title: "Registered office and share transfer compliance",
        content:
          "We handle MCA filings, board approvals, and required ROC reporting for office changes and share transfer matters.",
      },
    ],
    seo: {
      title: "ROC & Compliance Services | Adihit Capella",
      description:
        "ROC annual filing, director KYC, LLP filing, registered office changes, share transfer compliance, and MCA support.",
      keywords: ["roc compliance", "annual filing", "director kyc"],
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
