import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/spanisch-fuer-bayern-fans";

const PHRASES: { es: string; en: string }[] = [
  { es: "¡Hola! ¿Qué tal?", en: "Hi! How are you?" },
  { es: "Una cerveza, por favor.", en: "A beer, please." },
  { es: "Otra ronda, por favor.", en: "Another round, please." },
  { es: "¡Salud!", en: "Cheers!" },
  { es: "¿Está libre?", en: "Is this seat free?" },
  { es: "¿Dónde está el baño?", en: "Where is the toilet?" },
  { es: "¿A qué hora empieza el partido?", en: "What time does the match start?" },
  { es: "¡Gol! ¡Golazo!", en: "Goal! What a goal!" },
  { es: "¡Qué partido!", en: "What a match!" },
  { es: "Gracias, ¡hasta luego!", en: "Thanks, see you later!" },
];

export const metadata = buildMetadata({
  title: "Spanish for Football Fans: 10 Phrases for Bayern Fans in Madrid",
  description:
    "Atlético v Bayern is on Tuesday 3 November at 21:00. Ten simple Spanish phrases for the bar and the street, and three Irish pubs near Puerta del Sol: O'Connell St, Dubliners and O'Reilly's.",
  path: "/news/spanish-phrases-football-fans",
});

export default function NewsSpanishPhrasesFootballFansPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Spanish for football fans: ten phrases for the bar and the street"
        lead="Atlético v Bayern is on Tuesday. If you are already in Madrid, a few words of Spanish go a long way, and a pub near Puerta del Sol is a good place to try them out."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Spanisch für Bayern Fans
        </a>
      </p>
      <Section title="Ten phrases">
        <ol className="list-decimal space-y-2 pl-5">
          {PHRASES.map((p) => (
            <li key={p.es}>
              <strong lang="es" className="text-cream">{p.es}</strong> — {p.en}
            </li>
          ))}
        </ol>
        <p>
          Say «por favor» and «gracias» and you are already halfway there.
          Spaniards greet people a lot, so a simple «¡Hola!» when you walk in
          is always a good start.
        </p>
      </Section>
      <Section title="Three Irish pubs near Sol">
        <p>
          O&apos;Connell St and Dubliners share Calle de Espoz y Mina 7, a
          couple of minutes&apos; walk from Puerta del Sol, and
          O&apos;Reilly&apos;s is about 200 m from Sol. From Monday to Thursday
          O&apos;Connell St opens at 18:00. On Tuesday 3 November, Atlético v
          Bayern is on our screens from kick-off at 21:00.
        </p>
      </Section>
      <Section title="Find us">
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Get directions
          </a>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/contact" data-event="contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href="/news/bayern-fans-madrid-weekend" className="text-cream underline">
            Arriving early? A football weekend near Sol
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
