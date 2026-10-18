import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Bar para ver la NFL en Madrid cerca de Sol",
  description:
    "Dónde ver la NFL en Madrid: pub irlandés deportivo junto a Sol para fans de la NFL, antes y después del partido. Partidos confirmados en la Agenda.",
  path: "/es/nfl-madrid",
  locale: "es",
});

const faq = [
  {
    q: "¿Dónde ver la NFL en Madrid?",
    a: "O'Connell St es un pub deportivo en el centro de Madrid, junto a Sol. Ponemos la NFL en las teles cuando la estamos emitiendo, y cada partido confirmado aparece en la Agenda con la hora de Madrid.",
  },
  {
    q: "¿Ponéis todos los partidos de la NFL?",
    a: "No. Algunos empiezan después del cierre en horario de Madrid, y solo anunciamos un partido cuando la emisión está confirmada. Si buscas uno en concreto, mira la Agenda o pregunta en la barra.",
  },
  {
    q: "¿Estáis cerca del Bernabéu?",
    a: "Estamos en el centro, junto a Sol, no al lado del estadio. En metro desde Sol es fácil pasar por aquí en un día por el centro.",
  },
  {
    q: "¿Hay que reservar?",
    a: "No. No hay reservas de mesa: entra cuando quieras, por orden de llegada.",
  },
];

export default function NflMadridPageEs() {
  return (
    <PageShell locale="es" altLangHref="/nfl-madrid">
      <PageHero
        eyebrow="NFL · Centro de Madrid"
        title={`Ver la NFL en Madrid en ${SITE_NAME}`}
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
          St está en {ADDRESS.street}, junto a Sol. El fútbol es lo de cada día, y
          la NFL, la NBA, el rugby y la Fórmula 1 se ponen cuando los emitimos.
        </p>
        <p>
          Si eres fan de la NFL en Madrid, pásate antes del partido, después o
          cuando otros sitios estén llenos. En un fin de semana NFL en Madrid,
          estamos en pleno centro.
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
      <Section title="Antes del partido: punto de encuentro de aficionados en Sol">
        <p>
          El domingo 8 de noviembre, O&apos;Connell es punto de encuentro de
          aficionados en Sol para el partido de la NFL en Madrid. Abrimos a las
          14:00: queda con otros fans de la NFL junto a Puerta del Sol antes
          del inicio a las 15:30, seas del equipo que seas. Sin reserva, por
          orden de llegada.
        </p>
      </Section>
      <Section title="Bengals vs Falcons EN DIRECTO junto a Sol">
        <p>
          Emitimos en directo el partido de la NFL en Madrid 2026: Falcons–Bengals,
          domingo 8 de noviembre, a las 15:30. Los domingos abrimos a las 14:00.
          Sin reserva, por orden de llegada. También está en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">Agenda</Link>.
        </p>
      </Section>
      <Section title="Después del partido: NFL RedZone EN DIRECTO y todos los partidos NFL del día">
        <p>
          ¿Vuelves al centro después del partido en el Bernabéu? Estamos en la
          calle Espoz y Mina, junto a Sol. Ven a comentarlo con otros fans de la
          NFL, seas del equipo que seas.
        </p>
        <h3 className="font-semibold">Todos los partidos NFL del domingo EN DIRECTO junto a Sol</h3>
        <p>Después del partido, ponemos el resto de partidos del domingo de la Week 9, en hora de Madrid:</p>
        <ul>
          <li>19:00 · Broncos v Panthers, Cowboys v Colts, Jets v Chiefs, Lions v Dolphins, Browns v Saints, Giants v Eagles, Rams v Commanders</li>
          <li>22:05 · Texans v Chargers, Raiders v 49ers</li>
          <li>22:25 · Packers v Patriots, Cardinals v Seahawks</li>
        </ul>
        <p>
          <strong>NFL RedZone EN DIRECTO</strong> desde las 19:00 del domingo 8
          de noviembre, con los partidos de las 19:00 y de las 22:05/22:25.
        </p>
        <p>
          El partido del domingo por la noche (Buccaneers–Bears, 02:20 hora de
          Madrid) empieza demasiado cerca de nuestro cierre a las 03:00, así
          que no lo ponemos.
        </p>
      </Section>
      <Section title="El partido NFL de Madrid 2026">
        <p>
          Atlanta Falcons–Cincinnati Bengals, domingo 8 de noviembre de 2026, a las
          15:30 hora de Madrid en el Bernabéu. Entradas, normas del estadio y
          detalles del partido en la{" "}
          <a href="https://www.nfl.com/international/games/madrid/" target="_blank" rel="noopener noreferrer" className="text-cream underline">
            página de la NFL sobre el partido de Madrid
          </a>{" "}
          y sus{" "}
          <a href="https://www.nfl.com/international/games/madrid/faqs" target="_blank" rel="noopener noreferrer" className="text-cream underline">
            preguntas frecuentes
          </a>
          .
        </p>
        <p>
          Para volver al centro: el estadio tiene su propia parada de metro, Santiago
          Bernabéu. Consulta la ruta hasta Sol en el planificador de{" "}
          <a href="https://www.metromadrid.es/es" target="_blank" rel="noopener noreferrer" className="text-cream underline">Metro de Madrid</a>.
          Justo después del partido, los trenes irán llenos.
        </p>
      </Section>
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
