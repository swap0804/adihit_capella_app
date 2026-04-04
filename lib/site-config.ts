import type { ChatQuickAction, NavItem, OfficeLocation } from "@/lib/types";

export const siteConfig = {
  name: 'Adihit Capella',
  legalName: 'Adihit Capella Advisory & Legal Consultants',
  description:
    'SEO-first legal, tax, finance, and audit consultancy website for Adihit Capella with a futuristic corporate design.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.adihitcapella.com',
  defaultKeywords: [
    'adihit capella',
    'adihit capella ca firm',
    'ca firm',
    'consultancy',
    'legal consultancy',
    'finance advisory',
    'gst services',
    'audit and assurance',
    'tax advisory',
    'startup compliance',
    'corporate legal services',
  ],
  searchIndex: false,
  phone: '+91 84338 80864',
  email: 'hello@adihitcapella.com',
  whatsapp: '918433880864',
  social: {
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
  navItems: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Resources', href: '/resources' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ] satisfies NavItem[],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Sitemap', href: '/sitemap-page' },
  ],
  officeLocations: [
    {
      city: 'Mumbai',
      address:
        'Kishor Aangan, G10, behind Dominos, Parsik Nagar, Kalwa, Thane, Maharashtra 400605',
      phone: '+91 84338 80864',
      email: 'info@adihitcapella.com',
      mapLabel: 'HP and Associates, Advocates & solicitors',
      mapQuery:
        `place_id:${process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID ||
        'ChIJgd4ftBO_5zsRwTlWEoEdF1A'}`,
    },
  ] satisfies OfficeLocation[],
  chatQuickActions: [
    {
      label: 'Services',
      href: '/services',
      description: 'Explore tax, audit, legal, and finance offerings.',
    },
    {
      label: 'Careers',
      href: '/careers',
      description: 'Review openings, articleship tracks, and culture.',
    },
    {
      label: 'Feedback',
      href: '/contact',
      description: 'Send your requirement or feedback to the team.',
    },
  ] satisfies ChatQuickAction[],
};
