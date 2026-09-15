import { NextResponse } from "next/server";
import { buildContactSubject, CONTACT_REASONS } from "@/lib/contact";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
  locale?: string;
  /** Honeypot — must stay empty */
  company?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields
  if (body.company && String(body.company).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const reason = String(body.reason || "").trim();
  const message = String(body.message || "").trim();
  const locale = body.locale === "es" ? "es" : "en";

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ ok: false, error: "name" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
  }
  if (!CONTACT_REASONS.some((r) => r.value === reason)) {
    return NextResponse.json({ ok: false, error: "reason" }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: "message" }, { status: 400 });
  }

  const accessKey = process.env.CONTACT_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    // Form UI ready; delivery waits for free Web3Forms key in Vercel env.
    return NextResponse.json(
      { ok: false, error: "unavailable" },
      { status: 503 },
    );
  }

  const subject = buildContactSubject(reason, name, locale);
  const reasonLabel =
    CONTACT_REASONS.find((r) => r.value === reason)?.[
      locale === "es" ? "es" : "en"
    ] || reason;

  const payload: Record<string, unknown> = {
    access_key: accessKey,
    subject,
    from_name: "O'Connell's Madrid",
    name,
    email,
    message:
      `Venue: O'Connell's Madrid\n` +
      `Locale: ${locale}\n` +
      `Reason: ${reasonLabel}\n` +
      `Name: ${name}\n` +
      `Reply-To (customer): ${email}\n\n` +
      `${message}`,
  };

  if (process.env.CONTACT_AUTOREPLY === "true") {
    payload.replyto = email;
    payload.autoresponse =
      locale === "es"
        ? "Gracias por contactar con O'Connell's Madrid. Hemos recibido tu mensaje y te responderemos lo antes posible."
        : "Thanks for contacting O'Connell's Madrid. We've received your message and will get back to you as soon as possible.";
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean };
    if (!res.ok || data.success === false) {
      return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
