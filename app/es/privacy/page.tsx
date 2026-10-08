import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Privacidad — O'Connell St Madrid",
  description:
    "Aviso de privacidad de la web de O'Connell St: qué recoge el formulario de contacto, para qué y tus derechos. Sin tienda, reservas ni pagos.",
  path: "/es/privacy",
  locale: "es",
});

export default function EsPrivacyPage() {
  return (
    <PageShell locale="es" altLangHref="/privacy">
      <PageHero
        eyebrow="Privacidad"
        title="Privacidad"
        lead="Esta web es informativa. No hay tienda online, ni reserva de mesas, ni pagos."
      />
      <Section title="Quiénes somos">
        <p>
          Esta web es de {SITE_NAME}, el pub irlandés de {ADDRESS.full}. Para
          cualquier cuestión sobre tus datos personales, escríbenos a{" "}
          <a
            href={PUBLIC_EMAIL_MAILTO}
            data-event="email_click"
            className="text-cream underline"
          >
            {PUBLIC_EMAIL}
          </a>
          .
        </p>
      </Section>
      <Section title="Formulario de contacto">
        <p>
          Si usas el{" "}
          <Link
            href="/es/contact"
            data-event="contact"
            className="text-cream underline"
          >
            formulario
          </Link>
          , recibimos tu nombre, email, motivo y mensaje. Los usamos solo para
          responder a tu consulta, porque nos lo pides, y nunca para publicidad
          ni boletines. El formulario lo entrega Web3Forms, un servicio de envío
          de formularios, al buzón del pub, y la respuesta sale al email que
          escribes. También puedes escribir directamente a {PUBLIC_EMAIL}.
        </p>
        <p className="mt-3">
          Guardamos tu mensaje solo el tiempo necesario para responderte y
          atender lo que surja después. No lo vendemos ni lo compartimos con
          nadie más.
        </p>
      </Section>
      <Section title="Tus derechos">
        <p>
          Puedes pedirnos ver, corregir o borrar tus datos, u oponerte a cómo
          los usamos, escribiendo a {PUBLIC_EMAIL}. Si no estás conforme con la
          respuesta, puedes reclamar ante la Agencia Española de Protección de
          Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            aepd.es
          </a>
          ).
        </p>
      </Section>
      <Section title="Cookies y analítica">
        <p>
          Estas páginas no cargan Google Analytics, píxeles publicitarios ni
          ningún otro script de medición, y no instalan cookies propias. Un
          clic en Agenda, Cómo llegar, Contacto, el email o el formulario solo
          se reenvía si el navegador ya tiene una herramienta de medición; esta
          web no añade ninguna. Cómo llegar abre Google Maps, que es la web de
          Google.
        </p>
      </Section>
    </PageShell>
  );
}
