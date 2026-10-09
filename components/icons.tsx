import { Building2, Construction, Cog, Drill, Factory, Flame, Hammer, HardHat, Landmark, Layers, Ruler, Scissors, ShieldCheck, Store, Truck, Warehouse, Wrench, Zap } from "lucide-react";
import type { LucideProps } from "lucide-react";

const map = { Building2, Construction, Cog, Drill, Factory, Flame, Hammer, HardHat, Landmark, Layers, Ruler, Scissors, ShieldCheck, Store, Truck, Warehouse, Wrench, Zap };

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name as keyof typeof map] ?? Cog;
  return <C aria-hidden {...props} />;
}
