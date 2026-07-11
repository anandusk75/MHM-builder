import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import Testimonial from "@/components/Testimonial";
import Reveal from "@/components/Reveal";
import {
  siteConfig,
  getProjectBySlug,
  featuredProjectSlug,
  featuredProjectCategory,
  homeTestimonial,
  residentialProjects,
  commercialProjects,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

const homeHeroImage = {
  src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&fit=crop",
  alt: "Upward view of a modern glass and steel building against a clear sky",
};

const gridImages = [
  { image: residentialProjects[1].gallery[0], href: `/residential/${residentialProjects[1].slug}` },
  { image: commercialProjects[0].gallery[0], href: `/commercial/${commercialProjects[0].slug}` },
  { image: residentialProjects[2].gallery[1], href: `/residential/${residentialProjects[2].slug}` },
  { image: { src: commercialProjects[1].cardImage.src, alt: commercialProjects[1].cardImage.alt }, href: "/about" },
];

export default function HomePage() {
  const featured = getProjectBySlug(featuredProjectCategory, featuredProjectSlug)!;

  return (
    <>
      <Hero
        image={homeHeroImage}
        title={siteConfig.tagline}
        height="full"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href="/residential" variant="outline">
            Residential Projects
          </CTAButton>
          <CTAButton href="/commercial" variant="outline">
            Commercial Projects
          </CTAButton>
        </div>
      </Hero>

      {/* Intro / positioning */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-3xl leading-snug text-ink sm:text-4xl">
              For more than {new Date().getFullYear() - siteConfig.foundedYear} years,{" "}
              {siteConfig.region} has trusted us to build the homes and buildings they plan
              on keeping for the next fifty.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              Whether you&apos;re a homeowner planning the last renovation you&apos;ll ever
              need, or an architect who needs a builder who reads drawings as carefully as
              you wrote them, {siteConfig.shortName} runs every job the same way: openly,
              on schedule, and built to outlast the warranty.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-between gap-10">
            <dl className="grid grid-cols-3 gap-6 border-t border-line pt-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Founded</dt>
                <dd className="mt-2 font-display text-3xl text-ink">{siteConfig.foundedYear}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Projects</dt>
                <dd className="mt-2 font-display text-3xl text-ink">180+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Sq Ft Built</dt>
                <dd className="mt-2 font-display text-3xl text-ink">1.2M</dd>
              </div>
            </dl>
            <CTAButton href="/about" variant="solid" className="self-start">
              About {siteConfig.shortName}
            </CTAButton>
          </Reveal>
        </div>
      </section>

      {/* Featured project spotlight */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={featured.heroImage.src}
              alt={featured.heroImage.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Featured Project
            </span>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">{featured.title}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {featured.summary}
            </p>
            <Link
              href={`/${featured.category}/${featured.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark"
            >
              View Project &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Editorial photo grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-10">
        <SectionHeading
          eyebrow="Our Work"
          title="A body of work built one relationship at a time."
          className="mb-12"
        />
        <div className="grid gap-4 sm:h-[640px] sm:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:h-full">
            <Link href={gridImages[0].href} className="group block h-full w-full">
              <Image
                src={gridImages[0].image.src}
                alt={gridImages[0].image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:h-full sm:grid-rows-3">
            {gridImages.slice(1).map((item, i) => (
              <Reveal
                key={item.href + i}
                delay={0.05 * (i + 1)}
                className="relative aspect-video overflow-hidden sm:aspect-auto sm:h-full"
              >
                <Link href={item.href} className="group block h-full w-full">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonial testimonial={homeTestimonial} />
    </>
  );
}
