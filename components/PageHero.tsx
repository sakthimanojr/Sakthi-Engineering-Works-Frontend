import Image from "next/image";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageHero({ title, eyebrow, intro, crumbs, crumbLabel, image, imageAlt }: { title: string; eyebrow?: string; intro?: string; crumbs: { name: string; path: string }[]; crumbLabel?: string; image?: string; imageAlt?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-14 pt-32 text-white sm:pb-20 sm:pt-40">
      {image && <Image src={image} alt={imageAlt ?? ""} fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />}
      <div aria-hidden className="grid-bg-dark absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <Container>
        <Breadcrumbs items={crumbs} label={crumbLabel} />
        {eyebrow && <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mist/85">{intro}</p>}
        <div aria-hidden className="measure mt-10 max-w-md text-accent" />
      </Container>
    </section>
  );
}
