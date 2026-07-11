import type { MetadataRoute } from "next";
import { residentialProjects, commercialProjects, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/residential",
    "/commercial",
    "/alterations-renovations",
    "/about",
    "/contact",
    "/join-the-team",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = [...residentialProjects, ...commercialProjects].map((project) => ({
    url: `${siteConfig.url}/${project.category}/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
