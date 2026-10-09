import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/data/services";
import type { Lang } from "@/types";

export default function ServiceGrid({ lang, cta, list = services }: { lang: Lang; cta: string; list?: Service[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <li key={s.slug}><Reveal delay={(i % 3) * 80} className="h-full"><ServiceCard service={s} lang={lang} cta={cta} /></Reveal></li>
      ))}
    </ul>
  );
}
