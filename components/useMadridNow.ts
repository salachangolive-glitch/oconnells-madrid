"use client";

import { useSyncExternalStore } from "react";

/**
 * Build clock, inlined by next.config.ts at build time, so the static HTML
 * and the hydration snapshot match and every rebuild is current. The client
 * snapshot then moves to the real clock and drops kickoffs that have
 * already started.
 */
const BUILD_MS = Number(process.env.OCONNELL_BUILD_MS) || Date.now();

let cached = 0;

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  if (cached === 0) cached = Date.now();
  return cached;
}

function getServerSnapshot() {
  return BUILD_MS;
}

/** Europe/Madrid now. Static HTML uses the deploy clock; the browser updates it. */
export function useMadridNow(): Date | null {
  const ms = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  if (ms === 0) return null;
  return new Date(ms);
}
