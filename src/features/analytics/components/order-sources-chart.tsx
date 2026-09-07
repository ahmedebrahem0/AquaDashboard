"use client";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CardTitle } from "@/features/analytics/components/card-title";
import type { SourcePoint } from "@/features/analytics/types/analytics";
const nf = new Intl.NumberFormat("ar-SA");
export function OrderSourcesChart({ data }: { data: SourcePoint[] }) {
  const total = data.reduce((sum, point) => sum + point.app + point.web + point.calls, 0);
  return <section aria-labelledby="sources-title" className="dashboard-card overflow-hidden"><CardTitle id="sources-title" title="مصادر الطلبات" subtitle="آخر ٦ أسابيع" /><p className="sr-only">يعرض المخطط {nf.format(total)} طلبًا موزعًا بين التطبيق والموقع ومركز الاتصال خلال ستة أسابيع.</p><div dir="ltr" role="img" aria-label="مصادر الطلبات خلال ستة أسابيع" className="h-[250px] px-2 pb-2 pt-3"><ResponsiveContainer><BarChart data={data}><CartesianGrid stroke="#eceef2" vertical={false} /><XAxis dataKey="label" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 8 }} axisLine={false} tickLine={false} /><Tooltip formatter={(value) => nf.format(Number(value))} /><Legend wrapperStyle={{ fontSize: 9, direction: "rtl" }} /><Bar dataKey="app" name="التطبيق" stackId="a" fill="#1F0F8C" isAnimationActive={false} /><Bar dataKey="web" name="الموقع" stackId="a" fill="#F59E0B" isAnimationActive={false} /><Bar dataKey="calls" name="مركز الاتصال" stackId="a" fill="#E53E4D" radius={[3, 3, 0, 0]} isAnimationActive={false} /></BarChart></ResponsiveContainer></div></section>;
}
