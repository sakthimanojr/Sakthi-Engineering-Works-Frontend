import Image from "next/image";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageHero({ title, eyebrow, intro, crumbs, crumbLabel, image, imageAlt }: { title: string; eyebrow?: string; intro?: string; crumbs: { name: string; path: string }[]; crumbLabel?: string; image?: string; imageAlt?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-8 pt-16 text-white sm:pb-20 sm:pt-40">
      {image && <Image src={image} alt={imageAlt ?? ""} fill priority sizes="100vw" className="-z-20 object-cover opacity-55 brightness-110" />}
      <div aria-hidden className="grid-bg-dark absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <Container>
        <Breadcrumbs items={crumbs} label={crumbLabel} />
        {eyebrow && <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent sm:mt-8 sm:text-sm sm:tracking-[0.2em]">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl font-display text-xl font-bold leading-tight sm:mt-3 sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist/85 sm:mt-5 sm:text-lg">{intro}</p>}
        <div aria-hidden className="measure mt-6 max-w-md text-accent sm:mt-10" />
      </Container>
    </section>
  );
}

