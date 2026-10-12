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
import { getServiceCovers } from "@/lib/covers";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const covers = await getServiceCovers();
  const coverUrl = covers.get(s.slug)?.url;
  return pageMetadata({
    title: `${s.title.en} in Walajapet, Ranipet – Sakthi Engineering Works`,
    description: `${s.short.en} Fabricated by Sakthi Engineering Works, Walajapet, Ranipet, Tamil Nadu. Service across India.`,
    path: `/services/${s.slug}`,
    image: coverUrl || s.image,
  });
}

// Gallery categories that relate to each service (used to show matching photos)
const galleryMap: Record<string, string[]> = {
  "sheet-bending-shearing": ["machinery", "fabrication-process"],
  "structural-sheds-roofing": ["structural-sheds", "roofing"],
  "peb-buildings": ["peb"],
  "grills-safety-grills": ["grills"],
  gates: ["gates"],
  "collapsible-gates": ["gates"],
  staircases: ["staircases"],
  "rolling-shutters": ["rolling-shutters"],
  "container-body-building": ["container-bodies"],
  "building-elevation": ["structural-sheds", "fabrication-process"],
  "sand-tails-sheds-houses": ["structural-sheds", "roofing"],
  "stainless-steel-works": ["stainless-steel"],
  "expanded-metal-works": ["expanded-metal"],
  "general-fabrication-works": ["fabrication-process", "factory"],
};

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const { t, lang } = await getI18n();
  const cats = galleryMap[service.slug] ?? [];
  const [allGallery, covers] = await Promise.all([getGalleryItems(), getServiceCovers()]);
  const coverUrl = covers.get(service.slug)?.url;
  const coverAlt = covers.get(service.slug)?.alt;
  const matched = allGallery.filter((g) => cats.includes(g.category));
  const photos = matched.length > 0
    ? matched
    : [{ src: coverUrl || service.image, category: service.slug, placeholder: false, alt: coverAlt || `${service.title[lang]} — Sakthi Engineering Works` }];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const path = `/services/${service.slug}`;

  return (
    <>
      <PageHero
        title={service.title[lang]} eyebrow={`${service.number} — ${t.nav.services}`} intro={service.short[lang]}
        crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.services, path: "/services" }, { name: service.title[lang], path }]}
        crumbLabel={t.breadcrumbs.label} image={coverUrl || service.image} imageAlt={coverAlt || `${service.title.en} ${t.services.heroAltSuffix}`}
      />
      <section className="bg-white py-10 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <p className="text-base leading-relaxed sm:text-xl">{service.description[lang]}</p>
            <h2 className="mt-8 font-display text-2xl font-bold text-ink sm:mt-12 sm:text-3xl">{t.services.includedWork}</h2>
            <ul className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-3">
              {service.features.map((f) => (
                <li key={f.en} className="flex items-start gap-2 border border-steel/20 p-3 sm:gap-3 sm:p-4"><Check aria-hidden size={18} className="mt-0.5 shrink-0 text-accent-deep" /><span className="text-sm font-semibold text-ink sm:text-base">{f[lang]}</span></li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-2xl font-bold text-ink sm:mt-12 sm:text-3xl">{t.services.applications}</h2>
            <ul className="mt-4 space-y-1.5 sm:mt-5 sm:space-y-2">
              {service.applications.map((a) => (<li key={a.en} className="flex items-center gap-2 text-sm sm:gap-3 sm:text-base"><span aria-hidden className="h-2 w-2 bg-accent" />{a[lang]}</li>))}
            </ul>
          </div>
          <aside className="space-y-4 sm:space-y-6">
            <div className="bracket relative aspect-[4/3] bg-ink"><Image src={coverUrl || service.image} alt={coverAlt || `${service.title.en} — Sakthi Engineering Works`} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" /></div>
            <div className="bg-ink p-4 text-white sm:p-6">
              <h2 className="font-display text-xl font-bold sm:text-2xl">{t.services.ctaTitle}</h2>
              <p className="mt-1.5 text-sm text-mist/80 sm:mt-2 sm:text-base">{t.services.ctaText}</p>
              <div className="mt-4 sm:mt-5"><ButtonLink href={`/quote`}>{t.cta.enquireService}</ButtonLink></div>
            </div>
          </aside>
        </Container>
      </section>
      {photos.length > 0 && (
        <section className="bg-mist py-8 sm:py-16">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-3 sm:gap-4">
              <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />
              <ButtonLink href="/services#all-works" variant="outlineDark">{t.cta.allWorks}</ButtonLink>
            </div>
            <div className="mt-6 sm:mt-8"><GalleryGrid items={photos} limit={6} /></div>
          </Container>
        </section>
      )}
      <section className="bg-mist py-8 sm:py-16">
        <Container>
          <SectionHeading eyebrow={t.services.related} title={t.services.allServices} />
          <div className="mt-6 sm:mt-8"><ServiceGrid lang={lang} cta={t.cta.viewDetails} list={others} /></div>
        </Container>
      </section>
      <section className="bg-ink py-8 text-white sm:py-16"><Container><ContactActions whatsapp={{ service: service.title.en }} /></Container></section>
      <JsonLd data={serviceJsonLd(service.title.en, service.description.en, path)} />
    </>
  );
}

