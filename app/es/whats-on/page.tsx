import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd, RECURRING } from "@/lib/fixtures";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Agenda — Deportes en directo | O'Connell St Madrid",
  description:
    "Agenda de O'Connell St Madrid: deportes en directo confirmados con hora de Madrid. Fútbol, NFL, NBA, rugby, Fórmula 1, tenis y más cuando aparecen como Confirmado.",
  path: "/es/whats-on",
  locale: "es",
});

export default function EsWhatsOnPage() {
  return (
    <PageShell locale="es" altLangHref="/whats-on">
      <PageHero
        eyebrow="Agenda"
        title={`Próximos 7 días en ${SITE_NAME}`}
        lead="Todos los horarios están indicados en hora de Madrid. Los eventos marcados como ‘Confirmado’ tienen prevista su emisión en nuestras pantallas."
      />

      <PostMatchBanner locale="es" />
      {/* Oktoberfest Madrid link: build-time date gate, gone from the 16 Nov daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Temporada de Oktoberfest Madrid (22 oct – 15 nov, de jueves a domingo):{" "}
          <Link href="/es/oktoberfest-madrid-sol" className="text-gold underline">
            cómo llegar desde Sol y una cerveza en el centro
          </Link>
        </p>
      ) : null}
      {/* Bayern fans articles (Atlético–Bayern 3 Nov): build-time date gate, gone from the 4 Nov daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-03" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Atlético–Bayern, martes 3 de noviembre, 21:00 (artículos para la afición del Bayern):{" "}
          <Link href="/news/bayern-fans-madrid-pre-match-meeting-point" className="text-gold underline">
            en inglés
          </Link>
          {" · "}
          <a href="/de/bayern-fans-madrid-treffpunkt" hrefLang="de" lang="de" className="text-gold underline">
            en alemán
          </a>
        </p>
      ) : null}
      <FixtureList locale="es" />

      <Section title="Deportes en directo en O'Connell St">
        <p>
          O&apos;Connell St es un pub irlandés junto a Puerta del Sol — Espoz y
          Mina 7. Retransmitimos grandes eventos deportivos en nuestras
          pantallas cuando están confirmados: fútbol, NFL, NBA, rugby, Fórmula 1,
          tenis y más. Consulta Hoy y los próximos 7 días, o pregunta en
          la barra si buscas un evento concreto.
        </p>
        <p>
          <Link href="/es/nfl-madrid" className="text-gold underline">
            NFL en la Puerta del Sol — domingo 8 nov, todos los partidos en directo
          </Link>
        </p>
      </Section>


      <Section title="Chupitos a 1 € los jueves">
        <p>
          {RECURRING.thursdayShots.es}{" "}
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-gold underline"
          >
            Chupitos a 1 € los jueves
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
