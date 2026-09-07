"use client";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { CardTitle } from "@/features/analytics/components/card-title";
import type { DistributionPoint } from "@/features/analytics/types/analytics";
const nf = new Intl.NumberFormat("ar-SA");
export function StatusDistributionChart({ data, total }: { data: DistributionPoint[]; total: number }) {
  return <section aria-labelledby="distribution-title" className="dashboard-card"><CardTitle id="distribution-title" title="توزيع حالات الرحلة" subtitle="من إجمالي الرحلات" /><p className="sr-only">توزيع {nf.format(total)} رحلة حسب حالة التنفيذ.</p><div role="img" aria-label={`مخطط توزيع حالات ${nf.format(total)} رحلة`} className="relative mx-auto h-[190px] max-w-[250px]"><ResponsiveContainer><PieChart><Pie data={data} dataKey="value" innerRadius={52} outerRadius={76} paddingAngle={1} isAnimationActive={false}>{data.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie></PieChart></ResponsiveContainer><div className="pointer-events-none absolute inset-0 grid place-content-center text-center"><strong className="text-xl">{nf.format(total)}</strong><span className="text-[10px] text-muted-foreground">رحلة</span></div></div><ul className="grid grid-cols-2 gap-2 px-4 pb-4">{data.map((item) => <li key={item.name} className="flex items-center gap-2 text-[10px]"><i className="size-2 rounded-full" style={{ background: item.color }} /><span>{item.name}</span><b className="mr-auto">{Math.round(item.value / total * 100)}٪</b></li>)}</ul></section>;
}
