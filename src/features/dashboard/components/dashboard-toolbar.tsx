"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

import type { DashboardRange } from "@/features/dashboard/types/dashboard";

const rangeOptions: readonly { value: DashboardRange; label: string }[] = [
  { value: "today", label: "اليوم" },
  { value: "week", label: "أسبوع" },
  { value: "month", label: "شهر" },
];

export function DashboardToolbar({ selectedRange }: { selectedRange: DashboardRange }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function selectRange(range: DashboardRange) {
    const params = new URLSearchParams(searchParams.toString());
    if (range === "today") params.delete("range");
    else params.set("range", range);

    startTransition(() => router.replace(`${pathname}${params.size ? `?${params}` : ""}`, { scroll: false }));
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3 print:hidden">
      <div
        role="group"
        aria-label="اختيار الفترة الزمنية"
        aria-busy={isPending}
        className="grid w-full grid-cols-3 gap-2 sm:flex sm:w-auto"
      >
        {rangeOptions.map((option) => {
          const selected = selectedRange === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => selectRange(option.value)}
              disabled={isPending}
              className={`h-11 min-w-0 rounded-lg border px-4 text-sm font-semibold shadow-[0_1px_4px_rgba(18,18,35,0.08)] transition-[color,background-color,border-color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait disabled:opacity-70 sm:w-28 ${selected ? "border-border bg-white text-foreground shadow-[0_1px_5px_rgba(18,18,35,0.12)]" : "border-[#edf0f4] bg-[#f8f9fb] text-[#526078] hover:border-border hover:bg-white hover:text-foreground"}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-[#211080] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-36"
        aria-label="طباعة تقرير لوحة التحكم"
      >
        <span>تصدير التقرير</span>
      </button>
    </div>
  );
}
