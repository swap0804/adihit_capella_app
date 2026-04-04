import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Placeholder terms and conditions page for Adihit Capella.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        centered
        eyebrow="Terms & conditions"
        title="A structured legal page for website usage and service-related terms."
        description="Replace this placeholder text with the final legal language approved for your site."
      />
      <section className="section-shell">
        <Reveal>
          <div className="surface-card p-6 md:p-8">
            <div className="grid gap-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                Use this page for website usage terms, disclaimers on advisory
                information, liabilities, and governing law.
              </p>
              <p>
                Keeping the route in place now ensures the footer and sitemap are
                complete even before final legal review is finished.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
