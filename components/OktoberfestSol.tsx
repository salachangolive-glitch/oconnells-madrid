import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";

/**
 * Oktoberfest Madrid 2026 (22 Oct – 15 Nov, Westfield Parquesur, Leganés).
 * O'Connell St has no link with the event. Build-time gate: after 15 Nov the
 * page drops the event as a future plan and stays as an evergreen
 * "beer near Puerta del Sol" page (owner brief 2026-10-20).
 * Transport: oktoberfestmad.es/informacion-practica.html + CRTM schemes
 * (Cercanías C-3/C-4 Sol–Atocha, C-5 Atocha–Zarzaquemada; Metro L3 Sol–Plaza
 * de España, L10 to Puerta del Sur, L12 to El Carrascal). No times, no walking
 * distances.
 */
export const OKTOBERFEST_LAST_DAY = "2026-11-15";

export function oktoberfestLive(now = agendaBuildNow()): boolean {
  return madridTodayYmd(now) <= OKTOBERFEST_LAST_DAY;
}

type Locale = "en" | "es" | "de";

export const OKT_PATHS: Record<Locale, string> = {
  en: "/oktoberfest-madrid-sol",
  es: "/es/oktoberfest-madrid-sol",
  de: "/de/oktoberfest-madrid-sol",
};

export const OKT_META: Record<Locale, { live: { title: string; description: string }; after: { title: string; description: string } }> = {
  en: {
    live: {
      title: "Oktoberfest Madrid 2026: an Irish pub in Sol, before or after",
      description:
        "Oktoberfest Madrid runs 22 Oct–15 Nov, Thursday to Sunday, at Parquesur in Leganés. How to get there from Sol by Metro or Cercanías, and a beer in the centre at O'Connell St, just off Puerta del Sol.",
    },
    after: {
      title: "Beer near Puerta del Sol: an Irish pub in Madrid centre",
      description:
        "O'Connell St, Calle de Espoz y Mina 7, just off Puerta del Sol: an Irish pub in Madrid centre with football on the screens and an international crowd.",
    },
  },
  es: {
    live: {
      title: "Oktoberfest Madrid 2026: un pub irlandés en Sol, antes o después",
      description:
        "El Oktoberfest Madrid es del 22 de octubre al 15 de noviembre, de jueves a domingo, en Parquesur (Leganés). Cómo llegar desde Sol en Metro o Cercanías, y una cerveza en el centro en O'Connell St, junto a la Puerta del Sol.",
    },
    after: {
      title: "Cerveza junto a la Puerta del Sol: pub irlandés en el centro de Madrid",
      description:
        "O'Connell St, Calle de Espoz y Mina 7, junto a la Puerta del Sol: pub irlandés en el centro de Madrid, con fútbol en las pantallas y ambiente internacional.",
    },
  },
  de: {
    live: {
      title: "Oktoberfest Madrid 2026: Irish Pub an der Puerta del Sol – vorher oder danach",
      description:
        "Das Oktoberfest Madrid läuft vom 22. Oktober bis 15. November, donnerstags bis sonntags, in Parquesur (Leganés). So kommt ihr von Sol mit Metro oder Cercanías hin – und ein Bier im Zentrum gibt es im O'Connell St an der Puerta del Sol.",
    },
    after: {
      title: "Bier an der Puerta del Sol: Irish Pub im Zentrum von Madrid",
      description:
        "O'Connell St, Calle de Espoz y Mina 7, direkt an der Puerta del Sol: Irish Pub im Zentrum von Madrid, mit Fußball auf den Screens und internationalem Publikum.",
    },
  },
};

const EVENT_URL = "https://www.oktoberfestmad.es/informacion-practica.html";

const linkCls = "text-cream underline";

