import { ArrowDownLeft, ArrowUpLeft } from "lucide-react";

import { Sparkline } from "@/features/dashboard/components/sparkline";
import type { DashboardMetric } from "@/features/dashboard/types/dashboard";

import { numberFormatter } from "@/lib/formatters";

function formatMetricValue(metric: DashboardMetric) {
  const value = numberFormatter.format(metric.value);
  if (metric.kind === "currency") {
    return (
      <span className="inline-flex items-baseline gap-[0.2em]" dir="ltr">
        <span className="text-[0.62em] font-bold" dir="rtl">ر.س</span>
        <bdi dir="ltr">{value}</bdi>
      </span>
    );
  }
  if (metric.kind === "distance") {
    return (
      <span className="inline-flex items-baseline gap-[0.2em]" dir="ltr">
        <span className="text-[0.52em] font-bold text-muted-foreground" dir="rtl">ر.س</span>
        <bdi dir="ltr">{value}</bdi>
      </span>
    );
  }
  return <bdi>{value}</bdi>;
}

export function StatCard({ metric }: { metric: DashboardMetric }) {
  const positive = metric.trend === "up";
  const TrendIcon = positive ? ArrowUpLeft : ArrowDownLeft;
  const trendLabel = `${positive ? "ارتفاع" : "انخفاض"} بنسبة ${metric.trendPercentage}% مقارنة بالفترة السابقة`;

  return (
    <article className="group relative min-w-0 overflow-hidden rounded-xl border border-border bg-card px-4 pb-3 pt-4 shadow-[0_2px_9px_rgba(24,24,48,0.035)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#d4d6df] hover:shadow-[0_7px_22px_rgba(30,25,80,0.07)] sm:px-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-[12px] font-semibold text-muted-foreground">{metric.label}</h2>
          <p className="mt-2 whitespace-nowrap text-[23px] font-bold leading-none tracking-tight text-card-foreground sm:text-[25px]" dir="ltr">
            {formatMetricValue(metric)}
          </p>
        </div>
        <span className={`mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg ${positive ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`} aria-hidden="true">
          <TrendIcon className="size-4" strokeWidth={2.2} />
        </span>
      </div>

      <div className="mt-4" dir="ltr">
        <Sparkline values={metric.sparkline} tone={positive ? "positive" : "negative"} />
      </div>

      <p className={`mt-2 flex items-center gap-1 text-[10px] font-bold ${positive ? "text-success" : "text-danger"}`}>
        <TrendIcon aria-hidden="true" className="size-3.5" />
        <span>{positive ? "+" : "−"}<bdi>{metric.trendPercentage}%</bdi></span>
        <span className="font-medium text-muted-foreground">عن الفترة السابقة</span>
        <span className="sr-only">{trendLabel}</span>
      </p>
    </article>
  );
}
