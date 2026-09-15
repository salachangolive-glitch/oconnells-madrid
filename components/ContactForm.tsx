"use client";

import { useState } from "react";
import { CONTACT_REASONS } from "@/lib/contact";

type Locale = "en" | "es";

const copy = {
  en: {
    name: "Name",
    email: "Email",
    reason: "Reason for contact",
    message: "Message",
    submit: "Send message",
    sending: "Sending…",
    ok: "Thanks — we’ve received your message and will get back to you as soon as possible.",
    fail: "We couldn’t send that just now. Please try again in a moment.",
    unavailable:
      "The contact form is being activated. Please try again later or call the pub.",
    privacy:
      "We use your details only to reply to this enquiry. Legal entity details: pending internal confirmation.",
    required: "Please fill in all fields.",
  },
  es: {
    name: "Nombre",
    email: "Email",
    reason: "Motivo",
    message: "Mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    ok: "Gracias — hemos recibido tu mensaje y te responderemos lo antes posible.",
    fail: "No hemos podido enviarlo ahora. Inténtalo de nuevo en un momento.",
    unavailable:
      "El formulario se está activando. Prueba más tarde o llama al pub.",
    privacy:
      "Usamos tus datos solo para responder a esta consulta. Datos de la entidad legal: pendiente de confirmación interna.",
    required: "Completa todos los campos.",
  },
} as const;

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<
    "idle" | "sending" | "ok" | "fail" | "unavailable"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      reason: String(fd.get("reason") || ""),
      message: String(fd.get("message") || ""),
      company: String(fd.get("company") || ""),
      locale,
    };
    if (
      !payload.name.trim() ||
      !payload.email.trim() ||
      !payload.reason ||
      payload.message.trim().length < 10
    ) {
      setStatus("fail");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 503) {
        setStatus("unavailable");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (res.ok && data.ok) {
        setStatus("ok");
        form.reset();
        return;
      }
      setStatus("fail");
    } catch {
      setStatus("fail");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {t.name}
        </label>
        <input
          id="c-name"
          name="name"
          required
          maxLength={120}
          className="w-full border border-gold/30 bg-black/40 px-3 py-2.5 text-cream outline-none focus:border-gold"
        />
      </div>

      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {t.email}
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="w-full border border-gold/30 bg-black/40 px-3 py-2.5 text-cream outline-none focus:border-gold"
        />
      </div>

      <div>
        <label htmlFor="c-reason" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {t.reason}
        </label>
        <select
          id="c-reason"
          name="reason"
          required
          defaultValue=""
          className="w-full border border-gold/30 bg-black/40 px-3 py-2.5 text-cream outline-none focus:border-gold"
        >
          <option value="" disabled>
            {locale === "es" ? "Elige un motivo" : "Choose a reason"}
          </option>
          {CONTACT_REASONS.map((r) => (
            <option key={r.value} value={r.value}>
              {locale === "es" ? r.es : r.en}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {t.message}
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={5000}
          className="w-full resize-y border border-gold/30 bg-black/40 px-3 py-2.5 text-cream outline-none focus:border-gold"
        />
      </div>

      <p className="text-xs leading-relaxed text-cream/55">{t.privacy}</p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="border border-gold bg-gold/15 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-pub-burgundy-deep disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>

      {status === "ok" ? (
        <p className="text-sm text-gold" role="status">
          {t.ok}
        </p>
      ) : null}
      {status === "fail" ? (
        <p className="text-sm text-cream-muted" role="alert">
          {t.fail}
        </p>
      ) : null}
      {status === "unavailable" ? (
        <p className="text-sm text-cream-muted" role="alert">
          {t.unavailable}
        </p>
      ) : null}
    </form>
  );
}
