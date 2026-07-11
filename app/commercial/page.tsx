import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import { commercialProjects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commercial Projects",
  description: `Ground-up construction, adaptive reuse, and tenant build-outs delivered by ${siteConfig.name} ${siteConfig.serviceArea}.`,
};

const heroImage = commercialProjects[0].heroImage;

export default function CommercialPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Commercial"
        title="Buildings that hold up to daily use."
        description="Offices, adaptive reuse, hospitality, and retail — delivered by crews who treat a commercial schedule as a commitment, not an estimate."
        height="medium"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Commercial projects"
          className="mb-14"
        />
        <ProjectGrid projects={commercialProjects} />
      </section>
    </>
  );
}
