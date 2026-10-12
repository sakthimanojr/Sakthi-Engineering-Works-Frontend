import clsx from "clsx";

export default function SectionHeading({ number, eyebrow, title, intro, dark, className }: { number?: string; eyebrow?: string; title: string; intro?: string; dark?: boolean; className?: string }) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      <div className="flex items-center gap-2 sm:gap-3">
        {number && <span className={clsx("font-display text-base font-bold sm:text-lg", dark ? "text-accent" : "text-accent-deep")}>{number}</span>}
        <span aria-hidden className="h-0.5 w-6 bg-accent sm:w-10" />
        {eyebrow && <span className={clsx("text-xs font-semibold uppercase tracking-[0.15em] sm:text-sm sm:tracking-[0.18em]", dark ? "text-mist/80" : "text-steel")}>{eyebrow}</span>}
      </div>
      <h2 className={clsx("mt-2.5 font-display text-xl font-bold leading-tight sm:mt-4 sm:text-4xl lg:text-5xl", dark ? "text-white" : "text-ink")}>{title}</h2>
      {intro && <p className={clsx("mt-2 text-sm leading-relaxed sm:mt-4 sm:text-lg", dark ? "text-mist/80" : "text-steel")}>{intro}</p>}
    </div>
  );
}

