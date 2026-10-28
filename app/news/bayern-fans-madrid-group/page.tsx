import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-gruppe-madrid";

export const metadata = buildMetadata({
  title: "Bayern Fans in Madrid as a Group: Three Irish Pubs near Sol, One Plan",
  description:
    "Travelling to Madrid with a big group of Bayern fans for Atlético v Bayern (Tue 3 Nov, 21:00)? One pin, two addresses and three Irish pubs near Sol: O'Connell St, Dubliners and O'Reilly's.",
  path: "/news/bayern-fans-madrid-group",
});

export default function NewsBayernFansGroupPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="The whole crew, one pin: getting a big Bayern group together near Sol"
        lead="Some land in the morning, some come straight from the hotel, a few are still in the Letras. With twenty people and three pubs next to Sol, all it takes is one plan everyone has on their phone."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Sports screens and seating at O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_20%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Die ganze Truppe, ein Pin
        </a>
      </p>
      <Section title="Two addresses, three pubs">
        <p>
          Here&apos;s the easy part: O&apos;Connell St and Dubliners share the
          same address, Calle de Espoz y Mina 7, a couple of minutes&apos; walk
          from Puerta del Sol. O&apos;Reilly&apos;s is the third, 200 m from
          Sol. So your group only needs to remember two places, and one of
          them already covers two pubs.
        </p>
      </Section>
      <Section title="Drop one pin in the group chat">
        <p>
          Before anyone leaves the hotel, one person drops the location of
          Espoz y Mina 7 in the group chat and pins it. Whoever arrives first
          shares their live location, and everyone else just follows the dot.
          No long calls on a noisy square, no &quot;which corner of Sol are
          you on?&quot;.
        </p>
      </Section>
      <Section title="Pick a time, and a plan B">
        <p>
          On Tuesday 3 November O&apos;Connell St opens at 18:00 and the match
          kicks off at 21:00. Agree on a time for the whole group to be
          together, and agree on the plan B too: if one pub is full, the next
          one is either next door at the same number or 200 m away at
          O&apos;Reilly&apos;s. Say it once in the chat and nobody gets lost.
        </p>
      </Section>
      <Section title="Splitting up is fine">
        <p>
          A really big group doesn&apos;t have to watch from one table. Split
          into smaller crews across the three pubs, keep the chat going, and
          meet back on Espoz y Mina after the final whistle. Atlético fans are
          just as welcome, and a Champions League night near Sol is better
          shared.
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
          <Link href="/news/bayern-fans-barrio-de-las-letras" className="text-cream underline">
            Our neighbourhood, the Barrio de las Letras
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
