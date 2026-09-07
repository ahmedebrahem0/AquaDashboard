export type NavigationItem = {
  label: string;
  href: string;
  slug: string | null;
  iconSrc: string;
  description: string;
};

export type NavigationGroup = {
  label?: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    items: [
      { label: "لوحة التحكم", href: "/", slug: null, iconSrc: "/icons/navigation/Home.png", description: "نظرة شاملة على أداء العمليات والرحلات." },
      { label: "الرحلات", href: "/trips", slug: "trips", iconSrc: "/icons/navigation/car-icon.png", description: "إدارة الرحلات ومتابعة حالتها من مكان واحد." },
      { label: "السواقين", href: "/drivers", slug: "drivers", iconSrc: "/icons/navigation/user-circle.png", description: "متابعة بيانات السواقين وحالتهم التشغيلية." },
      { label: "المستخدمين", href: "/users", slug: "users", iconSrc: "/icons/navigation/user.png", description: "إدارة المستخدمين والصلاحيات المرتبطة بهم." },
      { label: "طلبات القبول", href: "/acceptance-requests", slug: "acceptance-requests", iconSrc: "/icons/navigation/acept-order.png", description: "مراجعة طلبات الانضمام والقبول الجديدة." },
      { label: "المالية والمحفظة", href: "/wallet", slug: "wallet", iconSrc: "/icons/navigation/financial portfolio.png", description: "متابعة الحركات المالية وأرصدة المحفظة." },
      { label: "الراتب الشهري", href: "/monthly-salary", slug: "monthly-salary", iconSrc: "/icons/navigation/monthly salary.png", description: "عرض وإدارة تفاصيل الرواتب الشهرية." },
    ],
  },
  {
    label: "الإدارة",
    items: [
      { label: "التقارير", href: "/reports", slug: "reports", iconSrc: "/icons/navigation/Report.png", description: "تقارير تشغيلية تساعدك على قراءة الأداء بوضوح." },
      { label: "الدعم والبلاغات", href: "/support", slug: "support", iconSrc: "/icons/navigation/Support and Reports.png", description: "متابعة طلبات الدعم والبلاغات الواردة." },
      { label: "الإشعارات", href: "/notifications", slug: "notifications", iconSrc: "/icons/navigation/notifications.png", description: "مركز موحد لتنبيهات النظام والتحديثات." },
      { label: "الإعدادات", href: "/settings", slug: "settings", iconSrc: "/icons/navigation/settings.png", description: "تخصيص إعدادات المنصة وخيارات الحساب." },
    ],
  },
];

export const navigationItems = navigationGroups.flatMap((group) => group.items);
export const comingSoonItems = navigationItems.filter(
  (item): item is NavigationItem & { slug: string } => item.slug !== null,
);

export function getNavigationItemBySlug(slug: string) {
  return comingSoonItems.find((item) => item.slug === slug);
}

export function isNavigationItemActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
