"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { useI18n } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";

export default function Header({ logoSrc, name }: { logoSrc: string | null; name: string }) {
  const { t } = useI18n();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/facilities", label: t.nav.facilities },
    { href: "/contact", label: t.nav.contact },
  ];
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-ink">{t.cta.skip}</a>
      <header className={clsx("fixed inset-x-0 top-0 z-50 transition-colors duration-300", scrolled ? "bg-ink/95 shadow-lg backdrop-blur" : "bg-transparent")}>
        <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20 lg:px-10">
          <Link href="/" className="flex items-center gap-3 text-white" aria-label={name}>
            {logoSrc ? (
              <Image src={logoSrc} alt={name} width={180} height={48} priority className="h-10 w-auto lg:h-12" />
            ) : (
              <span className="flex items-center gap-3">
                <span aria-hidden className="flex h-10 w-10 items-center justify-center border-2 border-accent font-display text-xl font-bold text-accent">S</span>
                <span className="font-display text-lg font-bold uppercase leading-none tracking-wide sm:text-xl">
                  Sakthi<span className="block text-xs font-semibold tracking-[0.2em] text-mist/80">Engineering Works</span>
                </span>
              </span>
            )}
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={clsx("py-2 text-sm font-bold uppercase tracking-wider hover:text-accent", isActive(l.href) ? "text-accent" : "text-white")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            <Link href="/quote" className="hidden min-h-11 items-center bg-accent px-5 text-sm font-bold uppercase tracking-wider text-ink hover:bg-white sm:inline-flex">{t.cta.quote}</Link>
            <button type="button" onClick={() => setOpen(true)} aria-label={t.cta.menu} aria-expanded={open} className="flex h-11 w-11 items-center justify-center border border-white/40 text-white lg:hidden">
              <Menu aria-hidden size={22} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={close} links={links} />
    </>
  );
}
