import { cookies } from "next/headers";
import type { Lang } from "@/types";
import { LANG_COOKIE_NAME } from "@/lib/constants";
import { en } from "./en";
import type { Dict } from "./en";
import { ta } from "./ta";

const dictionaries: Record<Lang, Dict> = { en, ta };

export async function getLang(): Promise<Lang> {
  const store = await cookies();
  return store.get(LANG_COOKIE_NAME)?.value === "ta" ? "ta" : "en";
}

export const getDict = (lang: Lang): Dict => dictionaries[lang];

export async function getI18n() {
  const lang = await getLang();
  return { lang, t: getDict(lang) };
}
