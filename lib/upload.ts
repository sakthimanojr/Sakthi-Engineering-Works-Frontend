import { MAX_FILE_BYTES } from "@/lib/validation";

export type FileCheck = { ok: true; extension: string; contentType: string; buffer: Buffer } | { ok: false; error: "file_type" | "file_size" };

/** Validates by size AND magic bytes (never trusts the browser-supplied type). */
export async function checkUpload(file: File): Promise<FileCheck> {
  if (file.size > MAX_FILE_BYTES) return { ok: false, error: "file_size" };
  const buffer = Buffer.from(await file.arrayBuffer());
  const head = buffer.subarray(0, 12);
  const hex = head.toString("hex");
  if (hex.startsWith("25504446")) return { ok: true, extension: ".pdf", contentType: "application/pdf", buffer };
  if (hex.startsWith("ffd8ff")) return { ok: true, extension: ".jpg", contentType: "image/jpeg", buffer };
  if (hex.startsWith("89504e470d0a1a0a")) return { ok: true, extension: ".png", contentType: "image/png", buffer };
  if (head.subarray(0, 4).toString("ascii") === "RIFF" && head.subarray(8, 12).toString("ascii") === "WEBP")
    return { ok: true, extension: ".webp", contentType: "image/webp", buffer };
  return { ok: false, error: "file_type" };
}
