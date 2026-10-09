import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { getProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPaths = ["", "/about", "/services", "/projects", "/facilities", "/gallery", "/contact", "/quote", "/privacy", "/terms"];
  const projects = (await getProjects()).filter((p) => !p.placeholder);
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
