import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureList } from "@/components/FixtureList";
import { HalloweenTeaser } from "@/components/HalloweenSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd, RECURRING } from "@/lib/fixtures";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Agenda — Deportes en directo | O'Connell St Madrid",
  description:
    "Agenda de O'Connell St Madrid: deportes en directo confirmados con hora de Madrid. Fútbol primero, y baloncesto, rugby, Fórmula 1, tenis y más cuando aparecen como Confirmado.",
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
          <Link href="/news/bayern-fans-madrid-group" className="text-gold underline">
            en inglés
          </Link>
          {" · "}
          <a href="/de/bayern-fans-gruppe-madrid" hrefLang="de" lang="de" className="text-gold underline">
            en alemán
          </a>
        </p>
      ) : null}
      {/* Concerts (DG 25 Oct; times per movistararena.es): build-time date gates, each line gone from the daily rebuild after its date. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-06" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Duran Duran en el Movistar Arena, viernes 6 de noviembre, 21:00: queda en O&apos;Connell St, cerca de Sol, antes o después del concierto.
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-10" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Bryan Adams «Roll with the Punches» en el Movistar Arena, martes 10 de noviembre, 20:30: queda en O&apos;Connell St, cerca de Sol, antes o después del concierto.
        </p>
      ) : null}
      {/* Real Madrid Femenino UWCL (DG 26 Oct; times per match.uefa.com + realmadrid.com): build-time date gates, each line gone from the daily rebuild after its date. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-10" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Champions femenina: Real Madrid–Paris FC, martes 10 de noviembre, 18:45 (Di Stéfano), en directo cerca de Sol.
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-18" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Champions femenina: Real Madrid–Inter, miércoles 18 de noviembre, 18:45 (Di Stéfano), en directo cerca de Sol.
        </p>
      ) : null}
      {/* España–Inglaterra, Liga de Naciones (DG 26 Oct vía Radar; hora según match.uefa.com id 2047904, 19:45Z = 20:45 CET; fecha según rfef.es): build-time date gate, gone from the 16 Nov daily rebuild. Canal por confirmar hasta que RTVE lo publique. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Liga de Naciones: España–Inglaterra, domingo 15 de noviembre, 20:45 (Riyadh Air Metropolitano), en directo cerca de Sol. Canal: por confirmar.
        </p>
      ) : null}
      <HalloweenTeaser locale="es" today={madridTodayYmd(agendaBuildNow())} />
      <FixtureList locale="es" />

      <Section title="Deportes en directo en O'Connell St">
        <p>
          O&apos;Connell St es un pub irlandés junto a Puerta del Sol — Espoz y
          Mina 7. Retransmitimos grandes eventos deportivos en nuestras
          pantallas cuando están confirmados: fútbol, NBA, rugby, Fórmula 1,
          tenis y más. Consulta Hoy y los próximos 7 días, o pregunta en
          la barra si buscas un evento concreto.
        </p>
        <p>
          <Link href="/es/nfl-madrid" className="text-gold underline">
            NFL en Madrid
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
