import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import { residentialProjects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Residential Projects",
  description: `Custom homes and residential renovations built by ${siteConfig.name} in ${siteConfig.region}.`,
};

const heroImage = residentialProjects[2].heroImage;

export default function ResidentialPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Residential"
        title="Homes built for the way you actually live."
        description="From hillside new builds to considered additions, every residential project starts with the same question: what does this family need in twenty years, not just this one."
        height="medium"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Residential projects"
          className="mb-14"
        />
        <ProjectGrid projects={residentialProjects} />
      </section>
    </>
  );
}
