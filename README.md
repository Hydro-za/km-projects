# Customisable business website (template)

Four pages (Home, About, Services, Contact) generated from **one config file**.
Static HTML/CSS/JS, no runtime dependencies, so it is fast and easy to host anywhere.

## Quick start
```bash
node build.js                       # builds to ./dist
python3 -m http.server 8000 -d dist # preview at http://localhost:8000
python3 tools/test.py               # browser QA (needs playwright + Chrome)
```
Open `dist/` through a web server (not by double-clicking files): URLs are clean (`/about/`).

## Customising for a business
1. Edit `config/site.config.js`. It holds every piece of content, colour, font, contact detail,
   SEO title/description, section order, testimonial, price and navigation label.
2. Drop real images into `src/assets/img/` and point the config at them (keep `alt` text meaningful).
   Also provide a 1200x630 `og-default.png` and a 180x180 `apple-touch-icon.png`.
3. Run `node build.js`. The **launch checklist** it prints lists remaining placeholders.

| To change… | Edit in config |
|---|---|
| Name, industry, schema type, logo | `business` |
| Colours, fonts, corner radius | `theme` |
| Phone, email, WhatsApp, address, hours, map, social | `contact` |
| Services or products, prices | `catalogue` |
| Page titles/descriptions/keywords | `pages.<page>.seo` |
| Page layout / order / which sections | `pages.<page>.sections` (reorder, delete, duplicate) |
| Nav labels, header button, footer | `nav`, `footer` |
| Domain, indexing, language | `site` |

Section types: `hero, intro, catalogue, features, stats, testimonials, cta, pageHeader, story,
missionVision, values, differentiators, team, catalogueDetail, pricing, contactMain`.
Products instead of services: rename `catalogue.itemLabel`, fill `price` on each item and add `pricing.tiers`.

## Contact form (Resend on Vercel)
`form.endpoint` is `/api/contact`, a Vercel serverless function (`api/contact.js`) that validates the message on the
server and emails it through [Resend](https://resend.com). The visitor's address is set as Reply-To, so you can answer
straight from your inbox. If sending fails, the visitor sees an error and a pre-filled email link, never a false success.

1. **Verify the sending domain in Resend** (Domains > Add domain). Add the DNS records it shows at wherever the domain's
   DNS is hosted (the nameservers the domain actually uses), then click Verify.
2. **Add environment variables in Vercel** (Project > Settings > Environment Variables). Names are case-sensitive:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from Resend (mark it Sensitive) |
| `CONTACT_TO` | Inbox that receives enquiries. Defaults to `contact.email` in the config |
| `CONTACT_FROM` | e.g. `Your Business <enquiries@yourdomain.com>`. Without it the Resend test sender is used, which only delivers to the Resend account owner |

3. **Redeploy** (variables only apply to new deployments) and **send a real test enquiry**.

Not on Vercel? Set `form.endpoint` to Formspree, Getform or Basin instead; the same JSON fields are posted:
`name, email, phone, enquiryType, message, _subject, _page`. The server only accepts the enquiry types listed in
`form.enquiryTypes`, so changing that list in the config updates both the form and the server.

## Before launch
- Replace every placeholder (contact details, testimonials, statistics, story, images). Never publish invented reviews or figures.
- Set `site.url` to the real domain and `site.indexable` to `true` (this also switches `robots.txt` and the `noindex` tag).
- Set `sample: false` on the stats and testimonials sections once they contain real content.
- Test on the live domain with PageSpeed Insights and Google's Rich Results Test.

## What the build outputs
Pages in clean folders, `sitemap.xml`, `robots.txt`, `favicon.svg` (from your brand colour and mark), a `404.html`,
canonical URLs, Open Graph/Twitter tags, and JSON-LD (business type, WebSite, WebPage, breadcrumbs, service list).
No review/rating schema is ever generated, so nothing can be fabricated.
