"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { usePathname } from "next/navigation";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

function getPageIdentity(pathname: string) {
  const item = navigationItems.find((entry) =>
    entry.href === "/"
      ? pathname === "/"
      : pathname === entry.href || pathname.startsWith(`${entry.href}/`),
  );

  if (!item || item.href === "/") {
    return {
      title: "لوحة التحكم",
      subtitle: "آخر تحديث قبل دقيقتين · الرياض والمدن المغطاة",
    };
  }

  return { title: item.label, subtitle: item.description };
}

export function Header() {
  const pathname = usePathname();
  const identity = getPageIdentity(pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white">
      <div className="flex min-h-[72px] items-center justify-between gap-3 px-4 sm:px-6 lg:min-h-[84px] lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <MobileNavigation />
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold leading-tight text-foreground sm:text-xl lg:text-[26px]">
              {identity.title}
            </h1>
            <p className="mt-1 hidden truncate text-xs text-muted-foreground sm:block">
              {identity.subtitle}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3" dir="ltr">
          <button
            type="button"
            disabled
            aria-label="البحث غير متاح حاليًا"
            title="البحث غير متاح حاليًا"
            className="inline-flex size-10 cursor-not-allowed items-center justify-center rounded-lg text-slate-700 opacity-70 sm:size-11"
          >
            <Search className="size-[18px]" strokeWidth={2} aria-hidden="true" />
          </button>
          <Link
            href="/notifications"
            aria-label="الانتقال إلى الإشعارات"
            title="الإشعارات"
            className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-muted hover:text-primary sm:size-11"
          >
            <Bell className="size-[18px]" strokeWidth={1.9} aria-hidden="true" />
          </Link>
          <div className="hidden text-right sm:block" dir="rtl">
            <p className="whitespace-nowrap text-xs font-bold text-foreground lg:text-sm">
              {siteConfig.user.name}
            </p>
            <p className="mt-0.5 text-[10px] text-muted-foreground lg:text-[11px]">
              {siteConfig.user.role}
            </p>
          </div>
          <Image
            src="/images/profile/man-image.png"
            alt={`صورة ${siteConfig.user.name}`}
            width={32}
            height={32}
            className="size-9 shrink-0 rounded-full object-cover ring-1 ring-border ring-offset-2 sm:size-10"
            priority
          />
        </div>
      </div>
    </header>
  );
}
