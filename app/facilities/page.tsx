import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MachineryCard from "@/components/MachineryCard";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import { OfficeCard, FactoryCard } from "@/components/LocationCard";
import { machinery } from "@/data/machinery";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Factory & Machinery – Shearing, Press Brake, Welding, EOT Crane",
  description: "Machinery and facilities at the Sakthi Engineering Works factory in Anandhalai, Walajapet: shearing, press brake, cutting, MIG and arc welding, gas cutting, drilling, grinding, milling and EOT crane.",
  path: "/facilities",
  image: "/images/machinery/machinery.jpg",
});

export default async function FacilitiesPage() {
  const { t, lang } = await getI18n();
  return (
    <>
      <PageHero title={t.facilities.title} eyebrow={t.facilities.eyebrow} intro={t.facilities.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.facilities, path: "/facilities" }]} crumbLabel={t.breadcrumbs.label} image="/images/machinery/machinery.jpg" imageAlt={t.facilities.imageAlt} />
      <section className="bg-white py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title={t.facilities.factoryTitle} />
            <p className="mt-5 text-lg leading-relaxed">{t.facilities.factoryText}</p>
          </div>
          <div className="bracket relative aspect-[4/3] bg-ink"><Image src="/images/factory/factory.jpg" alt={t.facilities.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
        </Container>
      </section>
      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow={t.machinery.eyebrow} title={t.machinery.title} intro={t.machinery.intro} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {machinery.map((m, i) => (<li key={m.slug}><Reveal className="h-full"><MachineryCard machine={m} lang={lang} index={i} /></Reveal></li>))}
          </ul>
        </Container>
      </section>
      <section className="bg-coal py-20 text-white">
        <Container>
          <SectionHeading dark eyebrow={t.locations.eyebrow} title={t.locations.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2"><OfficeCard /><FactoryCard /></div>
          <div className="mt-10"><ContactActions /></div>
        </Container>
      </section>
    </>
  );
}
