"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { CardTitle } from "@/features/analytics/components/card-title";
import type { SourcePoint, SourceSeries } from "@/features/analytics/types/analytics";
import { numberFormatter as nf } from "@/lib/formatters";

const defaultSeries: SourceSeries = { app: "التطبيق", web: "الموقع", calls: "مركز الاتصال", appColor: "#1F0F8C", webColor: "#376FF1", callsColor: "#94A3B8" };

export function OrderSourcesChart({ data, title = "مصادر الطلبات", subtitle = "آخر 6 أسابيع", series = defaultSeries }: { data: SourcePoint[]; title?: string; subtitle?: string; series?: SourceSeries }) {
  const total = data.reduce((sum, point) => sum + point.app + point.web + point.calls, 0);

  return (
    <section aria-labelledby="sources-title" className="dashboard-card overflow-hidden">
      <CardTitle id="sources-title" title={title} subtitle={subtitle} />
      <p className="sr-only">يعرض المخطط {nf.format(total)} طلبًا موزعًا بين {series.app} و{series.web} و{series.calls}، {subtitle}.</p>
      <div className="px-4 pt-2">
        <div className="flex justify-center gap-8 text-[13px] font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-[2px]" style={{ backgroundColor: series.appColor }} />
            <span>{series.app}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-[2px]" style={{ backgroundColor: series.webColor }} />
            <span>{series.web}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-[2px]" style={{ backgroundColor: series.callsColor }} />
            <span>{series.calls}</span>
          </div>
        </div>
      </div>
      <div dir="ltr" role="img" aria-label={`${title}: ${series.app}، ${series.web}، ${series.calls}، ${subtitle}`} className="h-[250px] px-2 pb-2 pt-3">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#eceef2" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => nf.format(Number(value))} />
            <Bar dataKey="app" name={series.app} stackId="a" fill={series.appColor} isAnimationActive={false} />
            <Bar dataKey="web" name={series.web} stackId="a" fill={series.webColor} isAnimationActive={false} />
            <Bar dataKey="calls" name={series.calls} stackId="a" fill={series.callsColor} radius={[3, 3, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
