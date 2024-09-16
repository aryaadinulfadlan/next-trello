import ActivityItem from "@/components/activity-item";
import { Skeleton } from "@/components/ui/skeleton";
import { AuditLog } from "@prisma/client";
import { LuActivity } from "react-icons/lu";

interface Props {
  logs: AuditLog[];
}
export default function CardActivity({ logs }: Props) {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <LuActivity className="h-5 w-5 mt-0.5 text-neutral-700" />
      <div className="w-full">
        <p className="font-semibold text-neutral-700 mb-2">Activity</p>
        <ol className="mt-2 space-y-4">
          {logs.map((el) => (
            <ActivityItem log={el} key={el.id} />
          ))}
        </ol>
      </div>
    </div>
  );
}

CardActivity.Skeleton = function CardActivitySkeleton() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="h-6 w-6 bg-neutral-400" />
      <div className="w-full">
        <Skeleton className="w-24 h-6 mb-2 bg-neutral-400" />
        <Skeleton className="w-full h-10 bg-neutral-400" />
      </div>
    </div>
  );
};
