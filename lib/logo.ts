import { existsSync } from "node:fs";
import path from "node:path";

/** Drop logo.png / logo-white.png / favicon.png into public/images/logo/ and they are picked up automatically. */
const has = (file: string) => existsSync(path.join(process.cwd(), "public", "images", "logo", file));

export function getLogos() {
  return {
    dark: has("logo.png") ? "/images/logo/logo.png" : null,
    white: has("logo-white.png") ? "/images/logo/logo-white.png" : has("logo.png") ? "/images/logo/logo.png" : null,
    favicon: has("favicon.png") ? "/images/logo/favicon.png" : null,
  };
}
