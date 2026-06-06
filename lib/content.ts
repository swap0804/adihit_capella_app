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
  {
    slug: "accounting-and-bookkeeping",
    title: "Accounting & Bookkeeping Services",
    subtitle: "Accurate books, reliable reports, and financial records that support confident business decisions.",
    summary:
      "Most financial problems start with incomplete records. We keep financial data accurate, reports reliable, and businesses positioned to make decisions using numbers they can trust.",
    overview: [
      "Every business decision, whether it is a hiring call, capital investment, or loan application, depends on accurate financial records. Without clean books, gaps often surface during audits, tax filings, or funding conversations.",
      "Transactions can go unrecorded, bank statements can remain unreconciled, and reports can be rushed before deadlines. This creates both a compliance problem and a visibility problem for business owners.",
      "We manage day-to-day bookkeeping, accounts finalisation, financial statement preparation, and MIS reporting through a structured cycle of regular recording, scheduled reconciliation, and timely reporting.",
      "For businesses that need strategic oversight without a full-time finance head, our virtual CFO service provides senior financial guidance.",
      "Our goal is to provide financial records that are current, accurate, and meaningful.",
    ],
    benefits: ["Monthly Bookkeeping", "Accounts Finalisation", "Balance Sheet & P&L Preparation", "MIS Reporting", "Virtual CFO Services"],
    differentiators: ["Reliable financial records", "Timely management reporting", "Scalable finance support"],
    promo: {
      title: "Keep your financial position clear and decision-ready",
      description: "Structured accounting processes provide dependable records for compliance, reporting, funding, and management decisions.",
      cta: { label: "Discuss your accounts", href: "/contact" },
    },
    buildBetter: {
      title: "Our key offerings",
      description: "Accounting and reporting support that stays useful as compliance needs and business complexity grow.",
    },
    accordion: [],
    offerings: [
      { title: "Monthly Bookkeeping", content: "We maintain your books on a monthly cycle so financial information remains organised, available, and ready when compliance or reporting dates arrive." },
      { title: "Accounts Finalisation", content: "We review, reconcile, and finalise accounts at the close of each financial year, including adjustments, balance verification, and financial statement preparation for statutory filings and business review." },
      { title: "Balance Sheet & P&L Preparation", content: "We prepare Balance Sheets and Profit & Loss statements that accurately present the business position for tax filings, stakeholder reviews, loan applications, and management decisions." },
      { title: "MIS Reporting", content: "Monthly MIS reports provide a readable view of revenue, costs, margins, and performance trends so management can monitor and act on business performance." },
      { title: "Virtual CFO Services", content: "We provide senior financial oversight through budgeting, cash flow planning, financial analysis, and growth advisory without the fixed cost of a full-time CFO." },
    ],
    whyChoose: [
      { title: "Financial Accuracy You Can Trust", content: "Structured accounting processes ensure financial data reflects actual business performance rather than estimates prepared just before deadlines." },
      { title: "Timely Reporting & Compliance Support", content: "A consistent reporting schedule keeps financial information available when decisions and deadlines require it." },
      { title: "Practical Business Insights", content: "We explain what the figures indicate, including where performance is strong and where costs are increasing." },
      { title: "Scalable Solutions for Growing Businesses", content: "Support adapts from bookkeeping and finalisation to virtual CFO guidance as a startup or SME becomes more complex." },
      { title: "Integrated Financial Expertise", content: "Accounting is coordinated with taxation, compliance, and financial strategy instead of being managed in isolation." },
    ],
    faqs: [
      { title: "Why does professional bookkeeping matter for a business?", content: "Incomplete records create problems over time. Professional bookkeeping keeps monetary records current and accurate, helping the business avoid missed compliance deadlines and make better decisions." },
      { title: "How frequently should bookkeeping be updated?", content: "Monthly is the standard for most businesses. It keeps reconciliations manageable, supports GST and TDS deadlines, and keeps financial data close to current." },
      { title: "What does account finalisation involve?", content: "It covers ledger review, bank and vendor reconciliations, period-end adjustments, balance verification, and preparation of financial statements for audit, tax filing, or management review." },
      { title: "What are MIS reports and who are they for?", content: "MIS reports translate raw financial data into structured summaries used by business owners and managers to track month-to-month performance." },
      { title: "What does a Virtual CFO do for a growing business?", content: "A virtual CFO provides senior financial oversight without a full-time hire and is useful when financial decisions become complex before a dedicated CFO is practical." },
      { title: "Can accounting services support business growth?", content: "Yes. Clean records reveal profitability, cost trends, and cash position, making it easier to plan expansion, approach lenders, attract investors, and prioritise operations." },
    ],
    finalCta: {
      title: "Get Your Accounts in Order, Starting Today!",
      description: "Disorganised books are a risk your business does not need to carry. One conversation can identify where to begin with accounting and bookkeeping support.",
      label: "Consult our experts today",
      href: "/contact",
    },
    seo: {
      title: "Accounting & Bookkeeping Services | Adihit Capella",
      description: "Monthly bookkeeping, account finalisation, financial statements, MIS reporting, and virtual CFO services.",
      keywords: ["bookkeeping services", "virtual cfo", "mis reporting"],
    },
  },
  {
    slug: "audit-and-assurance",
    title: "Audit & Assurance Services",
    subtitle: "Independent audit support that verifies reporting, strengthens controls, and provides practical recommendations.",
    summary:
      "Numbers reveal their value when they are accurate. We help businesses verify financial reporting, strengthen internal controls, and meet regulatory obligations with clear findings.",
    overview: [
      "An audit is more than a compliance checkbox. Done well, it provides a clear view of financial position, operations, and risk for lenders, investors, regulators, and management.",
      "As companies expand, financial reporting becomes layered and inaccuracies become more significant. Stakeholders need transparency and the business needs reliable information for sound decisions.",
      "We manage statutory requirements, internal process reviews, tax and GST audits, due diligence, and sector-specific engagements while maintaining professional independence.",
      "Our work goes beyond observations. Identified gaps are paired with specific, practical recommendations that teams can implement.",
    ],
    benefits: ["Statutory Audit", "Internal Audit", "Tax Audit", "GST Audit", "Due Diligence Audit", "Bank Audit", "Trust & NGO Audit", "System & Process Audit"],
    differentiators: ["Independent assessments", "Risk-focused reviews", "Actionable recommendations"],
    promo: {
      title: "Turn audit findings into stronger controls",
      description: "Independent assessments provide reporting confidence and practical next steps for management.",
      cta: { label: "Request audit support", href: "/contact" },
    },
    buildBetter: { title: "Key service offerings", description: "Audit engagements designed around statutory obligations, operational realities, and stakeholder confidence." },
    accordion: [],
    offerings: [
      { title: "Statutory Audit", content: "An independent examination of financial statements that verifies accuracy and compliance with applicable accounting standards for investors, lenders, and regulators." },
      { title: "Internal Audit", content: "A structured review of processes and operations that identifies breakdowns, developing risks, and opportunities to improve efficiency." },
      { title: "Tax Audit", content: "An audit under Section 44AB of the Income Tax Act that examines financial records and tax positions for accurate reporting and statutory compliance." },
      { title: "GST Audit", content: "A review of GST records, returns, and procedures that identifies book-to-return discrepancies, reconciliation gaps, and indirect tax compliance issues." },
      { title: "Due Diligence Audit", content: "A transaction-focused review before mergers, acquisitions, investments, or partnerships that surfaces liabilities and material risks." },
      { title: "Bank Audit", content: "Specialist reviews of banking operations, regulatory compliance, and financial reporting across banking functions." },
      { title: "Trust & NGO Audit", content: "Reviews for charitable and non-profit organisations that verify appropriate use of funds, statutory compliance, transparency, and record maintenance." },
      { title: "System & Process Audit", content: "An examination of operational workflows and IT controls that identifies inefficiencies and control gaps." },
    ],
    whyChoose: [
      { title: "Experienced Multi-Disciplinary Professionals", content: "Expertise across audit, tax, finance, and compliance helps us assess how issues in one area affect another." },
      { title: "Risk-Focused Audit Approach", content: "Each engagement is tailored to the organisation's risk profile and operational realities instead of relying on a standard template." },
      { title: "Practical Recommendations", content: "Reports pair findings with specific actions tied to real processes and realistic implementation." },
      { title: "Independent and Objective Assessments", content: "Professional objectivity is maintained throughout each engagement so clients and stakeholders can trust the findings." },
      { title: "Timely Execution", content: "Engagements are planned carefully, communicated proactively, and delivered to agreed schedules without unnecessary disruption." },
      { title: "Long-term Compliance", content: "Support can continue beyond the report to strengthen governance and compliance processes over time." },
    ],
    faqs: [
      { title: "Why are audit services important for a business?", content: "Audits verify financial records and legal compliance while surfacing operational gaps and increasing confidence for management and external stakeholders." },
      { title: "Is a statutory audit mandatory for every company?", content: "Not for every entity. Requirements depend on entity type, turnover, and applicable regulations, so the specific obligation should be checked under current provisions." },
      { title: "What is the difference between an internal audit and a statutory audit?", content: "A statutory audit is externally mandated and focuses on financial statement accuracy. An internal audit is generally for management and reviews processes, controls, and operational risks." },
      { title: "When is a due diligence audit required?", content: "It is commonly required before a merger, acquisition, investment, or partnership to verify representations and identify risks before commitment." },
      { title: "How often should internal audits be conducted?", content: "Frequency depends on size, industry, and operational risk. Many businesses review annually, while higher-risk or regulated operations may need more frequent audits." },
      { title: "Can audits help improve business processes?", content: "Yes. Process reviews uncover inefficiencies and control gaps where focused changes can improve accuracy and operational discipline." },
    ],
    finalCta: {
      title: "Need Professional Audit Support?",
      description: "Whether you face a statutory deadline, transaction review, or need a closer look at internal controls, our team is ready to help.",
      label: "Speak with our experts",
      href: "/contact",
    },
    seo: {
      title: "Audit & Assurance Services | Adihit Capella",
      description: "Statutory, internal, tax, GST, due diligence, bank, trust, NGO, system, and process audits.",
      keywords: ["audit and assurance", "internal audit", "statutory audit"],
    },
  },
  {
    slug: "gst-services",
    title: "GST Services",
    subtitle: "End-to-end GST compliance, reconciliation, credit management, audit, refund, and notice support.",
    summary:
      "GST compliance extends beyond filing returns. We manage the full cycle accurately so your business stays compliant and your tax position stays clean.",
    overview: [
      "GST touches nearly every transaction, from registration through monthly and quarterly filings, input tax credit matching, e-invoicing, reconciliations, and departmental notices.",
      "Inconsistent handling compounds problems: blocked credits affect working capital, filing mismatches invite scrutiny, and late notice responses can escalate into larger disputes.",
      "We support startups, SMEs, LLPs, and private limited companies with registration, returns, ITC management, audit support, refunds, and notice responses. Filings are reviewed, deadlines tracked, and documentation kept in order.",
      "Better internal GST processes do more than avoid penalties. They improve reporting accuracy, vendor relationships, and visibility into tax obligations.",
    ],
    benefits: ["GST Registration & Amendment", "GST Return Filing", "GST Audit & Reconciliation", "GST Refund Processing", "GST Notice Handling", "Input Tax Credit Advisory", "E-Way Bill & E-Invoice Setup"],
    differentiators: ["Full-cycle GST support", "Reviewed and tracked filings", "Stronger internal processes"],
    promo: { title: "Keep GST compliance accurate and current", description: "Structured routines reduce filing pressure, protect eligible credit, and improve audit readiness.", cta: { label: "Request GST support", href: "/contact" } },
    buildBetter: { title: "Our key services", description: "Practical GST support across registration, recurring compliance, credits, refunds, and departmental communication." },
    accordion: [],
    offerings: [
      { title: "GST Registration & Amendment", content: "We handle new registrations, amendments, and additional-place-of-business filings with complete documentation to reduce departmental queries and approval delays." },
      { title: "GST Return Filing", content: "We manage GSTR-1, GSTR-3B, GSTR-9, and GSTR-9C filings and review outward supplies, tax liabilities, and annual reconciliations before submission." },
      { title: "GST Audit & Reconciliation", content: "We reconcile books and filed returns to identify and resolve inconsistencies before they become audit issues." },
      { title: "GST Refund Processing", content: "For exporters and inverted-duty businesses, we prepare applications and supporting documents and follow refund claims toward resolution." },
      { title: "GST Notice Handling", content: "We review notices, assess the compliance position, and prepare factual responses within the required deadline." },
      { title: "Input Tax Credit (ITC) Advisory", content: "We review eligibility, flag credit at risk from vendor non-compliance, and support the documentation needed to defend claims." },
      { title: "E-Way Bill & E-Invoice Setup", content: "We implement compliant e-way bill and e-invoicing processes that reduce transaction errors and align digital records with GST requirements." },
    ],
    whyChoose: [
      { title: "Practical GST Expertise", content: "Detailed GST rules are translated into workable day-to-day steps with clear explanations of what is required and why." },
      { title: "End-to-End Compliance Support", content: "One team handles the entire GST compliance cycle so responsibilities do not fall between multiple advisors." },
      { title: "Timely and Accurate Execution", content: "Deadlines are tracked and submissions reviewed before filing, reducing avoidable issues." },
      { title: "Process-Driven Approach", content: "Repeatable monthly routines reduce filing-cycle pressure and make annual reviews less disruptive." },
      { title: "Responsive Professional Support", content: "We monitor changes to rules, formats, and thresholds and flag what matters to your business." },
    ],
    faqs: [
      { title: "Who needs to register under GST?", content: "Businesses above the prescribed turnover threshold generally need registration. Interstate suppliers, e-commerce participants, and notified activities may require registration regardless of turnover." },
      { title: "How often do GST returns need to be filed?", content: "Frequency depends on turnover and scheme. Regular taxpayers commonly file GSTR-1 and GSTR-3B monthly, eligible smaller businesses may use QRMP, and GSTR-9 applies above the relevant threshold." },
      { title: "What are the consequences of late GST filing?", content: "Late fees and interest may apply, repeated delays can invite notices and scrutiny, and filing gaps can affect input tax credit claims." },
      { title: "Why does GST reconciliation matter?", content: "Reconciliation compares purchase records with vendor filings. It identifies missing vendor returns before they affect credit claims or trigger notices." },
      { title: "Can my business claim a GST refund?", content: "A refund may be available where eligible input tax exceeds output tax, subject to documentation, reconciliation, and departmental processing." },
      { title: "What is Input Tax Credit and how does it work?", content: "ITC allows eligible GST paid on purchases to offset GST collected on sales, reducing net tax payable. Valid invoices, vendor compliance, timely filing, and eligibility conditions apply." },
    ],
    finalCta: { title: "Obtain GST Support That Actually Keeps Up!", description: "Whether you need registration, returns, a refund, or help responding to a notice, our team is ready to step in.", label: "Talk to an expert today", href: "/contact" },
    seo: { title: "GST Services | Adihit Capella", description: "GST registration, returns, reconciliation, refunds, notices, ITC, e-way bill, and e-invoice support.", keywords: ["gst return filing", "gst registration", "gst audit"] },
  },
  {
    slug: "income-tax-services",
    title: "Income Tax Services",
    subtitle: "Accurate income tax filing, audit, notice, representation, NRI, and planning support.",
    summary:
      "We help individuals, professionals, NRIs, and businesses manage income tax obligations with accurate filings, practical planning, and clear support.",
    overview: [
      "Income tax compliance involves accurate reporting, deduction documentation, timely submissions, and staying current with regulatory changes. Errors can lead to penalties, interest, and notices.",
      "We work with salaried individuals, professionals, business owners, firms, LLPs, private limited companies, and NRIs, tailoring support to each client's financial position.",
      "Good tax management improves financial visibility, reduces avoidable outgo, and supports planning across capital gains, TDS obligations, and scrutiny matters.",
      "Our team handles documentation, verifies numbers, meets deadlines, and explains what matters in plain terms.",
    ],
    benefits: ["ITR Filing (ITR-1 to ITR-7)", "Tax Audit under Section 44AB", "Capital Gain Tax Advisory", "TDS & TCS Compliance", "Notice Handling & Scrutiny", "Tax Appeal & Representation", "NRI Taxation", "Tax Savings & Investment Planning"],
    differentiators: ["Accuracy-driven review", "Personal tax advisory", "End-to-end support"],
    promo: { title: "Manage tax obligations without guesswork", description: "Technical knowledge and practical execution keep filings, planning, and responses accurate and timely.", cta: { label: "Discuss your tax needs", href: "/contact" } },
    buildBetter: { title: "Key service offerings", description: "Income tax support for routine filings, complex transactions, notices, appeals, and year-round planning." },
    accordion: [],
    offerings: [
      { title: "Income Tax Return Filing (ITR-1 to ITR-7)", content: "We check income reporting, eligible deductions, and required disclosures before filing the appropriate return." },
      { title: "Tax Audit under Section 44AB", content: "We manage audits for businesses and professionals crossing prescribed turnover or receipt limits and complete submissions under Section 44AB." },
      { title: "Capital Gain Tax Advisory", content: "We advise on tax rates and available exemptions under Sections 54, 54F, and 54EC for property, equity, and business-asset transfers." },
      { title: "TDS & TCS Compliance", content: "We support deduction requirements, Form 26AS reconciliation, returns, and certificate issuance to reduce demand-notice risk." },
      { title: "Notice Handling & Scrutiny Cases", content: "We review departmental notices, identify what is required, and prepare supporting documents and factual responses within the stipulated time." },
      { title: "Tax Appeal & Representation", content: "We prepare submissions, attend hearings, and manage communication before CIT(A) and other relevant appellate authorities." },
      { title: "NRI Taxation", content: "We assist with taxability assessment, returns, Schedule FA foreign-asset disclosures, and repatriation-related compliance." },
      { title: "Tax Savings & Investment Planning", content: "We identify lawful deductions and exemptions, including relevant Chapter VI-A provisions, and structure planning across the financial year." },
    ],
    whyChoose: [
      { title: "Experienced Tax Professionals", content: "Experience across individual, business, and NRI taxation helps with situations that do not fit neatly into one category." },
      { title: "Accuracy-Driven Approach", content: "Returns, documents, and computations are reviewed before submission to catch issues early." },
      { title: "End-to-End Tax Support", content: "One team handles connected tax requirements with context carried throughout the year." },
      { title: "Timely Compliance Management", content: "Fixed deadlines are tracked so filings are completed on time." },
      { title: "Personal Advisory", content: "Advice is tailored to the client's actual tax profile instead of generic recommendations." },
      { title: "Transparent Communication", content: "We explain requirements and recommendations directly, without unnecessary jargon." },
    ],
    faqs: [
      { title: "Who needs to file an Income Tax Return in India?", content: "Individuals above the applicable exemption limit generally must file. Businesses, LLPs, companies, people with foreign assets or specified high-value transactions, and some refund claimants may also need to file regardless of taxable income." },
      { title: "What happens if I miss the income tax filing deadline?", content: "Interest under Section 234A and a late-filing fee under Section 234F may apply, and certain business or capital losses may no longer be carried forward." },
      { title: "When is a tax audit under Section 44AB applicable?", content: "Applicability depends on current turnover or receipt thresholds, transaction modes, and presumptive-tax provisions. The requirements should be checked for the relevant financial year." },
      { title: "Can Adihit Capella help if I receive an income tax notice?", content: "Yes. We identify the issuing section, assess what is requested, and prepare an appropriate response. Prompt handling usually prevents avoidable complications." },
      { title: "Do NRIs need to file an income tax return in India?", content: "NRIs generally need to file when taxable India-sourced income exceeds the applicable exemption limit, subject to the income type and residential status for that year." },
      { title: "How does tax planning reduce my liability?", content: "Tax planning uses lawful deductions and exemptions, such as eligible Chapter VI-A deductions and capital-gain reinvestment provisions, and is most effective when started early in the financial year." },
    ],
    finalCta: { title: "Need Professional Income Tax Support?", description: "For return filing, tax audits, notice responses, NRI compliance, or year-round planning, tell us what you need and we will take it from there.", label: "Book a consultation", href: "/contact" },
    seo: { title: "Income Tax Services | Adihit Capella", description: "ITR filing, tax audits, capital gains, TDS and TCS, notices, appeals, NRI taxation, and tax planning.", keywords: ["income tax services", "tax advisory", "itr filing"] },
  },
  {
    slug: "legal-services",
    title: "Legal Services",
    subtitle: "Practical corporate, commercial, regulatory, transaction, and dispute-related legal support.",
    summary:
      "Legal issues are less costly when addressed early. We help businesses reduce exposure, strengthen governance, and act with clarity across legal and regulatory matters.",
    overview: [
      "Legal requirements appear in contracts, transactions, notices, and disputes. The real advantage is having the right guidance before a problem escalates.",
      "We work with startups, SMEs, and established companies across contracts, corporate transactions, employment and labour compliance, intellectual property, regulatory notices, and dispute resolution.",
      "Legal advisory should not be purely reactive. Stronger governance, better documentation, and early attention to compliance gaps can prevent costly disputes.",
      "Restructuring, acquisitions, ownership changes, and expansion carry legal obligations. We support these transitions with guidance that considers the broader business picture.",
    ],
    benefits: ["Litigation and Arbitration", "Mergers and Acquisitions", "Taxation", "Dispute Resolution", "Corporate and Commercial Law", "Employment, Labour and Benefits", "Real Estate", "Intellectual Property", "Banking and NBFC Advisory", "Privacy and Data Protection", "White Collar Crime Advisory", "Corporate Restructuring", "Notice of Intimation"],
    differentiators: ["Business-focused advice", "Multi-disciplinary support", "Long-term risk management"],
    promo: { title: "Act early on legal and regulatory risk", description: "Practical legal guidance helps businesses protect their position while continuing to pursue commercial objectives.", cta: { label: "Discuss a legal matter", href: "/contact" } },
    buildBetter: { title: "Our key offerings", description: "Integrated legal support for operations, transactions, governance, regulatory communication, and disputes." },
    accordion: [],
    offerings: [
      { title: "Litigation and Arbitration", content: "We provide strategic support for commercial litigation and arbitration with a focus on protecting your position and limiting exposure." },
      { title: "Mergers and Acquisitions", content: "We support due diligence, transaction structuring, documentation, negotiation, closing, and post-transaction compliance." },
      { title: "Taxation", content: "We advise on tax-related legal matters and help businesses respond to assessment proceedings and authorities with well-prepared positions." },
      { title: "Dispute Resolution", content: "We help resolve contractual, commercial, and shareholder conflicts through negotiation, mediation, or arbitration where practical." },
      { title: "Corporate and Commercial Law", content: "We draft, review, and negotiate commercial agreements with clear, enforceable terms and appropriate risk allocation." },
      { title: "Employment, Labour and Benefits", content: "We support employment contracts, workplace policies, labour compliance, and dispute resolution for businesses at different stages." },
      { title: "Real Estate", content: "We assist with title verification, due diligence, lease structuring, development agreements, and regulatory compliance for commercial and residential matters." },
      { title: "Intellectual Property", content: "We handle trademark registration, copyright protection, patent filing, licensing arrangements, and infringement matters." },
      { title: "Banking and NBFC Advisory", content: "We provide legal support for loan agreements, financial documentation, and regulatory compliance for banks and non-banking financial companies." },
      { title: "Privacy and Data Protection", content: "We advise on privacy governance, information security compliance, data-handling obligations, and the operational impact of India's evolving framework." },
      { title: "White Collar Crime Advisory", content: "We provide discreet strategic advice for regulatory investigations, fraud-related inquiries, and compliance-breach proceedings." },
      { title: "Corporate Restructuring", content: "We guide restructuring decisions and ensure each step is documented, compliant, and aligned with long-term business goals." },
      { title: "Notice of Intimation", content: "We review statutory notices and regulatory communications and prepare timely, well-structured replies that protect client interests." },
    ],
    whyChoose: [
      { title: "Business-Focused Legal Approach", content: "Advice is structured around commercial objectives and the way the business actually operates." },
      { title: "Multi-Disciplinary Support", content: "Legal, tax, finance, and compliance expertise is coordinated so connected issues are handled as a whole." },
      { title: "Risk Management and Compliance Focus", content: "We identify exposure early through stronger governance and timely regulatory attention." },
      { title: "Timely and Accurate Execution", content: "Hard deadlines are handled promptly and accurately without unnecessary operational delay." },
      { title: "Long-Term Strategic Planning", content: "We aim to remain a consistent professional resource that strengthens legal foundations before problems arise." },
    ],
    faqs: [
      { title: "What types of businesses do you work with?", content: "We work with startups, private limited companies, LLPs, family businesses, and regulated entities across a broad range of legal obligations." },
      { title: "Do you assist with contract drafting and review?", content: "Yes. We draft, review, and negotiate business documents and agreements with a focus on clarity, enforceability, and appropriate risk allocation." },
      { title: "Can you help respond to legal notices from regulators?", content: "Yes. We assess the legal position and prepare accurate, well-structured responses within the required timeline." },
      { title: "Do you provide support for mergers and acquisitions?", content: "Yes. We support due diligence, structuring, documentation, negotiation, closing, and post-closing compliance, coordinating with tax advisors where required." },
      { title: "What is the benefit of ongoing legal advisory rather than one-time support?", content: "Ongoing support builds familiarity with the business, making it easier to identify risks early and provide more relevant, cost-effective guidance." },
      { title: "Can disputes be resolved without going to court?", content: "Often, yes. Negotiation, mediation, and arbitration can be faster, less expensive, and more predictable than litigation when appropriate." },
    ],
    finalCta: { title: "Get the Right Legal Support for Your Business", description: "Adihit Capella can help with contracts, regulatory notices, transactions, and disputes. Speak with our team for a clear view of where you stand and what should happen next.", label: "Talk to an expert today", href: "/contact" },
    seo: { title: "Legal Services | Adihit Capella", description: "Corporate, commercial, M&A, disputes, employment, real estate, IP, privacy, banking, restructuring, and regulatory legal support.", keywords: ["legal consultancy", "corporate legal", "dispute resolution"] },
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
