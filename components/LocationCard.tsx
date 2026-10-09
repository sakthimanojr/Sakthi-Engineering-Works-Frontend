import { MapPin } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import { getMapLinks, site } from "@/data/site";
import { getI18n } from "@/i18n";

async function LocationCard({ kind }: { kind: "office" | "factory" }) {
  const { t } = await getI18n();
  const data = site[kind];
  const href = getMapLinks()[kind];
  return (
    <article className="bracket flex h-full flex-col border border-white/15 bg-coal p-6 text-white sm:p-8">
      <div className="flex items-center gap-3">
        <MapPin aria-hidden className="text-accent" size={24} />
        <h3 className="font-display text-2xl font-bold uppercase">{kind === "office" ? t.locations.office : t.locations.factory}</h3>
      </div>
      <address className="mt-5 flex-1 not-italic leading-relaxed text-mist/90">
        {data.lines.map((line) => (<span key={line} className="block">{line}</span>))}
      </address>
      <div className="mt-6"><ButtonLink href={href} variant="outline">{t.cta.directions}</ButtonLink></div>
    </article>
  );
}

export const OfficeCard = () => <LocationCard kind="office" />;
export const FactoryCard = () => <LocationCard kind="factory" />;
