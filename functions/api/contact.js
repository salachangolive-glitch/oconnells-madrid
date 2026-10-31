/**
 * Server-only contact proxy. The key is the Pages env
 * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY and is never written into the static site.
 *
 * Anti-spam (17 Oct 2026, see spam diagnosis):
 *  - Honeypots `_honey` (Web3Forms-style), `company` (legacy) and `botcheck`
 *    (Web3Forms name): if any is filled, answer success and forward nothing.
 *  - Subject is built HERE (never trusted from the client) and is unique per
 *    submission: «O'Connell St – {motivo} – {nombre} – {dd/mm HH:MM} #ref»,
 *    so Gmail never threads different customers together.
 */

const REASONS = {
  general: { en: "General information", es: "Información general" },
  groups: { en: "Groups", es: "Grupos" },
  sports: { en: "Sports & matches", es: "Deportes y partidos" },
  events: { en: "Events", es: "Eventos" },
  other: { en: "Other", es: "Otros" },
};

/** One line, no control chars / angle brackets / CRLF, collapsed spaces. */
function clean(v, max) {
  return String(v || "")
    .replace(/[\u0000-\u001f\u007f<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)
    .trim();
}

function madridStamp(d) {
  try {
    const p = Object.fromEntries(
      new Intl.DateTimeFormat("es-ES", {
        timeZone: "Europe/Madrid",
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
        .formatToParts(d)
        .map((x) => [x.type, x.value]),
    );
    return `${p.day}/${p.month} ${p.hour}:${p.minute}`;
  } catch {
    return d.toISOString().slice(5, 16).replace("T", " ");
  }
}

function shortRef() {
  const b = new Uint8Array(3);
  crypto.getRandomValues(b);
  return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
}

function buildSubject({ reason, locale, name }, now = new Date()) {
  const lang = locale === "en" ? "en" : "es";
  const row = REASONS[reason];
  const motivo = row ? row[lang] : lang === "en" ? "Web enquiry" : "Consulta web";
  const nombre = clean(name, 60) || (lang === "en" ? "No name" : "Sin nombre");
  const s = `O'Connell St – ${motivo} – ${nombre} – ${madridStamp(now)} #${shortRef()}`;
  return s.slice(0, 150);
}

function isFilled(v) {
  if (v === undefined || v === null || v === false) return false;
  return String(v).trim() !== "" && String(v).trim() !== "false";
}

export async function onRequestPost(context) {
  const key =
    context.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    context.env.WEB3FORMS_ACCESS_KEY;
  if (!key) {
    return Response.json({ success: false }, { status: 503 });
  }

  let body;
  try {
    body = await context.request.json();
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return Response.json({ success: false }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields — pretend success, forward nothing.
  if (isFilled(body._honey) || isFilled(body.company) || isFilled(body.botcheck)) {
    return Response.json({ success: true, message: "OK" }, { status: 200 });
  }

  const name = clean(body.name, 120);
  const email = String(body.email || "").trim().slice(0, 200);
  const message = String(body.message || "").trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || message.length < 10) {
    return Response.json({ success: false }, { status: 400 });
  }

  const locale = body.locale === "en" ? "en" : "es";
  const reason = REASONS[body.reason] ? body.reason : "";
  const subject = buildSubject({ reason, locale, name });

  const ATTR = ["utm_source", "utm_medium", "utm_campaign", "utm_term",
    "utm_content", "gclid", "landing_page", "referrer"];
  const attribution = {};
  for (const k of ATTR) {
    const v = String(body[k] || "").trim().slice(0, 500);
    if (v) attribution[k] = v;
  }

  const upstream = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: key,
      subject,
      from_name: "O'Connell St Madrid",
      replyto: email,
      name,
      email,
      message: message.slice(0, 5000),
      ...attribution,
    }),
  });

  const data = await upstream.json().catch(() => ({ success: false }));
  return Response.json(data, { status: upstream.ok ? 200 : 502 });
}
