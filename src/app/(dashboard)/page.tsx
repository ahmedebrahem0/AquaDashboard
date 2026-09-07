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
      <section aria-label="فلاتر لوحة التحكم" className="w-full">
        <DashboardToolbar selectedRange={overview.range} />
      </section>
      <StatsGrid metrics={overview.metrics} />
      <DashboardSections range={range} />
    </div>
  );
}
