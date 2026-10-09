/**
 * Placeholder project records. NO real project information has been supplied yet.
 * Replace with real records (or connect the Project / ProjectImage tables via Prisma).
 */
export interface ProjectRecord {
  title: string;
  slug: string;
  category: string; // a service slug
  location: string | null;
  description: string;
  images: { url: string; alt: string }[];
  date: string | null;
  featured: boolean;
  placeholder: boolean;
}

export const placeholderProjects: ProjectRecord[] = [
  { title: "Project information coming soon", slug: "project-placeholder-1", category: "structural-sheds-roofing", location: null, description: "PROJECT DETAILS TO BE UPDATED", images: [{ url: "/images/projects/placeholder-1.jpg", alt: "Placeholder: structural shed project photo to be added" }], date: null, featured: true, placeholder: true },
  { title: "Project information coming soon", slug: "project-placeholder-2", category: "peb-buildings", location: null, description: "PROJECT DETAILS TO BE UPDATED", images: [{ url: "/images/projects/placeholder-2.jpg", alt: "Placeholder: PEB building project photo to be added" }], date: null, featured: true, placeholder: true },
  { title: "Project information coming soon", slug: "project-placeholder-3", category: "general-fabrication-works", location: null, description: "PROJECT DETAILS TO BE UPDATED", images: [{ url: "/images/projects/placeholder-3.jpg", alt: "Placeholder: fabrication project photo to be added" }], date: null, featured: false, placeholder: true },
];
