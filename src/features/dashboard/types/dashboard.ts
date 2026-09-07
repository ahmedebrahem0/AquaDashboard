export const dashboardRanges = ["today", "week", "month", "cancelled"] as const;

export type DashboardRange = (typeof dashboardRanges)[number];

export type TrendDirection = "up" | "down";

export type MetricKind = "number" | "distance" | "currency";

export interface DashboardMetric {
  id: "trips" | "distance" | "revenue" | "completed";
  label: string;
  value: number;
  kind: MetricKind;
  trend: TrendDirection;
  trendPercentage: number;
  sparkline: readonly number[];
}

export interface DashboardSnapshot {
  range: DashboardRange;
  metrics: readonly DashboardMetric[];
}

export interface DashboardOverview {
  range: DashboardRange;
  metrics: readonly DashboardMetric[];
}
