import { NextRequest, NextResponse } from "next/server";
import { backendUrl } from "@/lib/backend";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeText } from "@/lib/sanitize";
import { checkUpload } from "@/lib/upload";
import { schemas, type EnquiryKind } from "@/lib/validation";

export const runtime = "nodejs";

const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status });

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === (req.headers.get("x-forwarded-host") ?? req.headers.get("host"));
  } catch {
    return false;
  }
}

/**
 * Public enquiry endpoint. Validates, then forwards to the backend server-to-server with a secret key
 * (the key never reaches the browser). The backend validates again, stores, uploads the attachment and sends email.
 */
export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return json({ ok: false, error: "forbidden" }, 403);

  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (!rateLimit(`enquiry:${ip}`)) return json({ ok: false, error: "rate_limited" }, 429);
  if (Number(req.headers.get("content-length") ?? 0) > 5 * 1024 * 1024) return json({ ok: false, error: "file_size" }, 413);

  let form: FormData;
  try { form = await req.formData(); } catch { return json({ ok: false, error: "bad_request" }, 400); }

  const kind = String(form.get("kind") ?? "") as EnquiryKind;
  if (!(kind in schemas)) return json({ ok: false, error: "bad_request" }, 400);

  const raw: Record<string, string> = {};
  for (const [k, v] of form.entries()) if (typeof v === "string" && k !== "kind") raw[k] = sanitizeText(v);
  if (raw.website) return json({ ok: true, demo: false }); // honeypot

  const parsed = schemas[kind].safeParse(raw);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) fields[String(issue.path[0])] = issue.message;
    return json({ ok: false, error: "validation", fields }, 422);
  }

  const file = form.get("file");
  let attachment: File | null = null;
  if (kind === "project" && file instanceof File && file.size > 0) {
    const check = await checkUpload(file);
    if (!check.ok) return json({ ok: false, error: "validation", fields: { file: check.error } }, 422);
    attachment = file;
  }

  const base = backendUrl();
  const apiKey = process.env.BACKEND_API_KEY;
  if (!base || !apiKey) return json({ ok: true, demo: true }); // demo mode: validated but not stored

  const fd = new FormData();
  fd.append("kind", kind);
  fd.append("language", raw.language === "ta" ? "ta" : "en");
  for (const [k, v] of Object.entries(parsed.data)) if (typeof v === "string" && v) fd.append(k, v);
  if (attachment) fd.append("file", attachment, attachment.name);

  try {
    const res = await fetch(`${base}/api/public/enquiries`, {
      method: "POST",
      headers: { "x-api-key": apiKey, "x-client-ip": ip },
      body: fd,
      signal: AbortSignal.timeout(20000),
    });
    const body = (await res.json().catch(() => ({}))) as { ok?: boolean; fields?: Record<string, string> };
    if (res.ok && body.ok) return json({ ok: true, demo: false });
    if (res.status === 422 && body.fields) return json({ ok: false, error: "validation", fields: body.fields }, 422);
    return json({ ok: false, error: "server" }, 503);
  } catch {
    return json({ ok: false, error: "server" }, 503);
  }
}
