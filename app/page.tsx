import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";
import ServiceGrid from "@/components/ServiceGrid";
import MachineryCard from "@/components/MachineryCard";
import IndustryCard from "@/components/IndustryCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import QuickEnquiryForm from "@/components/QuickEnquiryForm";
import { OfficeCard, FactoryCard } from "@/components/LocationCard";
import { machinery, projectTypes } from "@/data/machinery";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Steel Fabrication Company in Walajapet, Ranipet | Sakthi Engineering Works",
  description: "Sakthi Engineering Works, Walajapet, Ranipet: structural steel fabrication, industrial sheds, PEB buildings, sheet bending and shearing, gates, staircases, rolling shutters, container bodies and stainless steel works since 2005.",
  path: "/",
});

export default async function HomePage() {
  const { t, lang } = await getI18n();
  const capIcons = ["01", "02", "03", "04"];

  return (
    <>
      <Hero />

      {/* Experience strip — single compact row */}
      <section aria-label="Since 2005" className="border-y border-ink/10 bg-accent text-ink">
        <Container className="py-2 sm:py-3.5">
          <div className="flex items-center justify-center gap-x-2 overflow-hidden text-center font-display text-[9px] font-bold uppercase tracking-wide text-ink sm:gap-x-3 sm:text-base lg:text-xl">
            <span className="shrink-0">{t.strip.since}</span>
            <span className="shrink-0 text-ink/40">•</span>
            <span className="shrink truncate">{t.strip.field}</span>
            <span className="shrink-0 text-ink/40">•</span>
            <span className="shrink-0">{t.strip.area}</span>
          </div>
        </Container>
      </section>

      {/* About (light) */}
      <section className="grid-bg-light bg-white py-8 sm:py-20">
        <Container className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <SectionHeading number="01" eyebrow={t.about.eyebrow} title={t.about.title} />
            <div className="mt-3 space-y-2 text-sm leading-relaxed sm:mt-6 sm:space-y-4 sm:text-lg">
              <p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p>
            </div>
            <div className="mt-4 sm:mt-8"><ButtonLink href="/about" variant="dark">{t.nav.about}</ButtonLink></div>
          </Reveal>
          <Reveal delay={100}>
            <div className="bracket relative aspect-[4/3] bg-ink">
              <Image src="/images/about/about.jpg" alt={t.about.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services — full grid */}
      <section className="bg-mist py-8 sm:py-20">
        <Container>
          <SectionHeading number="02" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
          <div className="mt-6 sm:mt-10"><ServiceGrid lang={lang} cta={t.cta.viewDetails} /></div>
        </Container>
      </section>

      {/* Industrial capability (dark) */}
      <section className="steel-texture relative bg-ink py-8 text-white sm:py-20">
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <Container className="relative">
          <SectionHeading dark number="03" eyebrow={t.capability.eyebrow} title={t.capability.title} intro={t.capability.intro} />
          <ul className="mt-6 grid gap-px bg-white/10 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.capability.items.map((c, i) => (
              <li key={c.title} className="bg-ink p-4 sm:p-7">
                <span className="font-display text-xl font-bold text-accent sm:text-4xl">{capIcons[i]}</span>
                <h3 className="mt-1.5 font-display text-lg font-bold sm:mt-2 sm:text-2xl">{c.title}</h3>
                <p className="mt-1 text-xs text-mist/80 sm:text-base">{c.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Machinery (light) */}
      <section className="bg-mist py-8 sm:py-20">
        <Container>
          <SectionHeading number="04" eyebrow={t.machinery.eyebrow} title={t.machinery.title} intro={t.machinery.intro} />
          <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {machinery.map((m, i) => (<li key={m.slug}><Reveal className="h-full"><MachineryCard machine={m} lang={lang} index={i} /></Reveal></li>))}
          </ul>
        </Container>
      </section>

      {/* Industries (dark) */}
      <section className="bg-ink py-8 text-white sm:py-20">
        <Container>
          <SectionHeading dark number="05" eyebrow={t.industries.eyebrow} title={t.industries.title} intro={t.industries.intro} />
          <ul className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {projectTypes.map((p) => (<li key={p.slug}><IndustryCard item={p} lang={lang} /></li>))}
          </ul>
        </Container>
      </section>

      {/* Why choose us (light) */}
      <section className="bg-mist py-8 sm:py-20">
        <Container>
          <SectionHeading number="06" eyebrow={t.why.eyebrow} title={t.why.title} />
          <div className="mt-6 sm:mt-12"><WhyChooseUs t={t} /></div>
          <div className="mt-6 border border-dashed border-steel/40 bg-white p-3 text-center sm:mt-8 sm:p-6">
            <h3 className="font-display text-base font-bold text-ink sm:text-xl">{t.testimonials.title}</h3>
            <p className="mt-1 text-xs text-steel sm:text-base">{t.testimonials.text}</p>
          </div>
        </Container>
      </section>

      {/* Quick Enquiry CTA (dark) */}
      <section className="steel-texture relative bg-ink py-8 text-white sm:py-20">
        <div aria-hidden className="grid-bg-dark absolute inset-0" />
        <Container className="relative grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading dark number="07" eyebrow={t.enquiry.eyebrow} title={t.enquiry.title} intro={t.enquiry.text} />
            <p className="mt-3 sm:mt-6"><Link href="/quote" className="font-bold text-accent underline underline-offset-4">{t.cta.sendDetails}</Link></p>
          </div>
          <div className="bg-coal p-4 sm:p-8"><QuickEnquiryForm idPrefix="home" dark /></div>
        </Container>
      </section>

      {/* Office + Factory (dark) */}
      <section className="bg-coal py-8 text-white sm:py-20">
        <Container>
          <SectionHeading dark number="08" eyebrow={t.locations.eyebrow} title={t.locations.title} />
          <div className="mt-6 grid gap-3 md:grid-cols-2 sm:mt-8 sm:gap-6"><OfficeCard /><FactoryCard /></div>
        </Container>
      </section>
    </>
  );
}

