import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Pub cerca de la Puerta del Sol — Calle de Espoz y Mina 7",
  description:
    "Encuentra O'Connell St en Calle de Espoz y Mina 7, 28012 Madrid, cerca de Puerta del Sol. Cómo llegar en Google Maps.",
  path: "/es/location",
  locale: "es",
});

export default function EsLocationPage() {
  return (
    <PageShell locale="es" altLangHref="/location">
      <PageHero
        eyebrow="Ubicación · Madrid"
        title={`Pub cerca de la Puerta del Sol — cómo llegar a ${SITE_NAME}`}
        lead={`${ADDRESS.full} — a poca distancia de Puerta del Sol.`}
      />
      <VenueHero
        variant="secondary"
        alt="O'Connell St en Calle de Espoz y Mina, cerca de Sol"
        className="mb-10"
      />
      <Section title="Dirección y horarios">
        <p>{ADDRESS.full}</p>
        <p>
          <a
            href={PUBLIC_EMAIL_MAILTO}
            data-event="email_click"
            className="text-cream underline"
          >
            {PUBLIC_EMAIL}
          </a>
          {" · "}
          <a href="/es/contact" className="text-cream underline">
            Contacto
          </a>
        </p>
        <ul className="list-none space-y-1">
          {HOURS.linesEs.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="inline-flex rounded-md bg-pub-green px-4 py-2 font-semibold text-cream hover:bg-pub-green-light"
          >
            Abrir en Google Maps
          </a>
        </p>
      </Section>
      <InteriorPhoto
        src="/images/interior/stairs-levels.webp"
        alt="Escaleras entre plantas del pub irlandés O'Connell St cerca de Sol"
        position="object-[center_40%]"
      />
      <Section title="Cómo llegar desde la Puerta del Sol">
        <p>
          La estación más cercana es Sol (Metro y Cercanías), que sale
          directamente a la Puerta del Sol. Desde la plaza, busca la Calle de
          Espoz y Mina y el número 7: fachada roja con el rótulo dorado
          O&apos;CONNELL ST. sobre la puerta.
        </p>
        <p>
          ¿No sabes bien por dónde ir? El botón de Google Maps de arriba abre
          directamente nuestra ficha, así puedes seguir la ruta desde cualquier
          punto del centro.
        </p>
        <p>
          Dirígete a Puerta del Sol y camina hasta Calle de Espoz y Mina. Ideal
          antes de un partido de Premier League, Champions League o LaLiga — o
          para los jueves de chupitos a 1 € con amigos.
        </p>
        <p>
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          {" · "}
          <Link href="/es/sports-bar-sol" className="text-cream underline">
            Bar deportivo en Sol
          </Link>
          {" · "}
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Jueves 1 €
          </Link>
        </p>
      </Section>
      <Section title="Horario">
        <p>
          Abrimos todos los días: de lunes a jueves desde las {HOURS.monThu.open},
          viernes desde las {HOURS.fri.open}, sábado desde las {HOURS.sat.open} y domingo desde las{" "}
          {HOURS.sun.open}. Cerramos a las {HOURS.monThu.close} de domingo a
          jueves y a las {HOURS.fri.close} las noches de viernes y sábado.
        </p>
      </Section>
    </PageShell>
  );
}
