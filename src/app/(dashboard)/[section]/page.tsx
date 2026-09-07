import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { comingSoonItems, getNavigationItemBySlug } from "@/config/navigation";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return comingSoonItems.map(({ slug }) => ({ section: slug }));
}

export async function generateMetadata({ params }: SectionPageProps): Promise<Metadata> {
  const { section } = await params;
  const item = getNavigationItemBySlug(section);

  if (!item) return {};

  return {
    title: item.label,
    description: `${item.description} هذا القسم قيد التجهيز وسيكون متاحًا قريبًا.`,
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const item = getNavigationItemBySlug(section);

  if (!item) notFound();

  return (
    <section aria-labelledby="section-title" className="grid min-h-[calc(100svh-10rem)] place-items-center py-4 sm:py-8">
      <div className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_50px_rgba(31,15,140,0.08)]">
        <div className="h-1.5 bg-accent" aria-hidden="true" />
        <div className="flex flex-col items-center px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="mb-6 grid size-16 place-items-center rounded-2xl bg-primary shadow-[0_10px_24px_rgba(31,15,140,0.22)]" aria-hidden="true">
            <Image src={item.iconSrc} alt="" width={26} height={26} sizes="26px" className="max-h-[26px] w-auto object-contain" />
          </div>
          <p className="mb-2 text-xs font-bold text-primary">قيد التجهيز</p>
          <h1 id="section-title" className="text-2xl font-bold tracking-tight text-foreground sm:text-[28px]">{item.label}</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            {item.description} نعمل حاليًا على تجهيز هذا القسم ليكون متوفرًا قريبًا.
          </p>
          <Link href="/" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
            العودة إلى لوحة التحكم
            <ArrowLeft className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
