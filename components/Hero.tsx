import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";

export default async function Hero() {
  const { t } = await getI18n();
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink pt-20 pb-12 sm:pt-32 sm:pb-20 text-white">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-welder-poster.jpg"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full object-cover object-[75%_center] sm:object-center brightness-110 hero-video-media"
      >
        <source src="/videos/hero-welder.mp4" type="video/mp4" />
      </video>

      {/* Poster fallback */}
      <Image
        src="/videos/hero-welder-poster.jpg"
        alt={t.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-40 object-cover object-[75%_center] sm:object-center hero-video-media"
      />

      {/* Scrim for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-ink/75 via-ink/45 to-ink/25 sm:from-ink/60 sm:via-ink/20 sm:to-transparent"
      />
      {/* Bottom fade on mobile */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink/60 to-transparent sm:hidden"
      />

      <Container className="relative z-10 w-full">
        {/* Eyebrow tag */}
        <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] sm:text-sm">
          <span aria-hidden className="h-px w-8 bg-accent sm:w-12" />
          {site.descriptor}
        </p>

        {/* Main headline */}
        <h1 className="mt-3 max-w-3xl font-display text-[1.75rem] font-bold uppercase leading-[1.08] tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] sm:mt-6 sm:text-5xl lg:text-7xl">
          {t.hero.title}
        </h1>

        {/* Supporting text */}
        <p className="mt-3 max-w-md text-sm leading-[1.7] text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] text-justify sm:mt-5 sm:max-w-xl sm:text-base lg:text-lg">
          {t.hero.text}
        </p>

        {/* CTAs — stacked on mobile, inline on desktop */}
        <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <ButtonLink href="/quote" variant="primary">
            {t.cta.quote}
          </ButtonLink>
          <ButtonLink href="/services" variant="outline">
            {t.cta.explore}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

