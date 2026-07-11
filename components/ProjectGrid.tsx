import type { Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={0.05 * (i % 3)}>
          <ProjectCard project={project} priority={i === 0} />
        </Reveal>
      ))}
    </div>
  );
}
