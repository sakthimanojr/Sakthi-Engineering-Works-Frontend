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
import ProjectGrid from "@/components/ProjectGrid";
import MachineryCard from "@/components/MachineryCard";
import IndustryCard from "@/components/IndustryCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import GalleryGrid from "@/components/GalleryGrid";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import { OfficeCard, FactoryCard } from "@/components/LocationCard";
import { services } from "@/data/services";
import { machinery, projectTypes } from "@/data/machinery";
import { getI18n } from "@/i18n";
import { getProjects } from "@/lib/projects";
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
  const projects = (await getProjects()).slice(0, 3);
  const gallery = await getGalleryItems();
  const capIcons = ["01", "02", "03", "04"];

  return (
    <>
      <Hero />

      {/* Experience strip */}
      <section aria-label="Since 2005" className="bg-accent text-ink">
        <Container className="grid divide-y divide-ink/20 py-2 text-center font-display text-xl font-bold uppercase tracking-wide sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:text-2xl">
          <p className="py-4">{t.strip.since}</p>
          <p className="py-4">{t.strip.field}</p>
          <p className="py-4">{t.strip.area}</p>
        </Container>
      </section>

      {/* About (light) */}
      <section className="grid-bg-light bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading number="01" eyebrow={t.about.eyebrow} title={t.about.title} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p>
            </div>
            <div className="mt-8"><ButtonLink href="/about" variant="dark">{t.nav.about}</ButtonLink></div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bracket relative aspect-[4/3] bg-ink">
              <Image src="/images/about/about.jpg" alt={t.about.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services — featured + full grid combined */}
      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <SectionHeading number="02" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((s) => (<li key={s.slug}><Reveal className="h-full"><FeaturedService service={s} lang={lang} cta={t.cta.viewDetails} /></Reveal></li>))}
          </ul>
          <div className="mt-10"><ServiceGrid lang={lang} cta={t.cta.viewDetails} /></div>
        </Container>
      </section>

      {/* Industrial capability (dark) */}
      <section className="steel-texture relative bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <Container className="relative">
          <SectionHeading dark number="03" eyebrow={t.capability.eyebrow} title={t.capability.title} intro={t.capability.intro} />
          <ul className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {t.capability.items.map((c, i) => (
              <li key={c.title} className="bg-ink p-7">
                <span className="font-display text-4xl font-bold text-accent">{capIcons[i]}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{c.title}</h3>
                <p className="mt-2 text-mist/80">{c.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Projects (dark) */}
      <section className="bg-coal py-20 text-white sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading dark number="04" eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro} />
            <ButtonLink href="/projects" variant="outline">{t.cta.viewAll}</ButtonLink>
          </div>
          <div className="mt-12"><ProjectGrid projects={projects} lang={lang} t={t} /></div>
        </Container>
      </section>

      {/* Machinery (light) */}
      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <SectionHeading number="05" eyebrow={t.machinery.eyebrow} title={t.machinery.title} intro={t.machinery.intro} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {machinery.map((m, i) => (<li key={m.slug}><Reveal className="h-full"><MachineryCard machine={m} lang={lang} index={i} /></Reveal></li>))}
          </ul>
        </Container>
      </section>

      {/* Industries (dark) */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <SectionHeading dark number="06" eyebrow={t.industries.eyebrow} title={t.industries.title} intro={t.industries.intro} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((p) => (<li key={p.slug}><IndustryCard item={p} lang={lang} /></li>))}
          </ul>
        </Container>
      </section>

      {/* Why choose us (light) */}
      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <SectionHeading number="07" eyebrow={t.why.eyebrow} title={t.why.title} />
          <div className="mt-12"><WhyChooseUs t={t} /></div>
          <div className="mt-10 border border-dashed border-steel/40 bg-white p-6 text-center">
            <h3 className="font-display text-xl font-bold text-ink">{t.testimonials.title}</h3>
            <p className="mt-1 text-steel">{t.testimonials.text}</p>
          </div>
        </Container>
      </section>

      {/* Gallery (light) */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading number="08" eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />
            <ButtonLink href="/gallery" variant="outlineDark">{t.cta.viewAll}</ButtonLink>
          </div>
          <div className="mt-12"><GalleryGrid items={gallery} limit={6} /></div>
        </Container>
      </section>

      {/* Enquiry CTA (dark) */}
      <section className="steel-texture relative bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <Container className="relative grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading dark number="09" eyebrow={t.enquiry.eyebrow} title={t.enquiry.title} intro={t.enquiry.text} />
            <p className="mt-6"><Link href="/quote" className="font-bold text-accent underline underline-offset-4">{t.cta.sendDetails}</Link></p>
          </div>
          <div className="bg-coal p-6 sm:p-8"><QuickEnquiryForm idPrefix="home" dark /></div>
        </Container>
      </section>

      {/* Office + Factory (dark) */}
      <section className="bg-coal py-20 text-white sm:py-28">
        <Container>
          <SectionHeading dark number="10" eyebrow={t.locations.eyebrow} title={t.locations.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2"><OfficeCard /><FactoryCard /></div>
        </Container>
      </section>
    </>
  );
}
