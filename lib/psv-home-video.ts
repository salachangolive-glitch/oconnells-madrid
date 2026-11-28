import { agendaBuildNow } from "@/lib/fixtures";

/** Owner 23 Nov 2026 — hide home PSV eve band after Tue 24 17:00 Europe/Madrid. */
export const PSV_HOME_VIDEO_UNTIL_ISO = "2026-11-24T17:00:00+01:00";
export const PSV_HOME_VIDEO_UNTIL_MS = Date.parse(PSV_HOME_VIDEO_UNTIL_ISO);

export function psvHomeVideoActive(now = agendaBuildNow()): boolean {
  return now.getTime() < PSV_HOME_VIDEO_UNTIL_MS;
}