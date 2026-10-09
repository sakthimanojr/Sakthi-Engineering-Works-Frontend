import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import ButtonLink from "@/components/ButtonLink";
import ContactActions from "@/components/ContactActions";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import { getService, services } from "@/data/services";
import { getI18n } from "@/i18n";
import { getGalleryItems } from "@/lib/gallery";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({
    title: `${s.title.en} in Walajapet, Ranipet – Sakthi Engineering Works`,
    description: `${s.short.en} Fabricated by Sakthi Engineering Works, Walajapet, Ranipet, Tamil Nadu. Service across India.`,
    path: `/services/${s.slug}`,
    image: s.image,
  });
}

// Gallery categories that relate to each service (used to show matching photos if available)
const galleryMap: Record<string, string[]> = {
  "sheet-bending-shearing": ["machinery", "fabrication-process"], "structural-sheds-roofing": ["structural-sheds", "roofing"], "peb-buildings": ["peb"],
  "grills-safety-grills": ["grills"], gates: ["gates"], "collapsible-gates": ["gates"], staircases: ["staircases"], "rolling-shutters": ["rolling-shutters"],
  "container-body-building": ["container-bodies"], "stainless-steel-works": ["stainless-steel"], "expanded-metal-works": ["expanded-metal"], "general-fabrication-works": ["fabrication-process"],
};

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const { t, lang } = await getI18n();
  const cats = galleryMap[service.slug] ?? [];
  const photos = (await getGalleryItems()).filter((g) => cats.includes(g.category) && !g.placeholder);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const path = `/services/${service.slug}`;

  return (
    <>
      <PageHero
        title={service.title[lang]} eyebrow={`${service.number} — ${t.nav.services}`} intro={service.short[lang]}
        crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.services, path: "/services" }, { name: service.title[lang], path }]}
        crumbLabel={t.breadcrumbs.label} image={service.image} imageAlt={`${service.title.en} ${t.services.heroAltSuffix}`}
      />
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed">{service.description[lang]}</p>
            <h2 className="mt-12 font-display text-3xl font-bold text-ink">{t.services.includedWork}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f.en} className="flex items-start gap-3 border border-steel/20 p-4"><Check aria-hidden size={20} className="mt-0.5 shrink-0 text-accent-deep" /><span className="font-semibold text-ink">{f[lang]}</span></li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-3xl font-bold text-ink">{t.services.applications}</h2>
            <ul className="mt-5 space-y-2">
              {service.applications.map((a) => (<li key={a.en} className="flex items-center gap-3"><span aria-hidden className="h-2.5 w-2.5 bg-accent" />{a[lang]}</li>))}
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="bracket relative aspect-[4/3] bg-ink"><Image src={service.image} alt={`${service.title.en} — Sakthi Engineering Works`} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" /></div>
            <div className="bg-ink p-6 text-white">
              <h2 className="font-display text-2xl font-bold">{t.services.ctaTitle}</h2>
              <p className="mt-2 text-mist/80">{t.services.ctaText}</p>
              <div className="mt-5"><ButtonLink href={`/quote`}>{t.cta.enquireService}</ButtonLink></div>
            </div>
          </aside>
        </Container>
      </section>
      {photos.length > 0 && (
        <section className="bg-mist py-16"><Container><SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} /><div className="mt-8"><GalleryGrid items={photos} limit={6} /></div></Container></section>
      )}
      <section className="bg-mist py-16">
        <Container>
          <SectionHeading eyebrow={t.services.related} title={t.services.allServices} />
          <div className="mt-8"><ServiceGrid lang={lang} cta={t.cta.viewDetails} list={others} /></div>
        </Container>
      </section>
      <section className="bg-ink py-16 text-white"><Container><ContactActions whatsapp={{ service: service.title.en }} /></Container></section>
      <JsonLd data={serviceJsonLd(service.title.en, service.description.en, path)} />
    </>
  );
}
