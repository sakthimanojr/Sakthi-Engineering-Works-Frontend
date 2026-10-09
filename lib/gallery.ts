import { readdir } from "node:fs/promises";
import path from "node:path";
import { backendUrl } from "@/lib/backend";
import { galleryCategories } from "@/data/gallery-categories";

export interface GalleryItem { src: string; category: string; placeholder: boolean; alt?: string }

async function fromBackend(): Promise<GalleryItem[]> {
  const base = backendUrl();
  if (!base) return [];
  try {
    const res = await fetch(`${base}/api/public/gallery`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = (await res.json()) as { images?: { url: string; category: string; alt: string }[] };
    return (data.images ?? []).map((i) => ({ src: i.url, category: i.category, alt: i.alt || undefined, placeholder: false }));
  } catch {
    return [];
  }
}

/** Fallback: files in public/images/gallery named <category>--<anything>.jpg (placeholders ship here). */
async function fromFolder(): Promise<GalleryItem[]> {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  let files: string[] = [];
  try { files = await readdir(dir); } catch { return []; }
  const valid = new Set(galleryCategories.map((c) => c.slug));
  return files
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => {
      const category = f.split("--")[0].toLowerCase();
      return { src: `/images/gallery/${f}`, category: valid.has(category) ? category : "fabrication-process", placeholder: /placeholder/i.test(f) };
    });
}

/** Backend (Cloudinary) photos win. Local folder photos are used only when the backend has none. */
export async function getGalleryItems(): Promise<GalleryItem[]> {
  const remote = await fromBackend();
  return remote.length ? remote : fromFolder();
}
