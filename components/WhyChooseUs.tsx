import Reveal from "@/components/Reveal";
import type { Dict } from "@/i18n/en";

export default function WhyChooseUs({ t }: { t: Dict }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {t.why.items.map((item, i) => (
        <li key={item.title}>
          <Reveal delay={(i % 3) * 80} className="h-full">
            <div className="h-full border-l-4 border-accent bg-white p-6 shadow-sm">
              <span className="font-display text-sm font-bold text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-display text-2xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-steel">{item.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
