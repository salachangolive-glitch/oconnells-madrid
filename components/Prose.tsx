import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-serif text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-3 text-sm leading-relaxed text-cream-muted sm:mt-4 sm:text-base lg:text-lg">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

export function Section({
  title,
  children,
  featured,
}: {
  title?: string;
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <section
      className={
        featured
          ? "mb-10 border-l-2 border-gold pl-4 sm:pl-5"
          : "mb-10"
      }
    >
      {title ? (
        <h2 className="mb-3 font-serif text-xl font-semibold text-cream sm:text-2xl">
          {title}
        </h2>
      ) : null}
      <div className="space-y-3 text-cream/80 leading-relaxed">{children}</div>
    </section>
  );
}

export function HighlightCards({
  items,
}: {
  items: { href: string; title: string; blurb: string }[];
}) {
  return (
    <ul className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const className =
          "block h-full rounded-xl border border-cream/15 bg-black/50 p-4 transition hover:border-pub-green-light hover:bg-pub-green/30";
        const inner = (
          <>
            <p className="font-serif text-lg font-semibold text-cream">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-cream/70">{item.blurb}</p>
          </>
        );
        const external = /^https?:\/\//i.test(item.href);
        return (
          <li key={item.href}>
            {external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link href={item.href} className={className}>
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
