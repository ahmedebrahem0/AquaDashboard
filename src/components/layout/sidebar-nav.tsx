"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { isNavigationItemActive, navigationGroups } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav aria-label="التنقل الرئيسي" className="sidebar-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-2">
      {navigationGroups.map((group, groupIndex) => (
        <div key={group.label ?? "primary"} className={cn(groupIndex > 0 && "mt-1.5 border-t border-white/10 pt-1.5")}>
          {group.label ? <p className="mb-0.5 px-3 text-[10px] font-semibold tracking-wide text-indigo-100/60">{group.label}</p> : null}
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const active = isNavigationItemActive(pathname, item.href);
              const dashboardIcon = item.href === "/";

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={onNavigate}
                    className={cn(
                      "group flex min-h-10 items-center gap-3 rounded-lg px-3 text-[13px] transition-colors focus-visible:outline-white",
                      active
                        ? "bg-[#D3D93C] font-bold text-[#1F0F8C] shadow-[0_8px_22px_rgba(0,0,0,0.17)]"
                        : "font-medium text-white hover:bg-white/10",
                    )}
                  >
                    <span className="grid size-5 shrink-0 place-items-center">
                      {active && !dashboardIcon ? (
                        <span
                          aria-hidden="true"
                          className="size-[21px] bg-[#1F0F8C]"
                          style={{
                            WebkitMaskImage: `url("${item.iconSrc}")`,
                            maskImage: `url("${item.iconSrc}")`,
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                          }}
                        />
                      ) : (
                        <Image
                          src={item.iconSrc}
                          alt=""
                          width={21}
                          height={21}
                          sizes="21px"
                          className={cn("max-h-[21px] w-auto object-contain", dashboardIcon && !active && "brightness-0 invert")}
                        />
                      )}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
