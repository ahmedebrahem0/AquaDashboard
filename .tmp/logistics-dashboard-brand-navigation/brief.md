# Logistics Dashboard Brand & Navigation Brief

## Objective
Integrate exact Figma colors and exported assets into the Arabic RTL dashboard. Convert all eleven sidebar entries to real routes, add honest polished `متوفر قريبًا` pages, and use the supplied loading artwork as a route loading state while preserving the dashboard overview.

## Source-of-truth tokens
- Primary indigo: `#1F0F8C`
- Active lime: `#D3D93C`
- Success: `#16A34A`
- Warning: `#F59E0B`

Active navigation uses exactly lime background and indigo text/icon. The KOWA mark and active rail are the memorable feature.

## Navigation and routes
Accessible links in this exact order: لوحة التحكم, الرحلات, السواقين, المستخدمين, طلبات القبول, المالية والمحفظة, الراتب الشهري, التقارير, الدعم والبلاغات, الإشعارات, الإعدادات. Dashboard is `/`; unfinished sections use clean English slugs. Active state is pathname-derived, nested-safe, exposes `aria-current="page"`, works desktop/mobile, and mobile drawer closes after selection.

## Assets
Inspect every `public/` file first. Use supplied brand, icon, and loading assets wherever mapping is unambiguous. Raster assets use `next/image` and explicit sizing. Nav icons have empty alt because link text names them. Do not render `Dashboard.png` or the map asset in this phase.

## Coming soon and loading
Use one scalable dynamic route backed by a strict config allowlist; unknown slugs call `notFound()`. Each valid route displays its title/icon, concise availability message, and dashboard return link inside the existing shell, with clean per-route metadata. Add `(dashboard)/loading.tsx` as a centered responsive status using the supplied image, without fake delays, duplicate noisy text, or layout shift.

## Architecture and quality
Keep static nav metadata in config and client boundaries limited to pathname/drawer behavior. Preserve dashboard feature code and dependencies. Follow local Next.js 16 docs. No generated imagery, gradients, empty folders, or broad barrels. Validate accessibility, exact colors, 44px targets, no overflow from 320–1920px, short heights, all routes/404/loading, lint, typecheck, build, and screenshots.
