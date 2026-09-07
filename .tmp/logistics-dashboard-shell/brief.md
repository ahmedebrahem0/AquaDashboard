# Logistics Dashboard Shell Brief

Implement Phase 2 design-system refinements and Phase 3 application shell for a professional Arabic RTL logistics dashboard reviewed by company assessors. Stop before KPI data, charts, orders, and map implementation.

Extend the existing Next.js 16 app, preserve existing work, follow local Next.js documentation, and do not change dependencies. Keep Server Components by default and isolate mobile navigation state in a small Client Component. Continue Cairo 400/600/700 and its known remote-font build constraint. Use `public/Dashboard.png` only as reference.

Create a compact enterprise shell: fixed deep-indigo sidebar on the desktop right, off-white workspace, fine cool borders, white surfaces, lime accent, restrained hierarchy, and a distinctive lime-on-indigo active navigation state. Add the KOWA / كوا wordmark with text/CSS, Arabic navigation with Lucide icons, a real dashboard link, and disabled future items.

Create the dashboard route layout, AppShell, Sidebar, SidebarNav, Header, MobileNavigation, navigation config, and site config. The page should contain the real heading/filter-row shell and restrained structural placeholders only.

Provide an accessible mobile drawer with backdrop/Escape close, focus handling, body behavior, landmarks, skip link, visible focus, touch targets >=44px, logical RTL alignment, and reduced-motion support. Verify 320/375/768/1024/1440/1920 widths, lint, typecheck, Next typegen/build, and desktop/mobile screenshots.
