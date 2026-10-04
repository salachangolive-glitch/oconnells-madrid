"use client";

import { useSyncExternalStore } from "react";

let cached = 0;

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  if (cached === 0) cached = Date.now();
  return cached;
}

function getServerSnapshot() {
  return 0;
}

/** Europe/Madrid "now" after hydration. Null during static HTML so the build clock is not frozen in. */
export function useMadridNow(): Date | null {
  const ms = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  if (ms === 0) return null;
  return new Date(ms);
}
