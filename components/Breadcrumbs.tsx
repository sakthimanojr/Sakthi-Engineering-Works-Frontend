import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export default function Breadcrumbs({ items, label = "Breadcrumb" }: { items: { name: string; path: string }[]; label?: string }) {
  return (
    <>
      <nav aria-label={label} className="text-sm text-mist/80">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((it, i) => (
            <li key={it.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === items.length - 1 ? <span aria-current="page" className="text-white">{it.name}</span> : <Link href={it.path} className="hover:text-accent">{it.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </>
  );
}
