import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Tokio Hotel in Madrid, Mon 23 Nov: an Irish pub near Sol before and after the gig",
  description:
    "Tokio Hotel play Palacio Vistalegre on Monday 23 November 2026, their only date in Spain. Travelling from Germany or across Madrid? Meet at O'Connell St, Espoz y Mina 7 by Puerta del Sol.",
  path: "/news/tokio-hotel-madrid-gig-night-sol",
});

export default function NewsTokioHotelGigNightPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Gig night · Monday 23 November 2026"
        title="Tokio Hotel in Madrid: a Monday gig night that starts at Sol"
        lead="Tokio Hotel bring their only Spanish date of the year to Palacio Vistalegre on Monday 23 November. Plenty of fans will be flying in from Germany and the rest of Europe for it, so it helps to have one easy place in the centre of Madrid to meet up first."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The gig">
        <ul className="list-disc space-y-1 pl-5">
          <li>Tokio Hotel, live in Madrid</li>
          <li>Monday 23 November 2026</li>
          <li>Palacio Vistalegre, Calle de Matilde Hernández, Carabanchel, Madrid</li>
        </ul>
        <p>
          The date and venue are listed on the{" "}
          <a
            href="https://www.palaciovistalegre.com/event/tokio-hotel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Palacio Vistalegre event page
          </a>
          , which still shows the start time as to be confirmed. Check your
          ticket and the venue page closer to the day for door and show times.
        </p>
      </Section>
      <Section title="Coming from Germany? One pin for the whole group">
        <p>
          The band from Magdeburg have picked Madrid as their only stop in
          Spain, so expect fans arriving from Berlin, Hamburg, Munich and
          beyond, plus everyone travelling in from the rest of the country.
          Share one location and let people drift in as their flights and
          trains land: O&apos;Connell St is at Calle de Espoz y Mina 7, a
          couple of minutes&apos; walk from Puerta del Sol. On Mondays we open
          at 18:00, a handy fans meeting point before you head south to the
          arena.
        </p>
        <p>
          From Sol, walk a few minutes to Ópera and take Metro Line 5 to Vista
          Alegre station, next to the venue. Give yourself plenty of time
          so you&apos;re inside before the band comes on.
        </p>
      </Section>
      <Section title="After the encore: back to the centre">
        <p>
          When the show finishes, take Line 5 back to Ópera and stroll over to
          Espoz y Mina 7. From Monday to Thursday O&apos;Connell St stays open
          until 03:00, so there&apos;s time to talk through the setlist over a
          pint. If you&apos;re staying in the centre, Calle Mayor, Plaza Mayor
          and the streets around Sol are all a short walk away.
        </p>
        <p>
          Opening times for every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          , and the rest of the week&apos;s events are on{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · near Puerta del Sol,
          Madrid.{" "}
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
