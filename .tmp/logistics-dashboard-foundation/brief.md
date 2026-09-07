# Logistics Dashboard Foundation Brief

## Objective

Establish only a production-ready foundation for an Arabic RTL logistics dashboard. This phase does not implement the full dashboard, sidebar, charts, orders, or map.

## Reference

Use `public/Dashboard.png` as the visual reference. Preserve it and do not render it in the application.

## Requirements

- Read the relevant local Next.js 16 documentation under `node_modules/next/dist/docs/` before coding, as required by `AGENTS.md`.
- Preserve the existing dirty worktree and the intentionally deleted starter files.
- Do not install or remove dependencies.
- Create `src/app/layout.tsx` with Arabic metadata, `lang=ar`, `dir=rtl`, and a minimal Arabic font loaded through `next/font`.
- Create `src/app/(dashboard)/page.tsx` as a restrained, semantic Arabic placeholder available at `/`, without creating a conflicting `src/app/page.tsx`.
- Create `src/app/globals.css` using Tailwind CSS v4, semantic design tokens sampled from the reference, RTL-safe base styles, accessible focus styles, and reduced-motion support.
- Create `src/lib/utils.ts` with the shared `cn()` utility.
- Set `rtl` to `true` in `components.json` if that is valid for the installed shadcn schema.
- Add only a `typecheck` script to the existing scripts.
- Use deep indigo, quiet gray and white surfaces, a lime accent, and semantic status colors.
- Run lint, typecheck, and production build after implementation.

## Scope Guardrails

- Do not build the full dashboard UI in this phase.
- Do not add images or generate assets; the provided dashboard screenshot is sufficient as a palette and visual-direction reference for this foundation.
- Do not add dependencies, state management, data fetching, charts, maps, or feature modules.
