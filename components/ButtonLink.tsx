import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "outline" | "outlineDark" | "dark";
const styles: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-white",
  outline: "border border-white/70 text-white hover:bg-white hover:text-ink",
  outlineDark: "border border-ink text-ink hover:bg-ink hover:text-white",
  dark: "bg-ink text-white hover:bg-accent hover:text-ink",
};

export default function ButtonLink({ href, children, variant = "primary", className, external, label }: { href: string; children: React.ReactNode; variant?: Variant; className?: string; external?: boolean; label?: string }) {
  const cls = clsx("inline-flex min-h-10 items-center justify-center gap-2 rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm", styles[variant], className);
  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} className={cls} aria-label={label} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={cls} aria-label={label}>{children}</Link>;
}
