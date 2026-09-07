"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Sidebar } from "@/components/layout/sidebar";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");

    function closeAtDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setOpen(false);
        document.body.style.overflow = "";
        if (dialogRef.current?.open) dialogRef.current.close();
      }
    }

    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  function closeMenu() {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="فتح قائمة التنقل"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-xs transition-colors hover:bg-muted lg:hidden"
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="قائمة التنقل"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
        className="fixed inset-0 m-0 h-svh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-slate-950/45 lg:hidden"
      >
        <div className="relative ml-auto h-full w-[min(86vw,280px)] shadow-2xl">
          <div className="absolute left-3 top-3 z-10">
            <button
              type="button"
              aria-label="إغلاق قائمة التنقل"
              onClick={closeMenu}
              className="inline-flex size-11 items-center justify-center rounded-lg bg-white/12 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <Sidebar className="w-full" onNavigate={closeMenu} />
        </div>
      </dialog>
    </>
  );
}
