import { DashboardToolbar } from "@/features/dashboard/components/dashboard-toolbar";
import { DashboardSections } from "@/features/analytics/components/dashboard-sections-layout";
import { StatsGrid } from "@/features/dashboard/components/stats-grid";
import { parseDashboardRange, selectDashboardOverview } from "@/features/dashboard/lib/dashboard-selectors";

interface DashboardPageProps {
  searchParams: Promise<{ range?: string | string[] }>;
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const params = await searchParams;
  const range = parseDashboardRange(params.range);
  const overview = selectDashboardOverview(range);

  return (
    <div className="space-y-5">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-semibold text-primary">نظرة عامة</p>
          <h1 id="dashboard-title" className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">
            لوحة التحكم
          </h1>
          <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
            تابع أداء العمليات والرحلات لحظة بلحظة
          </p>
        </div>
        <DashboardToolbar selectedRange={overview.range} />
      </section>
      <StatsGrid metrics={overview.metrics} />
      <DashboardSections range={range} />
    </div>
  );
}
