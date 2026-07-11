import Link from "next/link";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Reveal from "@/components/Reveal";
import type { Project } from "@/lib/data";

interface ProjectDetailProps {
  project: Project;
  nextProject: Project;
}

const categoryLabel: Record<Project["category"], string> = {
  residential: "Residential",
  commercial: "Commercial",
};

export default function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  return (
    <>
      <Hero
        image={project.heroImage}
        eyebrow={`${categoryLabel[project.category]} — ${project.location}`}
        title={project.title}
        height="large"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
          <Reveal className="space-y-6">
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Location</dt>
                <dd className="mt-2 text-ink">{project.location}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Duration</dt>
                <dd className="mt-2 text-ink">{project.duration}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Architect</dt>
                <dd className="mt-2 text-ink">{project.architect}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Year</dt>
                <dd className="mt-2 text-ink">{project.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-xs uppercase tracking-widest text-muted">Scope</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-10">
        <Reveal>
          <ImageGallery images={project.gallery} />
        </Reveal>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <Link
          href={`/${nextProject.category}/${nextProject.slug}`}
          className="group mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-16 sm:flex-row sm:items-center lg:px-10"
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted">
              Next Project
            </span>
            <h3 className="mt-2 font-display text-3xl text-ink transition-colors group-hover:text-accent">
              {nextProject.title}
            </h3>
          </div>
          <span className="text-sm font-medium text-accent">View Project &rarr;</span>
        </Link>
      </section>
    </>
  );
}
