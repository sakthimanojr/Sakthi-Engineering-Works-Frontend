import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import ContactActions from "@/components/ContactActions";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fabrication Services – Sheds, PEB, Sheet Bending, Gates & More",
  description: "Fourteen fabrication services from Sakthi Engineering Works, Walajapet: sheet bending and shearing, structural sheds and roofing, PEB buildings, gates, grills, staircases, rolling shutters, container bodies and stainless steel works.",
  path: "/services",
});

export default async function ServicesPage() {
  const { t, lang } = await getI18n();
  return (
    <>
      <PageHero title={t.services.title} eyebrow={t.services.eyebrow} intro={t.services.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.services, path: "/services" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-white py-20"><Container><ServiceGrid lang={lang} cta={t.cta.viewDetails} /></Container></section>
      <section className="bg-ink py-16 text-white"><Container><h2 className="font-display text-3xl font-bold">{t.enquiry.title}</h2><p className="mb-6 mt-2 text-mist/80">{t.enquiry.text}</p><ContactActions /></Container></section>
    </>
  );
}
