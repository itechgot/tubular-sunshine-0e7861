# AGENTS.md — Schoon Amsterdam

Single-page marketing website for a Dutch cleaning company. Built with TanStack Start + Tailwind CSS v4, deployed on Netlify.

## Architecture

All site content is in `src/routes/index.tsx` as one React component. No sub-routes, no data fetching, no backend.

### Key files

| File | Purpose |
|------|---------|
| `src/routes/__root.tsx` | HTML shell, head meta, Google Fonts |
| `src/routes/index.tsx` | Entire website — all sections |
| `src/styles.css` | CSS variables, animations, utility classes |

## Design System

Colors defined as CSS custom properties in `styles.css`:
- `--forest` (`#1F3B2B`) — primary brand/CTAs
- `--sage` (`#7EB89A`) — accents
- `--mint` (`#B8DECA`) — highlights on dark backgrounds
- `--cream` (`#F7F5F0`) — page background
- `--gold` (`#C9A84C`) — "popular" badge

Fonts: `Cormorant Garamond` (display headings) + `Outfit` (body) from Google Fonts.

## Animation Pattern

`useReveal()` hook attaches IntersectionObserver to add `.visible` class, triggering CSS transitions. Classes: `reveal`, `reveal-left`, `reveal-right`.

## WhatsApp

Number set at top of `HomePage` component (`whatsappNumber`). Replace before going live.

## Conventions

- Tailwind for layout/spacing, CSS variables for colors in `style` props
- All copy is in Dutch (NL)
- Inline SVG icon components — no icon library dependency
- Images from Unsplash URLs — replace with owned photography for production
