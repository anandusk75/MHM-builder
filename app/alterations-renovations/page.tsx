import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ImageGallery from "@/components/ImageGallery";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { renovationProcess, renovationGallery, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Alterations & Renovations",
  description: `Additions, alterations, and whole-home renovations from ${siteConfig.name}, built around the home you already have.`,
};

const heroImage = renovationGallery[0];

export default function AlterationsRenovationsPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Alterations & Renovations"
        title="The best addition respects what's already there."
        description="Kitchens, additions, whole-home renovations — we work around the parts of your home worth keeping, and rebuild the rest properly."
        height="medium"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The Offering"
              title="Renovation work most builders turn down."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>
                Renovations are harder than new builds — you&apos;re building around
                someone&apos;s daily life, and around a structure whose history is never
                fully on the drawings. {siteConfig.shortName} runs a dedicated renovations crew rather than
                rotating new-build teams through remodel work, because the two disciplines
                reward different instincts.
              </p>
              <p>
                We take on everything from single-room kitchen and bathroom remodels to
                full second-storey additions and structural reconfigurations, always
                starting with an honest read of what the existing building can support.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end">
            <CTAButton href="/contact" variant="solid">
              Start a Conversation
            </CTAButton>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-dim py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="How It Works" title="Our process" className="mb-16" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {renovationProcess.map((step, i) => (
              <Reveal key={step.step} delay={0.05 * i}>
                <span className="font-display text-3xl text-accent">{step.step}</span>
                <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <SectionHeading eyebrow="Recent Work" title="Renovations gallery" className="mb-12" />
        <Reveal>
          <ImageGallery images={renovationGallery} />
        </Reveal>
      </section>
    </>
  );
}
