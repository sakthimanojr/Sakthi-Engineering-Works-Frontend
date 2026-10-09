import { backendUrl } from "@/lib/backend";
import { placeholderProjects, type ProjectRecord } from "@/data/projects";

type ApiProject = {
  title: string; slug: string; category: string; location: string | null; description: string;
  date: string | null; featured: boolean; images: { url: string; alt: string }[];
};

/** Reads published projects from the backend. Falls back to clearly-marked placeholders if the backend is unset, down or empty. */
export async function getProjects(): Promise<ProjectRecord[]> {
  const base = backendUrl();
  if (base) {
    try {
      const res = await fetch(`${base}/api/public/projects`, { next: { revalidate: 60 } });
      if (res.ok) {
        const data = (await res.json()) as { projects?: ApiProject[] };
        if (data.projects?.length) return data.projects.map((p) => ({ ...p, placeholder: false }));
      }
    } catch {
      /* use placeholders */
    }
  }
  return placeholderProjects;
}

export async function getProject(slug: string) {
  return (await getProjects()).find((p) => p.slug === slug);
}
