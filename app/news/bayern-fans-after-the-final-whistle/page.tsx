import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-nach-dem-abpfiff";

export const metadata = buildMetadata({
  title: "Bayern Fans Madrid After the Match: Back to Sol, Open Until 03:00",
  description:
    "Atlético v Bayern, Tuesday 3 November, 21:00. After the final whistle, head back to the centre: O'Connell St and Dubliners (Espoz y Mina 7) and O'Reilly's by Puerta del Sol. O'Connell St is open until 03:00.",
  path: "/news/bayern-fans-after-the-final-whistle",
});

export default function NewsBayernFansAfterTheFinalWhistlePage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="After the final whistle: back to Sol"
        lead="The match at the Metropolitano ends around 23:00. In Madrid, that is when the night is just getting going, and three Irish pubs by Puerta del Sol are waiting for you to replay every moment of the match."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: nach dem Abpfiff
        </a>
      </p>
      <p className="mb-8 border-l-2 border-gold pl-4 text-sm sm:text-base">
        <a href="/news/bayern-fans-madrid-meeting-point-sol" className="font-semibold text-gold underline">
          Tonight, 21:00: Atlético v Bayern live on the big screen — your meeting point at Sol →
        </a>
      </p>
      <Section title="Madrid doesn't go to bed early">
        <p>
          Madrid eats late and goes out late. A match that kicks off at 21:00
          isn&apos;t the end of the evening here, it&apos;s the middle of it. If
          you&apos;re not ready for the hotel after the final whistle, the city
          centre is the place to be.
        </p>
      </Section>
      <Section title="Back to the centre">
        <p>
          The stadium says the metro runs until about 01:30. The route details
          are in our{" "}
          <a href="/news/bayern-fans-madrid-meeting-point-sol" className="text-gold underline">
            meeting point at Sol article
          </a>
          . Our tip: agree beforehand where your group will meet up again; a
          pin on the map is enough.
        </p>
      </Section>
      <Section title="Three pubs, one meeting point">
        <p>
          O&apos;Connell St and Dubliners share Calle de Espoz y Mina 7, a
          couple of minutes&apos; walk from Puerta del Sol, and
          O&apos;Reilly&apos;s is about 200 m from Sol. O&apos;Connell St is open
          until 03:00 on Tuesday: time for a post-match beer, a replay of the
          key moments and a few songs.
        </p>
        <p>
          Rather watch it in the pub? Atlético v Bayern is on our screens from
          kick-off at 21:00, and we open at 18:00.
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
          <Link href="/contact" data-event="contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/news/spanish-phrases-football-fans" className="text-cream underline">
            Ten Spanish phrases for football fans
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
