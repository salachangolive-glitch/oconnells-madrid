"use client";

import { useEffect } from "react";

/**
 * Measurable hooks only. No measurement ID and no ad pixel are added here.
 * If gtag already exists on the page, these names are forwarded to it.
 * Directions is never a store visit.
 */
const EVENTS = new Set([
  "whats_on",
  "directions",
  "contact",
  "email_click",
  "form_submit",
]);

export function trackEvent(name: string) {
  if (!EVENTS.has(name) || typeof window === "undefined") return;
  const w = window as Window & {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", name, { event_source: "site" });
}

export function TrackClicks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest?.("[data-event]");
      if (!el) return;
      const name = el.getAttribute("data-event") || "";
      trackEvent(name);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
