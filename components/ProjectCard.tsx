import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/${project.category}/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-dim">
        <Image
          src={project.cardImage.src}
          alt={project.cardImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.summary}</p>
        </div>
        <span className="mt-1 shrink-0 text-sm text-steel opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View &rarr;
        </span>
      </div>
    </Link>
  );
}
