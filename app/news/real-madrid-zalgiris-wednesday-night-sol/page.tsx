import Link from "next/link";
import { DirectionsButton, HowToGetHere } from "@/components/HowToGetHere";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { RM_ZALGIRIS_WEDNESDAY } from "@/lib/articles/real-madrid-zalgiris-wednesday-night-sol";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const { path, published, start, arenaUrl, copy } = RM_ZALGIRIS_WEDNESDAY;
const c = copy.en;

export const metadata = buildMetadata({
  title: c.title,
  description: c.description,
  path,
});

export default function NewsRealMadridZalgirisWednesdayNightPage() {
  return (
    <PageShell locale="en">
      <JsonLd
        data={visitingFansNewsJsonLd({
          path,
          headline: c.h1,
          description: c.description,
          datePublished: published,
          sportsEventName: "Real Madrid v Žalgiris Kaunas (EuroLeague)",
          startDate: start,
          sport: "Basketball",
          homeTeam: "Real Madrid",
          awayTeam: "Žalgiris Kaunas",
          venue: "Movistar Arena",
          venueStreet: "Avenida de Felipe II",
        })}
      />
      <PageHero eyebrow={c.eyebrow} title={c.h1} lead={c.lead} />
      <p className="mb-8">
        <DirectionsButton locale="en" />
      </p>
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title={c.sections.game.title}>
        <ul className="list-disc space-y-1 pl-5">
          {c.sections.game.bullets.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="text-sm text-cream-muted">
          {c.sections.game.note}{" "}
          <a
            href={arenaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Movistar Arena event page
          </a>
          .
        </p>
      </Section>
      <Section title={c.sections.travel.title}>
        {c.sections.travel.paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Section>
      <Section title={c.sections.hours.title}>
        {c.sections.hours.paras.map((p) => (
          <p key={p}>{p}</p>
        ))}
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
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/location" className="text-cream underline">
            Opening hours
          </Link>
          {" · "}
          <Link href="/news/after-real-madrid-zalgiris-goya-to-sol" className="text-cream underline">
            After the game: Goya to Sol
          </Link>
        </p>
      </Section>
      <HowToGetHere locale="en" />
    </PageShell>
  );
}