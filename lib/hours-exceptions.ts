import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { HOURS } from "@/lib/venue";

/** Owner/DG 25 Nov 2026 19:10 — Sat 28 Nov opens at 14:00 (not usual 15:00). */
export const SAT_28_NOV_2026_YMD = "2026-11-28";
export const SAT_28_NOV_EXCEPTIONAL_OPEN = "14:00";

/** Show the notice from 25 Nov through end of Finals Weekend (29 Nov); off from 30 Nov. */
export const SAT_28_NOTICE_SHOW_FROM_YMD = "2026-11-25";
export const SAT_28_NOTICE_HIDE_FROM_YMD = "2026-11-30";
export const SAT_28_NOTICE_HIDE_MS = Date.parse("2026-11-30T00:00:00+01:00");

export function sat28Nov14NoticeActive(now = agendaBuildNow()): boolean {
  const today = madridTodayYmd(now);
  return (
    today >= SAT_28_NOTICE_SHOW_FROM_YMD && today < SAT_28_NOTICE_HIDE_FROM_YMD
  );
}

/** Schema.org one-day override; habitual weekly Saturday spec stays 15:00 in jsonld. */
export function sat28Nov14SchemaSpec() {
  return {
    "@type": "OpeningHoursSpecification" as const,
    validFrom: SAT_28_NOV_2026_YMD,
    validThrough: SAT_28_NOV_2026_YMD,
    dayOfWeek: "Saturday",
    opens: SAT_28_NOV_EXCEPTIONAL_OPEN,
    closes: HOURS.sat.close,
  };
}

export const SAT_28_NOTICE_COPY = {
  en: {
    title: "Saturday 28 November — doors at 14:00",
    body: `This Saturday only we open at ${SAT_28_NOV_EXCEPTIONAL_OPEN}, not the usual ${HOURS.sat.open}. Saturday close stays ${HOURS.sat.close} (Madrid time).`,
  },
  es: {
    title: "Sábado 28 de noviembre — apertura a las 14:00",
    body: `Solo este sábado abrimos a las ${SAT_28_NOV_EXCEPTIONAL_OPEN}, no a las ${HOURS.sat.open} habituales. El cierre del sábado sigue siendo las ${HOURS.sat.close} (hora de Madrid).`,
  },
} as const;

export const SAT_28_HIDE_SCRIPT = `(function(){if(Date.now()>=${SAT_28_NOTICE_HIDE_MS}){var e=document.querySelectorAll("[data-sat14-notice='2026-11-28']");for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;