import IndustryCard from "@/components/IndustryCard";
import SectionHeading from "@/components/SectionHeading";
import { projectTypes } from "@/data/machinery";
import type { Dict } from "@/i18n/en";
import type { Lang } from "@/types";

export function IndustryGrid({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <div>
      <SectionHeading dark eyebrow={t.industries.eyebrow} title={t.industries.title} intro={t.industries.intro} />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectTypes.map((p) => (<li key={p.slug}><IndustryCard item={p} lang={lang} /></li>))}
      </ul>
    </div>
  );
}
