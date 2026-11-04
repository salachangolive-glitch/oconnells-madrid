import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches de fútbol americano en un pub deportivo junto a Sol",
  description:
    "O'Connell St, junto a la Puerta del Sol: fútbol europeo y, las noches que lo emitimos, fútbol americano en las pantallas. Partidos confirmados en la Agenda.",
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
    a: "No. Algunos empiezan después del cierre en horario de Madrid, y solo anunciamos un partido cuando la emisión está confirmada. Si buscas uno en concreto, mira la Agenda o pregunta en la barra.",
  },
  {
    q: "¿Estáis cerca del Bernabéu?",
    a: "Estamos en el centro, junto a Sol, no al lado del estadio. En metro desde Sol es fácil pasar por aquí en un día por el centro.",
  },
];

export default function NflMadridPageEs() {
  return (
    <PageShell locale="es" altLangHref="/nfl-madrid">
      <PageHero
        eyebrow="Pub deportivo · Centro de Madrid"
        title={`Noches de fútbol americano en ${SITE_NAME}`}
        lead="Un pub irlandés deportivo junto a Sol, con fútbol americano en las teles cuando lo estamos emitiendo."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Televisiones en la zona deportiva de O'Connell St cerca de Sol"
        position="object-[center_35%]"
      />
      <Section title="Un pub deportivo en el centro de Madrid">
        <p>
          Si buscas un bar deportivo en Madrid para ver un partido, O&apos;Connell
          St está en {ADDRESS.street}, junto a Sol. El fútbol europeo es lo de
          cada día, y el fútbol americano, el baloncesto, el rugby y la Fórmula 1
          se ponen cuando los emitimos.
        </p>
        <p>
          Es un sitio fácil para quedar con tu grupo de amigos en el centro:
          antes de un partido, después o para salir de noche por Sol.
        </p>
        <p>
          Los partidos confirmados de los próximos 7 días, en hora de Madrid,
          están en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . Más sobre los{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes que ponemos
          </Link>{" "}
          y el{" "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            fútbol en Madrid
          </Link>
          .
        </p>
      </Section>
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
        <ul className="list-disc pl-5 space-y-1">
          <li>El perímetro del estadio abre a las 12:30.</li>
          <li>
            No hay parking en el estadio: conviene ir en transporte público o taxi. En
            metro, Concha Espina (L9) o Cuzco (L10).
          </li>
          <li>
            Rige la política de bolsas transparentes de la NFL y se recomienda no
            llevar ninguna bolsa. Si hace falta: bolsa transparente de hasta 30,5
            × 15,25 × 30,5 cm o bolso de mano de hasta 11,5 × 16,5 cm. Se puede
            llevar una botella reutilizable, vacía y transparente, de hasta 1
            litro.
          </li>
        </ul>
        <p>
          ¿Sin entrada? Míralo en pantalla grande, con todo el ambiente, en
          O&apos;Connell St, junto a Sol, desde las 15:30. A partir de las 19:00, el pub es para cuando volváis del estadio. El resto de partidos del domingo, en
          la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
      {/* Esta semana en Madrid (DG 2 nov, tarea 5; nfl.com/news/fan-events-in-madrid + Radar 2026-11-02-nfl.md): actos de terceros, NO en O'Connell St. Gate de build, fuera desde el rebuild del 9 nov. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-08" ? (
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
            <ul className="list-disc pl-5 space-y-1">
              <li data-oc-sat="">
                O&apos;Connell St está a pocos minutos a pie de la NFL House en la Casa de las Alhajas (Plaza de San Martín), un evento de la NFL, no nuestro. Pásate a tomar algo después de tu visita.
              </li>
              <li>
                Falcons House: sábado 7 de noviembre, de 13:00 a 17:00, en el
                Irish Rover Madrid, Av. de Brasil 7 (Tetuán).
              </li>
              <li>
                Paseo «Dirty Birds» hasta el Bernabéu: domingo 8 de noviembre, de
                13:00 a 13:15, con salida desde Mira Miranda Madrid, Paseo de la
                Castellana 89.
              </li>
            </ul>
            <p className="text-sm text-cream-muted">
              Datos publicados en NFL.com, consultados el 2 y el 3 de noviembre de 2026.
              Compruébalos allí por si cambian.
            </p>
            <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
              ¿Sin entrada? Mira el partido cerca de Sol
            </h3>
            <p>
              El Bengals–Falcons empieza a las 15:30, hora de Madrid. En
              O&apos;Connell St, {ADDRESS.street}, junto a la Puerta del Sol, lo
              ponemos en directo en pantalla grande desde las 15:30, con todo el
              ambiente. Los domingos abrimos a las
              14:00.
            </p>
            <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
              Después del partido
            </h3>
            <p>
              A partir de las 19:00, el pub es para cuando volváis del estadio. El resto de partidos NFL del domingo, en las pantallas.
            </p>
          </Section>
        </div>
      ) : null}
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}.
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
