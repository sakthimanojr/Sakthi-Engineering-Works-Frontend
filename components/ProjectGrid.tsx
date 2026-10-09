import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import type { ProjectRecord } from "@/data/projects";
import type { Dict } from "@/i18n/en";
import type { Lang } from "@/types";

export default function ProjectGrid({ projects, lang, t }: { projects: ProjectRecord[]; lang: Lang; t: Dict }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (<li key={p.slug}><Reveal delay={(i % 3) * 80}><ProjectCard project={p} lang={lang} t={t} /></Reveal></li>))}
    </ul>
  );
}
