import { Icon } from "@/components/icons";
import type { ProjectType } from "@/data/machinery";
import type { Lang } from "@/types";

export default function IndustryCard({ item, lang }: { item: ProjectType; lang: Lang }) {
  return (
    <div className="flex items-center gap-4 border border-white/15 bg-coal p-5 text-white">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent text-accent"><Icon name={item.icon} size={24} /></span>
      <span className="font-display text-xl font-semibold leading-tight">{item.name[lang]}</span>
    </div>
  );
}
