"use client";

import { useEffect } from "react";

/** Sets <html lang> for nested locale segments (App Router has one root html). */
export function LangAttr({ lang }: { lang: "en" | "es" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
