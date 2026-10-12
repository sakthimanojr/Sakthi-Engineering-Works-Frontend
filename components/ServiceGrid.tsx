import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/data/services";
import { getServiceCovers } from "@/lib/covers";
import type { Lang } from "@/types";

export default async function ServiceGrid({ lang, cta, list = services }: { lang: Lang; cta: string; list?: Service[] }) {
  const covers = await getServiceCovers();
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {list.map((s, i) => {
        const cover = covers.get(s.slug);
        return (
          <li key={s.slug}>
            <Reveal delay={(i % 3) * 80} className="h-full">
              <ServiceCard service={s} lang={lang} cta={cta} coverUrl={cover?.url} />
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
