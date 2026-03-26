# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production (static export to /out)
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a Next.js 16 bilingual portfolio site with static export, deployed to Netlify.

### Routing

- App Router with `[locale]` dynamic segment (`src/app/[locale]/`)
- Root `src/app/page.tsx` redirects to `/en`; `netlify.toml` also redirects `/` → `/en`
- `localePrefix: "as-needed"` means English URLs have no `/en` prefix; Malay URLs require `/ms`
- No `middleware.ts` — locale resolution handled entirely by next-intl plugin + static export

### Internationalisation (next-intl v4)

- `src/i18n/routing.ts` — defines locales `["en", "ms"]` and `defaultLocale: "en"`
- `src/i18n/request.ts` — server-side config, loads `messages/{locale}.json`
- `src/i18n/navigation.ts` — re-exports `Link`, `useRouter`, `usePathname`, etc. with locale awareness
- Translation strings live in `messages/en.json` and `messages/ms.json`
- Use `useTranslations("SectionName")` in client components; `getTranslations` in server components
- Data files in `src/data/` may reference translation key paths instead of hardcoded strings

### Theming (Tailwind CSS v4 + next-themes)

- No `tailwind.config.ts` — configuration is CSS-first in `src/app/globals.css`
- CSS custom properties defined in `:root` (light) and `.dark` (dark) selectors
- Mapped to Tailwind tokens via `@theme inline { --color-*: var(--*); }` — so `bg-primary`, `text-muted-foreground`, etc. work as Tailwind classes
- Dark mode variant: `@custom-variant dark (&:where(.dark, .dark *))` — use `dark:` prefix in classes
- Do **not** hardcode color values; always use the semantic CSS variables or their Tailwind equivalents

### Animations

- Framer Motion rebranded: import from `motion/react`, not `framer-motion`
- Reusable wrappers: `src/components/animations/FadeInOnScroll.tsx`, `StaggerChildren.tsx`

### Component conventions

- Client components use `"use client"` and `useTranslations()`
- Server components use `getTranslations()` (async)
- Locale layout (`src/app/[locale]/layout.tsx`) wraps with `NextIntlClientProvider` and `ThemeProvider`
- `src/app/[locale]/layout.tsx` must call `setRequestLocale(locale)` and export `generateStaticParams()`

### Deployment

- `output: "export"` in `next.config.ts` produces static files in `/out`
- Netlify build: `npm run build`, publish dir `out`, using `@netlify/plugin-nextjs`
