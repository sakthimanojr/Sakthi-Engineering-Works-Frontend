"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { useI18n } from "@/components/I18nProvider";
import { site } from "@/data/site";
import { whatsAppUrl } from "@/lib/whatsapp";

export default function MobileMenu({
  open,
  onClose,
  links,
  logoSrc,
  name,
}: {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  logoSrc?: string | null;
  name?: string;
}) {
  const { t } = useI18n();
  const pathname = usePathname();
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[60] flex flex-col bg-ink text-white lg:hidden overflow-y-auto"
    >
      {/* Top bar inside mobile drawer */}
      <div className="flex h-[4.25rem] sm:h-[4.5rem] items-center justify-between border-b border-white/10 px-4 sm:px-6">
        <Link href="/" onClick={onClose} className="flex items-center gap-2.5" aria-label={name ?? site.name}>
          {logoSrc ? (
            <Image src={logoSrc} alt={name ?? site.name} width={140} height={36} className="h-8 w-auto" />
          ) : (
            <span className="flex items-center gap-2">
              <span aria-hidden className="flex h-8 w-8 items-center justify-center border-2 border-accent font-display text-base font-bold text-accent">
                S
              </span>
              <span className="font-display text-sm font-bold uppercase leading-none tracking-wide">
                Sakthi<span className="block text-[9px] font-semibold tracking-wider text-mist/70">Engineering</span>
              </span>
            </span>
          )}
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.cta.close}
          className="flex h-10 w-10 items-center justify-center rounded border border-white/30 bg-white/5 text-white transition hover:bg-white/15 active:scale-95"
        >
          <X aria-hidden size={22} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Primary" className="grid-bg-dark flex-1 px-5 pt-5 pb-12 sm:px-8 sm:pb-12 flex flex-col justify-between">
        <ul className="space-y-1">
          {links.map((l, i) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  className={clsx(
                    "flex items-center justify-between border-b border-white/10 py-3.5 font-display text-lg sm:text-2xl font-bold uppercase tracking-wider transition-colors",
                    active ? "text-accent border-accent/40" : "text-white hover:text-accent"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className={clsx("text-xs font-mono", active ? "text-accent" : "text-mist/50")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </span>
                  <ArrowRight size={18} className={clsx("transition-transform", active ? "text-accent translate-x-1" : "text-mist/30")} />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Quick Action CTAs & Info */}
        <div className="mt-8 space-y-4">
          <div className="space-y-2.5">
            <Link
              href="/quote"
              onClick={onClose}
              className="flex h-12 w-full items-center justify-center bg-accent font-display text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-white active:scale-98"
            >
              {t.cta.quote}
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={whatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 border border-emerald-500/50 bg-emerald-500/10 px-3 text-xs font-bold uppercase tracking-wider text-emerald-400 transition hover:bg-emerald-500/20"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={`tel:${site.phones[0].tel}`}
                className="flex h-11 items-center justify-center gap-2 border border-white/20 bg-white/5 px-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                {t.cta.call}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 text-xs text-mist/60 space-y-1">
            <p className="font-semibold text-white/80">{site.name}</p>
            <p>Walajapet, Ranipet, Tamil Nadu</p>
            <p className="text-[11px] text-accent font-medium">Since 2005 • All Over India</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
