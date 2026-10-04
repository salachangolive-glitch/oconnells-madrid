/**
 * Server-only contact proxy. The key is the Pages env
 * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY and is never written into the static site.
 */
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

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const subject = String(body.subject || "O'Connell St").slice(0, 180);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || message.length < 10) {
    return Response.json({ success: false }, { status: 400 });
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
      message: String(body.message || "").slice(0, 5000),
    }),
  });

  const data = await upstream.json().catch(() => ({ success: false }));
  return Response.json(data, { status: upstream.ok ? 200 : 502 });
}
