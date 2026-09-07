"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { CardTitle } from "@/features/analytics/components/card-title";
import type { SourcePoint } from "@/features/analytics/types/analytics";
import { numberFormatter as nf } from "@/lib/formatters";

export function OrderSourcesChart({ data, title = "مصادر الطلبات", subtitle = "آخر 6 أسابيع" }: { data: SourcePoint[]; title?: string; subtitle?: string }) {
  const total = data.reduce((sum, point) => sum + point.app + point.web + point.calls, 0);

  return (
    <section aria-labelledby="sources-title" className="dashboard-card overflow-hidden">
      <CardTitle id="sources-title" title={title} subtitle={subtitle} />
      <p className="sr-only">يعرض المخطط {nf.format(total)} طلبًا موزعًا بين النظام والسواق والعميل، {subtitle}.</p>
      <div className="px-4 pt-2">
        <div className="flex justify-center gap-8 text-[13px] font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-[2px] bg-[#2563EB]" />
            <span>النظام</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-[2px] bg-[#F59E0B]" />
            <span>السواق</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-[2px] bg-[#DC2626]" />
            <span>العميل</span>
          </div>
        </div>
      </div>
      <div dir="ltr" role="img" aria-label={`${title}، ${subtitle}`} className="h-[250px] px-2 pb-2 pt-3">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#eceef2" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => nf.format(Number(value))} />
            <Bar dataKey="app" name="النظام" stackId="a" fill="#2563EB" isAnimationActive={false} />
            <Bar dataKey="web" name="السواق" stackId="a" fill="#F59E0B" isAnimationActive={false} />
            <Bar dataKey="calls" name="العميل" stackId="a" fill="#DC2626" radius={[3, 3, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
