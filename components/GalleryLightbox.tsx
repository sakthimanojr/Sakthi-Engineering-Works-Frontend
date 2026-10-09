"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, X } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

export interface LightboxItem { src: string; alt: string }

export default function GalleryLightbox({ items, index, onClose, onIndex }: { items: LightboxItem[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const { t } = useI18n();
  const root = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const count = items.length;
  const go = (d: number) => onIndex((index + d + count) % count);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key.toLowerCase() === "f") toggleFs();
      else if (e.key === "Tab") {
        const f = root.current?.querySelectorAll<HTMLElement>("button");
        if (!f?.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, count]);

  const toggleFs = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void root.current?.requestFullscreen?.();
  };

  const item = items[index];
  const btn = "flex h-12 w-12 items-center justify-center border border-white/40 bg-ink/70 text-white hover:bg-accent hover:text-ink";
  return (
    <div ref={root} role="dialog" aria-modal="true" aria-label={item.alt} className="fixed inset-0 z-[80] flex flex-col bg-ink/95 text-white">
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="text-sm text-mist/80" aria-live="polite">{index + 1} / {count}</p>
        <div className="flex gap-2">
          <button type="button" onClick={toggleFs} aria-label={t.gallery.fullscreen} className={btn}><Maximize aria-hidden size={20} /></button>
          <button ref={closeBtn} type="button" onClick={onClose} aria-label={t.gallery.close} className={btn}><X aria-hidden size={22} /></button>
        </div>
      </div>
      <div className="relative mx-4 mb-4 flex-1 sm:mx-16">
        <Image key={item.src} src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" priority />
      </div>
      {count > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label={t.gallery.prev} className={`${btn} absolute left-2 top-1/2 -translate-y-1/2`}><ChevronLeft aria-hidden size={24} /></button>
          <button type="button" onClick={() => go(1)} aria-label={t.gallery.next} className={`${btn} absolute right-2 top-1/2 -translate-y-1/2`}><ChevronRight aria-hidden size={24} /></button>
        </>
      )}
    </div>
  );
}
