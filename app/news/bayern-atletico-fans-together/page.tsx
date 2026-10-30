import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-atletico-fans-gemeinsam";

export const metadata = buildMetadata({
  title: "Bayern and Atlético Fans Together in Madrid: a Champions Night near Sol",
  description:
    "Red and white meets red and white. Bayern and Atlético fans sharing a Champions League night (Tue 3 Nov, 21:00) at three Irish pubs near Sol: O'Connell St, Dubliners and O'Reilly's.",
  path: "/news/bayern-atletico-fans-together",
});

export default function NewsBayernAtleticoTogetherPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Red and white meets red and white: Bayern and Atlético fans, one night near Sol"
        lead="Two clubs, the same two colours. On Tuesday the bar next to you might be wearing the other red and white, and that's exactly what makes a Champions League night in Madrid worth the trip."
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt="Bar corner at O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Rot-Weiß trifft Rot-Weiß
        </a>
      </p>
      <Section title="Same colours, different songs">
        <p>
          Atlético play in red and white stripes, Bayern in red and white too.
          From across the room it can be hard to tell who&apos;s who until the
          singing starts. In a pub near Sol that mix is part of the fun: you
          came for Bayern, and you&apos;ll probably end up explaining your
          club to someone from Madrid, and hearing about theirs.
        </p>
      </Section>
      <Section title="Atlético fans are welcome too">
        <p>
          O&apos;Connell St, Dubliners and O&apos;Reilly&apos;s are Irish pubs,
          not anyone&apos;s home end. On Tuesday 3 November both sets of fans
          are welcome. O&apos;Connell St opens at 18:00 and the match is on
          our screens from kick-off at 21:00.
        </p>
      </Section>
      <Section title="A few easy habits">
        <p>
          Cheer for your team, not against the people at the next table. Keep
          the songs for the big moments, let the other side have theirs, and
          leave flares and anything risky at home. A handshake at full time,
          whatever the score, goes a long way in Madrid.
        </p>
      </Section>
      <Section title="Two addresses, three pubs">
        <p>
          O&apos;Connell St and Dubliners share Calle de Espoz y Mina 7, a
          couple of minutes&apos; walk from Puerta del Sol. O&apos;Reilly&apos;s
          is 200 m from Sol. Wherever you watch, there&apos;s room for both
          colours of red and white.
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
          <Link href="/news/bayern-fans-madrid-weekend" className="text-cream underline">
            Next: arriving early? A football weekend near Sol
          </Link>
          {" · "}
          <Link href="/news/bayern-fans-madrid-group" className="text-cream underline">
            Coming as a big group: one pin, three pubs
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
