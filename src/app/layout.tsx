import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: {
    default: "كوا | لوحة التحكم اللوجستية",
    template: "%s | كوا",
  },
  description:
    "لوحة تحكم عربية لمتابعة الطلبات والرحلات ومؤشرات الأداء اللوجستي.",
  applicationName: "كوا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}
