import { StatCard } from "@/features/dashboard/components/stat-card";
import type { DashboardMetric } from "@/features/dashboard/types/dashboard";

export function StatsGrid({ metrics }: { metrics: readonly DashboardMetric[] }) {
  if (metrics.length === 0) {
    return (
      <section aria-labelledby="performance-title" className="rounded-xl border border-border bg-card p-6 text-center">
        <h2 id="performance-title" className="text-sm font-bold">مؤشرات الأداء</h2>
        <p className="mt-2 text-sm text-muted-foreground">لا توجد بيانات متاحة لهذه الفترة.</p>
      </section>
    );
  }

  return (
    <section aria-labelledby="performance-title">
      <h2 id="performance-title" className="sr-only">مؤشرات الأداء الرئيسية</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => <StatCard key={metric.id} metric={metric} />)}
      </div>
    </section>
  );
}
