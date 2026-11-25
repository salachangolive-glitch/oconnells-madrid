import Link from "next/link";
import { WhatsOnEventsJsonLd } from "@/components/WhatsOnEventsJsonLd";
import { DirectionsButton, HowToGetHere } from "@/components/HowToGetHere";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { RugbyHomeBanner } from "@/components/RugbyHomeBanner";
import { NflSunday15NovWhatsOn } from "@/components/NflSunday15NovWhatsOn";
import { FixtureList } from "@/components/FixtureList";
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
        lead="Deporte en directo en nuestro pub irlandés cerca de Puerta del Sol. Todos los horarios están indicados en hora de Madrid. Los eventos marcados como ‘Confirmado’ tienen prevista su emisión en nuestras pantallas."
      />
      <p className="mb-8">
        <DirectionsButton locale="es" />
      </p>

      <PostMatchBanner locale="es" />
      {/* Nations Championship sáb 21 nov: bloque destacado, se oculta solo después del 21 nov (Madrid). */}
      <RugbyHomeBanner locale="es" />
      {/* España–Chile rugby (ferugby.es 31 ago 2026: sáb 14 nov 17:00 h, Butarque). */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-14" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          World Rugby Nations Cup: España–Chile, sábado 14 de noviembre, 17:00 (Estadio Ontime Butarque, Leganés), en directo cerca de Sol. Aficionados chilenos: punto de encuentro junto a Sol.
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-14" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Nations Championship de rugby: Irlanda–Fiyi, sábado 14 de noviembre, 21:10 hora de Madrid (Aviva Stadium, Dublín), en directo cerca de Sol.
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-10" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Bryan Adams «Roll with the Punches» en el Movistar Arena, martes 10 de noviembre, 20:30: queda en O&apos;Connell St, cerca de Sol, antes o después del concierto.
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
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-13" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Euroliga: Panathinaikos–FC Barcelona, viernes 13 de noviembre, 20:15, en directo cerca de Sol.
        </p>
      ) : null}
      {/* Serbia–Alemania, Liga de Naciones (match.uefa.com id 2047887, 19:45Z = 20:45 CET; DFB 20:45 +0100; orden dueño 12 nov 14:58): puerta por fecha de build. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-13" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Liga de Naciones: Serbia–Alemania, viernes 13 de noviembre, 20:45 (Belgrado), en directo cerca de Sol. Aficionados alemanes y serbios en Madrid, junto a Sol.
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <NflSunday15NovWhatsOn locale="es" />
      ) : null}
      {/* España–Inglaterra, Liga de Naciones; Radar file verificado UEFA; en La 1. Domingo 14:00–03:00. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Liga de Naciones: España–Inglaterra, domingo 15 de noviembre, 20:45 (Riyadh Air Metropolitano), en La 1, en directo en pantalla grande cerca de Sol. Los domingos desde las 14:00, abierto hasta las 03:00. Aficionados ingleses: punto de encuentro junto a Sol. Sin reservas: por orden de llegada.{" "}
          <Link href="/es/noticias/espana-inglaterra-domingo-sol" className="text-gold underline">
            España–Inglaterra: domingo de fútbol en Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-22" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Premier League: Liverpool–Manchester United, domingo 22 de noviembre, 17:30 (Anfield), en DAZN, en directo junto a Sol. Los domingos abrimos a las 14:00.{" "}
          <Link href="/es/noticias/liverpool-manchester-united-domingo-sol" className="text-gold underline">
            Liverpool–Man United: domingo de Premier junto a Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-24" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          <strong className="text-cream">Real Madrid–PSV, martes 24 de noviembre, 21:00</strong> (Bernabéu). Punto de encuentro en O&apos;Connell St, Espoz y Mina 7 — a menos de un minuto de Sol. Entrada por orden de llegada.{" "}
          <Link href="/es/noticias/real-madrid-psv-martes-sol" className="text-gold underline">
            Guía Real Madrid–PSV
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-23" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Tokio Hotel en el Palacio Vistalegre, lunes 23 de noviembre, su única fecha en España: queda en O&apos;Connell St, cerca de Sol, antes o después del concierto.{" "}
          <Link href="/news/tokio-hotel-madrid-gig-night-sol" className="text-gold underline">
            Noche de concierto Tokio Hotel junto a Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-12-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Euroliga: Real Madrid–Bayern Múnich, martes 15 de diciembre, 20:45 (Movistar Arena). Afición alemana / del Bayern: punto de encuentro a menos de un minuto de Sol. Emisión por confirmar.{" "}
          <Link href="/de/real-madrid-bayern-basketball-treffpunkt-sol" hrefLang="de" className="text-gold underline">
            Treffpunkt para aficionados del Bayern (alemán)
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-25" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          <strong className="text-cream">Atlético de Madrid–Viking FK, miércoles 25 de noviembre, 21:00</strong> (Riyadh Air Metropolitano). Champions esta noche — punto de encuentro en O&apos;Connell St, Espoz y Mina 7, a menos de un minuto de Sol. Entrada por orden de llegada. No los Minnesota Vikings de la NFL.{" "}
          <Link href="/es/noticias/atletico-viking-miercoles-sol" className="text-gold underline">
            Guía Atlético–Viking FK
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-25" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Euroliga: Real Madrid–Žalgiris, miércoles 25 de noviembre, 20:45 (Movistar Arena). Afición Žalgiris: punto de encuentro junto a Sol antes o después.{" "}
          <Link href="/news/real-madrid-zalgiris-wednesday-night-sol" className="text-gold underline">
            Real Madrid–Žalgiris: miércoles por la noche junto a Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-29" &&
      madridTodayYmd(agendaBuildNow()) >= "2026-11-22" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Finales del Nations Championship en Twickenham, del viernes 27 al domingo 29 de noviembre (hora de Madrid): seis partidos en directo en nuestras pantallas en O&apos;Connell St junto a Sol — punto de encuentro antes y después — Italia–Fiyi 17:40 vie, Irlanda–Australia 21:10 vie, Gales–Japón 14:10 sáb, Inglaterra–Nueva Zelanda 17:40 sáb, Escocia–Argentina 14:10 dom, final Francia–Sudáfrica 17:40 dom.{" "}
          <Link
            href="/es/noticias/nations-championship-finals-fin-de-semana-sol"
            className="text-gold underline"
          >
            Guía del fin de semana de finales junto a Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-28" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          LaLiga: Real Madrid–Alavés, sábado 28 de noviembre, 21:00 (Bernabéu), en directo junto a Sol. Punto de encuentro junto a Sol antes o después. Los sábados abrimos a las 15:00.{" "}
          <Link href="/news/real-madrid-alaves-saturday-night-sol" className="text-gold underline">
            Real Madrid–Alavés: sábado por la noche junto a Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-29" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Premier League: Arsenal–Manchester City, domingo 29 de noviembre, 17:30 (Emirates Stadium), en DAZN, en directo junto a Sol. Los domingos abrimos a las 14:00.{" "}
          <Link href="/es/noticias/arsenal-manchester-city-domingo-sol" className="text-gold underline">
            Arsenal–Man City: domingo de Premier junto a Sol
          </Link>
        </p>
      ) : null}
      <p className="mb-6 text-sm text-cream-muted sm:text-base">
        Cómo funciona la etiqueta Confirmado en esta lista — solo hora de Madrid;
        pregunta en la barra:{" "}
        <Link
          href="/es/como-marca-confirmado-la-agenda-esta-puerta"
          className="text-gold underline"
        >
          cómo marca Confirmado la Agenda en esta puerta
        </Link>
        .
      </p>
      <WhatsOnEventsJsonLd locale="es" />
      <FixtureList locale="es" />
      <HowToGetHere locale="es" />

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
