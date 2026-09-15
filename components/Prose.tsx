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
    <header className="mb-8 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pub-green-light">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">
          {lead}
        </p>
      ) : null}
    </header>
  );
}

export function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      {title ? (
        <h2 className="mb-3 font-serif text-xl font-semibold text-cream sm:text-2xl">
          {title}
        </h2>
      ) : null}
      <div className="space-y-3 text-cream/75 leading-relaxed">{children}</div>
    </section>
  );
}
