"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { useI18n } from "@/components/I18nProvider";
import GalleryLightbox from "@/components/GalleryLightbox";
import { galleryCategories } from "@/data/gallery-categories";

export interface GalleryEntry { src: string; category: string; placeholder: boolean; alt?: string }

export default function GalleryGrid({ items, limit }: { items: GalleryEntry[]; limit?: number }) {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<number | null>(null);

  const present = useMemo(() => galleryCategories.filter((c) => items.some((i) => i.category === c.slug)), [items]);
  const label = (slug: string) => galleryCategories.find((c) => c.slug === slug)?.label ?? { en: slug, ta: slug };
  const altFor = (i: GalleryEntry) => (i.alt ? i.alt : i.placeholder ? `Placeholder – ${label(i.category).en} photo to be added` : `${label(i.category).en} – Sakthi Engineering Works`);

  const filtered = useMemo(() => {
    const list = filter === "all" ? items : items.filter((i) => i.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [items, filter, limit]);

  if (items.length === 0) return <p className="border border-dashed border-steel/40 p-8 text-center text-steel">{t.gallery.empty}</p>;

  return (
    <div>
      {!limit && (
        <div role="group" aria-label={t.gallery.title} className="mb-8 flex flex-wrap gap-2">
          {[{ slug: "all", text: t.gallery.all }, ...present.map((c) => ({ slug: c.slug, text: c.label[lang] }))].map((c) => (
            <button key={c.slug} type="button" aria-pressed={filter === c.slug} onClick={() => setFilter(c.slug)} className={clsx("min-h-11 border px-4 text-sm font-bold uppercase tracking-wider", filter === c.slug ? "border-accent bg-accent text-ink" : "border-steel/40 text-ink hover:border-ink")}>{c.text}</button>
          ))}
        </div>
      )}
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {filtered.map((item, i) => (
          <li key={item.src} className={clsx(!limit && i % 7 === 0 && "col-span-2 lg:col-span-1 lg:row-span-1")}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`${t.gallery.open}: ${altFor(item)}`} className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink">
              <Image src={item.src} alt={altFor(item)} fill loading="lazy" sizes="(min-width:1024px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3 text-left text-sm font-semibold text-white">{label(item.category)[lang]}</span>
            </button>
          </li>
        ))}
      </ul>
      {items.some((i) => i.placeholder) && <p className="mt-4 text-sm text-steel">{t.gallery.placeholderNote}</p>}
      {open !== null && filtered[open] && (
        <GalleryLightbox items={filtered.map((i) => ({ src: i.src, alt: altFor(i) }))} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      )}
    </div>
  );
}
