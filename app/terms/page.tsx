import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Terms & Conditions", description: "Terms for using the Sakthi Engineering Works website.", path: "/terms" });

export default async function Page() {
  const { t } = await getI18n();
  return (
    <>
      <PageHero title="Terms & Conditions" crumbs={[{ name: t.nav.home, path: "/" }, { name: "Terms & Conditions", path: "/terms" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-white py-16">
        <Container>
          <article className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed">
            <p><em>This is a basic, editable set of terms. Have it reviewed before relying on it.</em></p>
            <h2 className="font-display text-2xl font-bold text-ink">Use of this website</h2>
            <p>The information on this website is for general guidance about the services of {site.name}. Images may be illustrative.</p>
            <h2 className="font-display text-2xl font-bold text-ink">Enquiries and quotations</h2>
            <p>Sending an enquiry does not create a contract. Scope, price and timelines apply only when confirmed in a written quotation or order.</p>
            <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
            <p>Questions about these terms: <a className="font-semibold text-accent-deep underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </article>
        </Container>
      </section>
    </>
  );
}
