import { CardTitle } from "@/features/analytics/components/card-title";
import type { CityPoint } from "@/features/analytics/types/analytics";
import { numberFormatter as nf } from "@/lib/formatters";

export function CityPerformanceCard({ cities, title = "أعلى المدن أداءً", subtitle = "أفقي بـ track" }: { cities: CityPoint[]; title?: string; subtitle?: string }) {
  const maximum = cities[0]?.value || 1;

  return (
    <section aria-labelledby="cities-title" className="dashboard-card">
      <CardTitle id="cities-title" title={title} subtitle={subtitle} />
      <ol className="space-y-5 p-4">
        {cities.map((city, index) => (
          <li key={city.city} className="grid grid-cols-[58px_1fr_auto] items-center gap-2 text-[10px]">
            <span className="font-semibold">{city.city}</span>
            <span className="h-3 overflow-hidden rounded bg-muted">
              <i
                className="block h-full rounded"
                style={{
                  width: `${city.value / maximum * 100}%`,
                  backgroundColor: index === 0 ? "#1F0F8C" : "#2563EB"
                }}
              />
            </span>
            <bdi dir="ltr" className="w-12 text-left font-bold text-muted-foreground">{nf.format(city.value)}</bdi>
          </li>
        ))}
      </ol>
    </section>
  );
}
