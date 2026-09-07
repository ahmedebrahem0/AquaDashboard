import { dashboardSnapshots } from "@/features/dashboard/data/dashboard-data";
import { dashboardRanges, type DashboardOverview, type DashboardRange } from "@/features/dashboard/types/dashboard";

export const defaultDashboardRange: DashboardRange = "today";

export function isDashboardRange(value: unknown): value is DashboardRange {
  return typeof value === "string" && dashboardRanges.includes(value as DashboardRange);
}

export function parseDashboardRange(value: string | string[] | undefined): DashboardRange {
  const candidate = Array.isArray(value) ? value[0] : value;
  return isDashboardRange(candidate) ? candidate : defaultDashboardRange;
}

export function selectDashboardOverview(range: DashboardRange): DashboardOverview {
  const snapshot = dashboardSnapshots[range] ?? dashboardSnapshots[defaultDashboardRange];
  return { range: snapshot.range, metrics: snapshot.metrics };
}

export function calculateTrendPercentage(current: number, previous: number): number {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) return 0;
  return Math.abs(Number((((current - previous) / previous) * 100).toFixed(1)));
}
