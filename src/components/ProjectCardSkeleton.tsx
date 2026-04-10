import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => (
  <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
    <div className="flex items-center gap-2 mb-3">
      <Skeleton className="w-5 h-5 rounded-full" />
      <Skeleton className="h-5 w-32" />
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-3/4 mb-4" />
    <div className="flex items-center gap-4">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-3 w-10" />
      <Skeleton className="h-3 w-10" />
    </div>
  </div>
);
