import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CardTitle } from "@/features/analytics/components/card-title";
import type { CurrentTrip, TripStatus } from "@/features/orders/types/order";

const statuses: Record<TripStatus, { label: string; color: string; dotColor: string }> = {
  active: { label: "في الطريق", color: "bg-blue-100 text-blue-700", dotColor: "bg-blue-500" },
  completed: { label: "بدأت الرحلة", color: "bg-green-100 text-green-700", dotColor: "bg-green-500" },
  delayed: { label: "متجه للعميل", color: "bg-orange-100 text-orange-500", dotColor: "bg-orange-500" }
};

export function CurrentTripsCard({ trips }: { trips: readonly CurrentTrip[] }) {
  return (
    <section dir="rtl" aria-labelledby="trips-title" className="dashboard-card flex flex-col">
      <CardTitle
        id="trips-title"
        title="الرحلات الجارية الآن"
        extra={<span className="text-xs text-muted-foreground">تحديث كل 10 ثواني</span>}
      />
      <ul className="space-y-2 px-4 py-3">
        {trips.map((trip) => {
          const status = statuses[trip.status];
          return (
            <li key={trip.id} className="flex items-center justify-between rounded-lg bg-gray-50 p-3 gap-2">
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-xs font-bold text-gray-900">{trip.name}</p>
                <p className="text-[10px] text-gray-500"><bdi dir="ltr">{trip.id}</bdi></p>
              </div>
              <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${status.color} shrink-0`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status.dotColor}`} />
                {status.label}
              </span>
            </li>
          );
        })}
      </ul>
      <Link href="/trips" className="mx-4 mb-4 mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-xs font-bold text-white">
        عرض كل الرحلات الجارية ({trips.length})
        <ArrowLeft className="size-4" />
      </Link>
    </section>
  );
}
