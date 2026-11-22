# Talentora – SEO-optimised HR software marketing site

A Next.js (App Router) site that is **pre-rendered to static HTML** at build time, so search engines get fully rendered content with no client-side rendering required.

## Quick start
```bash
npm install
npm run dev        # http://localhost:3000
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com npm run build   # outputs static site to ./out
npm start          # preview ./out
```
Deploy the `out/` folder to any static host or CDN (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, Nginx).

## Rebrand / edit content
- `lib/site.js` – brand name, tagline, description, social links, contact.
- `lib/data.js` – products, industries, customers, blog posts, pricing plans. Add an entry and its page, sitemap entry and navigation link are generated automatically.
- `app/globals.css` – colours are CSS variables at the top.
- `public/og-image.png`, `public/icon.svg` – social share image and favicon.
- Demo form: set `NEXT_PUBLIC_FORM_ENDPOINT` to your CRM/form backend URL.

## SEO features
- Static HTML for every route (SSG), semantic markup, exactly one `<h1>` per page
- Unique `<title>` (with template) + meta description per page
- Canonical URLs, trailing-slash consistency
- Open Graph + Twitter Card tags with a 1200×630 share image
- JSON-LD structured data: Organization, WebSite, SoftwareApplication, BreadcrumbList, FAQPage, BlogPosting
- Auto-generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- Visible breadcrumbs, internal linking (mega menu, related products, footer)
- Mobile-first, responsive, accessible (skip link, ARIA, focus styles, reduced-motion)
- Small JS payload (~105 kB shared); FAQ accordions work without JavaScript
