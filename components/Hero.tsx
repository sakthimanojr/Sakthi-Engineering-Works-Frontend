import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";

export default async function Hero() {
  const { t } = await getI18n();
  return (
    <section className="relative isolate flex min-h-[85svh] sm:min-h-[100vh] items-center overflow-hidden bg-ink pt-24 pb-12 sm:pt-32 sm:pb-20 text-white">
      {/* Home screen background video — crystal clear and bright in background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-welder-poster.jpg"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src="/videos/hero-welder.mp4" type="video/mp4" />
      </video>

      {/* Poster image fallback underneath */}
      <Image
        src="/videos/hero-welder-poster.jpg"
        alt={t.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-40 object-cover"
      />

      {/* Balanced, subtle scrim so video remains bright & vivid while text is perfectly legible */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-ink/65 via-ink/25 to-transparent sm:from-ink/55 sm:via-ink/20 sm:to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/55 via-transparent to-transparent sm:hidden"
      />

      <Container className="relative z-10 w-full">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:gap-2.5 sm:text-sm sm:tracking-[0.2em]">
          <span aria-hidden className="h-0.5 w-6 bg-accent sm:w-10" />{site.descriptor}
        </p>
        <h1 className="mt-2.5 max-w-4xl font-display text-2xl xs:text-3xl font-bold uppercase leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:mt-5 sm:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-2.5 max-w-2xl text-xs sm:text-lg lg:text-xl leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:mt-6">
          {t.hero.text}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-8 sm:gap-3">
          <ButtonLink href="/quote">{t.cta.quote}</ButtonLink>
          <WhatsAppButton label={t.cta.whatsapp} />
          <ButtonLink href="/services" variant="outline">{t.cta.explore}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

