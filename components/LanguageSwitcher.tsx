"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useI18n } from "@/components/I18nProvider";
import { LANG_COOKIE_NAME } from "@/lib/constants";
import type { Lang } from "@/types";

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, t } = useI18n();
  const router = useRouter();
  const set = (next: Lang) => {
    if (next === lang) return;
    document.cookie = `${LANG_COOKIE_NAME}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };
  const btn = (code: Lang, label: string) => (
    <button
      type="button"
      onClick={() => set(code)}
      aria-pressed={lang === code}
      lang={code}
      className={clsx("min-h-10 min-w-10 px-2 text-sm font-bold", lang === code ? "text-accent" : "text-white/80 hover:text-white")}
    >
      {label}
    </button>
  );
  return (
    <div role="group" aria-label={t.cta.language} className={clsx("flex items-center", className)}>
      {btn("en", "EN")}
      <span aria-hidden className="text-white/40">|</span>
      {btn("ta", "தமிழ்")}
    </div>
  );
}
