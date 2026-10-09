import { Mail, Phone } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";
import type { WhatsAppFields } from "@/lib/whatsapp";

/** Reusable contact action row (Call / WhatsApp / Email / Quote). Use on any page. */
export default async function ContactActions({ dark = true, whatsapp }: { dark?: boolean; whatsapp?: WhatsAppFields }) {
  const { t } = await getI18n();
  const secondary = dark ? "outline" : "outlineDark";
  return (
    <div className="flex flex-wrap gap-3">
      <ButtonLink href="/quote">{t.cta.quote}</ButtonLink>
      <ButtonLink href={`tel:${site.phones[0].tel}`} variant={secondary} label={t.cta.callUs}><Phone aria-hidden size={18} />{t.cta.call}</ButtonLink>
      <WhatsAppButton label={t.cta.whatsapp} fields={whatsapp} variant={secondary} />
      <ButtonLink href={`mailto:${site.email}`} variant={secondary}><Mail aria-hidden size={18} />{t.cta.email}</ButtonLink>
    </div>
  );
}
