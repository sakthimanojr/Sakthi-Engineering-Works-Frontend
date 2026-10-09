import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, Noto_Sans_Tamil } from "next/font/google";
import "@/styles/globals.css";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";
import { getLogos } from "@/lib/logo";
import { organizationJsonLd } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { I18nProvider } from "@/components/I18nProvider";
import JsonLd from "@/components/JsonLd";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const tamil = Noto_Sans_Tamil({ subsets: ["tamil"], variable: "--font-tamil", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111315" };

export function generateMetadata(): Metadata {
  const logos = getLogos();
  return {
    metadataBase: new URL(site.url),
    title: { default: "Sakthi Engineering Works | Steel Fabrication in Walajapet, Ranipet", template: "%s | Sakthi Engineering Works" },
    description: "Steel and metal fabrication company in Walajapet, Ranipet, Tamil Nadu since 2005. Structural sheds, PEB buildings, sheet bending and shearing, gates, staircases and custom fabrication across India.",
    icons: logos.favicon ? { icon: logos.favicon } : undefined,
    applicationName: site.name,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang, t } = await getI18n();
  const logos = getLogos();
  return (
    <html lang={lang} className={`${display.variable} ${body.variable} ${tamil.variable}`}>
      <body>
        <noscript><style>{`.reveal{opacity:1!important;transform:none!important}`}</style></noscript>
        <I18nProvider lang={lang} t={t}>
          <Header logoSrc={logos.white} name={site.name} />
          <main id="main" className="overflow-x-clip">{children}</main>
          <Footer />
          <MobileActionBar />
        </I18nProvider>
        {organizationJsonLd().map((d, i) => (<JsonLd key={i} data={d} />))}
      </body>
    </html>
  );
}
