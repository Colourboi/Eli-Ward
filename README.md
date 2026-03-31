# Eli Ward (Next.js)

This project is now a Next.js + TypeScript + Tailwind site.

## Run locally

1. Install dependencies
   - `npm install`
2. Start dev server
   - `npm run dev`

Server runs at `http://127.0.0.1:4173`.

## Routes

- `/`
- `/music`
- `/services`
- `/shop`
- `/contact`
- `/socials`

## TODO

Improvements identified from a 2024-2025 best practices audit. Prioritized by effort-to-impact ratio.

### High Priority

- [ ] **Switch fonts to `next/font/google`** — eliminates the cross-origin Google Fonts fetch, removes font-swap layout shift, and improves LCP. Currently loaded via `<link>` in `<head>`, which is render-blocking.
- [ ] **Wire the contact form** — `action="#" method="post"` does nothing on submit. Add `app/api/contact/route.ts` handler using Resend or Formspree. Add client-side validation and success/error states. A broken contact form is a credibility problem.
- [ ] **Add a hero descriptor + streaming CTA above the fold on mobile** — first-time visitors (e.g. from TikTok/press) land on the homepage and see only the signature logo with no context and no action. Add a one-line descriptor ("Nashville singer-songwriter · Stream now") and a Spotify CTA inside the hero content area.
- [ ] **Add `loading="lazy"` to the homepage YouTube iframe** — the video embed in the hero section loads ~500KB of YouTube scripts on every page visit regardless of scroll. One attribute fix.
- [ ] **Fix hamburger touch target** — current size is ~36×30px, below Google's 48×48px Core Web Vitals threshold. Add `min-width: 48px; min-height: 48px` to `.menu-toggle`.
- [ ] **Add `images: { formats: ['image/avif', 'image/webp'] }` to `next.config.ts`** — enables AVIF serving (50% smaller than WebP at equal quality). No other changes needed.

### Medium Priority

- [ ] **Add a nav overlay/scrim** — when the mobile nav panel is open, there's no backdrop behind it. Users can't tap outside to close. Add a semi-transparent overlay covering the rest of the screen that dismisses the nav on click.
- [ ] **Add footer navigation links** — after reading to the bottom of a page there's no way to navigate without scrolling back to the top. Add a row of site links to the footer: Home · Music · Services · Contact.
- [ ] **Fix mobile nav social icon touch targets** — SVG icons in the nav panel are 18×18px with no padding. Wrap in a container with `min-width: 48px; min-height: 48px` and centered alignment.
- [ ] **Reduce hero watermark count on mobile** — 13 animated elements run simultaneously on page load. Hide ~half via `@media (max-width: 768px) { display: none }` to reduce GPU compositor layer count on low-end Android.
- [ ] **Add `will-change: transform, opacity` to `.hero-wm`** — promotes watermark elements to compositor layers for smoother animation. Balance against memory cost on low-end devices.

### Lower Priority / Future

- [ ] **YouTube facade pattern** — replace the YouTube iframe with a clickable thumbnail that loads the real player only on click. Use `lite-youtube-embed` (npm). Defers the ~500KB YouTube script until user interaction. Lighthouse explicitly recommends this.
- [ ] **Add real artist photo to hero** — a full-bleed photo with dark overlay is the dominant 2024-25 pattern for musician sites. The `bio-image-placeholder` indicates a photo is planned; it should also anchor the hero background.
- [ ] **Add "Latest release" callout in or below the hero** — a "New: Keep Yourself EP — Listen now" strip is a high-converting pattern for visitors from press/editorial.
- [ ] **Add booking contact info to the footer** — a `mailto:` link or "Booking inquiries: [email]" line catches visitors who won't fill a form. Standard expectation on musician sites.
- [ ] **Fix footer copyright year** — currently rendered client-side via `useState(null)` + `useEffect`, causing a flash from blank to "2026". Use `new Date().getFullYear()` as the initial state value instead.
- [ ] **Add skip navigation link** — a "Skip to main content" link as the first focusable element, visible on focus, for keyboard/screen reader users. Required for WCAG 2.2 AA.
- [ ] **Review INP (Interaction to Next Paint)** — INP replaced FID as a Core Web Vital in March 2024. Profile interaction latency using Chrome DevTools Performance panel or PageSpeed Insights field data.
- [ ] **Investigate CSS Container Queries** — for component-level responsive behavior (e.g. cards responding to their container width rather than viewport). Now fully supported in all major browsers.
