import { Icon } from "@/components/icons";
import type { ProjectType } from "@/data/machinery";
import type { Lang } from "@/types";

export default function IndustryCard({ item, lang }: { item: ProjectType; lang: Lang }) {
  return (
    <div className="group flex items-center gap-2.5 border border-white/10 bg-white/5 px-3 py-2 text-white transition-all hover:border-accent hover:bg-white/10 sm:px-3.5 sm:py-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-accent transition-transform group-hover:scale-110">
        <Icon name={item.icon} size={15} />
      </span>
      <span className="truncate font-display text-xs font-medium text-mist transition-colors group-hover:text-white sm:text-sm">
        {item.name[lang]}
      </span>
    </div>
  );
}
