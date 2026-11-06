import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Fin de semana NFL Madrid · punto de encuentro junto a Sol",
  description:
    "O'Connell St, Calle de Espoz y Mina 7, junto a Puerta del Sol: pub irlandés, deporte en directo y punto de encuentro internacional para aficionados NFL en Madrid. Domingo 8 nov abrimos desde las 12:00.",
  path: "/es/nfl-madrid",
  locale: "es",
});

const faq = [
  {
    q: "¿Ponéis fútbol americano?",
    a: "Sí, las noches que lo emitimos. En O'Connell St el fútbol europeo va primero, y cada partido confirmado aparece en la Agenda con la hora de Madrid.",
  },
  {
    q: "¿Ponéis todos los partidos?",
    a: "No. Algunos empiezan después del cierre en horario de Madrid, y solo anunciamos un partido cuando la emisión está confirmada. Las pantallas se reparte entre la tarde y la noche: mira la Agenda o pregunta en la barra si buscas uno concreto.",
  },
  {
    q: "¿Estáis cerca del Bernabéu?",
    a: "Estamos en el centro, junto a Sol, no al lado del estadio. En metro desde Sol es fácil pasar por aquí antes o después de un día por el centro.",
  },
  {
    q: "¿A qué hora abrís el domingo 8 de noviembre?",
    a: "Excepción solo del domingo 8 nov: abrimos desde las 12:00. Los domingos habituales abrimos a las 14:00.",
  },
];

const SIBLINGS = [
  {
    name: "O'Connell St",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: MAPS_URL,
    web: "https://oconnellsmadrid.es/",
    note: "Este pub — irlandés, deporte en directo, punto de encuentro internacional.",
  },
  {
    name: "Dubliners",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=Dubliners+Calle+de+Espoz+y+Mina+7+28012+Madrid",
    web: "https://dublinersmadrid.es/",
    note: "Pub irlandés en la misma calle / edificio que O'Connell St.",
  },
  {
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu, 4, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=O%27Reilly%27s+Restaurant+Bar+Pasaje+de+Matheu+4+28012+Madrid",
    web: "https://oreillys-restaurant-bar.localo.site/",
    note: "Restaurante-bar a un paso de Sol.",
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria, 6, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=Calle+de+la+Victoria+6+28012+Madrid",
    web: null as string | null,
    note: "Local hermano cerca de Sol para este fin de semana (nombre comercial). Consulta el horario del día.",
  },
] as const;

