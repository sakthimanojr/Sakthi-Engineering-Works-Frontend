import { z } from "zod";
import { services } from "@/data/services";

/** Error messages are KEYS; they are translated in i18n/*.ts (forms.errors). */
const cleanPhone = (v: string) => v.replace(/[\s-]/g, "");
const isMobile = (v: string) => /^(?:\+?91)?[6-9]\d{9}$/.test(cleanPhone(v));
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

const req = (max = 120) => z.string().trim().min(1, "required").max(max, "too_long");
const opt = (max = 200) => z.string().trim().max(max, "too_long");
const mobile = z.string().trim().min(1, "required").refine(isMobile, "invalid_mobile");
const optMobile = z.string().trim().refine((v) => v === "" || isMobile(v), "invalid_mobile");
const optEmail = z.string().trim().max(120, "too_long").refine((v) => v === "" || isEmail(v), "invalid_email");

export const serviceSlugs = services.map((s) => s.slug);
const service = opt(80).refine((v) => v === "" || v === "other" || serviceSlugs.includes(v), "required");

export const quickSchema = z.object({
  name: req(), mobile, email: optEmail, service, message: req(2000), website: opt(200).optional(),
});

export const projectSchema = z.object({
  name: req(), company: opt(), mobile, whatsapp: optMobile, email: optEmail, location: req(200), service,
  description: req(3000), dimensions: opt(300), material: opt(300), quantity: opt(100), additional: opt(2000), website: opt(200).optional(),
});

export const contactSchema = z.object({
  name: req(), mobile, email: optEmail, message: req(2000), website: opt(200).optional(),
});

export type EnquiryKind = "quick" | "project" | "contact";
export const schemas = { quick: quickSchema, project: projectSchema, contact: contactSchema } as const;

export const MAX_FILE_BYTES = 4 * 1024 * 1024;
export const ALLOWED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp"] as const;
export const ALLOWED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".webp"];
