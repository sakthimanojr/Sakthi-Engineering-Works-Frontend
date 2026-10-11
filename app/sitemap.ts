import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPaths = ["", "/about", "/services", "/facilities", "/contact", "/quote", "/privacy", "/terms"];
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
