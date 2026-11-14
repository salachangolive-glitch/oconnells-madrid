import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { LISTING_NUMBER_SEVEN_PATHS } from "@/lib/listing-number-seven-pin";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, GBP_PLACE_ID, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Number 7: this O'Connell St Maps pin | Sol football",
  description:
    "Espoz y Mina 7 has more than one Maps listing. This pin — O'Connell St — is the football Irish pub. CID on file. Confirmed fixtures on What's On.",
  path: LISTING_NUMBER_SEVEN_PATHS.en,
});

export default function ListingNumberSevenPinPage() {
  return (
    <PageShell locale="en" altLangHref={LISTING_NUMBER_SEVEN_PATHS.es}>
      <PageHero
        eyebrow="Listing identity · Espoz y Mina 7 · live football"
        title="This listing at number 7: the O'Connell St Maps pin for football at this door."
        lead={`Maps can show more than one Irish pub at ${ADDRESS.full}. For live football at ${SITE_NAME}, open the pin that belongs to this listing — red facade, gold O'CONNELL ST. lettering — not whichever thumbnail looked familiar in search.`}
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt="Bar corner at O'Connell St on Espoz y Mina 7 near Puerta del Sol"
        position="object-[center_35%]"
      />
      <Section title="Same street number, different Maps pin" featured>
        <p>
          Calle de Espoz y Mina 7 is one address on the arcade off Puerta del Sol.
          Google can still attach more than one listing to that number — each
          with its own pin, reviews, and GET DIRECTIONS target. This page is
          disambiguation for football at this Irish pub listing, published as
          O&apos;Connell St on Maps.
        </p>
        <p>
          We do not tell you to pick a “rival” door. We tell you to check the pin
          before you walk: if you want the sports-first Irish pub that names
          kickoffs only when{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          marks them Confirmed, use{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            GET DIRECTIONS
          </a>{" "}
          on CID 10697659365903665225 (place ID{" "}
          <span className="font-mono text-sm">{GBP_PLACE_ID}</span>). That is
          this listing, not a neighbour’s thumbnail.
        </p>
        <p>
          Facade check: red front, gold lettering spelling this name. Address
          detail stays on{" "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          . Walking from the square is a separate job — see{" "}
          <Link
            href="/last-metres-sol-clock-to-gold-lettering-this-door"
            className="text-cream underline"
          >
            last metres from the Sol clock
          </Link>
          .
        </p>
      </Section>
      <Section title="Named fixtures once the pin is right">
        <p>
          After Maps lands on this door, the honest football list is the same
          confirmed rows as What&apos;s On — Madrid time, ask which game if two
          nights overlap. We do not invent screen counts or promise every league on
          every wall.
        </p>
        <FixtureStrip locale="en" windowOnly showHeading={false} showDirections={false} />
        <p className="mt-4 text-sm text-cream-muted">
          Premier and Champions context:{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            live sports
          </Link>
          . Broader match days:{" "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            watch football in Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="GET DIRECTIONS — O'Connell St on this pin">
        <p>
          Irish pub at Puerta del Sol searches should still resolve to this
          listing when football is the job. Use the CID above so navigation ends
          at the gold lettering, not at another saved place on the same number.
        </p>
        <p>
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            GET DIRECTIONS
          </a>
          {" · "}
          <Link href="/" className="text-cream underline">
            Home
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
