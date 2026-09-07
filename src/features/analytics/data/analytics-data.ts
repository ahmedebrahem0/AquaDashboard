import type { AnalyticsData } from "@/features/analytics/types/analytics";
import type { DashboardRange } from "@/features/dashboard/types/dashboard";

const totals: Record<DashboardRange, number> = { today: 8420, week: 56190, month: 238640 };
const labels: Record<DashboardRange, string[]> = {
  today: ["6 ص", "8 ص", "10 ص", "12 م", "2 م", "4 م", "6 م", "8 م"],
  week: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
  month: ["أسبوع 1", "أسبوع 2", "أسبوع 3", "أسبوع 4"],
};
const weights: Record<DashboardRange, number[]> = {
  today: [0.08, 0.1, 0.09, 0.12, 0.11, 0.15, 0.14, 0.21],
  week: [0.12, 0.14, 0.13, 0.16, 0.15, 0.14, 0.16],
  month: [0.21, 0.23, 0.25, 0.31],
};
function allocate(total: number, shares: number[]) {
  const values = shares.map((share) => Math.round(total * share));
  values[values.length - 1] += total - values.reduce((sum, value) => sum + value, 0);
  return values;
}
export function getAnalyticsData(range: DashboardRange): AnalyticsData {
  const total = totals[range];
  const values = allocate(total, weights[range]);
  const completedTotal = Math.round(total * 0.78);
  const completed = allocate(completedTotal, weights[range]);
  const distributionValues = allocate(8420, [0.78, 0.14, 0.05, 0.03]);
  const factor = total / 8420;
  const sourceTotals = allocate(total, [0.12, 0.14, 0.16, 0.17, 0.19, 0.22]);
  return {
    total,
    periodLabel: range === "today" ? "أداء اليوم حسب الساعة" : range === "week" ? "أداء الأسبوع حسب اليوم" : "أداء الشهر حسب الأسبوع",
    trend: labels[range].map((label, index) => ({ label, trips: values[index], completed: completed[index] })),
    distribution: [
      { name: "مكتملة", value: distributionValues[0], color: "#1F0F8C" },
      { name: "ملغية", value: distributionValues[1], color: "#E5262B" },
      { name: "قيد التوصيل", value: distributionValues[2], color: "#F59E0B" },
      { name: "نشطة", value: distributionValues[3], color: "#16A34A" },
    ],
    sources: sourceTotals.map((sourceTotal, index) => {
      const split = allocate(sourceTotal, [0.61, 0.25, 0.14]);
      return { label: `أسبوع ${index + 1}`, app: split[0], web: split[1], calls: split[2] };
    }),
    cities: ["الرياض", "جدة", "الدمام", "مكة", "المدينة"].map((city, index) => ({ city, value: Math.round([3820, 2140, 1180, 760, 520][index] * factor) })),
  };
}
