/** Base URL of the backend (admin + API). Empty/unset = demo mode with placeholder content. */
export function backendUrl(): string | null {
  const v = process.env.BACKEND_URL?.trim();
  return v ? v.replace(/\/+$/, "") : null;
}
