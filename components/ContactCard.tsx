import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";
import { whatsAppUrl } from "@/lib/whatsapp";

export default async function ContactCard() {
  const { t, lang } = await getI18n();
  const row = "flex items-start gap-4 py-4";
  const icon = "mt-0.5 shrink-0 text-accent-deep";
  const link = "text-base font-semibold text-ink hover:text-accent-deep break-words sm:text-lg";
  return (
    <div className="bracket border border-steel/20 bg-white p-4 sm:p-8">
      <h2 className="font-display text-lg font-bold text-ink sm:text-2xl">{t.contact.details}</h2>
      <ul className="mt-2 divide-y divide-steel/15">
        <li className={row}><Phone aria-hidden className={icon} size={22} /><div><p className="text-sm font-semibold uppercase tracking-wider text-steel">{t.contact.phone}</p>{site.phones.map((p) => (<a key={p.tel} href={`tel:${p.tel}`} className={`${link} block`}>{p.display}</a>))}</div></li>
        <li className={row}><MessageCircle aria-hidden className={icon} size={22} /><div><p className="text-sm font-semibold uppercase tracking-wider text-steel">{t.contact.whatsapp}</p><a href={whatsAppUrl()} target="_blank" rel="noopener noreferrer" className={link}>{site.whatsappDisplay}</a></div></li>
        <li className={row}><Mail aria-hidden className={icon} size={22} /><div><p className="text-sm font-semibold uppercase tracking-wider text-steel">{t.contact.email}</p><a href={`mailto:${site.email}`} className={link}>{site.email}</a></div></li>
        <li className={row}><span aria-hidden className="mt-1 h-3 w-3 shrink-0 bg-accent" /><div><p className="text-sm font-semibold uppercase tracking-wider text-steel">{t.contact.serviceArea}</p><p className="text-lg font-semibold text-ink">{site.serviceArea[lang]}</p></div></li>
      </ul>
    </div>
  );
}
