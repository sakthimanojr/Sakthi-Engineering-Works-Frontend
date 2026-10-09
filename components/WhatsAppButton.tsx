import { MessageCircle } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import { whatsAppUrl, type WhatsAppFields } from "@/lib/whatsapp";

export default function WhatsAppButton({ label, fields, variant = "outline", className }: { label: string; fields?: WhatsAppFields; variant?: "primary" | "outline" | "outlineDark" | "dark"; className?: string }) {
  return (
    <ButtonLink href={whatsAppUrl(fields)} variant={variant} className={className}>
      <MessageCircle aria-hidden size={18} />
      {label}
    </ButtonLink>
  );
}
