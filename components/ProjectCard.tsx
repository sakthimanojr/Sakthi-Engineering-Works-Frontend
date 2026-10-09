import Image from "next/image";
import Link from "next/link";
import type { ProjectRecord } from "@/data/projects";
import { getService } from "@/data/services";
import type { Dict } from "@/i18n/en";
import type { Lang } from "@/types";

export default function ProjectCard({ project, lang, t }: { project: ProjectRecord; lang: Lang; t: Dict }) {
  const img = project.images[0];
  const category = getService(project.category)?.title[lang];
  return (
    <article className="group relative overflow-hidden border border-white/15 bg-coal text-white">
      <div className="relative aspect-[4/3] bg-ink">
        {img && <Image src={img.url} alt={img.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />}
        {project.placeholder && <span className="absolute left-0 top-0 bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">{t.projects.badge}</span>}
      </div>
      <div className="p-6">
        {category && <p className="text-sm font-semibold uppercase tracking-wider text-accent">{category}</p>}
        <h3 className="mt-2 font-display text-2xl font-bold">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">{project.placeholder ? t.projects.comingSoon : project.title}</Link>
        </h3>
        {project.location && <p className="mt-2 text-mist/80">{project.location}</p>}
      </div>
    </article>
  );
}
