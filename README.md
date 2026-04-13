# ship-website

Marketing website for [SHIP](https://shipplatform.ai) — the AI-native trading platform team.

Built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**. Statically exported as plain HTML/CSS/JS for GitHub Pages deployment.

## Development

From the monorepo root:

```bash
pnpm dev        # start dev server on http://localhost:3000
pnpm build      # static export → apps/ship-website/out/
```

Or from this directory:

```bash
pnpm dev
pnpm build
```

## Static export

`next.config.ts` sets `output: "export"`, producing a fully static site in `out/`. No Node.js server required — deploy the `out/` folder directly to GitHub Pages, Netlify, or any static host.

## Project structure

```
app/
  layout.tsx          root layout, fonts, metadata, PostHog
  page.tsx            landing page (composes all sections)
  globals.css         Tailwind theme + custom animations
  privacy/page.tsx    privacy policy
  terms/page.tsx      terms of service
components/
  hero.tsx            hero + terminal animation
  nav.tsx             sticky nav + mobile menu
  pilot-banner.tsx    top banner
  problem.tsx         pain-point cards
  rebuild-curse.tsx   "same 6 modules" grid
  solution.tsx        SHIP method (S-H-I-P)
  virtual-team.tsx    AI team roles
  markets.tsx         asset classes + connectivity
  how-it-works.tsx    3-step process
  blueprints.tsx      accordion of blueprint details
  production-grade.tsx  performance metrics
  numbers.tsx         cost comparison table
  drift-calculator.tsx  interactive ROI calculator
  founder.tsx         career timeline + quote
  book-call.tsx       CTA for discovery call
  waitlist-form.tsx   multi-step waitlist signup
  mobile-cta-bar.tsx  sticky mobile CTA
  footer.tsx          footer links
  json-ld.tsx         structured data
```
