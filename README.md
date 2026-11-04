# MHM Custom Home Builders — Website

A production-ready marketing site for MHM Custom Home Builders (General
Contractor), built with Next.js (App Router), TypeScript, Tailwind CSS, and
Framer Motion. The logo, company name, and phone number are real; region,
address, email, and all project/testimonial/team content are still
placeholders — see the `TODO` comments in `lib/data.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Where to edit content

Everything editorial — projects, testimonials, team bios, values, certifications,
nav links, company contact details — lives in **[`lib/data.ts`](lib/data.ts)**.
Pages import from this file and render whatever it contains; there's no content
hard-coded into JSX beyond section labels and static microcopy.

To swap in a real CMS (Sanity, Contentful, etc.) later, replace the exported
constants/functions in `lib/data.ts` with fetch calls that resolve to the same
shapes (`Project`, `Testimonial`, `TeamMember`, etc.) — no changes should be
needed in `app/` or `components/`.

Key exports in `lib/data.ts`:

| Export | Used by |
|---|---|
| `siteConfig` | Header, Footer, metadata, contact info everywhere |
| `navLinks` / `footerLinks` | Header, Footer |
| `residentialProjects` / `commercialProjects` | Listing pages, detail pages, home page |
| `getProjectBySlug` / `getAdjacentProject` | `[slug]` detail pages |
| `testimonials` / `homeTestimonial` | Home page pull-quote |
| `values` / `team` / `certifications` | About page |
| `renovationProcess` / `renovationGallery` | Alterations & Renovations page |
| `projectTypeOptions` / `careerOptions` | Contact form dropdown (Contact vs. Join the Team) |

## Logo

The current logo is the MHM System emblem ("Construction | Engineering |
Solutions") at `public/logo/mhm-system-logo.jpg`, used in the Header, Footer
and Open Graph image. Browser icons are generated from it: `app/icon.jpg`
(full logo, square) and `app/favicon.ico` (house + "MHM" only, so it stays
legible at 16–32px). Its black background reads fine over both the
transparent (over-hero) and solid header states without color-swapping.

The previous circular badge (`mhm-badge-logo.jpg`) and earlier flat SVG lockups (`mhm-logo-primary.svg`, `mhm-logo-horizontal.svg`,
`mhm-logo-horizontal-clean.svg`, `mhm-logo-dark.svg`) are still in
`public/logo/` for reference but are no longer used anywhere on the site.

## Images

All photography is served from `public/images/` — nothing is loaded from a
third-party host. Paths are set in `lib/data.ts` (via the `photo()` helper) and
`app/page.tsx` (home hero):

- `home/hero.jpg`
- `projects/<slug>/main.jpg` — project page hero and listing card
- `projects/<slug>/gallery-<n>.jpg`
- `renovations/<n>.jpg`

To use real photography, overwrite a file at the same path (or change the path
in `lib/data.ts`). The current files are stock placeholders; if they are
missing, run `node scripts/download-photos.mjs` once to fetch them.

## Fonts

`lib/fonts.ts` loads two typefaces via `next/font/google` (self-hosted at
build time, no external font requests at runtime):

- **Fraunces** — display serif for headlines, exposed as `font-display`
- **Inter** — body/UI sans, exposed as `font-sans`

Both are wired into Tailwind's theme in `app/globals.css` via `@theme inline`.

## Structure

```
app/                  Routes (App Router)
  page.tsx            Home
  residential/        Listing + [slug] detail pages
  commercial/         Listing + [slug] detail pages
  alterations-renovations/
  about/
  contact/            Includes the /api/contact route handler
  join-the-team/
  sitemap.ts          Generates sitemap.xml
  robots.ts           Generates robots.txt
components/           Reusable UI (Header, Footer, Hero, ProjectCard, ProjectGrid,
                      Testimonial, SectionHeading, CTAButton, ImageGallery,
                      ContactForm, ProjectDetail, Reveal)
lib/
  data.ts             All typed content
  fonts.ts            next/font setup
```

## Notes

- The contact form (`components/ContactForm.tsx`) does client-side validation
  and posts to `app/api/contact/route.ts`, which currently just validates and
  `console.log`s the submission — wire it up to email/CRM when ready.
- Motion (scroll reveals, hover states, header transitions, mobile menu) is
  built with Framer Motion and respects `prefers-reduced-motion` via a global
  CSS override in `app/globals.css`.
- Project detail routes are statically generated at build time via
  `generateStaticParams` in each `[slug]/page.tsx`.
