import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { commercialProjects, getProjectBySlug, getAdjacentProject } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return commercialProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug("commercial", slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.heroImage.src }],
    },
  };
}

export default async function CommercialProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug("commercial", slug);
  if (!project) notFound();

  const nextProject = getAdjacentProject("commercial", slug);

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
