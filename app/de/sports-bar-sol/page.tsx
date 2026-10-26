import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Atlético–Bayern live: ein Irish Pub nahe Sol, um sich vor dem Spiel zu treffen",
  description:
    "Bayern-Fans in Madrid: ein Irish Pub nahe Sol, um sich vor dem Spiel Atlético–Bayern zu treffen. Dienstag 3. November 2026, 21:00 Uhr, live bei O'Connell St.",
  path: "/de/sports-bar-sol",
  locale: "de",
});

export default function DeSportsBarSolPage() {
  return (
    <PageShell locale="de" altLangHref="/sports-bar-sol">
      <PageHero
        eyebrow="Champions League · Madrid"
        title="Ein Irish Pub nahe Sol, um sich vor dem Spiel zu treffen"
        lead={`${SITE_NAME} liegt in der Calle de Espoz y Mina 7, gleich an der Puerta del Sol — ein Irish Pub nahe Sol, um sich vor dem Spiel zu treffen, live auf den Screens und danach wieder im Zentrum.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <Section title="Atlético Madrid – Bayern München · Di 3. November, 21:00">
        <p>
          Matchday am Metropolitano. Wir zeigen Atlético Madrid gegen Bayern
          München live um 21:00 Uhr Ortszeit Madrid. Trefft euch vorher in Sol,
          fahrt gemeinsam raus zum Stadion — oder kommt nach dem Abpfiff zurück
          ins Zentrum und lasst den Abend hier ausklingen.
        </p>
      </Section>
      <Section title="Warum Sol?">
        <p>
          Die Puerta del Sol ist der praktische Ort im Zentrum, um sich zu verabreden: leicht
          zu finden, gut angebunden, und nach dem Spiel wieder der natürliche
          Ort, um zusammenzukommen. O&apos;Connell St ist ein irischer Sports
          Pub genau dort — Screens und Platz zum Stehen und Sitzen.
        </p>
        <p>
          Bestätigte Anstoßzeiten stehen unter{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="Bier und Fußball an der Puerta del Sol">
        <p>
          Ob ihr für Atlético – Bayern am Dienstag, 3. November (21:00 Uhr Madrider
          Zeit, Metropolitano) in der Stadt seid oder einfach ein paar Tage Madrid
          macht: Bei uns gibt&apos;s ein Bier an der Bar, Fußball auf den Screens
          und ein Publikum aus aller Welt – mitten im Zentrum, wo sich ohnehin alle
          an der Puerta del Sol treffen. Kommt vor dem Anpfiff vorbei, fahrt von
          Sol aus gemeinsam zum Stadion und feiert oder trauert danach wieder hier.
        </p>
        <p>
          Gerade Oktoberfest-Zeit? Das Fest selbst ist in Leganés, außerhalb des
          Zentrums – wie ihr von Sol hinkommt und wo ihr danach im Zentrum noch ein
          Bier trinken könnt, steht auf unserer Seite{" "}
          <Link href="/de/oktoberfest-madrid-sol" className="text-cream underline">
            Oktoberfest Madrid: ein Bier an der Puerta del Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="So findet ihr uns">
        <p>
          {ADDRESS.full}, an der Puerta del Sol. {HOURS.summaryDe}.
        </p>
        <p>
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Live Sports
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
