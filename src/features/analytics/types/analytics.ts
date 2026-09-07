export type TrendPoint = { label: string; trips: number; completed: number };
export type DistributionPoint = { name: string; value: number; color: string };
export type SourcePoint = { label: string; app: number; web: number; calls: number };
export type CityPoint = { city: string; value: number };
export type AnalyticsData = { total: number; periodLabel: string; trend: TrendPoint[]; distribution: DistributionPoint[]; sources: SourcePoint[]; cities: CityPoint[] };
