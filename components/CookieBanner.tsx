"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { CONSENT_EVENT, CONSENT_STORAGE_KEY } from "@/lib/analytics";

type Locale = "en" | "es";
type Choice = "granted" | "denied";

// Fallback when localStorage is blocked (some private modes).
let memoryChoice: Choice | null = null;

function readChoice(): Choice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : memoryChoice;
  } catch {
    return memoryChoice;
  }
}

const CHANGE_EVENT = "oconnell:consent-change";

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  document.addEventListener(CHANGE_EVENT, cb);
  return () => {
    window.removeEventListener("storage", cb);
    document.removeEventListener(CHANGE_EVENT, cb);
  };
}

function clearGaCookies() {
  const host = window.location.hostname;
  const domains = ["", host, "." + host, "." + host.replace(/^www\./, "")];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_") || name === "_gid") {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}

/**
 * Accept / Reject at the same visual level (same size, same style).
 * Only rendered when GA4_MEASUREMENT_ID is set (see PageShell).
 */
export function CookieBanner({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const [settingsOpen, setOpen] = useState(false);
  // Server/static HTML: "server" keeps the banner out of the baked HTML.
  const choice = useSyncExternalStore(subscribe, readChoice, () => "server");
  const open = settingsOpen || choice === null;

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest?.(
        "[data-cookie-settings]",
      );
      if (!el) return;
      e.preventDefault();
      setOpen(true);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function choose(v: Choice) {
    const prev = readChoice();
    memoryChoice = v;
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, v);
    } catch {
      /* private mode: choice lasts for this page only */
    }
    setOpen(false);
    document.dispatchEvent(new Event(CHANGE_EVENT));
    if (v === "granted") {
      document.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: "granted" }));
      return;
    }
    const w = window as Window & {
      gtag?: (...args: unknown[]) => void;
      __ocAnalyticsGranted?: boolean;
    };
    w.__ocAnalyticsGranted = false;
    if (typeof w.gtag === "function") {
      w.gtag("consent", "update", { analytics_storage: "denied" });
    }
    clearGaCookies();
    // gtag.js was already running: reload so it is no longer on the page.
    if (prev === "granted") window.location.reload();
  }

  if (!open) return null;

  const btn =
    "min-h-11 flex-1 rounded-sm border border-gold/60 px-4 py-2 text-sm font-semibold text-cream transition hover:bg-gold hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:flex-none sm:min-w-32";

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={isEs ? "Cookies" : "Cookies"}
      data-cookie-banner=""
      className="fixed inset-x-0 bottom-[calc(4.25rem+env(safe-area-inset-bottom,0px))] z-[60] px-3"
    >
      <div className="mx-auto max-w-3xl rounded-md border border-gold/30 bg-black/95 p-4 text-sm text-cream/85 shadow-lg backdrop-blur-md">
        <p className="leading-relaxed">
          {isEs ? (
            <>
              Usamos cookies de analítica (Google Analytics) solo si las
              aceptas, para saber cómo se usa la web. Sin publicidad. Más
              información en{" "}
              <Link href="/es/privacy#cookies" className="text-cream underline">
                Privacidad y cookies
              </Link>
              .
            </>
          ) : (
            <>
              We use analytics cookies (Google Analytics) only if you accept
              them, to understand how the site is used. No advertising. More in{" "}
              <Link href="/privacy#cookies" className="text-cream underline">
                Privacy &amp; cookies
              </Link>
              .
            </>
          )}
        </p>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            data-cookie-choice="denied"
            className={btn}
            onClick={() => choose("denied")}
          >
            {isEs ? "Rechazar" : "Reject"}
          </button>
          <button
            type="button"
            data-cookie-choice="granted"
            className={btn}
            onClick={() => choose("granted")}
          >
            {isEs ? "Aceptar" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
