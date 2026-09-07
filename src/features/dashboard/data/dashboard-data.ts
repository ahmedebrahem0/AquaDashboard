import type { DashboardSnapshot } from "@/features/dashboard/types/dashboard";

export const dashboardSnapshots = {
  today: {
    range: "today",
    metrics: [
      { id: "trips", label: "إجمالي الرحلات", value: 8420, kind: "number", trend: "up", trendPercentage: 12.4, sparkline: [42, 46, 44, 51, 49, 55, 53, 61, 58, 66, 64, 72] },
      { id: "distance", label: "المسافة المقطوعة", value: 412300, kind: "distance", trend: "up", trendPercentage: 9.4, sparkline: [34, 38, 36, 43, 41, 49, 47, 54, 52, 59, 57, 63] },
      { id: "revenue", label: "إجمالي الإيرادات", value: 61845, kind: "currency", trend: "up", trendPercentage: 14.8, sparkline: [31, 36, 34, 41, 39, 46, 43, 51, 48, 56, 54, 62] },
      { id: "completed", label: "الرحلات المكتملة", value: 512, kind: "number", trend: "down", trendPercentage: 3.2, sparkline: [68, 64, 66, 59, 62, 55, 58, 51, 54, 47, 49, 42] },
    ],
  },
  week: {
    range: "week",
    metrics: [
      { id: "trips", label: "إجمالي الرحلات", value: 56190, kind: "number", trend: "up", trendPercentage: 8.7, sparkline: [40, 43, 48, 46, 52, 55, 59] },
      { id: "distance", label: "المسافة المقطوعة", value: 2789400, kind: "distance", trend: "up", trendPercentage: 6.1, sparkline: [36, 39, 42, 46, 44, 51, 56] },
      { id: "revenue", label: "إجمالي الإيرادات", value: 424780, kind: "currency", trend: "up", trendPercentage: 11.3, sparkline: [32, 38, 36, 44, 49, 47, 57] },
      { id: "completed", label: "الرحلات المكتملة", value: 3428, kind: "number", trend: "down", trendPercentage: 1.8, sparkline: [61, 58, 60, 54, 56, 50, 48] },
    ],
  },
  month: {
    range: "month",
    metrics: [
      { id: "trips", label: "إجمالي الرحلات", value: 238640, kind: "number", trend: "up", trendPercentage: 16.2, sparkline: [33, 38, 42, 39, 47, 51, 56, 53, 62, 67, 71, 76] },
      { id: "distance", label: "المسافة المقطوعة", value: 11842000, kind: "distance", trend: "up", trendPercentage: 12.9, sparkline: [29, 34, 38, 43, 41, 49, 54, 58, 56, 63, 69, 73] },
      { id: "revenue", label: "إجمالي الإيرادات", value: 1846250, kind: "currency", trend: "up", trendPercentage: 18.5, sparkline: [27, 31, 36, 34, 42, 47, 45, 53, 58, 64, 62, 71] },
      { id: "completed", label: "الرحلات المكتملة", value: 14872, kind: "number", trend: "up", trendPercentage: 4.6, sparkline: [42, 40, 45, 48, 46, 51, 54, 52, 58, 61, 60, 65] },
    ],
  },
  cancelled: {
    range: "cancelled",
    metrics: [
      { id: "trips", label: "إجمالي الرحلات الملغية", value: 1179, kind: "number", trend: "down", trendPercentage: 3.6, sparkline: [61, 58, 60, 54, 56, 50, 48, 51, 46, 44, 42, 39] },
      { id: "distance", label: "المسافة قبل الإلغاء", value: 28640, kind: "distance", trend: "down", trendPercentage: 5.2, sparkline: [57, 54, 56, 51, 49, 52, 46, 44, 47, 41, 39, 36] },
      { id: "revenue", label: "قيمة الرحلات الملغية", value: 9268, kind: "currency", trend: "down", trendPercentage: 4.1, sparkline: [62, 59, 55, 57, 52, 50, 46, 48, 43, 41, 38, 35] },
      { id: "completed", label: "أُعيد جدولتها", value: 214, kind: "number", trend: "up", trendPercentage: 8.3, sparkline: [31, 34, 33, 38, 40, 39, 44, 46, 45, 50, 53, 57] },
    ],
  },
} as const satisfies Record<string, DashboardSnapshot>;
