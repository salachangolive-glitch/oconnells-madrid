"use client";

import { useEffect } from "react";

/**
 * Measurable hooks only. No ad pixel is added here and nothing sets cookies.
 * The GA4 name below is sent only after the visitor accepted analytics in the
 * cookie banner (components/Analytics.tsx sets __ocAnalyticsGranted). With
 * GA4_MEASUREMENT_ID empty nothing is ever sent. Directions is never a store visit.
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
    __ocAnalyticsGranted?: boolean;
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  };
  if (w.__ocAnalyticsGranted !== true || typeof w.gtag !== "function") return;
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
