import type { CurrentTrip } from "@/features/orders/types/order";
export const currentTrips: readonly CurrentTrip[] = [
  { id: "KW-10479", name: "فهد الشمري", route: "الروضة ← قرطبة", plate: "4821 أ ب د", status: "active" },
  { id: "KW-10486", name: "ماجد العنزي", route: "العليا ← الملقا", plate: "3748 ر هـ و", status: "completed" },
  { id: "KW-10488", name: "سعد العتيبي", route: "حطين ← الصحافة", plate: "5902 س م ن", status: "delayed" },
  { id: "KW-10490", name: "عبدالله الدوسري", route: "النخيل ← العقيق", plate: "1049 و ك ن", status: "completed" },
];
