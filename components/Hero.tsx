import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";

export default async function Hero() {
  const { t } = await getI18n();
  return (
    <section className="relative isolate flex min-h-[55vh] sm:min-h-[100vh] items-end overflow-hidden bg-ink pb-6 pt-16 text-white sm:items-center sm:pb-20 sm:pt-32">
      {/* Home screen background video — clear and running in the background */}
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

      {/* Subtle soft scrim so the video stays vibrant and clear while text remains legible */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-transparent to-ink/20 sm:hidden"
      />

      <Container className="relative z-10">
        <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent drop-shadow sm:gap-2.5 sm:text-sm sm:tracking-[0.2em]">
          <span aria-hidden className="h-0.5 w-5 bg-accent sm:w-10" />{site.descriptor}
        </p>
        <h1 className="mt-2 max-w-4xl font-display text-xl font-bold uppercase leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] sm:mt-5 sm:text-6xl lg:text-7xl">{t.hero.title}</h1>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:mt-6 sm:text-xl">{t.hero.text}</p>
        <div className="mt-3 flex flex-row flex-wrap gap-2 sm:mt-9 sm:gap-2.5">
          <ButtonLink href="/quote">{t.cta.quote}</ButtonLink>
          <WhatsAppButton label={t.cta.whatsapp} />
          <ButtonLink href="/services" variant="outline">{t.cta.explore}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

