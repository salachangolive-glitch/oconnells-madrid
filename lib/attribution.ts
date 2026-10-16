/**
 * Lead attribution (first landing of the session). Stored ONLY in
 * sessionStorage (no cookies, no personal data), so it runs regardless of the
 * analytics consent banner. Sent with the contact form so the enquiry email
 * shows where the visitor came from.
 */
export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "landing_page",
  "referrer",
] as const;

export type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];
export type Attribution = Partial<Record<AttributionKey, string>>;

const STORAGE_KEY = "oconnell_attribution_v1";

function clip(v: string | null | undefined, max = 300): string {
  return String(v || "").trim().slice(0, max);
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Call on every page view; only the first landing of the session is kept,
 *  except that a later URL with utm/gclid fills fields that are still empty. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const existing = readAttribution();
  const params = new URLSearchParams(window.location.search);
  const next: Attribution = { ...existing };
  const first = !existing.landing_page;
  for (const k of ATTRIBUTION_KEYS) {
    if (k === "landing_page" || k === "referrer") continue;
    const v = clip(params.get(k), 200);
    if (v && (first || !next[k])) next[k] = v;
  }
  if (first) {
    next.landing_page = clip(window.location.pathname + window.location.search, 500);
    let ref = "";
    try {
      const r = document.referrer ? new URL(document.referrer) : null;
      if (r && r.host !== window.location.host) ref = r.origin + r.pathname;
    } catch {
      ref = "";
    }
    next.referrer = clip(ref, 300);
  }
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage blocked: ignore */
  }
  return next;
}
