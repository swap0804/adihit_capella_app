import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Placeholder privacy policy page for Adihit Capella.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        centered
        eyebrow="Privacy policy"
        title="A placeholder-ready legal page for privacy and data use disclosures."
        description="Replace this content with your final policy text, processing disclosures, and consent details."
      />
      <section className="section-shell">
        <Reveal>
          <div className="surface-card p-6 md:p-8">
            <div className="grid gap-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                This placeholder page is included so footer links remain complete
                during the initial build. Add your final privacy policy later.
              </p>
              <p>
                Recommended future sections: information collected, how it is
                used, cookies, contact details, storage, and user rights.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
