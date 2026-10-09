import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import QuoteTabs from "@/components/QuoteTabs";
import ContactCard from "@/components/ContactCard";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote – Fabrication Enquiry",
  description: "Send your fabrication requirement to Sakthi Engineering Works, Walajapet. Share project details, dimensions and drawings for structural sheds, PEB, sheet bending and custom fabrication.",
  path: "/quote",
});

export default async function QuotePage() {
  const { t } = await getI18n();
  return (
    <>
      <PageHero title={t.quote.title} eyebrow={t.quote.eyebrow} intro={t.quote.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.quote.title, path: "/quote" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-mist py-16"><Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr]"><QuoteTabs /><ContactCard /></Container></section>
    </>
  );
}
