import Link from "next/link";
import { getVisibleComingUp } from "@/lib/home-coming-up";

type Locale = "en" | "es";

const HEADING: Record<Locale, string> = {
  en: "Coming up",
  es: "Próximamente",
};

export function HomeComingUp({ locale }: { locale: Locale }) {
  const items = getVisibleComingUp(locale);
  if (!items.length) return null;

  return (
    <section className="mb-12 max-w-2xl" aria-labelledby="home-coming-up">
      <h2
        id="home-coming-up"
        className="font-serif text-xl font-bold text-cream"
      >
        {HEADING[locale]}
      </h2>
      <div className="pub-rule my-3" />
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="text-sm text-cream-muted sm:text-base">
            <p>{item.detail}</p>
            <p className="mt-1">
              <Link href={item.href} className="text-gold underline hover:text-cream">
                {item.label} →
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
