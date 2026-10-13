import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactActions from "@/components/ContactActions";
import { OfficeCard, FactoryCard } from "@/components/LocationCard";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Sakthi Engineering Works – Fabrication in Walajapet since 2005",
  description: "Sakthi Engineering Works is a fabrication and engineering company in Walajapet, Ranipet, Tamil Nadu, providing fabrication and structural solutions across India since 2005.",
  path: "/about",
});

export default async function AboutPage() {
  const { t, lang } = await getI18n();
  return (
    <>
      <PageHero title={t.about.title} eyebrow={t.about.eyebrow} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.about, path: "/about" }]} crumbLabel={t.breadcrumbs.label} image="/images/about/about.jpg" imageAlt={t.about.imageAlt} />
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p>
          </div>
          <div className="bracket relative aspect-[4/3] bg-ink">
            <Image src="/images/about/about.jpg" alt={t.about.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>
      <section className="bg-mist py-16">
        <Container>
          <h2 className="font-display text-3xl font-bold text-ink">{t.about.leadership}</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="border-l-4 border-accent bg-white p-6"><dt className="text-sm font-semibold uppercase tracking-wider text-steel">{t.about.owner}</dt><dd className="mt-1 font-display text-2xl font-bold text-ink">{site.owner}</dd></div>
            <div className="border-l-4 border-accent bg-white p-6"><dt className="text-sm font-semibold uppercase tracking-wider text-steel">{t.about.md}</dt><dd className="mt-1 font-display text-2xl font-bold text-ink">{site.managingDirector}</dd></div>
          </dl>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
          <div className="mt-10"><WhyChooseUs t={t} /></div>
        </Container>
      </section>
      <section className="bg-coal py-20 text-white">
        <Container>
          <SectionHeading dark eyebrow={t.locations.eyebrow} title={t.locations.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2"><OfficeCard /><FactoryCard /></div>
          <p className="mt-8 text-mist/80">{site.serviceArea[lang]}</p>
          <div className="mt-8"><ContactActions /></div>
        </Container>
      </section>
    </>
  );
}
