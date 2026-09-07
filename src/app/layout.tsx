import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-sans-arabic",
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
    <html lang="ar" dir="rtl" className={ibmPlexSansArabic.variable}>
      <body>{children}</body>
    </html>
  );
}
