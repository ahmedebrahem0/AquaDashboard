"use client";

import { Printer } from "lucide-react";
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
    <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-start print:hidden">
      <div
        role="group"
        aria-label="اختيار الفترة الزمنية"
        aria-busy={isPending}
        className="grid min-h-11 flex-1 grid-cols-3 overflow-hidden rounded-lg border border-border bg-card shadow-[0_1px_2px_rgba(18,18,35,0.04)] sm:flex sm:flex-none"
      >
        {rangeOptions.map((option) => {
          const selected = selectedRange === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => selectRange(option.value)}
              className={`min-h-11 min-w-18 border-e border-border px-4 text-xs font-semibold transition-colors last:border-e-0 focus-visible:z-10 ${selected ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm transition-colors hover:bg-[#211080]"
        aria-label="طباعة تقرير لوحة التحكم"
      >
        <Printer aria-hidden="true" className="size-4" />
        <span>تصدير التقرير</span>
      </button>
    </div>
  );
}
