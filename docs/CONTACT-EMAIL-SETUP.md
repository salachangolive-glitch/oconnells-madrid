# O’Connell’s — contact & email architecture (0 € until domain)

## Rules
- Do **not** publish `info@[domain]` until the domain exists and send/receive are verified.
- Do **not** put the internal Gmail inbox in the public site (HTML, metadata, Schema, mailto, client bundle, errors).
- Configure the inbox only in the **Web3Forms dashboard**. The access key may be public (`NEXT_PUBLIC_…`) — Web3Forms is designed for client forms — but the Gmail address must never appear in the repo or site.

## Chosen host path
**Cloudflare Pages static export** (`docs/CLOUDFLARE-PAGES.md`).  
There is **no** `/api/contact` Node route. The browser posts directly to `https://api.web3forms.com/submit`.

## Form (EN + ES)
- Pages: `/contact` (EN), `/es/contact` (ES Contacto)
- Client POST to Web3Forms with honeypot field `company`
- Subject: `[OCONNELLS] {reason} — {name}`
- Env: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (Cloudflare Pages → Environment variables; also local `.env.local` for dev)
- If the key is missing at runtime, the form shows a friendly “being activated” message (no Gmail, no phone CTA required).

### Activate form delivery
1. Create a free Web3Forms access key bound to the internal inbox (dashboard only).
2. In **Cloudflare Pages** project env: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...` (Production + Preview).
3. Redeploy so the static client bundle picks up the key.
4. Optional autoresponse / branded From: configure in the Web3Forms dashboard after a custom domain exists (branded From needs domain DNS). Until then, provider From: is acceptable.

### Autoreply copy (optional, provider dashboard)
EN: Thanks for contacting O’Connell’s Madrid. We’ve received your message and will get back to you as soon as possible.  
ES: Gracias por contactar con O’Connell’s Madrid. Hemos recibido tu mensaje y te responderemos lo antes posible.

## After domain purchase (no DNS until confirmed)
1. Point domain to **Cloudflare Pages** (site) — see `CLOUDFLARE-PAGES.md`.
2. **Inbound:** Cloudflare Email Routing (free) or ImprovMX (free tier): `info@domain` → internal inbox.
3. **Outbound / Send as:** Gmail → Settings → Accounts → “Send mail as” `info@domain` with SMTP from the provider that signs DKIM for the domain (Google Workspace preferred when budget allows — **ask before any paid plan**).
4. DNS (templates — fill when domain live):
   - **SPF:** `v=spf1 include:_spf.google.com include:… ~all` (exact includes depend on forwarder + send path)
   - **DKIM:** keys from Google / forwarder
   - **DMARC:** `v=DMARC1; p=none; rua=mailto:dmarc-reports@domain` then tighten to `quarantine`/`reject`
5. Only then publish `info@domain` on the site, GBP, and Schema.

## Reply identity
Goal: customer sees **O’Connell’s Madrid \<info@domain\>**, never the internal Gmail address.  
Requires authenticated “Send mail as” (SPF+DKIM aligned). Plain forwarding alone is **not** enough.
