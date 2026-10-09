import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProjectGrid from "@/components/ProjectGrid";
import ContactActions from "@/components/ContactActions";
import { IndustryGrid } from "@/components/IndustryGrid";
import { getI18n } from "@/i18n";
import { getProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects – Sheds, PEB Buildings and Fabrication Work",
  description: "Project categories handled by Sakthi Engineering Works, Walajapet: industrial sheds, warehouses, PEB buildings, platforms, roofing, gates, grills and staircases.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const { t, lang } = await getI18n();
  const projects = await getProjects();
  const allPlaceholder = projects.every((p) => p.placeholder);
  return (
    <>
      <PageHero title={t.projects.title} eyebrow={t.projects.eyebrow} intro={t.projects.intro} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.projects, path: "/projects" }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-coal py-20 text-white">
        <Container>
          {allPlaceholder && <p className="mb-8 border-l-4 border-accent bg-ink p-4 text-mist">{t.projects.placeholderNotice}</p>}
          <ProjectGrid projects={projects} lang={lang} t={t} />
        </Container>
      </section>
      <section className="bg-ink py-20 text-white"><Container><IndustryGrid lang={lang} t={t} /></Container></section>
      <section className="bg-mist py-16"><Container><ContactActions dark={false} /></Container></section>
    </>
  );
}
