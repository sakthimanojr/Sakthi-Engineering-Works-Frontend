import { Icon } from "@/components/icons";
import type { ProjectType } from "@/data/machinery";
import type { Lang } from "@/types";

export default function IndustryCard({ item, lang }: { item: ProjectType; lang: Lang }) {
  return (
    <div className="flex items-center gap-3 border border-white/15 bg-coal p-3 text-white sm:gap-4 sm:p-5">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-accent text-accent sm:h-12 sm:w-12"><Icon name={item.icon} size={20} /></span>
      <span className="font-display text-base font-semibold leading-tight sm:text-xl">{item.name[lang]}</span>
    </div>
  );
}
