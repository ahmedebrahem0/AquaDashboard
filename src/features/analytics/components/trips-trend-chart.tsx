"use client";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CardTitle } from "@/features/analytics/components/card-title";
import type { TrendPoint } from "@/features/analytics/types/analytics";
const nf = new Intl.NumberFormat("ar-SA");
export function TripsTrendChart({ data, periodLabel, total }: { data: TrendPoint[]; periodLabel: string; total: number }) {
  return <section aria-labelledby="trend-title" className="dashboard-card overflow-hidden"><CardTitle id="trend-title" title="الرحلات والطلبات عبر الوقت" subtitle={periodLabel} /><p className="sr-only">إجمالي نقاط الرحلات المعروضة {nf.format(total)} رحلة. الخط النيلي يمثل كل الرحلات، والأزرق يمثل المكتملة.</p><div dir="ltr" role="img" aria-label={`اتجاه ${nf.format(total)} رحلة خلال الفترة المختارة`} className="h-[275px] px-2 pb-3 pt-3"><ResponsiveContainer><LineChart data={data}><CartesianGrid stroke="#eceef2" vertical={false} /><XAxis dataKey="label" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} /><Tooltip formatter={(value) => nf.format(Number(value))} /><Legend wrapperStyle={{ fontSize: 10, direction: "rtl" }} /><Line dataKey="trips" name="إجمالي الرحلات" stroke="#1F0F8C" strokeWidth={2.5} dot={false} isAnimationActive={false} /><Line dataKey="completed" name="الرحلات المكتملة" stroke="#376FF1" strokeWidth={2} dot={false} isAnimationActive={false} /></LineChart></ResponsiveContainer></div></section>;
}
