import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Fabrication Services – Sheds, PEB, Sheet Bending, Gates, Grills & More",
  description: "Twelve fabrication services from Sakthi Engineering Works, Walajapet: sheet bending and shearing, structural sheds and roofing, PEB buildings, gates, grills and collapsible gates, staircases, rolling shutters, container bodies and stainless steel works.",
  path: "/services",
});

export default async function ServicesPage() {
  const { t, lang } = await getI18n();
  const gallery = await getGalleryItems();

  return (
    <>
      <PageHero title={t.services.title} eyebrow={t.services.eyebrow} intro={t.services.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.services, path: "/services" }]} crumbLabel={t.breadcrumbs.label} />

      {/* Service Grid */}
      <section className="bg-white py-8 sm:py-20">
        <Container>
          <ServiceGrid lang={lang} cta={t.cta.viewDetails} />
          {/* Small "All Works" button at the bottom of services */}
          <div className="mt-8 flex justify-center sm:mt-12">
            <Link
              href="#all-works"
              className="inline-flex items-center gap-2 border border-steel/30 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink shadow-sm transition-all hover:border-accent hover:bg-accent hover:text-ink sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t.cta.allWorks}
            </Link>
          </div>
        </Container>
      </section>

      {/* All Works Gallery Section */}
      <section id="all-works" className="scroll-mt-24 bg-mist py-8 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <SectionHeading number="01" eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
            <div className="inline-flex items-center gap-2 border border-accent bg-accent px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-ink shadow-sm sm:px-5 sm:py-2.5 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-ink sm:h-2 sm:w-2" />
              {t.cta.allWorks}
            </div>
          </div>
          <div className="mt-6 sm:mt-12">
            <GalleryGrid items={gallery} />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-8 sm:py-16 text-white">
        <Container>
          <h2 className="font-display text-xl font-bold sm:text-3xl">{t.enquiry.title}</h2>
          <p className="mb-4 mt-1.5 text-xs text-mist/80 sm:mb-6 sm:mt-2 sm:text-base">{t.enquiry.text}</p>
          <ContactActions />
        </Container>
      </section>
    </>
  );
}

