import Image from "next/image";

export default function DashboardLoading() {
  return (
    <section
      role="status"
      aria-live="polite"
      aria-label="جارٍ تحميل الصفحة"
      className="grid min-h-[calc(100svh-10rem)] place-items-center py-6"
    >
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <Image
          src="/images/states/loading.png"
          alt=""
          width={1254}
          height={1254}
          sizes="(max-width: 640px) 78vw, 380px"
          className="h-auto w-[min(78vw,380px)] object-contain"
        />
        <p className="mt-2 text-base font-bold text-primary">جارٍ تجهيز الصفحة…</p>
        <p className="mt-1 text-sm text-muted-foreground">لحظات قليلة وسيظهر المحتوى.</p>
      </div>
    </section>
  );
}
