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
  ];  // Gallery & Projects pages removed — works are shown via Services
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-ink/95 shadow-xl backdrop-blur-md border-b border-white/15"
            : "bg-ink/80 shadow-md backdrop-blur-md border-b border-white/10"
        )}
      >
        <div className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-8 lg:h-20 lg:px-10">
          <Link href="/" className="flex items-center gap-3 text-white group" aria-label={name}>
            {logoSrc ? (
              <Image src={logoSrc} alt={name} width={180} height={48} priority className="h-9 w-auto sm:h-10 lg:h-12" />
            ) : (
              <span className="flex items-center gap-2.5 sm:gap-3">
                <span aria-hidden className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border-2 border-accent font-display text-lg sm:text-xl font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-ink">S</span>
                <span className="font-display text-sm sm:text-base font-bold uppercase leading-tight tracking-wide">
                  Sakthi<span className="block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-mist/80">Engineering Works</span>
                </span>
              </span>
            )}
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={clsx(
                      "relative py-2 text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent",
                      isActive(l.href) ? "text-accent after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent" : "text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            <Link
              href="/quote"
              className="hidden min-h-10 items-center bg-accent px-4 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white md:inline-flex sm:min-h-11 sm:px-5 sm:text-sm"
            >
              {t.cta.quote}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.cta.menu}
              aria-expanded={open}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded border border-white/30 bg-white/5 text-white transition hover:bg-white/10 hover:border-accent active:scale-95 lg:hidden"
            >
              <Menu aria-hidden size={22} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={close} links={links} logoSrc={logoSrc} name={name} />
    </>
  );
}
