import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-halloween-madrid";

export const metadata = buildMetadata({
  title: "Halloween in Madrid for Bayern Fans: Saturday Night near Sol",
  description:
    "In Madrid early for Atlético v Bayern (Tue 3 Nov, 21:00)? Saturday 31 October is Halloween at O'Connell St, an Irish pub near Sol: from 19:00, costumes, decorations and music, with football on the screens.",
  path: "/news/bayern-fans-halloween-madrid",
});

export default function NewsBayernFansHalloweenPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Landed early? Tonight is Halloween near Sol"
        lead="If your Madrid trip started before Tuesday, Saturday 31 October gives you a night to remember before the Metropolitano: Halloween at O'Connell St, a couple of minutes' walk from Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Halloween an der Sol
        </a>
      </p>
      <Section title="Halloween from 19:00">
        <p>
          On Saturday 31 October the Halloween party starts at 19:00:
          costumes, decorations and music. Costumes are welcome but not
          required, so a red Bayern shirt works too. Three days before the
          match is a good moment to get the group together in Madrid.
        </p>
      </Section>
      <Section title="Football on the screens all afternoon">
        <p>
          We open at 15:00 on Saturdays. Premier League kicks off at 16:00,
          Manchester City v Brighton among them, then Tottenham v Crystal
          Palace at 18:30 and Aston Villa v Fulham at 21:00. In LaLiga,
          Barcelona v Alavés is at 21:00. Come for the football, stay for
          Halloween.
        </p>
      </Section>
      <Section title="Three pubs, one meeting place">
        <p>
          O&apos;Connell St and Dubliners share Calle de Espoz y Mina 7, a
          couple of minutes&apos; walk from Puerta del Sol, and
          O&apos;Reilly&apos;s is 200 m from Sol. On Tuesday 3 November we
          open at 18:00, and Atlético v Bayern is on our screens from kick-off
          at 21:00.
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
          <Link href="/halloween-madrid-sol" className="text-cream underline">
            Halloween at O&apos;Connell St
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/contact" className="text-cream underline">
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
