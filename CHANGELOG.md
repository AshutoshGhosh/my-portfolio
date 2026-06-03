# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Content update — synced to latest resume

Refreshed site copy to match the current resume (6+ years, Fortune 500 clients, broader stack).

- **Hero** ([`Home.jsx`](src/components/Home.jsx)): role updated to Full-Stack Engineer /
  Frontend Lead / React & Next.js Developer; summary rewritten (6+ years, Fortune 500:
  McDonald's, Microsoft, Amazon).
- **About** ([`About.jsx`](src/components/About.jsx)): summary rewritten; stat strip changed to
  6+ years · 3 Fortune 500 clients · 60% frontend perf gain · 7 team members led.
- **Skills** ([`Skills.jsx`](src/components/Skills.jsx)): added categorized skill groups —
  Frontend, Backend, Databases & Messaging, Cloud & DevOps, and AI-Augmented Dev (Claude Code,
  Cursor, Codex, MCP) — covering TypeScript, Next.js, Vue, PostgreSQL, Azure, GCP, Docker, etc.
- **Experience** ([`Experience.jsx`](src/components/Experience.jsx)): updated titles, designations,
  and bullets (Senior Analyst / Frontend Lead, 60% perf gain, SAML SSO, Hyblock Capital, awards).
- **Work** ([`Work.jsx`](src/components/Work.jsx)): replaced screenshot cards with description +
  tech-tag cards featuring key projects — McDonald's GRNT, Microsoft Value Case, Amazon SALT,
  Hyblock Capital, theIncircle, Restoration Hardware. Public URLs link out; internal/enterprise
  projects are labelled (no fabricated links or screenshots).
- **Contact** ([`Contact.jsx`](src/components/Contact.jsx)): added phone number.
- **Links**: LinkedIn updated to the `linkedin.com/in/ashutosh-ghosh` vanity URL (Navbar + Footer).
- **`<head>`** ([`public/index.html`](public/index.html)): title and meta/OG copy updated to
  "Full-Stack Software Engineer".

### Modern "Dark & Premium" Portfolio Redesign

A full visual redesign transforming the generic dark-navy, tutorial-style site into a
polished, modern dark/premium portfolio (Linear/Vercel aesthetic) with rich GSAP
ScrollTrigger scroll animations, a real design system, glassmorphism, and gradient accents.
No new dependencies were added — GSAP (already installed) now powers scroll reveals.

### Added

- **Design system** in [`tailwind.config.js`](tailwind.config.js):
  - Dark/premium color tokens (`bg #06070b`, `surface`, `elevated`, glass `line`, `heading`, `muted`).
  - Violet → fuchsia → cyan `accent-gradient` plus radial gradient "orb" backgrounds.
  - `Inter` (sans) and `Sora` (display) font families.
  - Keyframes/animations: `fade-up`, `float`, `glow-pulse`, `gradient-x`, `marquee`, `aurora`.
  - `glow`, `glow-fuchsia`, and `card` box shadows.
- **Reusable UI primitives** in [`src/components/ui/`](src/components/ui/):
  - `useReveal.js` — GSAP `ScrollTrigger` hook for consistent staggered fade-up reveals
    (registered once, `prefers-reduced-motion` aware).
  - `Reveal.jsx` — wrapper component applying `useReveal` to its children.
  - `SectionHeading.jsx` — unified eyebrow + title + gradient underline + subtitle
    (replaces the duplicated heading markup across sections).
  - `GradientOrbs.jsx` — animated blurred gradient background blobs (the premium glow).
- **CSS utilities** in [`src/index.css`](src/index.css): `.glass`, `.gradient-text`,
  `.gradient-text-static`, `.glow-ring`, `.section-pad`; custom scrollbar; accent text
  selection; `prefers-reduced-motion` guard.
- **Hero enhancements** ([`Home.jsx`](src/components/Home.jsx)): animated gradient orbs,
  "available for work" status pill, animated gradient typed text, dual CTAs (View Work /
  Get in touch), GSAP entrance timeline, and a scroll-down indicator.
- **Navbar** ([`Navbar.jsx`](src/components/Navbar.jsx)): glassmorphic pill nav with
  active-section highlighting (`react-scroll` spy), social/resume icon buttons, scroll-aware
  spacing, and an animated full-screen mobile overlay with staggered links.
- **About** ([`About.jsx`](src/components/About.jsx)): a stat strip (years, companies,
  projects, technologies) in glass cards.
- **Footer** ([`Footer.jsx`](src/components/Footer.jsx)): a back-to-top button and a dynamic
  copyright year.
- **`<head>` metadata** ([`public/index.html`](public/index.html)): Open Graph tags, font
  preconnects, and a `theme-color`.

### Changed

- **All sections rebuilt** with the new design system and scroll reveals:
  - `Skills.jsx` — logo grid replaced with hover-lift glass tiles (data-driven).
  - `Experience.jsx` — Flowbite tab cards replaced with a vertical timeline.
  - `Work.jsx` — cards rebuilt with image overlays, hover zoom, and reveal-on-hover details.
  - `Contact.jsx` — glass form with refined inputs, focus rings, and a gradient submit button.
- **Typography**: switched the global font from `Raleway` to `Inter` / `Sora`.
- **`App.js`**: removed commented-out dead GSAP code; wrapped sections in semantic `<main>`.
- **`public/index.html`**: removed the now-unused Flowbite CSS/JS includes.

### Fixed

- **Work cards no longer reload the page** — removed the `<a href="/">` wrapper that
  navigated to `/` on click; project links now use `target="_blank" rel="noopener noreferrer"`.
- **Removed the fake 5-second skeleton loader** in `Experience.jsx` — content renders immediately.
- **Typos**: "Job Synosis" → "Job Synopsis"; "SmartData Enterprices" → "Enterprises";
  meta description "mordern porfolio" corrected.
- **Invalid markup**: `<li>` items nested in `<span role="list">` replaced with a proper `<ul>`.
- **Dead footer social icons** are now real links (LinkedIn, GitHub, Email).
- **Accessibility**: per-skill `alt` text (was all `"HTML_icn"`).
- **`class="loader"` → `className`** in the contact form button.
- **Stray dangling `</script>` tag** removed from `public/index.html`.

### Notes

- No new dependencies; `gsap/ScrollTrigger` ships with the installed GSAP package.
- EmailJS contact flow and all environment variables are unchanged.
- Verified via `npm run build` (with `CI=true`, treating warnings as errors) — compiled clean.
