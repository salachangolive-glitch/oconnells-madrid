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
    "Aviso de privacidad de la web de O'Connell St: formulario, email comunicacion@oconnellsmadrid.es y sin cookies de analítica.",
  path: "/es/privacy",
  locale: "es",
});

export default function EsPrivacyPage() {
  return (
    <PageShell locale="es" altLangHref="/privacy">
      <PageHero
        eyebrow="Privacidad"
        title="Privacidad"
        lead={`${SITE_NAME}, ${ADDRESS.full}. Para dudas sobre esta página: ${PUBLIC_EMAIL}.`}
      />
      <Section title="De qué va este aviso">
        <p>
          Este aviso es de la web de {SITE_NAME}, el pub irlandés de{" "}
          {ADDRESS.full}. Escríbenos a{" "}
          <a
            href={PUBLIC_EMAIL_MAILTO}
            data-event="email_click"
            className="text-cream underline"
          >
            {PUBLIC_EMAIL}
          </a>
          . No publicamos aquí razón social, CIF ni datos del registro
          mercantil, porque esos datos no figuran en esta web.
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
          , nos envías nombre, email, un motivo y un mensaje. Lo usamos solo
          para responder a ese mensaje. El formulario lo entrega Web3Forms, el
          proveedor que esta web ya usa. La dirección de respuesta de esos
          mensajes es {PUBLIC_EMAIL}. También puedes escribir directamente a
          ese correo.
        </p>
      </Section>
      <Section title="Cookies y analítica">
        <p>
          Esta web no usa Google Analytics y no instala cookies propias de
          analítica ni de publicidad. No hay píxel publicitario en estas
          páginas. Los enlaces de cómo llegar abren Google Maps, que es la web
          de Google, no la nuestra. Elegir cómo llegar no cuenta como una
          visita al pub.
        </p>
      </Section>
    </PageShell>
  );
}
