import { Icon } from "@/components/icons";
import type { Machine } from "@/data/machinery";
import type { Lang } from "@/types";

export default function MachineryCard({ machine, lang, index }: { machine: Machine; lang: Lang; index: number }) {
  return (
    <article className="group relative flex items-center gap-3 border border-steel/15 bg-white p-2.5 transition-all hover:border-accent hover:shadow-xs sm:p-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-mist text-accent-deep transition-colors group-hover:bg-accent group-hover:text-ink">
        <Icon name={machine.icon} size={16} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-1">
          <h3 className="truncate font-display text-xs font-bold text-ink sm:text-sm">{machine.name[lang]}</h3>
          <span aria-hidden className="shrink-0 font-display text-[10px] font-bold text-steel/30">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p className="truncate text-[11px] text-steel">{machine.note[lang]}</p>
      </div>
    </article>
  );
}
