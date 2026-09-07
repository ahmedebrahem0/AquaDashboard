import Image from "next/image";
export function DeliveryMapCard() {
  return <section dir="rtl" aria-labelledby="map-title" className="overflow-hidden rounded-[var(--radius)]"><h2 id="map-title" className="sr-only">الخريطة الحية</h2><Image src="/images/map/new-map.png" alt="الخريطة الحية لمواقع مركبات التوصيل الحالية" width={808} height={432} sizes="(min-width:1280px) 55vw, 100vw" className="h-auto w-full" priority /></section>;
}
