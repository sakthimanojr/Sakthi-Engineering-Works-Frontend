import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import { getI18n } from "@/i18n";

export default async function NotFound() {
  const { t } = await getI18n();
  return (
    <section className="grid-bg-dark bg-ink pb-24 pt-44 text-white">
      <Container>
        <p className="font-display text-8xl font-bold text-accent">404</p>
        <h1 className="mt-2 font-display text-4xl font-bold">{t.notFound.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-mist/80">{t.notFound.text}</p>
        <div className="mt-8"><ButtonLink href="/">{t.notFound.home}</ButtonLink></div>
      </Container>
    </section>
  );
}
