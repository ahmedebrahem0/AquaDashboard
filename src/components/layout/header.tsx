import Image from "next/image";
import { Bell } from "lucide-react";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/90 bg-card/98">
      <div className="flex min-h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <MobileNavigation />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-foreground">
              {siteConfig.user.name}
            </p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              {siteConfig.user.role}
            </p>
          </div>
          <Image
            src="/images/profile/man-image.png"
            alt={`صورة ${siteConfig.user.name}`}
            width={32}
            height={32}
            className="size-10 shrink-0 rounded-full object-cover ring-2 ring-primary/10 ring-offset-2"
          />
        </div>

        <button
          type="button"
          disabled
          aria-label="الإشعارات غير متاحة حاليًا"
          title="الإشعارات غير متاحة حاليًا"
          className="inline-flex size-11 cursor-not-allowed items-center justify-center rounded-lg text-muted-foreground/65"
        >
          <Bell className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
