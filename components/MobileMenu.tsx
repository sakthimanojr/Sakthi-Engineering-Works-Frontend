"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

export default function MobileMenu({ open, onClose, links }: { open: boolean; onClose: () => void; links: { href: string; label: string }[] }) {
  const { t } = useI18n();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] bg-ink text-white lg:hidden">
      <div className="flex items-center justify-end px-5 py-4">
        <button ref={closeRef} type="button" onClick={onClose} aria-label={t.cta.close} className="flex h-12 w-12 items-center justify-center border border-white/30">
          <X aria-hidden size={24} />
        </button>
      </div>
      <nav aria-label="Primary" className="grid-bg-dark h-full px-6 pt-4">
        <ul className="space-y-1">
          {links.map((l, i) => (
            <li key={l.href}>
              <Link href={l.href} onClick={onClose} className="flex items-baseline gap-4 border-b border-white/10 py-3 font-display text-xl font-bold uppercase sm:py-4 sm:text-3xl">
                <span className="text-base text-accent">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