export function OktoberfestSol({ locale }: { locale: Locale }) {
  const live = oktoberfestLive();
  const whatsOn = locale === "es" ? "/es/whats-on" : "/whats-on";
  const locationHref = locale === "es" ? "/es/location" : "/location";
  const alt = locale === "en" ? OKT_PATHS.es : OKT_PATHS.en;

  const directions = (label: string) => (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-event="directions"
      className={linkCls}
    >
      {label}
    </a>
  );
  const eventLink = (label: string) => (
    <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
      {label}
    </a>
  );

  if (locale === "es") {
    return (
      <PageShell locale="es" altLangHref={alt}>
        <PageHero
          eyebrow={live ? "Oktoberfest Madrid · 22 oct – 15 nov 2026" : "Cerveza en Sol · Madrid"}
          title={live ? "Temporada de Oktoberfest en Madrid: una cerveza en Sol, antes o después" : "Una cerveza junto a la Puerta del Sol"}
          lead={
            live
              ? "El Oktoberfest Madrid se celebra de jueves a domingo en Westfield Parquesur, en Leganés, al sur de la ciudad. Si te alojas en el centro, o prefieres tu cerveza sin hacer el viaje, O'Connell St es un pub irlandés en Calle de Espoz y Mina 7, junto a la Puerta del Sol."
              : "O'Connell St es un pub irlandés en Calle de Espoz y Mina 7, junto a la Puerta del Sol: una cerveza en el centro, fútbol en las pantallas y gente de todas partes."
          }
        />
        <InteriorPhoto src="/images/interior/bar-taps.webp" alt="Grifos de la barra de O'Connell St cerca de Sol" position="object-[center_40%]" />
        {live ? (
          <>
            <Section title="El evento">
              <p>
                El Oktoberfest Madrid 2026 tiene lugar en el aparcamiento de Westfield
                Parquesur (Leganés) del 22 de octubre al 15 de noviembre, de jueves a
                domingo. Lo organiza su propia empresa y O&apos;Connell St no forma
                parte de él. Entradas, mesas y horarios están en la{" "}
                {eventLink("web del evento")}.
              </p>
            </Section>
            <Section title="De Sol a Parquesur en transporte público">
              <p>
                <strong>Cercanías:</strong> en la estación de Sol, coge la C-3 o la
                C-4 hasta Atocha y cambia allí a la C-5, dirección Fuenlabrada /
                Humanes, hasta Zarzaquemada, la estación de Parquesur.
              </p>
              <p>
                <strong>Metro:</strong> línea 3 desde Sol hasta Plaza de España,
                línea 10 hasta Puerta del Sur y, allí, línea 12 (MetroSur) hasta El
                Carrascal.
              </p>
              <p>
                Antes de salir, consulta posibles cambios de servicio en Metro de
                Madrid, Renfe Cercanías o el Consorcio de Transportes (CRTM).
              </p>
            </Section>
          </>
        ) : (
          <Section title="Oktoberfest Madrid 2026">
            <p>
              El Oktoberfest Madrid 2026 se celebró del 22 de octubre al 15 de
              noviembre en Westfield Parquesur (Leganés). O&apos;Connell St sigue
              aquí, en el centro, todo el año.
            </p>
          </Section>
        )}
        <Section title="De vuelta en el centro">
          <p>
            {live ? "Cuando vuelvas a Sol, aquí seguimos abiertos: " : "Horario: "}
            jueves de 18:00 a 03:00, viernes y sábado de 16:00 a 03:30 y domingo de
            14:00 a 03:00. Una cerveza en la barra y ambiente internacional:
            turistas, estudiantes Erasmus y gente de Madrid, en inglés, en español y
            en muchos otros idiomas.
          </p>
        </Section>
        <Section title={live ? "Fútbol en las pantallas, de jueves a domingo" : "Fútbol en las pantallas"}>
          <p>
            Premier League, LaLiga y Champions League en las pantallas
            {live
              ? "; además, el partido de la NFL en Madrid el domingo 8 de noviembre y el España–Inglaterra el domingo 15 de noviembre, último día del Oktoberfest. "
              : ". "}
            Las horas, en hora de Madrid, están en la{" "}
            <Link href={whatsOn} className={linkCls}>Agenda</Link>.
          </p>
        </Section>
        <Section title="Dónde estamos">
          <p>
            Calle de Espoz y Mina 7, junto a la Puerta del Sol. Desde la estación de
            Sol (Metro y Cercanías), sal a la plaza y busca la calle de Espoz y Mina.
          </p>
          <p>
            {directions("Cómo llegar")}
            {" · "}
            <Link href={locationHref} className={linkCls}>Ubicación</Link>
            {" · "}
            <Link href={OKT_PATHS.de} className={linkCls} hrefLang="de">Auf Deutsch</Link>
          </p>
        </Section>
      </PageShell>
    );
  }

  if (locale === "de") {
    return (
      <PageShell locale="de" altLangHref={alt}>
        <PageHero
          eyebrow={live ? "Oktoberfest Madrid · 22.10.–15.11.2026" : "Bier in Sol · Madrid"}
          title={live ? "Oktoberfest-Zeit in Madrid: ein Bier an der Puerta del Sol" : "Ein Bier an der Puerta del Sol"}
          lead={
            live
              ? "Das Oktoberfest Madrid läuft donnerstags bis sonntags bei Westfield Parquesur in Leganés, im Süden der Stadt. Wer im Zentrum wohnt oder sich die Fahrt sparen will: O'Connell St ist ein Irish Pub in der Calle de Espoz y Mina 7, direkt an der Puerta del Sol."
              : "O'Connell St ist ein Irish Pub in der Calle de Espoz y Mina 7, direkt an der Puerta del Sol: ein Bier im Zentrum, Fußball auf den Screens und Leute aus aller Welt."
          }
        />
        <InteriorPhoto src="/images/interior/bar-taps.webp" alt="Zapfhähne an der Bar im O'Connell St an der Puerta del Sol" position="object-[center_40%]" />
        {live ? (
          <>
            <Section title="Zum Fest">
              <p>
                Das Oktoberfest Madrid 2026 findet vom 22. Oktober bis 15. November
                auf dem Parkplatz von Westfield Parquesur (Leganés) statt, jeweils
                donnerstags bis sonntags. Es hat einen eigenen Veranstalter;
                O&apos;Connell St gehört nicht dazu. Tickets, Tische und
                Öffnungszeiten findet ihr auf der{" "}
                {eventLink("Website des Festes")}.
              </p>
            </Section>
            <Section title="Von Sol nach Parquesur mit den Öffis">
              <p>
                <strong>Cercanías (S-Bahn):</strong> ab Sol mit der C-3 oder C-4 bis
                Atocha, dort in die C-5 Richtung Fuenlabrada / Humanes umsteigen und
                bis Zarzaquemada fahren – das ist die Station für Parquesur.
              </p>
              <p>
                <strong>Metro:</strong> Linie 3 von Sol bis Plaza de España, Linie 10
                bis Puerta del Sur und dort Linie 12 (MetroSur) bis El Carrascal.
              </p>
              <p>
                Vor der Fahrt lohnt ein Blick auf mögliche Änderungen bei Metro de
                Madrid, Renfe Cercanías oder dem Verkehrsverbund CRTM.
              </p>
            </Section>
          </>
        ) : (
          <Section title="Oktoberfest Madrid 2026">
            <p>
              Das Oktoberfest Madrid 2026 lief vom 22. Oktober bis 15. November bei
              Westfield Parquesur (Leganés). O&apos;Connell St ist das ganze Jahr
              im Zentrum für euch da.
            </p>
          </Section>
        )}
        <Section title="Zurück im Zentrum">
          <p>
            {live ? "Wenn ihr zurück in Sol seid, haben wir noch offen: " : "Öffnungszeiten: "}
            donnerstags 18:00–03:00 Uhr, freitags und samstags 16:00–03:30 Uhr,
            sonntags 14:00–03:00 Uhr. Ein Bier an der Bar und ein bunt gemischtes
            Publikum: Reisende, Erasmus-Studierende und Madrilenen – auf Englisch,
            Spanisch und in vielen anderen Sprachen.
          </p>
        </Section>
        <Section title={live ? "Fußball auf den Screens, donnerstags bis sonntags" : "Fußball auf den Screens"}>
          <p>
            Premier League, LaLiga und Champions League laufen auf den Screens
            {live
              ? " – dazu das NFL-Spiel in Madrid am Sonntag, 8. November, und Spanien gegen England am Sonntag, 15. November, dem letzten Oktoberfest-Tag. "
              : ". "}
            Alle Anstoßzeiten in Madrider Zeit stehen unter{" "}
            <Link href="/whats-on" className={linkCls}>What&apos;s On</Link>.
          </p>
        </Section>
        <Section title="So findet ihr uns">
          <p>
            Calle de Espoz y Mina 7, direkt an der Puerta del Sol. Von der Station
            Sol (Metro und Cercanías) auf den Platz und dann in die Calle de Espoz y
            Mina.
          </p>
          <p>
            {directions("Route öffnen")}
            {" · "}
            <Link href="/location" className={linkCls}>Lage</Link>
          </p>
        </Section>
      </PageShell>
    );
  }

  return (
    <PageShell locale="en" altLangHref={alt}>
      <PageHero
        eyebrow={live ? "Oktoberfest Madrid · 22 Oct – 15 Nov 2026" : "Beer in Sol · Madrid"}
        title={live ? "Oktoberfest season in Madrid: a beer in Sol, before or after" : "A beer just off Puerta del Sol"}
        lead={
          live
            ? "Oktoberfest Madrid runs Thursday to Sunday at Westfield Parquesur in Leganés, south of the city. If you're staying in the centre, or you'd rather have your beer without the trip, O'Connell St is an Irish pub at Calle de Espoz y Mina 7, just off Puerta del Sol."
            : "O'Connell St is an Irish pub at Calle de Espoz y Mina 7, just off Puerta del Sol: a beer in the centre, football on the screens and people from everywhere."
        }
      />
      <InteriorPhoto src="/images/interior/bar-taps.webp" alt="Taps at the bar of O'Connell St near Sol" position="object-[center_40%]" />
      {live ? (
        <>
          <Section title="About the event">
            <p>
              Oktoberfest Madrid 2026 takes place in the car park of Westfield
              Parquesur (Leganés) from 22 October to 15 November, Thursday to
              Sunday. It has its own organisers and O&apos;Connell St is not part of
              it. Tickets, tables and opening times are on the{" "}
              {eventLink("event's website")}.
            </p>
          </Section>
          <Section title="From Sol to Parquesur by public transport">
            <p>
              <strong>Cercanías (local trains):</strong> at Sol station, take the C-3
              or C-4 to Atocha and change there to the C-5, towards Fuenlabrada /
              Humanes, as far as Zarzaquemada, the station for Parquesur.
            </p>
            <p>
              <strong>Metro:</strong> line 3 from Sol to Plaza de España, line 10 to
              Puerta del Sur, then line 12 (MetroSur) to El Carrascal.
            </p>
            <p>
              Before you set off, check for service changes with Metro de Madrid,
              Renfe Cercanías or the regional transport authority (CRTM).
            </p>
          </Section>
        </>
      ) : (
        <Section title="Oktoberfest Madrid 2026">
          <p>
            Oktoberfest Madrid 2026 ran from 22 October to 15 November at Westfield
            Parquesur (Leganés). O&apos;Connell St is here in the centre all year.
          </p>
        </Section>
      )}
      <Section title="Back in the centre">
        <p>
          {live ? "When you get back to Sol, we're still open: " : "Opening hours: "}
          Thursday 18:00–03:00, Friday and Saturday 16:00–03:30, Sunday
          14:00–03:00. A beer at the bar and an international crowd: visitors,
          Erasmus students and people from Madrid, in English, Spanish and plenty of
          other languages.
        </p>
      </Section>
      <Section title={live ? "Football on the screens, Thursday to Sunday" : "Football on the screens"}>
        <p>
          Premier League, LaLiga and Champions League on the screens
          {live
            ? ", plus the NFL Madrid Game on Sunday 8 November and Spain v England on Sunday 15 November, the last day of Oktoberfest. "
            : ". "}
          Kick-off times, in Madrid time, are on{" "}
          <Link href={whatsOn} className={linkCls}>What&apos;s On</Link>.
        </p>
      </Section>
      <Section title="Find us">
        <p>
          Calle de Espoz y Mina 7, just off Puerta del Sol. From Sol station (Metro
          and Cercanías), come up onto the square and head for Calle de Espoz y Mina.
        </p>
        <p>
          {directions("Open directions")}
          {" · "}
          <Link href={locationHref} className={linkCls}>Location</Link>
          {" · "}
          <Link href={OKT_PATHS.de} className={linkCls} hrefLang="de">Auf Deutsch</Link>
        </p>
      </Section>
    </PageShell>
  );
}
