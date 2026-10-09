import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { whatsAppUrl } from "@/lib/whatsapp";
import { getI18n } from "@/i18n";

export default async function MobileActionBar() {
  const { t } = await getI18n();
  const item = "flex min-h-14 flex-1 items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide";
  return (
    <nav aria-label={t.cta.mobileBar} className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-ink text-white md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href={`tel:${site.phones[0].tel}`} className={item}><Phone aria-hidden size={18} />{t.cta.call}</a>
      <a href={whatsAppUrl()} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-white/10`}><MessageCircle aria-hidden size={18} />WhatsApp</a>
      <Link href="/quote" className={`${item} bg-accent text-ink`}>{t.cta.quote}<ArrowRight aria-hidden size={16} /></Link>
    </nav>
  );
}
