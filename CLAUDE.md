# CLAUDE.md — Portfolio site (kaninboy)

Personal portfolio website for **Kanin Sukittivarapunt ("New")**. Public-facing, English-only.

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3
- Icons: `react-icons` (social icons), `@heroicons/react` (theme toggle sun/moon) · no UI component library
- Commands: `npm run dev` (localhost:3000) · `npm run build` · `npm run lint`
- Remote: `github.com/Kaninboy/portfolio`
- Deploy: **Vercel** → live at `https://kaninboy.vercel.app`
- Resume/CV PDF is hosted on S3 (`kanin-portfolio-website.s3.ap-southeast-1.amazonaws.com/CV_Kanin.pdf`) — not in this repo.

## Current state (as of 2026-09-27)

- Single scrolling page, composed in `src/app/page.tsx`: Hero (`#top`) → About `01` → Experience `02` → Projects `03` → Skills `04` → Education & Awards `05` (includes `#certifications`) → Contact `06` (`Footer.tsx`, `#contact`).
- **All site copy lives in `src/data/profile.ts`** — components only render it. Edit copy there, sourced from `claude-note` (see below). RIS project bullets are the verbatim published LinkedIn text from `linkedin-ris-entry.md`.
- Hero content is fixed by New (photo, "Hello!", name + "(New)", tagline, interests line, icons, Resume button) — restyle freely, don't rewrite its content.
- Contact heading "Let's connect." is site-only copy (not from claude-note).

## Design system — "Glass Aurora"

Ported from a Glass Aurora one-page HTML mock (dark glassmorphism). Rules:

- **Font: Inter only** (`next/font` in `layout.tsx`). New explicitly kept it — don't add the mock's Geist / Geist Mono / Instrument Serif.
- **Theme tokens** are CSS variables in `src/app/globals.css`: dark on `:root` (default), light on `html[data-theme="light"]`. Tailwind maps them as colors in `tailwind.config.ts` (`bg`, `fg`, `fgx`, `muted`, `dim`, `soft`, `soft2`, `line-*`, `glass-*`). Use these — no hard-coded grays.
- **Theme switching:** inline script in `layout.tsx` sets `data-theme` before paint (localStorage `pf-theme` → OS preference → dark); toggle lives in `Navbar.tsx` and shows the current mode (moon = dark, sun = light). Theme-dependent visuals should key off `html[data-theme]` in CSS (e.g. Tailwind `[html[data-theme=light]_&]:`), not React state, to avoid a pre-hydration flash.
- **Glass classes** (`globals.css`): `.glass` (cards), `.glass-strong` (contact card), `.glass-nav` + `.nav-indicator` (navbar), `.glass-pill` (secondary buttons), `.btn-solid` (primary buttons).
- **Light mode needs its own edge treatment:** the mock's dark hairlines read as drawn outlines on light backgrounds. Navbar uses white edges + soft drop shadows in light (`--nav-*`, `--ind-*` tokens); dark keeps the mock's values.
- **Aurora:** `src/components/Aurora.tsx` — 3 fixed blurred, animated blobs + vignette, intensity 1 (New's call). Animation off under `prefers-reduced-motion`.
- **Navbar:** `md`+ = floating glass pill (wordmark · 6 links with sliding indicator · theme toggle). Below `md` = compact glass bar (wordmark · theme toggle · menu button, 40px targets) with a glass dropdown of all sections; closes on link tap, outside tap, Esc, or resize to `md`. New chose this over a sideways-scrolling pill (hid 3 links + the toggle on phones).
- **Hero photo:** no frame; upright pill at the photo's native 3:4 (`public/profile.jpg` is 1774×2363) — 240×320 mobile, 300×400 desktop. New's call — don't crop it to a circle or landscape.
- **Scroll reveal:** add `data-reveal` to a block; `RevealOnScroll.tsx` fades it in. Nothing is hidden without JS or with reduced motion.
- Performance watch-out: many `backdrop-filter` cards over an animated blurred aurora is GPU-heavy — check scrolling on a real phone after visual changes.

## Content source of truth — never invent career facts

Career facts live in the sibling repo `claude-note` (Blair's folder). Read from there; don't copy stale text from this repo, and don't make up metrics, titles, dates, or project details.

| Need | Read |
|---|---|
| Work history, education, skills, certs, tenure | `../claude-note/blair/profile.md` |
| Resume bullets (current, published) | `../claude-note/blair/resume-current.md` |
| RIS project detail | `../claude-note/blair/projects/` |
| LinkedIn About (published tone/positioning) | `../claude-note/blair/linkedin-about-draft.md` |
| Live LinkedIn headline/positions snapshot | `../claude-note/blair/LinkedIn-export-27-sep-2026/Profile.csv`, `Positions.csv` |

`../claude-note/blair` is pre-added via `.claude/settings.local.json` (gitignored) — **read-only**: Edit/Write there is denied. Never modify Blair's files from this repo; if a career fact is wrong, tell New to fix it in `claude-note`.

If a fact you need isn't in those files, **ask New** — don't fill the gap.

## Publishing rules (public site)

- **Never publish internal project codenames "Humi" or "CNEXT"** — public copy says "HRMS replacement project".
- **Never publish phone number** or other PII from the LinkedIn export. Public email = the one already on the site unless New says otherwise.
- No confidential RIS / Central Retail numbers, client names, or internal system names beyond what's already on New's public LinkedIn.
- **American spelling** (program, license, cataloged) — matches LinkedIn.
- Positioning: New plans a move in 2027 and the direction is **open** (SA / PO-PM / Cloud Architect / Master's). Keep the site broadly positioned — don't commit the copy to one path unless New decides.

## Working rules

- Talk to New in mixed Thai-English; site copy itself is English.
- TL;DR first, push back once if you disagree, then follow his call.
- Content/sections are decided before visual redesign — design around real content.
- Must stay responsive (mobile-first) and pass `npm run build` + `npm run lint` before calling work done. Check both themes.
- Don't run `next build` while `next dev` is running (they share `.next`). On Windows, stopping `npm run dev` can orphan the node server on :3000 — find it by port before starting another.
- Commit only when New says "commit"; split commits by task; push only on "commit and push".
