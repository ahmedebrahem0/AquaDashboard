import { CityPerformanceCard } from "@/features/analytics/components/city-performance-card";
import { OrderSourcesChart } from "@/features/analytics/components/order-sources-chart";
import { PeakHoursCard } from "@/features/analytics/components/peak-hours-card";
import { StatusDistributionChart } from "@/features/analytics/components/status-distribution-chart";
import { TripsTrendChart } from "@/features/analytics/components/trips-trend-chart";
import { getAnalyticsData } from "@/features/analytics/data/analytics-data";
import { DeliveryMapCard } from "@/features/delivery-map/components/delivery-map-card";
import type { DashboardRange } from "@/features/dashboard/types/dashboard";
import { CurrentTripsCard } from "@/features/orders/components/current-trips-card";
import { currentTrips } from "@/features/orders/data/current-trips";

export function DashboardSections({ range }: { range: DashboardRange }) {
  const analytics = getAnalyticsData(range);
  return <div className="space-y-4">
    <div className="grid items-stretch gap-4 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,.8fr)] xl:[direction:ltr]"><DeliveryMapCard /><CurrentTripsCard trips={currentTrips} /></div>
    <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(260px,.72fr)] xl:items-stretch"><TripsTrendChart data={analytics.trend} periodLabel={analytics.periodLabel} total={analytics.total} primarySeriesLabel={analytics.primarySeriesLabel} secondarySeriesLabel={analytics.secondarySeriesLabel} /><StatusDistributionChart data={analytics.distribution} title={analytics.distributionTitle} subtitle={analytics.distributionSubtitle} /></div>
    <div className="grid gap-4 lg:grid-cols-3"><OrderSourcesChart data={analytics.sources} title={analytics.sourcesTitle} subtitle={analytics.sourcesSubtitle} /><CityPerformanceCard cities={analytics.cities} title={analytics.citiesTitle} subtitle={analytics.citiesSubtitle} /><PeakHoursCard title={analytics.peakTitle} subtitle={analytics.peakSubtitle} /></div>
  </div>;
}
