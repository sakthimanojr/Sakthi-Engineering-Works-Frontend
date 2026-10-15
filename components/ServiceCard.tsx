import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import type { Lang } from "@/types";

export default function ServiceCard({
  service,
  lang,
  cta,
  coverUrl,
  coverTitle,
  coverDesc,
}: {
  service: Service;
  lang: Lang;
  cta: string;
  coverUrl?: string;
  coverTitle?: string;
  coverDesc?: string;
}) {
  const imgSrc = coverUrl || service.image;
  const displayTitle = coverTitle || service.title[lang];
  const displayShort = coverDesc || service.short[lang];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-steel/20 bg-white transition-shadow hover:shadow-xl">
      <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden bg-ink">
        <Image src={imgSrc} alt={`${displayTitle} — Sakthi Engineering Works`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-0 top-0 bg-ink px-2.5 py-1.5 font-display text-base font-bold text-accent sm:px-3 sm:py-2 sm:text-lg">{service.number}</span>
        {coverUrl && <span className="absolute right-2 top-2 bg-accent/90 px-1.5 py-0.5 text-[10px] font-bold uppercase text-ink">Live</span>}
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <h3 className="font-display text-sm font-bold text-ink sm:text-lg">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">{displayTitle}</Link>
        </h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-steel sm:mt-2 sm:text-sm">{displayShort}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-deep sm:mt-4">
          {cta}<ArrowRight aria-hidden size={12} className="transition-transform group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
        </span>
      </div>
    </article>
  );
}
