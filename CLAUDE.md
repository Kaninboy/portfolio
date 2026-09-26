# CLAUDE.md — Portfolio site (kaninboy)

Personal portfolio website for **Kanin Sukittivarapunt ("New")**. Public-facing, English-only.

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3
- Icons: `react-icons`, `@heroicons/react` · UI primitives: `@headlessui/react`
- Commands: `npm run dev` (localhost:3000) · `npm run build` · `npm run lint`
- Remote: `github.com/Kaninboy/portfolio`
- Deploy: **Vercel** → live at `https://kaninboy.vercel.app`
- Resume/CV PDF is hosted on S3 (`kanin-portfolio-website.s3.ap-southeast-1.amazonaws.com/CV_Kanin.pdf`) — not in this repo.

## Current state (as of 2026-09-27)

- Single page: `src/app/page.tsx` — hero only (photo, name, tagline, GitHub/LinkedIn/email icons, Resume button).
- **Content is stale** — still says "Chulalongkorn student"; New has been a System Analyst at RIS Central Group since Jul 2025. `layout.tsx` metadata is stale too.
- `src/components/Navbar.tsx` is an **unmodified Tailwind UI template** (Product / Features / Marketplace / Log in) and is commented out. Treat as a placeholder — rewrite or delete, don't extend.
- The site has no real sections yet.

## Content source of truth — never invent career facts

Career facts live in the sibling repo `claude-note` (Blair's folder). Read from there; don't copy stale text from this repo, and don't make up metrics, titles, dates, or project details.

| Need | Read |
|---|---|
| Work history, education, skills, certs, tenure | `../claude-note/blair/profile.md` |
| Resume bullets (current, published) | `../claude-note/blair/resume-current.md` |
| RIS project detail | `../claude-note/blair/projects/` |
| LinkedIn About (published tone/positioning) | `../claude-note/blair/linkedin-about-draft.md` |
| Live LinkedIn headline/positions snapshot | `../claude-note/blair/LinkedIn-export-27-sep-2026/Profile.csv`, `Positions.csv` |

Start sessions with `claude --add-dir ../claude-note/blair` so these are readable.

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
- Must stay responsive (mobile-first) and pass `npm run build` + `npm run lint` before calling work done.
- Commit only when New says "commit"; split commits by task; push only on "commit and push".
