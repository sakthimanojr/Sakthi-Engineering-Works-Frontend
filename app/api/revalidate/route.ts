import { timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/** Called by the backend after projects/gallery change so the public site refreshes immediately. */
export async function POST(req: NextRequest) {
  const expected = process.env.REVALIDATE_SECRET || "03456c762115d18d05de0c345cab402f";
  const given = req.headers.get("x-revalidate-secret") ?? "";
  const a = Buffer.from(expected), b = Buffer.from(given);
  if (!expected || a.length !== b.length || !timingSafeEqual(a, b)) return NextResponse.json({ ok: false }, { status: 401 });
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}
