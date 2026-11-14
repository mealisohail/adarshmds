# Adarsh Motor Driving School, Akot

Single-page website for Adarsh Motor Driving School (near City Police Station, Akola Road, Akot). Built with Next.js 15, no UI libraries.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check: `npm run build && npm start`

## Edit content

All business details live in one file, `app/site.ts`: phone numbers, address, hours, package prices, RTO services, insurers and FAQs. Change them there and the page, SEO tags and Google structured data update together.

| File | What it is |
| --- | --- |
| `app/page.tsx` | Page sections |
| `app/Header.tsx` | Header and mobile menu |
| `app/EnquiryForm.tsx` | Enquiry form (opens WhatsApp with the details filled in) |
| `app/globals.css` | All styles |
| `app/layout.tsx` | Fonts, SEO metadata, JSON-LD |
| `public/images/` | Photos |

## Before going live

- Set `NEXT_PUBLIC_SITE_URL` to the real domain (used for canonical URL, sitemap and social previews).
- Confirm office hours and PIN code in `app/site.ts`.
- Deploy on Vercel: import the GitHub repo, no settings needed.
