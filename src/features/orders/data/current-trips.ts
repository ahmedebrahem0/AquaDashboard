import type { CurrentTrip } from "@/features/orders/types/order";
export const currentTrips: readonly CurrentTrip[] = [
  { id: "KOW-1047", name: "فهد الشمري", route: "الرياض ← الخرج", plate: "4821 أ ب د", status: "active" },
  { id: "KOW-1046", name: "ماجد العنزي", route: "جدة ← مكة", plate: "3748 ر هـ و", status: "completed" },
  { id: "KOW-1045", name: "سعد العتيبي", route: "الدمام ← الخبر", plate: "5902 س م ن", status: "delayed" },
  { id: "KOW-1044", name: "عبدالله الدوسري", route: "الرياض ← المزاحمية", plate: "1049 و ك ن", status: "active" },
];
