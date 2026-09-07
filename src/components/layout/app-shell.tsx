import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <a
        href="#main-content"
        className="fixed start-4 top-3 z-50 -translate-y-20 rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-lg transition-transform focus:translate-y-0"
      >
        انتقل إلى المحتوى الرئيسي
      </a>

      <Sidebar className="fixed inset-y-0 right-0 z-30 hidden lg:flex" />

      <div className="min-h-svh lg:mr-[232px]">
        <Header />
        <main id="main-content" tabIndex={-1} className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1500px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
