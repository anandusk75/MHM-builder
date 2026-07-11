import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig, careerOptions, residentialProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Join the Team",
  description: `Careers at ${siteConfig.name} — join a crew building residential and commercial projects across ${siteConfig.region}.`,
};

const heroImage = residentialProjects[2].heroImage;

export default function JoinTheTeamPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Careers"
        title="Build something you'd point to in twenty years."
        description="We're always looking for tradespeople, project managers, and site staff who take the same pride in the work that we do."
        height="medium"
      />

      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Working Here"
            title="What it's like on an Ironwood crew"
          />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              We keep crews small enough that everyone on site knows the whole scope, not
              just their piece of it. Project managers are expected to be on site, not just
              in meetings, and every apprentice is paired with a journeyman who&apos;s expected to
              teach, not just supervise.
            </p>
            <p>
              Tell us a bit about yourself below — whether you&apos;re applying for a
              specific opening or just want to be first in line when one comes up.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32 lg:px-10">
        <Reveal>
          <ContactForm projectTypeLabel="Position of Interest" projectTypeOptions={careerOptions} />
        </Reveal>
      </section>
    </>
  );
}
