import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig, projectTypeOptions, commercialProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} about a residential or commercial project ${siteConfig.serviceArea}.`,
};

const heroImage = commercialProjects[3].heroImage;

export default function ContactPage() {
  return (
    <>
      <Hero
        image={heroImage}
        eyebrow="Contact"
        title="Tell us about the project."
        height="medium"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[3fr_2fr] lg:gap-24">
          <Reveal>
            <SectionHeading eyebrow="Get In Touch" title="Send us a message" className="mb-10" />
            <ContactForm projectTypeOptions={projectTypeOptions} />
          </Reveal>

          <Reveal delay={0.1} className="space-y-10">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted">Phone</h3>
              <a href={siteConfig.phoneHref} className="mt-2 block text-lg text-ink hover:text-accent">
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted">Email</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-lg text-ink hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted">Office</h3>
              <p className="mt-2 text-lg text-ink">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
