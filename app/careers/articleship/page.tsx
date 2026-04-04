import { PageHero } from "@/components/page-hero";
import { JobBoard } from "@/components/job-board";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { careerOpenings } from "@/lib/content";

export const metadata = createMetadata({
  title: "Articleship",
  description:
    "Explore articleship opportunities at Adihit Capella with role listings, learning exposure, and growth-focused culture details.",
  path: "/careers/articleship",
});

export default function ArticleshipPage() {
  const articleshipJobs = careerOpenings.filter((job) =>
    ["Articleship", "Internship"].includes(job.jobType),
  );

  return (
    <>
      <PageHero
        eyebrow="Articleship"
        title="Explore a career with us through practical exposure, mentorship, and structured growth."
        description="This page keeps the reference feel of a focused opportunity funnel while staying easy to update later."
        cta={{ label: "View openings", href: "/careers/openings" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        mediaLabel="Articleship hero collage"
      />

      <section className="section-shell">
        <div className="hero-grid items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Articleship track"
              title="Use this section to explain training, assignments, learning structure, and exposure."
              description="The copy can later describe who the program is for, what candidates will work on, and how mentorship happens."
            />
            <div className="grid gap-4">
              <div className="surface-card-muted p-4 text-sm leading-7 text-[var(--muted)]">
                Exposure across audit, tax, finance, and compliance workflows.
              </div>
              <div className="surface-card-muted p-4 text-sm leading-7 text-[var(--muted)]">
                Real client communication and practical execution support.
              </div>
              <div className="surface-card-muted p-4 text-sm leading-7 text-[var(--muted)]">
                Space for final onboarding notes, expectations, and process steps.
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <PlaceholderMedia
              label="Articleship culture visual"
              detail="Replace with a student-focused banner, office life visual, or training collage."
              heightClassName="min-h-[380px]"
            />
          </Reveal>
        </div>
      </section>

      <JobBoard
        jobs={articleshipJobs}
        title="Articleship and internship opportunities"
        description="Search and filter the student-focused roles below. Add or update opportunities in the local data file as your hiring needs change."
      />
    </>
  );
}
