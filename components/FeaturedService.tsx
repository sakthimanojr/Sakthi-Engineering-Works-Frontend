import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import type { Lang } from "@/types";

export default function FeaturedService({ service, lang, cta }: { service: Service; lang: Lang; cta: string }) {
  return (
    <article className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden bg-ink p-6 text-white sm:p-8">
      <Image src={service.image} alt={`${service.title.en} — Sakthi Engineering Works`} fill sizes="(min-width:1024px) 33vw, 100vw" className="-z-20 object-cover opacity-70 transition-transform duration-500 group-hover:scale-105" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
      <span className="font-display text-5xl font-bold text-accent">{service.number}</span>
      <h3 className="mt-2 font-display text-3xl font-bold">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">{service.title[lang]}</Link>
      </h3>
      <p className="mt-3 text-mist/90">{service.short[lang]}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">{cta}<ArrowRight aria-hidden size={16} /></span>
    </article>
  );
}
