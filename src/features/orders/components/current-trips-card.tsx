import Link from "next/link";
import { CardTitle } from "@/features/analytics/components/card-title";
import type { CurrentTrip, TripStatus } from "@/features/orders/types/order";

const statuses: Record<TripStatus, { label: string; color: string }> = {
  active: { label: "في الطريق", color: "bg-primary" },
  completed: { label: "بدأت الرحلة", color: "bg-[#16a34a]" },
  delayed: { label: "متجه للعميل", color: "bg-[#f59e0b]" },
};

export function CurrentTripsCard({ trips }: { trips: readonly CurrentTrip[] }) {
  return (
    <section dir="rtl" aria-labelledby="trips-title" className="dashboard-card flex flex-col">
      <CardTitle
        id="trips-title"
        title="الرحلات الجارية الآن"
        subtitle="تحديث كل 10 ثواني"
      />
      <ul className="space-y-2.5 px-4 py-3">
        {trips.map((trip) => {
          const status = statuses[trip.status];
          return (
            <li key={trip.id} className="flex min-h-17 items-center justify-between gap-3 rounded-xl bg-[#f5f6f8] px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-foreground">{trip.name}</p>
                <p className="mt-1 truncate text-[10px] text-muted-foreground">{trip.route}</p>
              </div>
              <div className="shrink-0 text-left">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium text-white ${status.color}`}>
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-white" />
                  {status.label}
                </span>
                <p className="mt-1.5 text-[10px] text-muted-foreground"><bdi dir="ltr">#{trip.id}</bdi></p>
              </div>
            </li>
          );
        })}
      </ul>
      <Link href="/trips" className="mx-4 mb-4 mt-auto flex min-h-12 items-center justify-center rounded-xl bg-primary px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
        عرض كل الرحلات الجارية (38)
      </Link>
    </section>
  );
}
