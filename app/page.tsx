import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";
import FeaturedService from "@/components/FeaturedService";
import ServiceGrid from "@/components/ServiceGrid";
import MachineryCard from "@/components/MachineryCard";
import IndustryCard from "@/components/IndustryCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import GalleryGrid from "@/components/GalleryGrid";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import { OfficeCard, FactoryCard } from "@/components/LocationCard";
import { services } from "@/data/services";
import { machinery, projectTypes } from "@/data/machinery";
import { getI18n } from "@/i18n";
import { getGalleryItems } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Steel Fabrication Company in Walajapet, Ranipet | Sakthi Engineering Works",
  description: "Sakthi Engineering Works, Walajapet, Ranipet: structural steel fabrication, industrial sheds, PEB buildings, sheet bending and shearing, gates, staircases, rolling shutters, container bodies and stainless steel works since 2005.",
  path: "/",
});

export default async function HomePage() {
  const { t, lang } = await getI18n();
  const featured = services.filter((s) => s.featured);
  const gallery = await getGalleryItems();
  const capIcons = ["01", "02", "03", "04"];

  return (
    <>
      <Hero />

      {/* Experience strip — Compact responsive bar */}
      <section aria-label="Since 2005" className="border-y border-ink/10 bg-accent text-ink">
        <Container className="py-2.5 sm:py-3.5">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-display text-xs font-bold uppercase tracking-wider text-ink xs:text-sm sm:text-base lg:text-xl">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/70 sm:hidden" />
              {t.strip.since}
            </span>
            <span className="hidden text-ink/40 sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/70 sm:hidden" />
              {t.strip.field}
            </span>
            <span className="hidden text-ink/40 sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/70 sm:hidden" />
              {t.strip.area}
            </span>
          </div>
        </Container>
      </section>

      {/* About (light) */}
      <section className="grid-bg-light bg-white py-12 sm:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SectionHeading number="01" eyebrow={t.about.eyebrow} title={t.about.title} />
            <div className="mt-4 space-y-3 text-base leading-relaxed sm:mt-6 sm:space-y-4 sm:text-lg">
              <p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p>
            </div>
            <div className="mt-6 sm:mt-8"><ButtonLink href="/about" variant="dark">{t.nav.about}</ButtonLink></div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bracket relative aspect-[4/3] bg-ink">
              <Image src="/images/about/about.jpg" alt={t.about.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services — featured + full grid */}
      <section className="bg-mist py-12 sm:py-20">
        <Container>
          <SectionHeading number="02" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
          <ul className="mt-8 grid gap-4 sm:gap-6 lg:grid-cols-3">
            {featured.map((s) => (<li key={s.slug}><Reveal className="h-full"><FeaturedService service={s} lang={lang} cta={t.cta.viewDetails} /></Reveal></li>))}
          </ul>
          <div className="mt-8 sm:mt-10"><ServiceGrid lang={lang} cta={t.cta.viewDetails} /></div>
        </Container>
      </section>

      {/* Industrial capability (dark) */}
      <section className="steel-texture relative bg-ink py-12 text-white sm:py-20">
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <Container className="relative">
          <SectionHeading dark number="03" eyebrow={t.capability.eyebrow} title={t.capability.title} intro={t.capability.intro} />
          <ul className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.capability.items.map((c, i) => (
              <li key={c.title} className="bg-ink p-5 sm:p-7">
                <span className="font-display text-3xl font-bold text-accent sm:text-4xl">{capIcons[i]}</span>
                <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{c.title}</h3>
                <p className="mt-1 text-sm text-mist/80 sm:text-base">{c.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Machinery (light) */}
      <section className="bg-mist py-12 sm:py-20">
        <Container>
          <SectionHeading number="04" eyebrow={t.machinery.eyebrow} title={t.machinery.title} intro={t.machinery.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {machinery.map((m, i) => (<li key={m.slug}><Reveal className="h-full"><MachineryCard machine={m} lang={lang} index={i} /></Reveal></li>))}
          </ul>
        </Container>
      </section>

      {/* Industries (dark) */}
      <section className="bg-ink py-12 text-white sm:py-20">
        <Container>
          <SectionHeading dark number="05" eyebrow={t.industries.eyebrow} title={t.industries.title} intro={t.industries.intro} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {projectTypes.map((p) => (<li key={p.slug}><IndustryCard item={p} lang={lang} /></li>))}
          </ul>
        </Container>
      </section>

      {/* Why choose us (light) */}
      <section className="bg-mist py-12 sm:py-20">
        <Container>
          <SectionHeading number="06" eyebrow={t.why.eyebrow} title={t.why.title} />
          <div className="mt-8 sm:mt-12"><WhyChooseUs t={t} /></div>
          <div className="mt-8 border border-dashed border-steel/40 bg-white p-4 text-center sm:p-6">
            <h3 className="font-display text-lg font-bold text-ink sm:text-xl">{t.testimonials.title}</h3>
            <p className="mt-1 text-sm text-steel sm:text-base">{t.testimonials.text}</p>
          </div>
        </Container>
      </section>

      {/* All Works Showcase (light) */}
      <section className="bg-white py-12 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading number="07" eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
            <ButtonLink href="/services#all-works" variant="outlineDark">{t.cta.allWorks}</ButtonLink>
          </div>
          <div className="mt-8 sm:mt-12"><GalleryGrid items={gallery} limit={6} /></div>
        </Container>
      </section>

      {/* Quick Enquiry CTA (dark) */}
      <section className="steel-texture relative bg-ink py-12 text-white sm:py-20">
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <Container className="relative grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading dark number="08" eyebrow={t.enquiry.eyebrow} title={t.enquiry.title} intro={t.enquiry.text} />
            <p className="mt-4 sm:mt-6"><Link href="/quote" className="font-bold text-accent underline underline-offset-4">{t.cta.sendDetails}</Link></p>
          </div>
          <div className="bg-coal p-5 sm:p-8"><QuickEnquiryForm idPrefix="home" dark /></div>
        </Container>
      </section>

      {/* Office + Factory (dark) */}
      <section className="bg-coal py-12 text-white sm:py-20">
        <Container>
          <SectionHeading dark number="09" eyebrow={t.locations.eyebrow} title={t.locations.title} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 sm:gap-6"><OfficeCard /><FactoryCard /></div>
        </Container>
      </section>
    </>
  );
}
