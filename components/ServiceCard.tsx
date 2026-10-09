import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import type { Lang } from "@/types";

export default function ServiceCard({ service, lang, cta }: { service: Service; lang: Lang; cta: string }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-steel/20 bg-white transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <Image src={service.image} alt={`${service.title.en} — Sakthi Engineering Works`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-0 top-0 bg-ink px-3 py-2 font-display text-lg font-bold text-accent">{service.number}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold text-ink">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">{service.title[lang]}</Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-steel">{service.short[lang]}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-deep">
          {cta}<ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
