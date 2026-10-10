import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ServiceGrid from "@/components/ServiceGrid";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import ContactActions from "@/components/ContactActions";
import { getI18n } from "@/i18n";
import { getGalleryItems } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Fabrication Services – Sheds, PEB, Sheet Bending, Gates & More",
  description: "Fourteen fabrication services from Sakthi Engineering Works, Walajapet: sheet bending and shearing, structural sheds and roofing, PEB buildings, gates, grills, staircases, rolling shutters, container bodies and stainless steel works.",
  path: "/services",
});

export default async function ServicesPage() {
  const { t, lang } = await getI18n();
  const gallery = await getGalleryItems();

  return (
    <>
      <PageHero title={t.services.title} eyebrow={t.services.eyebrow} intro={t.services.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.services, path: "/services" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <ServiceGrid lang={lang} cta={t.cta.viewDetails} />
        </Container>
      </section>

      {/* All Works Gallery Section */}
      <section id="all-works" className="scroll-mt-24 bg-mist py-12 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading number="01" eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
            <div className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-ink shadow-sm">
              <span className="h-2 w-2 rounded-full bg-ink" />
              {t.cta.allWorks}
            </div>
          </div>
          <div className="mt-8 sm:mt-12">
            <GalleryGrid items={gallery} />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-12 sm:py-16 text-white">
        <Container>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{t.enquiry.title}</h2>
          <p className="mb-6 mt-2 text-sm text-mist/80 sm:text-base">{t.enquiry.text}</p>
          <ContactActions />
        </Container>
      </section>
    </>
  );
}
