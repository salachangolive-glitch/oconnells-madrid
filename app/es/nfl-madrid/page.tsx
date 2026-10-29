import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
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
            No hay parking en el estadio: mejor transporte público o taxi. La
            estación de metro accesible es Nuevos Ministerios (líneas 6, 8 y
            10), a unos 15 minutos andando de la entrada accesible.
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
          ¿Sin entrada? El partido está en nuestras pantallas en O&apos;Connell
          St, junto a Sol, desde las 15:30. El resto de partidos del domingo, en
          la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          .
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
