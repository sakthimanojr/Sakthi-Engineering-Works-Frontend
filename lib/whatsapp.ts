import { site } from "@/data/site";

export interface WhatsAppFields { name?: string; service?: string; location?: string; details?: string }

export function buildWhatsAppMessage(f: WhatsAppFields = {}): string {
  return [
    "Hello Sakthi Engineering Works,",
    "",
    "I am interested in your fabrication services.",
    "",
    `Name: ${f.name ?? ""}`,
    `Service: ${f.service ?? ""}`,
    `Project Location: ${f.location ?? ""}`,
    `Project Details: ${f.details ?? ""}`,
  ].join("\n");
}

export function whatsAppUrl(f?: WhatsAppFields): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(f))}`;
}
