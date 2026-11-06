import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Atlético v Barcelona, Sun 8 Nov 21:00: watch LaLiga in an Irish pub near Sol",
  description:
    "Atlético Madrid v Barcelona, LaLiga matchday 12, Sunday 8 November 2026 at 21:00 Madrid time. Watch it live at O'Connell St, Espoz y Mina 7, by Puerta del Sol, on the eve of Madrid's Almudena holiday.",
  path: "/news/atletico-barcelona-sunday-night-sol",
});

export default function NewsAtleticoBarcelonaSundayNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="LaLiga · Sunday 8 November 2026 · 21:00"
        title="Atlético v Barcelona: a big LaLiga Sunday night in Sol"
        lead="Atlético Madrid host Barcelona at the Riyadh Air Metropolitano on Sunday 8 November. No ticket? Watch it live in the centre of Madrid at O'Connell St, a couple of minutes from Puerta del Sol, and with Monday 9 November a Madrid holiday, there's no rush to get home."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Atlético Madrid v FC Barcelona, LaLiga matchday 12</li>
          <li>Sunday 8 November 2026, 21:00 (Madrid time)</li>
          <li>Riyadh Air Metropolitano, Madrid</li>
        </ul>
        <p>
          Date and kick-off are as listed on the{" "}
          <a
            href="https://www.laliga.com/laliga-easports/resultados/2026-27/jornada-12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            LaLiga matchday 12 page
          </a>
          . Kick-off times can still move, so check it again on the day.
        </p>
      </Section>
      <Section title="Live on the screens at O'Connell St">
        <p>
          Exception Sunday 8 November: O&apos;Connell St opens from 12:00
          (usual Sundays from 14:00) and stays open until 03:00, so the hours
          cover the late kickoff. NFL Sunday starts at midday — Bengals at
          Falcons at 15:30, then more NFL from 19:00 — and LaLiga takes over at
          21:00. Ask which game is on; we do not promise every game on every
          screen. The NFL Sunday plan is on{" "}
          <Link href="/nfl-madrid" className="text-gold underline">
            NFL in Madrid
          </Link>
          . First come, first served.
        </p>
        <p>
          Atlético fans, Barça fans and neutrals all end up in the centre on a
          night like this. Puerta del Sol is the easiest place in the city for
          a mixed group to find each other, and Calle de Espoz y Mina 7 is just
          round the corner.
        </p>
      </Section>
      <Section title="A long Sunday: Monday 9 November is a holiday">
        <p>
          Monday 9 November is the Almudena, Madrid&apos;s local holiday, so
          for many people in the city Sunday night is a night without an alarm
          clock. If you&apos;re visiting, bear in mind that some shops and
          offices in Madrid may close or keep holiday hours on the Monday.
        </p>
        <p>
          Opening times for every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          , and the rest of the fixtures are on{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · near Puerta del Sol,
          Madrid. Sol station (Metro and Cercanías) comes out on the square, a
          couple of minutes&apos; walk away.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Open directions
          </a>
          {" · "}
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
