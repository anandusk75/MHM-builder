import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { residentialProjects, getProjectBySlug, getAdjacentProject } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return residentialProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug("residential", slug);
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

export default async function ResidentialProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug("residential", slug);
  if (!project) notFound();

  const nextProject = getAdjacentProject("residential", slug);

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
