"use client";

import { useSyncExternalStore } from "react";

/**
 * Frozen at deploy so the static HTML and the hydration snapshot match.
 * The client snapshot then moves to the real clock and drops kickoffs
 * that have already started.
 */
const BUILD_MS = 1791106059233;

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
