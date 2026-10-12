import { Icon } from "@/components/icons";
import type { Machine } from "@/data/machinery";
import type { Lang } from "@/types";

export default function MachineryCard({ machine, lang, index }: { machine: Machine; lang: Lang; index: number }) {
  return (
    <article className="relative h-full border border-steel/20 bg-white p-4 transition-shadow hover:shadow-lg sm:p-6">
      <span aria-hidden className="absolute right-4 top-3 font-display text-3xl font-bold text-steel/15">{String(index + 1).padStart(2, "0")}</span>
      <Icon name={machine.icon} size={32} className="text-accent-deep" />
      <h3 className="mt-4 font-display text-base font-bold text-ink sm:text-xl">{machine.name[lang]}</h3>
      <p className="mt-2 text-steel">{machine.note[lang]}</p>
    </article>
  );
}
