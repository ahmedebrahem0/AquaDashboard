# KOWA Logistics Dashboard

Arabic-first logistics dashboard built as a front-end implementation of a Figma design. The project focuses on accurate RTL behavior, responsive layouts, accessible interactions, maintainable feature boundaries, and a small client-side footprint.

## Highlights

- Arabic document language and right-to-left layout from the root.
- Responsive application shell with a desktop sidebar and accessible mobile drawer.
- Eleven working navigation routes with clear active states.
- Honest coming-soon pages for sections that are not implemented yet.
- URL-backed dashboard date filters for shareable and persistent state.
- Typed, deterministic dashboard data with pure selectors.
- Live delivery map, current trips, trend analysis, status distribution, city ranking, demand sources, and peak-hours heatmap.
- Compact scrollbar-free desktop sidebar with accessible scrolling retained for short viewports.
- Lightweight SVG sparklines instead of loading a chart library for small trends.
- Semantic design tokens based on the Figma palette.
- Keyboard navigation, visible focus states, reduced-motion support, and accessible status text.
- Optimized local assets organized by responsibility.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 4
- Recharts for responsive analytics charts
- Lucide React for interface icons
- shadcn configuration with Base UI primitives

## Project Structure

```text
src/
├── app/
│   └── (dashboard)/          # Dashboard routes, shared layout and loading state
├── components/
│   └── layout/               # App shell, header, sidebar and mobile navigation
├── config/                   # Site and navigation configuration
├── features/
│   ├── dashboard/            # KPI components, mock data, selectors and types
│   ├── analytics/            # Typed insights and isolated chart clients
│   ├── delivery-map/         # Static optimized live-map card
│   └── orders/               # Current-trip data, types and presentation
└── lib/                      # Shared utilities

public/
├── icons/
│   └── navigation/           # Sidebar icons exported from Figma
└── images/
    ├── brand/                # KOWA brand assets
    ├── map/                  # Delivery map artwork
    └── states/               # Loading artwork
```

The route layer handles composition and metadata. Reusable layout components remain domain-independent, while dashboard-specific data and presentation live together under `src/features/dashboard`. Interactive behavior is kept inside small Client Components; pages and layouts remain Server Components by default.

## Routes

The dashboard is available at `/`. The remaining sidebar destinations use real routes and currently display a clear coming-soon state:

`/trips`, `/drivers`, `/users`, `/acceptance-requests`, `/wallet`, `/monthly-salary`, `/reports`, `/support`, `/notifications`, and `/settings`.

Unknown section paths return the application 404 response.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL opens the main dashboard directly.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

The interface has been checked at 320, 375, 768, 1024, 1440, and 1920 pixel widths. Navigation, mobile drawer behavior, active-route styling, invalid filter fallback, and unknown-route handling were also verified.

## Design Decisions

- Brand colors are defined as semantic CSS variables rather than repeated literals.
- Dashboard filter state is stored in the URL without introducing a global state library.
- Mock data, derived calculations, types, and presentation are separated.
- Exported Figma icons and brand imagery are served locally through Next.js.
- Unfinished functionality is represented honestly instead of using non-functional controls.
- The architecture is intentionally incremental: files and abstractions are added only when they have a real responsibility.
