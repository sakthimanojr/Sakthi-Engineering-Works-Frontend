import Link from "next/link";
import { getSocials, getMapLinks, site } from "@/data/site";
import { services } from "@/data/services";
import { getI18n } from "@/i18n";
import Container from "@/components/Container";

export default async function Footer() {
  const { t, lang } = await getI18n();
  const socials = getSocials();
  const maps = getMapLinks();
  const h = "font-display text-lg font-bold uppercase tracking-wide text-white";
  const a = "text-mist/80 hover:text-accent";
  return (
    <footer className="bg-ink pb-20 text-mist md:pb-0">
      <div aria-hidden className="h-1 bg-accent" />
      <Container className="grid gap-8 py-8 sm:grid-cols-2 sm:py-14 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold uppercase text-white sm:text-2xl">{site.name}</p>
          <p className="mt-1 font-semibold text-accent">{lang === "ta" ? `${site.since} முதல்` : `Since ${site.since}`}</p>
          <p className="mt-4 leading-relaxed text-mist/80">{t.footer.about}</p>
          <p className="mt-4 text-sm text-mist/70">{site.descriptor}</p>
        </div>
        <nav aria-label={t.footer.quickLinks}>
          <h2 className={h}>{t.footer.quickLinks}</h2>
          <ul className="mt-4 space-y-2">
            {[["/", t.nav.home], ["/about", t.nav.about], ["/services", t.nav.services], ["/facilities", t.nav.facilities], ["/contact", t.nav.contact], ["/quote", t.cta.quote]].map(([href, label]) => (
              <li key={href}><Link href={href} className={a}>{label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label={t.footer.services}>
          <h2 className={h}>{t.footer.services}</h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`} className={a}>{s.title[lang]}</Link></li>))}
          </ul>
        </nav>
        <div className="space-y-6">
          <div>
            <h2 className={h}>{t.footer.office}</h2>
            <address className="mt-3 not-italic text-mist/80">{site.office.lines.map((l) => (<span key={l} className="block">{l}</span>))}</address>
            <a href={maps.office} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-accent hover:underline">{t.cta.directions}</a>
          </div>
          <div>
            <h2 className={h}>{t.footer.factory}</h2>
            <address className="mt-3 not-italic text-mist/80">{site.factory.lines.map((l) => (<span key={l} className="block">{l}</span>))}</address>
            <a href={maps.factory} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-accent hover:underline">{t.cta.directions}</a>
          </div>
          <div>
            <h2 className={h}>{t.footer.contact}</h2>
            <ul className="mt-3 space-y-1">
              {site.phones.map((p) => (<li key={p.tel}><a href={`tel:${p.tel}`} className={a}>{p.display}</a></li>))}
              <li><a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className={a}>WhatsApp: {site.whatsappDisplay}</a></li>
              <li><a href={`mailto:${site.email}`} className={`${a} break-all`}>{site.email}</a></li>
            </ul>
          </div>
          {socials.length > 0 && (
            <div>
              <h2 className={h}>{t.footer.follow}</h2>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {socials.map((s) => (<li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className={a}>{s.label}</a></li>))}
              </ul>
            </div>
          )}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-mist/70 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:py-6 sm:text-sm">
          <p>© {new Date().getFullYear()} {site.name}. {t.footer.rights}</p>
          <ul className="flex flex-wrap gap-5 items-center">
            <li><Link href="/privacy" className="hover:text-accent">{t.footer.privacy}</Link></li>
            <li><Link href="/terms" className="hover:text-accent">{t.footer.terms}</Link></li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
