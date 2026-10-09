import clsx from "clsx";

export default function SectionHeading({ number, eyebrow, title, intro, dark, className }: { number?: string; eyebrow?: string; title: string; intro?: string; dark?: boolean; className?: string }) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        {number && <span className={clsx("font-display text-lg font-bold", dark ? "text-accent" : "text-accent-deep")}>{number}</span>}
        <span aria-hidden className="h-0.5 w-10 bg-accent" />
        {eyebrow && <span className={clsx("text-sm font-semibold uppercase tracking-[0.18em]", dark ? "text-mist/80" : "text-steel")}>{eyebrow}</span>}
      </div>
      <h2 className={clsx("mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl", dark ? "text-white" : "text-ink")}>{title}</h2>
      {intro && <p className={clsx("mt-4 text-lg leading-relaxed", dark ? "text-mist/80" : "text-steel")}>{intro}</p>}
    </div>
  );
}
