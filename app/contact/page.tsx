import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactCard from "@/components/ContactCard";
import EnquiryForm from "@/components/EnquiryForm";
import { OfficeCard, FactoryCard } from "@/components/LocationCard";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Sakthi Engineering Works – Walajapet, Ranipet",
  description: "Call, WhatsApp or email Sakthi Engineering Works. Office on Sholinghur Road and factory at Anandhalai, Walajapet, Ranipet, Tamil Nadu. Service all over India.",
  path: "/contact",
});

export default async function ContactPage() {
  const { t } = await getI18n();
  return (
    <>
      <PageHero title={t.contact.title} eyebrow={t.contact.eyebrow} intro={t.contact.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.contact, path: "/contact" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-mist py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <ContactCard />
          <div className="border border-steel/20 bg-white p-6 sm:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink">{t.contact.formTitle}</h2>
            <EnquiryForm kind="contact" idPrefix="contact" />
          </div>
        </Container>
      </section>
      <section className="bg-coal py-16"><Container className="grid gap-6 md:grid-cols-2"><OfficeCard /><FactoryCard /></Container></section>
    </>
  );
}
