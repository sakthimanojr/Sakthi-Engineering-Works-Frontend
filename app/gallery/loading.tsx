import Container from "@/components/Container";
import { CardGridSkeleton, Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <>
      <div className="bg-ink pb-16 pt-40"><Container><Skeleton className="h-12 w-1/2 bg-white/10" /></Container></div>
      <Container className="py-16"><CardGridSkeleton /></Container>
    </>
  );
}
