export type TrendPoint = { label: string; trips: number; completed: number };
export type DistributionPoint = { name: string; value: number; color: string };
export type SourcePoint = { label: string; app: number; web: number; calls: number };
export type CityPoint = { city: string; value: number };
export type AnalyticsData = {
  total: number; periodLabel: string; primarySeriesLabel: string; secondarySeriesLabel: string;
  distributionTitle: string; distributionSubtitle: string; sourcesTitle: string; sourcesSubtitle: string;
  citiesTitle: string; citiesSubtitle: string; peakTitle: string; peakSubtitle: string;
  trend: TrendPoint[]; distribution: DistributionPoint[]; sources: SourcePoint[]; cities: CityPoint[];
};
