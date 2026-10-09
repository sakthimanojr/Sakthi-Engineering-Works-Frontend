import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(opts: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = `${site.url}${opts.path}`;
  const image = opts.image || "/images/hero/hero-peb.jpg";
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: { title: opts.title, description: opts.description, url, siteName: site.name, locale: "en_IN", type: "website", images: [{ url: image }] },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: [image] },
  };
}

const address = (a: typeof site.office) => ({
  "@type": "PostalAddress", streetAddress: a.street, addressLocality: "Walajapet", addressRegion: "Tamil Nadu", postalCode: a.postalCode, addressCountry: "IN",
});

export function organizationJsonLd() {
  return [
    { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, telephone: site.phones[0].tel, foundingDate: String(site.since), founder: { "@type": "Person", name: site.owner } },
    {
      "@context": "https://schema.org", "@type": "LocalBusiness", name: site.name, url: site.url, email: site.email, telephone: site.phones.map((p) => p.tel),
      foundingDate: String(site.since), address: address(site.office), areaServed: { "@type": "Country", name: "India" },
      description: "Steel and metal fabrication company in Walajapet, Ranipet, Tamil Nadu serving customers all over India.",
    },
    { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url },
  ];
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return { "@context": "https://schema.org", "@type": "Service", name, description, url: `${site.url}${path}`, areaServed: { "@type": "Country", name: "India" }, provider: { "@type": "LocalBusiness", name: site.name, url: site.url } };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  };
}
