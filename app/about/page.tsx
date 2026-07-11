import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { values, team, certifications, siteConfig, residentialProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `The story, values, and people behind ${siteConfig.name} in ${siteConfig.region}.`,
};

const heroImage = residentialProjects[3].heroImage;
const yearsInBusiness = new Date().getFullYear() - siteConfig.foundedYear;

export default function AboutPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="About Us"
        title="Built on relationships, not just buildings."
        height="medium"
      />

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="Our Story" title={`${yearsInBusiness} years in ${siteConfig.region}`} />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              {siteConfig.name} started in {siteConfig.foundedYear} as a two-person crew
              taking on kitchen remodels around {siteConfig.region}. The work changed —
              we now run ground-up commercial builds alongside custom homes — but the
              reason clients called us back never did: we say what a job will cost and
              when it will finish, and then we hit both numbers.
            </p>
            <p>
              Today that means a full-time staff of project managers, superintendents,
              and estimators, plus long-standing relationships with the same
              subcontractors and architects we&apos;ve built alongside for years. We&apos;re
              still small enough that the person who quotes your job is the person who
              answers the phone when it&apos;s finished.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-paper-dim py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="What We Value" title="Three things we don't compromise on" className="mb-16" />
          <div className="grid gap-10 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={0.1 * i}>
                <span className="font-display text-5xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <SectionHeading eyebrow="Our People" title="The team on site" className="mb-16" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.05 * i}>
              <div className="relative aspect-square overflow-hidden bg-paper-dim">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">{member.name}</h3>
              <p className="text-sm text-muted">{member.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Health & Safety / Certifications */}
      <section className="border-t border-line bg-paper-dim py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Health & Safety"
            title="Certifications & standards"
            description="Every site runs to the same safety program, regardless of project size."
            className="mb-12"
          />
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-line pt-4 text-sm text-ink"
                >
                  <span aria-hidden className="mt-1 text-accent">
                    &#9635;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
