import Image from "next/image";

import { SidebarNav } from "@/components/layout/sidebar-nav";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Sidebar({ className, onNavigate }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-[232px] shrink-0 flex-col bg-[var(--sidebar)] text-white",
        className,
      )}
      aria-label="القائمة الجانبية"
    >
      <div className="flex min-h-[140px] shrink-0 flex-col items-center justify-center border-b border-white/10 px-5 py-5 text-center">
        <Image src="/images/brand/Logo.png" alt="" width={48} height={38} sizes="48px" priority />
        <Image
          src="/images/brand/KOWA كوا.png"
          alt="كوا"
          width={116}
          height={86}
          sizes="116px"
          priority
          className="-mt-3 h-[72px] w-auto object-contain"
        />
      </div>

      <SidebarNav onNavigate={onNavigate} />

      <div className="shrink-0 px-6 pb-5 pt-2 text-center text-[10px] leading-5 text-indigo-200/55">
        <p>منصة كوا للخدمات اللوجستية</p>
        <p dir="ltr">v1.0.0</p>
      </div>
    </aside>
  );
}
