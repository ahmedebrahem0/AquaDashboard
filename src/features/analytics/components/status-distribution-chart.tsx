"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import type { DistributionPoint } from "@/features/analytics/types/analytics";
import { numberFormatter, percentFormatter } from "@/lib/formatters";

export function StatusDistributionChart({ data, title = "توزيع حالات الرحلة", subtitle = "آخر 30 يوم" }: { data: DistributionPoint[]; title?: string; subtitle?: string }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <section aria-labelledby="distribution-title" className="dashboard-card min-h-[240px] overflow-hidden p-4 sm:p-5 xl:h-full">
      <header className="text-right">
        <h2 id="distribution-title" className="text-[13px] font-bold text-foreground">{title}</h2>
        <p className="mt-0.5 text-[10px] text-muted-foreground">{subtitle}</p>
      </header>

      <p className="sr-only">{title} لعدد {numberFormatter.format(total)} رحلة، {subtitle}.</p>

      <div className="ml-auto mt-2 grid w-full max-w-[290px] grid-cols-[minmax(100px,120px)_minmax(140px,150px)] items-center justify-end gap-2" dir="ltr">
        <ul className="space-y-3" dir="rtl" aria-label="تفاصيل توزيع حالات الرحلة">
          {data.map((item) => (
            <li key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-2 text-[10px]">
              <span className="flex min-w-0 items-center gap-1.5 whitespace-nowrap">
                <i aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span>
              </span>
              <bdi dir="ltr" className="font-medium text-muted-foreground">
                {percentFormatter.format(total ? item.value / total : 0)}
              </bdi>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="relative h-[150px] min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" innerRadius={43} outerRadius={64} paddingAngle={1} startAngle={90} endAngle={-270} isAnimationActive={false} stroke="#ffffff" strokeWidth={1.5}>
                {data.map((item) => <Cell key={item.name} fill={item.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 grid place-content-center text-center" dir="rtl">
            <strong className="text-[18px] font-bold leading-none text-foreground" dir="ltr">{numberFormatter.format(total)}</strong>
            <span className="mt-1 text-[9px] text-muted-foreground">رحلة</span>
          </div>
        </div>
      </div>
    </section>
  );
}
