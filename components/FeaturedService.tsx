import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import type { Lang } from "@/types";

export default function FeaturedService({ service, lang, cta, coverUrl }: { service: Service; lang: Lang; cta: string; coverUrl?: string }) {
  const imgSrc = coverUrl || service.image;
  return (
    <article className="group relative isolate flex min-h-[16rem] flex-col justify-end overflow-hidden bg-ink p-4 text-white sm:min-h-[26rem] sm:p-8">
      <Image src={imgSrc} alt={`${service.title.en} — Sakthi Engineering Works`} fill sizes="(min-width:1024px) 33vw, 100vw" className="-z-20 object-cover opacity-70 transition-transform duration-500 group-hover:scale-105" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      <span className="font-display text-2xl font-bold text-accent sm:text-5xl">{service.number}</span>
      <h3 className="mt-1.5 font-display text-lg font-bold sm:mt-2 sm:text-3xl">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">{service.title[lang]}</Link>
      </h3>
      <p className="mt-2 text-sm text-mist/90 sm:mt-3 sm:text-base">{service.short[lang]}</p>
      <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent sm:mt-5 sm:text-sm">{cta}<ArrowRight aria-hidden size={14} className="sm:h-4 sm:w-4" /></span>
    </article>
  );
}
