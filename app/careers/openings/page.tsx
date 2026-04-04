import { PageHero } from "@/components/page-hero";
import { JobBoard } from "@/components/job-board";
import { createMetadata } from "@/lib/seo";
import { careerOpenings } from "@/lib/content";

export const metadata = createMetadata({
  title: "Career Openings",
  description:
    "Search and filter Adihit Capella job openings by location, department, job type, and work style.",
  path: "/careers/openings",
});

export default function CareerOpeningsPage() {
  return (
    <>
      <PageHero
        eyebrow="Current openings"
        title="Searchable job listings with filter controls, ready for real hiring workflows later."
        description="The board below is local-data driven for now, which keeps it fast, static-friendly, and easy to edit until a real recruitment backend is needed."
        cta={{ label: "Apply via contact", href: "/contact" }}
        secondaryCta={{ label: "Back to careers", href: "/careers" }}
        mediaLabel="Career openings banner"
      />

      <JobBoard jobs={careerOpenings} />
    </>
  );
}
