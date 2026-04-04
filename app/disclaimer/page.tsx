import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description: "Placeholder disclaimer page for Adihit Capella.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        centered
        eyebrow="Disclaimer"
        title="A dedicated disclaimer page for advisory, informational, and liability notices."
        description="Replace this placeholder with the final disclaimer language approved by your team."
      />
      <section className="section-shell">
        <Reveal>
          <div className="surface-card p-6 md:p-8">
            <div className="grid gap-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                Use this page to clarify that website content is informational,
                may not constitute legal or tax advice, and may require direct
                professional consultation.
              </p>
              <p>
                This route is in place now so the footer remains complete and SEO
                structure stays production-friendly.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
