"use client";

import { useEffect } from "react";

/**
 * Measurable hooks only. No measurement ID and no ad pixel are added here,
 * and nothing sets cookies. If gtag already exists on the page, the GA4 name
 * below is forwarded to it. Directions is never a store visit.
 * No click_call: the site deliberately shows no phone (owner, 15 Sep 2026).
 */
const GA4_NAMES: Record<string, string> = {
  whats_on: "whats_on",
  directions: "click_directions",
  contact: "contact",
  email_click: "email_click",
  form_submit: "generate_lead",
};

export function trackEvent(key: string) {
  const name = GA4_NAMES[key];
  if (!name || typeof window === "undefined") return;
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
