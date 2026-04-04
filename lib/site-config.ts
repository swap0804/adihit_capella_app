import type { ChatQuickAction, NavItem, OfficeLocation } from "@/lib/types";
import { BASE_PATH } from "@/lib/routing";

export const siteConfig = {
  name: "Adihit Capella",
  legalName: "Adihit Capella Advisory & Legal Consultants",
  description:
    "SEO-first legal, tax, finance, and audit consultancy website for Adihit Capella with a futuristic corporate design.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.adihitcapella.com",
  basePath: BASE_PATH,
  defaultKeywords: [
    "adihit capella",
    "adihit capella ca firm",
    "ca firm",
    "consultancy",
    "legal consultancy",
    "finance advisory",
    "gst services",
    "audit and assurance",
    "tax advisory",
    "startup compliance",
    "corporate legal services",
  ],
  searchIndex: false,
  phone: "+91 91440 02997",
  email: "hello@adihitcapella.com",
  whatsapp: "919144002997",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  navItems: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Resources", href: "/resources" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ] satisfies NavItem[],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Sitemap", href: "/sitemap-page" },
  ],
  officeLocations: [
    {
      city: "Nagpur",
      address:
        "Placeholder Office Address, Corporate Square, Business District, Nagpur, Maharashtra, India",
      phone: "+91 91440 01234",
      email: "nagpur@adihitcapella.com",
    },
  ] satisfies OfficeLocation[],
  chatQuickActions: [
    {
      label: "Services",
      href: "/services",
      description: "Explore tax, audit, legal, and finance offerings.",
    },
    {
      label: "Careers",
      href: "/careers",
      description: "Review openings, articleship tracks, and culture.",
    },
    {
      label: "Feedback",
      href: "/contact",
      description: "Send your requirement or feedback to the team.",
    },
  ] satisfies ChatQuickAction[],
};
