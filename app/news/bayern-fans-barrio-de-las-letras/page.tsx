import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-barrio-de-las-letras";

export const metadata = buildMetadata({
  title: "Barrio de las Letras & Plaza de Santa Ana: Bayern Fans in Madrid near Sol",
  description:
    "Bayern fans in Madrid for Atlético v Bayern (Tue 3 Nov, 21:00): the Barrio de las Letras and Plaza de Santa Ana start where Calle de Espoz y Mina ends. Cervantes, Lope de Vega and an Irish pub at number 7.",
  path: "/news/bayern-fans-barrio-de-las-letras",
});

export default function NewsBayernFansBarrioLetrasPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Our neighbourhood: the Barrio de las Letras starts at the end of our street"
        lead="Walk out of O'Connell St, follow Calle de Espoz y Mina to the end, and you're in the quarter where Cervantes and Lope de Vega once lived. Two streets, four hundred years of stories."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Sports screens and seating at O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_20%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Unser Viertel, das Barrio de las Letras
        </a>
      </p>
      <Section title="From Sol to Plaza del Ángel">
        <p>
          Calle de Espoz y Mina runs from Puerta del Sol to Plaza del Ángel.
          We&apos;re at number 7. At the far end of the street is the
          Callejón del Gato, the little alley Valle-Inclán made famous in his
          play <em>Luces de bohemia</em>. One more step and you&apos;re in the
          Barrio de las Letras.
        </p>
      </Section>
      <Section title="The writers' quarter">
        <p>
          The name means the &quot;quarter of letters&quot;. In the 16th and
          17th centuries the big names of Spain&apos;s Golden Age lived here:
          Miguel de Cervantes, Lope de Vega, Quevedo and Góngora. Lope de
          Vega&apos;s house survives as a museum, and Cervantes is buried in
          the convent of the Trinitarias Descalzas, a few streets away.
        </p>
      </Section>
      <Section title="Plaza de Santa Ana">
        <p>
          The heart of the quarter is Plaza de Santa Ana, right next to Plaza
          del Ángel. On one side stands the Teatro Español; in the square
          you&apos;ll find statues of the playwrights Calderón de la Barca and
          Federico García Lorca. It&apos;s an easy place for a slow afternoon
          before the evening starts.
        </p>
      </Section>
      <Section title="Then back to number 7">
        <p>
          On Tuesday 3 November O&apos;Connell St opens at 18:00 and Atlético v
          Bayern is live on our screens from 21:00. From Plaza de Santa Ana
          it&apos;s only a short walk back along Espoz y Mina. Opening times for
          every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          .
        </p>
      </Section>
      <Section title="Three Irish pubs near Sol to meet up before the match">
        <ul className="list-disc space-y-1 pl-5">
          <li>O&apos;Connell St · Calle de Espoz y Mina 7</li>
          <li>Dubliners · Calle de Espoz y Mina 7, same address</li>
          <li>O&apos;Reilly&apos;s · 200 m from Puerta del Sol</li>
        </ul>
        <p>
          Whoever is still wandering the Letras knows where to head. Atlético
          fans are just as welcome.
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
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href="/news/bayern-fans-madrid-timing" className="text-cream underline">
            Madrid timing for match night
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
