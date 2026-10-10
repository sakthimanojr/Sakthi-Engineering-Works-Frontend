/** Base URL of the backend (admin + API). Empty/unset = demo mode with placeholder content. */
const FALLBACK_BACKEND_URL = "https://sakthi-engineering-works-backend.onrender.com";

export function backendUrl(): string | null {
  const v = (process.env.BACKEND_URL?.trim()) || FALLBACK_BACKEND_URL;
  return v ? v.replace(/\/+$/, "") : null;
}
