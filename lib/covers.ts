import { backendUrl } from "@/lib/backend";

export interface ServiceCover {
  slug: string;
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

/**
 * Fetch the active cover image for every service from the backend.
 * Returns a map of { slug -> cover } for O(1) lookup.
 * Falls back to an empty map when the backend is unavailable — callers
 * should then fall back to the local placeholder image.
 */
export async function getServiceCovers(): Promise<Map<string, ServiceCover>> {
  const base = backendUrl();
  if (!base) return new Map();
  try {
    const res = await fetch(`${base}/api/public/covers`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return new Map();
    const data = (await res.json()) as { covers?: ServiceCover[] };
    const map = new Map<string, ServiceCover>();
    for (const c of data.covers ?? []) map.set(c.slug, c);
    return map;
  } catch {
    return new Map();
  }
}
