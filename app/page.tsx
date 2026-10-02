import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { HomeCtaBand } from "@/components/HomeCtaBand";
import { InteriorGallery, InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `${SITE_NAME} Madrid — Irish pub & sports bar near Sol`,
  description:
    "O'Connell St: Irish pub and sports bar at Calle de Espoz y Mina 7, near Sol. Live sports on the screens. Thursday €1 shots.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell
      locale="en"
      altLangHref="/es"
      cover={<VenueHero variant="hero" />}
    >
      {/* Hero text + CTAs */}
      <header className="mb-8 max-w-2xl text-center sm:mx-auto">
        <h1 className="font-serif text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
          O&apos;Connell St Madrid
        </h1>
        <p className="mt-2 text-sm tracking-wide text-cream-muted sm:text-base">
          Irish pub · Sol · Live sports
        </p>
      </header>
      <div className="mb-10 border-y border-gold/20 bg-pub-burgundy-deep/80">
        <HomeCtaBand locale="en" />
      </div>

      {/* Presentación */}
      <section className="mb-12 max-w-2xl">
        <p className="text-sm leading-relaxed text-cream-muted sm:text-base">
          An Irish pub a short walk from Puerta del Sol — live sports on the
          screens when they&apos;re confirmed, pints at the bar, and Thursday €1
          shots for Erasmus, travellers and friends out in the centre.
        </p>
      </section>

      {/* Live Sports / What's On */}
      <FixtureStrip locale="en" />

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

      {/* Thursday €1 — once */}
      <ThursdayFeature locale="en" />

      {/* Erasmus */}
      <section className="mb-12 max-w-2xl">
        <h2 className="font-serif text-xl font-bold text-cream">
          Erasmus nights
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          An easy meetup near Sol — English-friendly at the bar, sports on the
          screens, and Thursday €1 shots to finish the night.
        </p>
        <p className="mt-3">
          <Link href="/erasmus" className="text-sm text-gold hover:text-cream">
            Erasmus at O&apos;Connell&apos;s →
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
              Yes. Confirmed matches and events go on{" "}
              <Link href="/whats-on" className="text-gold underline">
                What&apos;s On
              </Link>
              ; ask at the bar for tonight&apos;s lineup.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-cream">Can I book a table?</dt>
            <dd className="mt-1 text-cream/80">
              Drop us a note via{" "}
              <Link href="/contact" className="text-gold underline">
                Contact
              </Link>{" "}
              and we&apos;ll get back to you — big match nights fill up.
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
                className="text-gold underline"
              >
                Google Maps
              </a>
              .
            </dd>
          </div>
        </dl>
      </Section>

      {/* Find us */}
      <Section title="Find us">
        <p>
          {ADDRESS.full}. Open{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Google Maps
          </a>
          . {HOURS.summaryEn}.
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
          <Link href="/contact" className="text-gold underline">
            Contact us
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
