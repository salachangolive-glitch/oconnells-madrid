import { DirectionsButton } from "@/components/HowToGetHere";
import {
  SAT_28_HIDE_SCRIPT,
  SAT_28_NOTICE_COPY,
  SAT_28_NOTICE_HIDE_MS,
  sat28Nov14NoticeActive,
} from "@/lib/hours-exceptions";

export function Saturday28NovOpeningNotice({
  locale,
  compact,
}: {
  locale: "en" | "es";
  /** Tighter layout for in-header use on home. */
  compact?: boolean;
}) {
  if (!sat28Nov14NoticeActive()) return null;
  if (Date.now() >= SAT_28_NOTICE_HIDE_MS) return null;
  const c = SAT_28_NOTICE_COPY[locale];
  const box = compact
    ? "mx-auto mt-3 max-w-md rounded border border-gold/50 bg-black/40 px-3 py-2 text-left text-sm text-cream"
    : "mx-auto mb-8 max-w-2xl rounded-lg border border-gold/50 bg-pub-burgundy-deep/90 p-4 sm:p-5";
  return (
    <>
      <aside
        className={box}
        data-sat14-notice="2026-11-28"
        suppressHydrationWarning
      >
        <p className={compact ? "font-semibold text-gold" : "font-serif text-lg font-bold text-gold"}>
          {c.title}
        </p>
        <p className={compact ? "mt-1" : "mt-2 text-sm text-cream sm:text-base"}>
          {c.body}
        </p>
        {!compact ? (
          <p className="mt-3">
            <DirectionsButton locale={locale} />
          </p>
        ) : null}
      </aside>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: SAT_28_HIDE_SCRIPT }}
      />
    </>
  );
}