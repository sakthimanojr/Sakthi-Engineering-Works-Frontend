import Container from "@/components/Container";
import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Loading" className="bg-ink pb-24 pt-44">
      <Container className="space-y-4"><Skeleton className="h-14 w-2/3 bg-white/10" /><Skeleton className="h-6 w-1/2 bg-white/10" /></Container>
    </div>
  );
}
