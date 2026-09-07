import Image from "next/image";

export function DeliveryMapCard() {
  return (
    <section
      dir="rtl"
      aria-labelledby="map-title"
      className="dashboard-card overflow-hidden"
    >
      <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
        <div className="min-w-0 text-right">
          <h2
            id="map-title"
            className="text-sm font-semibold text-foreground sm:text-base"
          >
            الخريطة الحية&nbsp; — &nbsp;<bdi dir="ltr">Google Maps</bdi>
          </h2>
          <p className="mt-1 text-[10px] font-medium text-muted-foreground sm:text-xs">
            96 سائق متاح&nbsp; · &nbsp;54 مشغول&nbsp; · &nbsp;38 رحلة جارية
          </p>
        </div>

        <span
          role="status"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#DCFCE7] px-3 py-1.5 text-[10px] font-medium text-[#16A34A] sm:text-xs"
        >
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-[#16A34A]"
          />
          مباشر
        </span>
      </header>

      <Image
        src="/images/map/new-map.png"
        alt="الخريطة الحية لمواقع مركبات التوصيل الحالية"
        width={808}
        height={432}
        sizes="(min-width:1280px) 55vw, 100vw"
        className="h-auto w-full"
        preload
      />
    </section>
  );
}
