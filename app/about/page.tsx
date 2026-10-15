import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ButtonLink from "@/components/ButtonLink";
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

      {/* About text + image */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <div className="bracket relative aspect-[4/3] bg-ink">
            <Image src="/images/about/about.jpg" alt={t.about.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover brightness-105" />
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-mist py-12 sm:py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{t.about.leadership}</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="border-l-4 border-accent bg-white p-6"><dt className="text-sm font-semibold uppercase tracking-wider text-steel">{t.about.owner}</dt><dd className="mt-1 font-display text-2xl font-bold text-ink">{site.owner}</dd></div>
            <div className="border-l-4 border-accent bg-white p-6"><dt className="text-sm font-semibold uppercase tracking-wider text-steel">{t.about.md}</dt><dd className="mt-1 font-display text-2xl font-bold text-ink">{site.managingDirector}</dd></div>
          </dl>
        </Container>
      </section>

      {/* Simple contact CTA — no duplicate location cards */}
      <section className="bg-coal py-12 text-white sm:py-16">
        <Container>
          <p className="font-display text-2xl font-bold sm:text-3xl">{t.enquiry.title}</p>
          <p className="mt-3 text-sm text-mist/80 sm:text-base">{t.enquiry.text}</p>
          <p className="mt-2 text-sm text-mist/70">{site.serviceArea[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">{t.nav.contact}</ButtonLink>
            <ButtonLink href="/quote" variant="outline">{t.cta.quote}</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
