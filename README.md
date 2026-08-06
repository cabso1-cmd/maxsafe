# MaxSafe Services Ltd — Website

Static site for maxsafeservices.com. No build step required — plain HTML/CSS/JS, ready to deploy to Cloudflare Pages via GitHub.

## Site structure

```
index.html                                  Home
about.html                                  About
services.html                               Services overview/hub
service-cargo-container-surveys.html        Service page 1
service-claims-loss-damage-investigation.html  Service page 2
service-vessel-equipment-surveys.html       Service page 3
service-documentation-trade-compliance.html Service page 4
service-specialized-project-cargo.html      Service page 5
contact.html                                Contact form (Formspree)
thank-you.html                              Form success page
404.html                                    Not found page
assets/css/style.css                        All styling
assets/js/main.js                           Nav toggle + contact form handling
assets/img/favicon.svg                      Placeholder favicon (monogram)
sitemap.xml, robots.txt                     SEO
_headers                                    Cloudflare Pages security headers
```

## 1. Push to GitHub

```bash
cd maxsafe-website
git init
git add .
git commit -m "Initial MaxSafe Services Ltd website"
git branch -M main
git remote add origin https://github.com/<your-username>/maxsafe-website.git
git push -u origin main
```

## 2. Connect Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select the `maxsafe-website` repo.
3. Build settings: **Framework preset = None**, **Build command = (leave blank)**, **Output directory = /** (root).
4. Deploy. Cloudflare will give you a `*.pages.dev` URL first — confirm the site looks right there.

## 3. Point the domain at it

Since the domain (`maxsafeservices.com`) is already set up in Cloudflare:

1. In the Pages project → **Custom domains** → **Set up a custom domain** → add `www.maxsafeservices.com` and `maxsafeservices.com`.
2. Cloudflare will auto-create the DNS records (proxied). Set the apex (`maxsafeservices.com`) to redirect to `www.maxsafeservices.com` (or vice versa — pick one as canonical and update `sitemap.xml` / the `<link rel="canonical">` tags in each page if you choose the apex instead of `www`).
3. SSL is automatic and free on Cloudflare.

Every future `git push` to `main` auto-deploys — no manual redeploy needed.

## 4. Business email (Zoho Mail — free plan)

1. Sign up at zoho.com/mail with `maxsafeservices.com`.
2. Zoho will give you TXT/MX/CNAME records to verify domain ownership and route mail — add these in the Cloudflare DNS tab for the domain (same place the site's DNS records live).
3. Create mailboxes, e.g. `info@maxsafeservices.com` (used throughout this site) and any others needed (up to 5 free).

## 5. Updating the phone number once you have one

The phone number is currently a placeholder ("coming soon") in the header/footer contact info across **every page** (marked with `<!-- PHONE-NUMBER-PLACEHOLDER -->` in the HTML). Once you have a number:

- Find-and-replace `<!-- PHONE-NUMBER-PLACEHOLDER --> coming soon` and `<!-- PHONE-NUMBER-PLACEHOLDER --> Coming soon — email is fastest for now` across all `.html` files with your actual number (e.g. `+1 (XXX) XXX-XXXX`).
- Consider also adding a `telephone` field to the JSON-LD schema block in `index.html` and `contact.html` for better local SEO.

## 6. Photos & logo

No photography or logo exists yet — the site currently uses typography, color, and simple line-icon graphics only, so it looks intentional without images. When real photos (ports, vessels, cargo) and a logo are available:

- Drop images into `assets/img/`.
- Swap the `.nav__brand` text block for an `<img>` logo if desired.
- Add a hero background image behind the `.hero` section in `index.html` for extra visual impact.

## 7. Content still pending

- Founder names and specific credentials for `about.html` (currently written generically, per request).
- Confirm final wording once founders review the Services and About pages.
