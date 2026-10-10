/**
 * Central business information. Edit here, not inside components.
 * Social and map links come from environment variables (see .env.example).
 */
export const site = {
  name: "Sakthi Engineering Works",
  since: 2005,
  domain: "sakthi-engineering-works-frontend.vercel.app",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sakthi-engineering-works-frontend.vercel.app",
  // Temporary descriptor – NOT an official tagline. Replace via NEXT_PUBLIC_DESCRIPTOR.
  descriptor: process.env.NEXT_PUBLIC_DESCRIPTOR || "Fabrication • Engineering • Structures",
  owner: "Ramamoorthy Varadharaj",
  managingDirector: "Divakar",
  serviceArea: { en: "All Over India", ta: "இந்தியா முழுவதும்" },
  office: {
    lines: ["Sakthi Engineering Works", "Sholinghur Road,", "Walajapet, Ranipet,", "Tamil Nadu – 632512"],
    street: "Sholinghur Road",
    locality: "Walajapet, Ranipet",
    region: "Tamil Nadu",
    postalCode: "632512",
  },
  factory: {
    lines: ["Sakthi Engineering Works", "Opp. Post Office, Anandhalai,", "Walajapet, Ranipet,", "Tamil Nadu – 632513"],
    street: "Opp. Post Office, Anandhalai",
    locality: "Walajapet, Ranipet",
    region: "Tamil Nadu",
    postalCode: "632513",
  },
  phones: [
    { display: "+91 9025233075", tel: "+919025233075" },
    { display: "+91 8015810364", tel: "+918015810364" },
  ],
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918015810364",
  whatsappDisplay: "+91 8015810364",
  email: process.env.NEXT_PUBLIC_EMAIL || "sakthiengineeringworks25@gmail.com",
} as const;

export function getSocials(): { label: string; href: string }[] {
  const list = [
    { label: "Facebook", href: process.env.FACEBOOK_URL },
    { label: "Instagram", href: process.env.INSTAGRAM_URL },
    { label: "YouTube", href: process.env.YOUTUBE_URL },
    { label: "LinkedIn", href: process.env.LINKEDIN_URL },
    { label: "Google Business Profile", href: process.env.GOOGLE_BUSINESS_URL },
    { label: "Other", href: process.env.OTHER_SOCIAL_URL },
  ];
  return list.filter((s): s is { label: string; href: string } => Boolean(s.href && s.href.trim()));
}

function mapSearch(parts: readonly string[]) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parts.join(" "))}`;
}

export function getMapLinks() {
  return {
    office: process.env.OFFICE_MAP_URL?.trim() || mapSearch([...site.office.lines.slice(0, 1), site.office.street, site.office.locality, site.office.region, site.office.postalCode]),
    factory: process.env.FACTORY_MAP_URL?.trim() || mapSearch([...site.factory.lines.slice(0, 1), site.factory.street, site.factory.locality, site.factory.region, site.factory.postalCode]),
  };
}
