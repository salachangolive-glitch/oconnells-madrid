"use client";

import { useEffect } from "react";
import { CONSENT_EVENT } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";
import {
  PSV_CAMPAIGN,
  VIKING_CAMPAIGN,
} from "@/lib/fan-campaign-three-bars";

const CAMPAIGN_GUIDE_PATHS = new Set<string>([
  PSV_CAMPAIGN.paths.en,
  PSV_CAMPAIGN.paths.nl,
  VIKING_CAMPAIGN.paths.en,
  VIKING_CAMPAIGN.paths.no,
]);

const BAR_IDS = new Set(["dubliners", "oconnells", "oreillys"]);

function campaignBarLandingKey(): string | null {
  if (typeof window === "undefined") return null;
  if (!CAMPAIGN_GUIDE_PATHS.has(window.location.pathname)) return null;
  const hash = window.location.hash.replace(/^#/, "");
  if (BAR_IDS.has(hash)) return hash;
  const utm = new URLSearchParams(window.location.search).get("utm_content");
  if (utm && BAR_IDS.has(utm)) return utm;
  return null;
}

/** GA4 default page_view omits the hash; report once when a bar anchor or utm_content is present. */
function reportCampaignBarLanding() {
  const bar = campaignBarLandingKey();
  if (!bar) return;
  const w = window as Window & {
    __ocAnalyticsGranted?: boolean;
    __ocBarLandingReported?: boolean;
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>,
    ) => void;
  };
  if (w.__ocAnalyticsGranted !== true || typeof w.gtag !== "function") return;
  if (w.__ocBarLandingReported) return;
  w.__ocBarLandingReported = true;
  const pagePath =
    window.location.pathname +
    window.location.search +
    window.location.hash;
  w.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: pagePath,
    utm_content: bar,
    event_source: "site",
  });
}

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
  directions_oconnells: "directions_oconnells",
  directions_dubliners: "directions_dubliners",
  directions_oreillys: "directions_oreillys",
  tel_oconnells: "tel_oconnells",
  tel_dubliners: "tel_dubliners",
  tel_oreillys: "tel_oreillys",
  link_oconnells: "link_oconnells",
  link_dubliners: "link_dubliners",
  link_oreillys: "link_oreillys",
  howto_oconnells: "howto_oconnells",
  howto_dubliners: "howto_dubliners",
  howto_oreillys: "howto_oreillys",
  rugby_cta_click: "rugby_cta_click",
};

export function trackEvent(key: string, el?: Element | null) {
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
  const params: Record<string, string> = { event_source: "site" };
  if (el instanceof HTMLElement) {
    const bar = el.getAttribute("data-bar");
    const lang = el.getAttribute("data-lang");
    if (bar) params.bar = bar;
    if (lang) params.lang = lang;
  }
  w.gtag("event", name, params);
}

export function TrackClicks() {
  useEffect(() => {
    captureAttribution();
    reportCampaignBarLanding();
    document.addEventListener(CONSENT_EVENT, reportCampaignBarLanding);
    window.addEventListener("hashchange", reportCampaignBarLanding);
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest?.("[data-event]");
      if (!el) return;
      const name = el.getAttribute("data-event") || "";
      trackEvent(name, el);
    }
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener(CONSENT_EVENT, reportCampaignBarLanding);
      window.removeEventListener("hashchange", reportCampaignBarLanding);
    };
  }, []);
  return null;
}
