import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureStrip } from "@/components/FixtureStrip";
import { HomeCtaBand } from "@/components/HomeCtaBand";
import { HomeGalleryPreview } from "@/components/GalleryMedia";
import { InteriorGallery, InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `Irish pub at Puerta del Sol with live sports | ${SITE_NAME} Madrid`,
  description:
    "Irish pub by Puerta del Sol with live sports, international crowd and €1 shots on Thursdays.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell
      locale="en"
      altLangHref="/es"
      cover={<VenueHero variant="hero" />}
    >
      <PostMatchBanner locale="en" />
      {/* Hero text + CTAs */}
      <header className="mb-8 max-w-2xl text-center sm:mx-auto">
        <h1 className="font-serif text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
          O&apos;Connell St Madrid{" "}
          <span className="mt-1 block text-lg font-semibold text-gold sm:text-xl lg:text-2xl">
            Irish pub at Puerta del Sol
          </span>
        </h1>
        <p className="mt-2 text-sm tracking-wide text-cream-muted sm:text-base">
          Irish pub · sports bar · live sports
        </p>
        <div className="mx-auto mt-4 inline-block rounded border border-gold/30 px-4 py-2 text-sm text-cream sm:text-base">
          <p className="font-semibold text-gold">Open every day</p>
          <p>{HOURS.summaryEn}</p>
        </div>
      </header>
      <div className="mb-10 border-y border-gold/20 bg-pub-burgundy-deep/80">
        <HomeCtaBand locale="en" />
      </div>

      {/* Presentación — parallel to ES; visitors stay in their own section */}
      <section className="mb-12 max-w-2xl">
        <p className="text-sm leading-relaxed text-cream-muted sm:text-base">
          O&apos;Connell St is an Irish pub and sports bar by Puerta del Sol,
          with live sports, an international crowd, and €1 shots on Thursdays.
          For Sunday American football, this is the NFL bar Madrid door on
          Espoz y Mina 7 —{" "}
          <Link href="/nfl-madrid" className="text-gold underline">
            watch NFL Madrid
          </Link>{" "}
          on the screens, and ask which game is on.
        </p>
      </section>

      {/* Pub near Puerta del Sol — Ads landing relevance (19 Oct) */}
      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">
          Irish pub and sports bar near Puerta del Sol
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          O&apos;Connell St is an Irish pub and sports bar at {ADDRESS.street},
          just off Puerta del Sol in Madrid centre — a sports bar in Sol,
          Madrid, with live screens. We&apos;re open every day, until 03:00 Sunday to Thursday and 03:30 on Friday and Saturday. Live sports play on big screens — confirmed
          matches are on{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
        <p className="mt-3">
          <Link href="/location" className="text-sm text-gold hover:text-cream">
            Directions and opening hours →
          </Link>
        </p>
      </section>

      {/* Live Sports / What's On */}
      <FixtureStrip locale="en" windowOnly />
      <p className="mb-12 max-w-2xl text-sm text-cream-muted sm:text-base">
        This Irish pub at Puerta del Sol is also a Premier League pub in Madrid:
        English football on the screens when confirmed, in the same room as NFL.
        More:{" "}
        <Link href="/premier-league" className="text-gold underline">
          Premier League
        </Link>
        ,{" "}
        <Link
          href="/madrid-clocks-saturday-english-kickoffs-this-door"
          className="text-gold underline"
        >
          Madrid clocks for Saturday English kick-offs
        </Link>
        ,{" "}
        <Link href="/champions-league" className="text-gold underline">
          Champions League nights
        </Link>
        ,{" "}
        <Link
          href="/tuesday-wednesday-european-nights-this-door"
          className="text-gold underline"
        >
          Tuesday and Wednesday European nights at this door
        </Link>
        ,{" "}
        <Link
          href="/how-whats-on-marks-confirmed-this-door"
          className="text-gold underline"
        >
          how What&apos;s On marks Confirmed
        </Link>
        ,{" "}
        <Link
          href="/two-saturday-football-clocks-one-sol-room-this-door"
          className="text-gold underline"
        >
          two Saturday football clocks in one Sol room
        </Link>
        ,{" "}
        <Link
          href="/overlapping-kickoffs-shared-screens-this-door"
          className="text-gold underline"
        >
          overlapping kickoffs and shared screens
        </Link>
        ,{" "}
        <Link
          href="/last-metres-sol-clock-to-gold-lettering-this-door"
          className="text-gold underline"
        >
          last metres from the Sol clock to this door
        </Link>
        ,{" "}
        <Link
          href="/english-football-talk-independent-pub-off-sol-this-door"
          className="text-gold underline"
        >
          English football talk at this independent pub
        </Link>
        ,{" "}
        <Link href="/nfl-madrid" className="text-gold underline">
          watch NFL Madrid
        </Link>
        , and our{" "}
        <Link href="/sports-bar-sol" className="text-gold underline">
          sports bar in Sol
        </Link>{" "}
        page for match days.
      </p>
      {/* Inside / real photos */}
      <InteriorPhoto
        variant="editorial"
        src="/images/interior/bar-corner.webp"
        alt="Bar at O'Connell St Irish pub near Sol — wooden counter, stools and warm lights"
      />
      <InteriorGallery
        items={[
          {
            src: "/images/interior/bar-taps.webp",
            alt: "Long wooden bar and beer taps at O'Connell St",
            position: "object-center",
          },
          {
            src: "/images/interior/sports-aisle.webp",
            alt: "Sports screens and seating aisle inside O'Connell St near Sol",
            position: "object-[center_20%]",
          },
          {
            src: "/images/interior/about-salon.webp",
            alt: "Tables with wall TVs in the O'Connell St seating area",
            position: "object-center",
          },
          {
            src: "/images/interior/stairs-levels.webp",
            alt: "Stairs between levels at O'Connell St Irish pub",
            position: "object-center",
          },
        ]}
      />

      <HomeGalleryPreview locale="en" />

      {/* Thursday €1 — once */}
      <ThursdayFeature locale="en" />

      {/* Visitors */}
      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">
          Visitors
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          Erasmus students, tourists and an international crowd, a short walk
          from Puerta del Sol. Thursday nights are when the international crowd
          fills the bar.
        </p>
        <p className="mt-3">
          <Link href="/erasmus" className="text-sm text-gold hover:text-cream">
            Erasmus in Madrid: Thursday nights next to Sol →
          </Link>
        </p>
      </section>

      {/* About brief — real facts only */}
      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">About</h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          {SITE_NAME} is an Irish pub and sports bar at {ADDRESS.full}.{" "}
          {HOURS.summaryEn}.
        </p>
        <p className="mt-3">
          <Link href="/about" className="text-sm text-gold hover:text-cream">
            More about us →
          </Link>
        </p>
      </section>

      {/* FAQ */}
      <Section title="Quick answers">
        <dl className="space-y-5">
          <div>
            <dt className="font-semibold text-cream">What are your hours?</dt>
            <dd className="mt-1 text-cream/80">{HOURS.summaryEn}.</dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Are you near Sol?</dt>
            <dd className="mt-1 text-cream/80">
              Yes — {ADDRESS.street}, a short walk from Puerta del Sol.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Do you show live sports?</dt>
            <dd className="mt-1 text-cream/80">
              Yes. This sports bar puts confirmed matches on{" "}
              <Link href="/whats-on" data-event="whats_on" className="text-gold underline">
                What&apos;s On
              </Link>
              ; ask at the bar for tonight&apos;s lineup. To watch NFL Madrid,
              see{" "}
              <Link href="/nfl-madrid" className="text-gold underline">
                NFL bar Madrid
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">
              How do I get here from Metro Sol?
            </dt>
            <dd className="mt-1 text-cream/80">
              Exit at Sol, walk to Calle de Espoz y Mina — look for the red
              facade and gold lettering.{" "}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-event="directions"
                className="text-gold underline"
              >
                Google Maps
              </a>
              .
            </dd>
          </div>
        </dl>
      </Section>

      {/* Find us — CID Maps + GET DIRECTIONS (Localo SEO). Hours unchanged. */}
      <LocaloFindUs locale="en" />
      <Section>
        <p>
          {ADDRESS.full}. {HOURS.summaryEn}.
        </p>
        <p>
          <Link href="/location" className="text-gold underline">
            Location &amp; hours →
          </Link>
        </p>
      </Section>

      {/* Contact */}
      <Section title="Contact">
        <p>
          Questions about a match night or a group?{" "}
          <Link href="/contact" data-event="contact" className="text-gold underline">
            Write to us via the form
          </Link>
          . On Thursdays:{" "}
          <Link href="/thursday-1-euro-shots" className="text-gold underline">
            €1 shots near Sol
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
