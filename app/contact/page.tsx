import Link from "next/link";
import { MapPin, Phone, Send } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/social-icons";
import { createMetadata } from "@/lib/seo";
import { contactCards } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Adihit Capella for legal, tax, audit, compliance, and finance advisory enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const office = siteConfig.officeLocations[0];

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="A polished contact funnel for business enquiries, hiring conversations, and quick support."
        description="This page keeps every contact pathway visible: enquiry form, phone, WhatsApp, social links, office location, and careers direction."
        cta={{ label: "Call now", href: `tel:${siteConfig.phone.replace(/\s+/g, "")}` }}
        secondaryCta={{ label: "WhatsApp us", href: `https://wa.me/${siteConfig.whatsapp}` }}
        mediaLabel="Contact banner"
      />

      <section className="section-shell">
        <div className="grid gap-4 md:grid-cols-2">
          {contactCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <Link href={card.cta.href} className="surface-card block h-full p-5">
                <PlaceholderMedia
                  label={card.title}
                  detail="Replace this placeholder with a support or careers image later."
                  heightClassName="min-h-[210px]"
                />
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {card.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="hero-grid items-start">
          <Reveal>
            <div className="surface-card h-full p-6 md:p-8">
              <SectionHeading
                eyebrow="Get in touch"
                title="Place your final contact messaging, support note, or office introduction here."
                description="The left panel follows the reference structure and stays flexible for your real text later."
              />
              <div className="grid gap-4 text-sm text-[var(--muted)]">
                <div className="surface-card-muted flex items-start gap-3 p-4">
                  <Phone className="mt-1 h-4 w-4 text-[var(--brand)]" />
                  <span>{siteConfig.phone}</span>
                </div>
                <div className="surface-card-muted flex items-start gap-3 p-4">
                  <Send className="mt-1 h-4 w-4 text-[var(--brand)]" />
                  <span>{siteConfig.email}</span>
                </div>
                <div className="surface-card-muted flex items-start gap-3 p-4">
                  <MapPin className="mt-1 h-4 w-4 text-[var(--brand)]" />
                  <span>{office?.address}</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="surface-card p-6 md:p-8">
              <SectionHeading
                eyebrow="Enquiry form"
                title="A reusable form layout ready for backend wiring later."
                description="For now the form shows a demo success state. You can later connect it to email, CRM, or WhatsApp workflows."
              />
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Office location"
          title="A dedicated slot for the office map, building photo, or location visual."
          description="Swap this placeholder with a live map, custom map graphic, or office exterior once assets are ready."
        />
        <PlaceholderMedia
          label="Office location map"
          detail="Map, office photo, or landmark visual placeholder"
          heightClassName="min-h-[360px]"
        />
      </section>

      <section className="section-shell pt-0">
        <SectionHeading
          eyebrow="Social media"
          title="Make it easy for visitors to connect with the firm across platforms."
          description="These links are wired to placeholder profiles now and can be updated later from the global site config."
        />
        <div className="flex flex-wrap gap-3">
          <Link
            href={siteConfig.social.linkedin}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </Link>
          <Link
            href={siteConfig.social.instagram}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </Link>
          <Link
            href={siteConfig.social.facebook}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(151,201,255,0.18)] px-4 py-3 transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            <FacebookIcon className="h-4 w-4" />
            Facebook
          </Link>
        </div>
      </section>
    </>
  );
}