export default function NflMadridPageEs() {
  const showWeekend = madridTodayYmd(agendaBuildNow()) <= "2026-11-08";
  return (
    <PageShell locale="es" altLangHref="/nfl-madrid">
      <PageHero
        eyebrow="Pub irlandés · Deporte en directo · Junto a Sol"
        title={`Fin de semana NFL Madrid en ${SITE_NAME}`}
        lead="Un pub irlandés junto a la Puerta del Sol — deporte en directo en pantallas grandes y punto de encuentro internacional para aficionados en el centro de Madrid."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Televisiones en la zona deportiva de O'Connell St cerca de Sol"
        position="object-[center_35%]"
      />
      <Section title="Tu punto de encuentro NFL junto a Puerta del Sol">
        <p>
          O&apos;Connell St está en {ADDRESS.street}, a un paso de la Puerta del
          Sol. Somos un pub irlandés con deporte en directo y ambiente
          internacional — un sitio para quedar con otros aficionados antes del
          partido, después y durante toda la jornada del domingo.
        </p>
        <p>
          El fútbol europeo es lo de cada día; el fútbol americano, el
          baloncesto, el rugby y la Fórmula 1 se ponen cuando los emitimos. Los
          partidos confirmados de los próximos 7 días, en hora de Madrid, están
          en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          .
        </p>
        {showWeekend ? (
          <p className="font-semibold text-gold">
            Excepción domingo 8 nov: abrimos desde las 12:00 (los domingos
            habituales, desde las 14:00).
          </p>
        ) : null}
      </Section>
      {showWeekend ? (
        <Section title="Este fin de semana · 7 y 8 de noviembre">
          <h3 className="font-serif text-lg font-semibold text-cream">
            Sábado 7 de noviembre
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              NFL Experience Madrid — Plaza de España, 10:00–19:00 (evento de
              aficionados de la NFL, no en nuestro pub).
            </li>
            <li>
              NFL House Madrid — Palacio de las Alhajas, Calle San Martín 1,
              12:00–20:00 (a pocos minutos de Sol; evento de la NFL, no nuestro).
              Pásate a tomar algo después de tu visita.
            </li>
            <li>
              Valencia–Real Madrid a las 21:00 — en directo junto a Sol cuando
              lo estemos emitiendo. Mira la{" "}
              <Link href="/es/whats-on" className="text-cream underline">
                Agenda
              </Link>
              .
            </li>
          </ul>
          <p className="mt-2 text-sm text-cream-muted">
            El sábado abrimos a las 15:00. Ven con tiempo si quieres un buen
            sitio cerca de la pantalla.
          </p>
          <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
            Domingo 8 de noviembre — desde las 12:00
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Abrimos desde las <strong className="text-gold">12:00</strong>{" "}
              (excepción de un solo día; el domingo habitual es a las 14:00).
            </li>
            <li>
              Bengals–Falcons a las 15:30 — partido NFL en el Bernabéu; en
              pantalla grande en O&apos;Connell St si no estás en el estadio.
            </li>
            <li>
              Desde las 19:00 — más ventanas NFL (y RedZone) en nuestras
              pantallas; horarios en la Agenda. Kickoffs más tarde hacia las
              22:05 / 22:25 según lo listado.
            </li>
            <li>
              Atlético de Madrid–Barcelona a las 21:00 — en directo junto a Sol
              cuando lo estemos emitiendo.
            </li>
          </ul>
          <p className="mt-2 text-sm text-cream-muted">
            No prometemos todos los partidos en todas las pantallas. Pregunta en
            la barra qué hay puesto.
          </p>
        </Section>
      ) : null}
      <Section title="Si vas al Bernabéu el domingo 8 de noviembre">
        <p>
          El Bengals–Falcons empieza a las 15:30, hora de Madrid, en el
          Bernabéu. Estos son los datos de llegada que da el Real Madrid en{" "}
          <a
            href="https://bernabeu.realmadrid.com/nfl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            la página NFL del estadio
          </a>
          :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>El perímetro del estadio abre a las 12:30.</li>
          <li>
            No hay parking en el estadio: conviene ir en transporte público o
            taxi. En metro, Concha Espina (L9) o Cuzco (L10).
          </li>
          <li>
            Rige la política de bolsas transparentes de la NFL y se recomienda
            no llevar ninguna bolsa. Si hace falta: bolsa transparente de hasta
            30,5 × 15,25 × 30,5 cm o bolso de mano de hasta 11,5 × 16,5 cm. Se
            puede llevar una botella reutilizable, vacía y transparente, de
            hasta 1 litro.
          </li>
        </ul>
        <p>
          ¿Sin entrada? Míralo en pantalla grande, con todo el ambiente, en
          O&apos;Connell St, junto a Sol, desde las 15:30. A partir de las
          19:00, el pub es para cuando volváis del estadio. El resto de partidos
          del domingo, en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
      {/* Esta semana en Madrid (DG 2 nov): actos de terceros, NO en O'Connell St. Fuera desde rebuild 9 nov. */}
      {showWeekend ? (
        <div id="esta-semana">
          <Section title="Esta semana en Madrid">
            <p>
              Actividades para aficionados en Madrid esta semana, publicadas en
              NFL.com (
              <a
                href="https://www.nfl.com/news/madrid-la-nfl-ya-esta-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline"
              >
                NFL House
              </a>
              ,{" "}
              <a
                href="https://www.nfl.com/news/fan-events-in-madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline"
              >
                actividades de los Falcons
              </a>
              ). Las organizan la NFL y los Falcons en otros locales, no en
              O&apos;Connell St:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li data-oc-sat="">
                O&apos;Connell St está a pocos minutos a pie de la NFL House en
                la Casa de las Alhajas (Plaza de San Martín), un evento de la
                NFL, no nuestro. Pásate a tomar algo después de tu visita.
              </li>
              <li>
                Falcons House: sábado 7 de noviembre, de 13:00 a 17:00, en el
                Irish Rover Madrid, Av. de Brasil 7 (Tetuán).
              </li>
              <li>
                Paseo «Dirty Birds» hasta el Bernabéu: domingo 8 de noviembre,
                de 13:00 a 13:15, con salida desde Mira Miranda Madrid, Paseo de
                la Castellana 89.
              </li>
            </ul>
            <p className="text-sm text-cream-muted">
              Datos publicados en NFL.com, consultados el 2 y el 3 de noviembre
              de 2026. Compruébalos allí por si cambian.
            </p>
          </Section>
        </div>
      ) : null}
      {/* Cuatro bares cerca de Sol — URL del hub pendiente de publicar (DG). */}
      <div id="cuatro-bares">
        <Section title="Cuatro bares cerca de Sol">
          <p>
            Cuatro locales hermanos a pocos minutos de la Puerta del Sol —
            distintas salas para el mismo fin de semana de aficionados. Elige el
            que te encaje (o pásate de uno a otro):
          </p>
          <ul className="mt-3 space-y-3">
            {SIBLINGS.map((s) => (
              <li key={s.name} className="border-l border-gold/40 pl-3">
                <p className="font-semibold text-cream">{s.name}</p>
                <p className="text-sm text-cream-muted">{s.address}</p>
                <p className="text-sm text-cream-muted">{s.note}</p>
                <p className="text-sm">
                  <a
                    href={s.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream underline"
                  >
                    Maps
                  </a>
                  {s.web ? (
                    <>
                      {" · "}
                      <a
                        href={s.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream underline"
                      >
                        Web
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-cream-muted">
            Cuando se publique la página central del fin de semana de
            aficionados, la enlazaremos aquí. Hasta entonces, usa las
            direcciones y los mapas de arriba.
          </p>
        </Section>
      </div>
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}.
          {showWeekend
            ? " Excepción domingo 8 nov: abrimos desde las 12:00."
            : null}
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Cómo llegar desde la Puerta del Sol
          </a>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
        </p>
      </Section>
      <Section title="Preguntas frecuentes">
        {faq.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold">{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>
    </PageShell>
  );
}
