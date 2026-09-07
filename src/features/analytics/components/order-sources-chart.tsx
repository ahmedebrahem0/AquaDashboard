"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { CardTitle } from "@/features/analytics/components/card-title";
import type { SourcePoint } from "@/features/analytics/types/analytics";
import { numberFormatter as nf } from "@/lib/formatters";

export function OrderSourcesChart({ data }: { data: SourcePoint[] }) {
  const total = data.reduce((sum, point) => sum + point.app + point.web + point.calls, 0);

  return (
    <section aria-labelledby="sources-title" className="dashboard-card overflow-hidden">
      <CardTitle id="sources-title" title="مصادر الإلغاء" subtitle="آخر 6 أسابيع" />
      <p className="sr-only">يعرض المخطط {nf.format(total)} إلغاءً موزعًا بين النظام والسواق والعميل خلال ستة أسابيع.</p>
      <div className="px-4 pt-2">
        <div className="flex justify-center gap-6 text-[12px]">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-[2px] bg-[#1F0F8C]" />
            <span>النظام</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-[2px] bg-[#F59E0B]" />
            <span>السواق</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-[2px] bg-[#E53E4D]" />
            <span>العميل</span>
          </div>
        </div>
      </div>
      <div dir="ltr" role="img" aria-label="مصادر الإلغاء خلال ستة أسابيع" className="h-[250px] px-2 pb-2 pt-3">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid stroke="#eceef2" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(value) => nf.format(Number(value))} />
            <Bar dataKey="app" name="النظام" stackId="a" fill="#1F0F8C" isAnimationActive={false} />
            <Bar dataKey="web" name="السواق" stackId="a" fill="#F59E0B" isAnimationActive={false} />
            <Bar dataKey="calls" name="العميل" stackId="a" fill="#E53E4D" radius={[3, 3, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
