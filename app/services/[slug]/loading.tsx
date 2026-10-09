import Container from "@/components/Container";
import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading">
      <div className="bg-ink pb-16 pt-40"><Container><Skeleton className="h-12 w-2/3 bg-white/10" /></Container></div>
      <Container className="grid gap-10 py-16 lg:grid-cols-2"><div className="space-y-4"><Skeleton className="h-6 w-full" /><Skeleton className="h-6 w-5/6" /><Skeleton className="h-40 w-full" /></div><Skeleton className="aspect-[4/3] w-full" /></Container>
    </div>
  );
}
