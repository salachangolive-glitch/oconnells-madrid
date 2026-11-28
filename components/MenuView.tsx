import { MENU, MENU_IMAGES } from "@/lib/menu";

const eur = (n: number) => `${n} €`;

export function MenuView({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <div className="space-y-10">
      {MENU.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-24">
          <h3 className="mb-3 border-b border-gold/30 pb-1 font-serif text-xl font-semibold text-gold sm:text-2xl">
            {es ? s.es : s.en}
          </h3>
          <ul className="divide-y divide-gold/10">
            {s.items.map((it) => {
              const main = es ? it.es : it.en ?? it.es;
              const sub = es ? it.en : it.en ? it.es : undefined;
              const desc = es ? it.descEs : it.descEn ?? it.descEs;
              return (
                <li key={it.es} className="flex items-start justify-between gap-4 py-3">
                  <div>
                    <p className="font-semibold text-cream">{main}</p>
                    {sub ? <p className="text-sm text-cream/60">{sub}</p> : null}
                    {desc ? <p className="text-sm text-cream/80">{desc}</p> : null}
                  </div>
                  <p className="shrink-0 font-semibold text-gold" data-price={it.price}>
                    {eur(it.price)}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <section id="photos">
        <h3 className="mb-3 border-b border-gold/30 pb-1 font-serif text-xl font-semibold text-gold sm:text-2xl">
          {es ? "La carta en fotos" : "The menu as photos"}
        </h3>
        <p className="mb-4 text-sm text-cream/70">
          {es ? "Toca una imagen para verla a tamaño completo." : "Tap an image to open it full size."}
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {MENU_IMAGES.map((im) => (
            <a key={im.src} href={im.src} target="_blank" rel="noopener noreferrer" className="block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={im.src} width={im.w} height={im.h} loading="lazy" alt={es ? im.es : im.en} className="h-auto w-full rounded border border-gold/20" />
              <span className="mt-1 block text-sm text-cream/70">{es ? im.es : im.en}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
