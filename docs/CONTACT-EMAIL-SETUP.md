# O’Connell’s — contact & email architecture (0 € until domain)

## Rules
- Do **not** publish `info@[domain]` until the domain exists and send/receive are verified.
- Do **not** put the internal Gmail inbox in the public site (HTML, metadata, Schema, mailto, client bundle, errors).
- Configure the inbox only in the form provider dashboard + Vercel env vars (server-side).

## Form (live on preview)
- Pages: `/contact` (EN), `/es/contact` (ES Contacto)
- POST `/api/contact` with honeypot `company`
- Subject: `[OCONNELLS] {reason} — {name}`
- Provider: [Web3Forms](https://web3forms.com) free tier (access key in `CONTACT_WEB3FORMS_ACCESS_KEY`)
- Destination inbox is set **only** in the Web3Forms dashboard (not in repo)

### Activate form delivery
1. Create a free Web3Forms access key bound to the internal inbox.
2. In Vercel project env: `CONTACT_WEB3FORMS_ACCESS_KEY=...` (Production + Preview).
3. Optional: `CONTACT_AUTOREPLY=true` to enable Web3Forms auto-response (copy EN/ES below). Until custom domain SMTP exists, From: may be the provider — switch to branded From after domain.

### Autoreply copy
EN: Thanks for contacting O’Connell’s Madrid. We’ve received your message and will get back to you as soon as possible.  
ES: Gracias por contactar con O’Connell’s Madrid. Hemos recibido tu mensaje y te responderemos lo antes posible.

## After domain purchase (no DNS until confirmed)
1. Point domain to Vercel (site).
2. **Inbound:** Cloudflare Email Routing (free) or ImprovMX (free tier): `info@domain` → internal inbox.
3. **Outbound / Send as:** Gmail → Settings → Accounts → “Send mail as” `info@domain` with SMTP from the provider that signs DKIM for the domain (Google Workspace preferred when budget allows; until then Cloudflare/ImprovMX SMTP if offered, or Workspace trial — **ask before any paid plan**).
4. DNS (templates — fill when domain live):
   - **SPF:** `v=spf1 include:_spf.google.com include:… ~all` (exact includes depend on forwarder + send path)
   - **DKIM:** keys from Google / forwarder
   - **DMARC:** `v=DMARC1; p=none; rua=mailto:dmarc-reports@domain` then tighten to `quarantine`/`reject`
5. Only then publish `info@domain` on the site, GBP, and Schema.

## Reply identity
Goal: customer sees **O’Connell’s Madrid \<info@domain\>**, never the internal Gmail address.  
Requires authenticated “Send mail as” (SPF+DKIM aligned). Plain forwarding alone is **not** enough.
