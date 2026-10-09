import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ButtonLink from "@/components/ButtonLink";
import ContactActions from "@/components/ContactActions";
import { getService } from "@/data/services";
import { getI18n } from "@/i18n";
import { getProject, getProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams() {
  return (await getProjects()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) return {};
  const base = pageMetadata({
    title: p.placeholder ? "Project information coming soon – Sakthi Engineering Works" : `${p.title} – Sakthi Engineering Works`,
    description: p.placeholder ? "Project details and photographs will be published here." : p.description.slice(0, 155),
    path: `/projects/${p.slug}`,
    image: p.images[0]?.url,
  });
  return p.placeholder ? { ...base, robots: { index: false, follow: true } } : base;
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  const { t, lang } = await getI18n();
  const path = `/projects/${project.slug}`;
  const category = getService(project.category)?.title[lang];
  const title = project.placeholder ? t.projects.comingSoon : project.title;

  return (
    <>
      <PageHero title={title} eyebrow={project.placeholder ? t.projects.badge : category} crumbs={[{ name: t.nav.home, path: "/" }, { name: t.nav.projects, path: "/projects" }, { name: title, path }]} crumbLabel={t.breadcrumbs.label} />
      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-4">
            {project.images.map((img) => (
              <div key={img.url} className="relative aspect-[16/10] bg-ink"><Image src={img.url} alt={img.alt} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" /></div>
            ))}
          </div>
          <div>
            <dl className="divide-y divide-steel/15 border border-steel/20">
              <div className="p-4"><dt className="text-sm font-semibold uppercase tracking-wider text-steel">{t.projects.category}</dt><dd className="mt-1 font-semibold text-ink">{category ?? t.projects.toBeUpdated}</dd></div>
              <div className="p-4"><dt className="text-sm font-semibold uppercase tracking-wider text-steel">{t.projects.location}</dt><dd className="mt-1 font-semibold text-ink">{project.location ?? t.projects.toBeUpdated}</dd></div>
            </dl>
            <p className="mt-6 text-lg">{project.placeholder ? t.projects.badge : project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/projects" variant="outlineDark">{t.projects.back}</ButtonLink><ButtonLink href="/quote">{t.cta.requestQuote}</ButtonLink></div>
          </div>
        </Container>
      </section>
      <section className="bg-ink py-14 text-white"><Container><ContactActions /></Container></section>
    </>
  );
}
