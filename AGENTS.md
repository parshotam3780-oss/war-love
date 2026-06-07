# AGENTS.md — WAR LOVE Tournament

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A dark, cinematic gaming tournament site for the **WAR LOVE Free Fire Championship**. Single long-scroll page with hero, stats, schedule, teams, prizes, app download, and registration sections. Built with TanStack Start + React on Netlify.

All content lives in a single route (`src/routes/index.tsx`). All custom styles are in `src/styles.css` using CSS custom properties.

## Color Palette (CSS vars in styles.css)

- `--crimson: #8b0000` / `--crimson-bright: #c0392b` — primary red
- `--purple-deep: #1a0028` / `--purple-accent: #7b2d8b` / `--purple-bright: #a855f7` — purple spectrum
- `--gold-bright: #ffd700` — prize highlights
- `--off-black: #0a0007` — base background

## Fonts (loaded in __root.tsx)

- `Bebas Neue` — display/headings → `.font-display`
- `Rajdhani` — body text (base font)
- `Orbitron` — labels, badges, counters → `.font-orbitron`

## Key CSS Classes (styles.css)

- `.btn-download` — angled clip-path CTA button (red gradient)
- `.btn-secondary` — outlined purple button
- `.stat-card` — chamfered stat card with hover lift
- `.team-card` — purple-bordered team entry
- `.schedule-card` — left-border schedule row
- `.prize-card-gold` — gold-accented prize card
- `.animated-border` — gradient animated border
- `.glitch-text` — red/purple glitch pseudo-element effect
- `.countdown-digit` — chamfered countdown unit box

## Animations (styles.css @keyframes)

- `glitch-1` / `glitch-2` — hero title glitch
- `flame-flicker` — FlameDeco SVG breathing
- `ember-rise` — particle floaters (uses `--x-drift` CSS var per particle)
- `scan-line` — horizontal hero overlay
- `title-reveal` — staggered page load with `.reveal-1/.reveal-2/.reveal-3/.reveal-4`

## Adding Sections

1. Add `<section id="new-section">` between existing sections in `index.tsx`
2. Alternate `var(--surface)` / `var(--surface-2)` / `var(--off-black)` for backgrounds
3. Use the eyebrow pattern: `font-orbitron text-xs tracking-widest` + `color: #7b2d8b`
4. Heading: `.font-display` with red/purple accent span

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── logo.png
│   ├── tanstack-circle-logo.png
│   └── tanstack-word-logo-white.svg  # TanStack wordmark logo (white) used in header/nav.
├── src
│   ├── components
│   │   ├── Header.tsx  # Header.
│   │   ├── HeaderNav.tsx  # Navigation sidebar template: mobile menu, Home link, add-on routes; EJS-driven for dynamic route generation.
│   │   ├── ProductAIAssistant.tsx  # AI marketing assistant.
│   │   └── ProductRecommendation.tsx  # Product recommendation card.
│   ├── data
│   │   └── products.ts  # Product catalog data template.
│   ├── lib
│   │   ├── product-ai-hook.ts  # useProductChat hook.
│   │   └── product-tools.ts  # AI tools: getProducts, recommendProduct.
│   ├── routes
│   │   ├── products
│   │   │   └── $productId.tsx  # Product detail page with recommendation.
│   │   ├── __root.tsx  # Root layout: Header, styles.
│   │   ├── api.product-chat.ts  # POST handler for product AI chat.
│   │   └── index.tsx  # Marketing home with ProductAIAssistant.
│   ├── store
│   │   └── product-assistant.ts  # Zustand store for assistant state.
│   ├── router.tsx  # TanStack Router setup: creates router from generated routeTree with scroll restoration.
│   └── styles.css  # Global styles.
├── .gitignore  # Template for .gitignore: node_modules, dist, .env, .netlify, .tanstack, etc.
├── AGENTS.md  # This document provides an overview of the project structure for developers and AI agents working on this codebase.
├── netlify.toml  # Netlify deployment config: build command (vite build), publish directory (dist/client), and dev server settings (port 8888, target 3000).
├── package.json  # Project manifest with TanStack Start, React 19, Vite 7, Tailwind CSS 4, and Netlify plugin dependencies; defines dev and build scripts.
├── pnpm-lock.yaml
├── tsconfig.json  # TypeScript config: ES2022 target, strict mode, @/* path alias for src/*, bundler module resolution.
└── vite.config.ts  # Vite config template: TanStack Start, React, Tailwind, Netlify plugin, and optional add-on integrations; processed by EJS.
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/`
- `api.*.ts` - Server API endpoints (e.g., `api.resume-chat.ts` → `/api/resume-chat`)

### Component Architecture

**UI Primitives** (`src/components/ui/`):
- Radix UI-based, Tailwind-styled
- Card, Badge, Checkbox, Separator, HoverCard

**Feature Components** (`src/components/`):
- Header, HeaderNav, ResumeAssistant

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for jobs and education frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword

### State Management
- React hooks for local state
- Zustand if you need it for global state
### Marketing Site with AI Assistant

Marketing site with TanStack AI chat assistant. No Stripe checkout.

**AI tools available:**
- `getProducts` - Get all products from catalog
- `recommendProduct` - Display product recommendation card (MUST use for recommendations)

**Components:** ProductAIAssistant, ProductRecommendation

**Dependencies:** @tanstack/ai, streamdown

## Environment Variables

For AI: ANTHROPIC_API_KEY, OPENAI_API_KEY, GEMINI_API_KEY, or OLLAMA_BASE_URL (same as ai add-on).

## Application Name

This starter uses "Application Name" as a placeholder throughout the UI and metadata. Replace it with the user's desired application name in the following locations:

### UI Components
- `src/components/Header.tsx` — app name displayed in the header
- `src/components/HeaderNav.tsx` — app name in the mobile navigation header

### SEO Metadata
- `src/routes/__root.tsx` — the `title` field in the `head()` configuration

Search for all occurrences of "Application Name" in the `src/` directory and replace with the user's application name.
