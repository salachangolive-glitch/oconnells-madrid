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
    "Aviso de privacidad de la web de O'Connell St: solo el formulario de contacto. Sin tienda, reservas ni pagos.",
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
      <Section title="Titular">
        <p>
          {SITE_NAME}, {ADDRESS.full}. Para cualquier duda:{" "}
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
          , recibimos tu nombre, email, motivo y mensaje, y los usamos solo
          para responderte. El envío pasa por Web3Forms hasta el buzón del pub.
          La respuesta sale al email que escribes en el formulario. También
          puedes escribir directamente a {PUBLIC_EMAIL}.
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
