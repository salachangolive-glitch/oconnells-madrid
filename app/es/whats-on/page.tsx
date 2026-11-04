import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureList } from "@/components/FixtureList";
import { NflSunday8Nov } from "@/components/NflSunday8Nov";
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
      {/* Serbia–Alemania, Liga de Naciones (DG 2 nov vía Radar; match.uefa.com id 2047887, 19:45Z = 20:45 CET, Belgrado): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-13" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Liga de Naciones: Serbia–Alemania, viernes 13 de noviembre, 20:45 (hora de Madrid; en Belgrado), en directo cerca de Sol.{" "}
          <span lang="de">Serbien – Deutschland, Freitag, 13. November, 20:45 Uhr: live im O&apos;Connell St an der Puerta del Sol.</span>
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
          Champions femenina: Real Madrid–Inter, miércoles 18 de noviembre, 18:45 (Di Stéfano), en directo cerca de Sol. Canal por confirmar.{" "}
          <Link href="/es/noticias/real-madrid-inter-champions-femenina-sol" className="text-gold underline">
            Real Madrid–Inter en Sol
          </Link>
        </p>
      ) : null}
      {/* Getafe–Brighton + Real Madrid–Crvena Zvezda, artículos para la afición visitante (orden del dueño 4 nov 2026 vía DG; uefa.com / euroleague.net): build-time date gates. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-05" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Conference League: Getafe–Brighton, jueves 5 de noviembre, 21:00 (Coliseum, Getafe), en directo en pantalla grande cerca de Sol. Abrimos a las 18:00.{" "}
          <Link href="/es/noticias/getafe-brighton-jueves-sol" className="text-gold underline">
            Getafe–Brighton en Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-12" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Euroliga: Real Madrid–Crvena Zvezda, jueves 12 de noviembre, 21:00 (Movistar Arena), en directo cerca de Sol.{" "}
          <Link href="/es/noticias/real-madrid-crvena-zvezda-jueves-sol" className="text-gold underline">
            Real Madrid–Crvena Zvezda en Sol
          </Link>
        </p>
      ) : null}
      {/* España–Inglaterra, Liga de Naciones (DG 26 Oct vía Radar; hora según match.uefa.com id 2047904, 19:45Z = 20:45 CET; fecha según rfef.es): build-time date gate, gone from the 16 Nov daily rebuild. Canal por confirmar hasta que RTVE lo publique. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Liga de Naciones: España–Inglaterra, domingo 15 de noviembre, 20:45 (Riyadh Air Metropolitano), en directo en pantalla grande cerca de Sol, abierto hasta las 03:00. Canal: La 1 / RTVE Play.{" "}
          <Link href="/es/noticias/espana-inglaterra-domingo-sol" className="text-gold underline">
            España–Inglaterra: domingo de fútbol en Sol
          </Link>
        </p>
      ) : null}
      <NflSunday8Nov locale="es" today={madridTodayYmd(agendaBuildNow())} context="whats-on" />
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
