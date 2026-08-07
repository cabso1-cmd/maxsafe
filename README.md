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

## 4. Business email (Zoho's free plan is India-region only — use one of these instead)

**Option A — $0/month:** Cloudflare Email Routing + Gmail "Send Mail As."
1. In the Cloudflare dashboard for `maxsafeservices.com` → **Email** → **Email Routing** → enable it, verify a personal Gmail as the destination, and add `info@maxsafeservices.com` as a routed address.
2. In Gmail → Settings → **Accounts and Import** → **Send mail as** → **Add another email address** → enter `info@maxsafeservices.com`, SMTP server `smtp.gmail.com`, port `587`, using your Gmail address + an [App Password](https://myaccount.google.com/apppasswords).
3. Gmail sends a verification email to `info@maxsafeservices.com`, which Cloudflare forwards to your inbox — click the link to confirm.

**Option B — $19/year flat:** [Migadu](https://www.migadu.com) Micro plan — a real IMAP/SMTP mailbox (not tied to a personal Gmail), works in any mail client, nearly unlimited addresses on the domain.

## 5. Phone number

Done — `+1 (289) 628-5722` is live in the header/footer contact info and JSON-LD schema across every page (as a clickable `tel:` link). No further action needed here.

## 6. Photos & logo

No photography or logo exists yet — the site currently uses typography, color, and simple line-icon graphics only, so it looks intentional without images. When real photos (ports, vessels, cargo) and a logo are available:

- Drop images into `assets/img/`.
- Swap the `.nav__brand` text block for an `<img>` logo if desired.
- Add a hero background image behind the `.hero` section in `index.html` for extra visual impact.

## 7. Content still pending

- Founder names and specific credentials for `about.html` (currently written generically, per request).
- Confirm final wording once founders review the Services and About pages.
