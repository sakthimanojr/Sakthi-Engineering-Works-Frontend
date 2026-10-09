"use client";

import Container from "@/components/Container";
import { useI18n } from "@/components/I18nProvider";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useI18n();
  return (
    <section className="grid-bg-dark bg-ink pb-24 pt-44 text-white">
      <Container>
        <h1 className="font-display text-4xl font-bold">{t.errorPage.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-mist/80">{t.errorPage.text}</p>
        <button type="button" onClick={reset} className="mt-8 min-h-12 bg-accent px-8 text-sm font-bold uppercase tracking-wider text-ink hover:bg-white">{t.errorPage.retry}</button>
      </Container>
    </section>
  );
}
