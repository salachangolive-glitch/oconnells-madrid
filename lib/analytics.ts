/**
 * Google Analytics 4 — single switch for the whole site.
 *
 * Put the GA4 measurement ID here (format "G-XXXXXXXXXX") to turn on:
 *   - Consent Mode v2 defaults (all denied) + gtag.js loaded ONLY after "Accept"
 *   - the Accept/Reject cookie banner (EN/ES) and "Cookie settings" in the footer
 *   - the GA4 section of Privacy (EN/ES)
 *
 * While it is empty the site is exactly as before: no gtag, no banner,
 * no cookies, Privacy unchanged. Advertising signals stay denied always.
 */
export const GA4_MEASUREMENT_ID = "";

/** localStorage key that remembers the visitor's choice ("granted" | "denied"). */
export const CONSENT_STORAGE_KEY = "oconnell_cookie_consent_v1";

/** DOM event fired by the banner when the visitor accepts. */
export const CONSENT_EVENT = "oconnell:consent";

export function ga4Id(): string {
  const id = GA4_MEASUREMENT_ID.trim();
  return /^G-[A-Z0-9]+$/.test(id) ? id : "";
}

export function ga4Enabled(): boolean {
  return ga4Id() !== "";
}
