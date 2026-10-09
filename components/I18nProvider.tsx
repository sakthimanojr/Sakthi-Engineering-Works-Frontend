"use client";

import { createContext, useContext } from "react";
import type { Dict } from "@/i18n/en";
import type { Lang } from "@/types";

const Ctx = createContext<{ lang: Lang; t: Dict } | null>(null);

export function I18nProvider({ lang, t, children }: { lang: Lang; t: Dict; children: React.ReactNode }) {
  return <Ctx.Provider value={{ lang, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useI18n must be used inside I18nProvider");
  return v;
}
