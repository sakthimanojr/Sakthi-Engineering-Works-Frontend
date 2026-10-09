import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";
import { getI18n } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Privacy Policy", description: "How Sakthi Engineering Works handles information you send through this website.", path: "/privacy" });

export default async function Page() {
  const { t } = await getI18n();
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ name: t.nav.home, path: "/" }, { name: "Privacy Policy", path: "/privacy" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-white py-16">
        <Container>
          <article className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed">
            <p><em>This is a basic, editable policy. Have it reviewed before relying on it.</em></p>
            <h2 className="font-display text-2xl font-bold text-ink">Information we collect</h2>
            <p>When you send an enquiry we receive the details you enter: your name, contact details, requirement and any file you attach.</p>
            <h2 className="font-display text-2xl font-bold text-ink">How we use it</h2>
            <p>We use this information only to respond to your enquiry and to prepare quotations. We do not sell your information.</p>
            <h2 className="font-display text-2xl font-bold text-ink">Storage and sharing</h2>
            <p>Enquiries may be stored in our database and sent to our team by email. Your attachments are not published.</p>
            <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
            <p>For any request about your information, contact {site.name} at <a className="font-semibold text-accent-deep underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </article>
        </Container>
      </section>
    </>
  );
}
