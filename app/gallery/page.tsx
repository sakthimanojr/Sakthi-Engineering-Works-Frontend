import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { getI18n } from "@/i18n";
import { getGalleryItems } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Photo Gallery – Fabrication, Sheds, Gates and Machinery",
  description: "Photographs of the Sakthi Engineering Works factory, machinery and fabrication work: structural sheds, PEB, roofing, gates, grills, staircases, shutters, container bodies and stainless steel.",
  path: "/gallery",
});

export default async function GalleryPage() {
  const { t } = await getI18n();
  const items = await getGalleryItems();
  return (
    <>
      <PageHero title={t.gallery.title} eyebrow={t.gallery.eyebrow} intro={t.gallery.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.gallery, path: "/gallery" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-white py-16"><Container><GalleryGrid items={items} /></Container></section>
    </>
  );
}
