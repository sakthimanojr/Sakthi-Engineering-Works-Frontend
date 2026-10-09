import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";

export default async function Hero() {
  const { t } = await getI18n();
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-32 text-white sm:items-center sm:pb-20">
      {/* Replace public/images/hero/hero-peb.jpg with the real photograph (same file name). */}
      <Image src="/images/hero/hero-peb.jpg" alt={t.hero.imageAlt} fill priority sizes="100vw" className="-z-30 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-20 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div aria-hidden className="grid-bg-dark absolute inset-0 -z-10" />
      <Container>
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          <span aria-hidden className="h-0.5 w-10 bg-accent" />{site.descriptor}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">{t.hero.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/90 sm:text-xl">{t.hero.text}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href="/quote">{t.cta.quote}</ButtonLink>
          <WhatsAppButton label={t.cta.whatsapp} />
          <ButtonLink href="/projects" variant="outline">{t.cta.viewWork}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
