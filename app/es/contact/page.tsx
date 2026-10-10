import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { PUBLIC_EMAIL, PUBLIC_EMAIL_MAILTO, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Contacto O'Connell St Madrid",
  description:
    "Escríbenos a O'Connell St Madrid cerca de Sol — formulario o comunicacion@oconnellsmadrid.es. Grupos, deportes o eventos.",
  path: "/es/contact",
  locale: "es",
});

export default function EsContactPage() {
  return (
    <PageShell locale="es" altLangHref="/contact">
      <PageHero
        eyebrow="Contacto"
        title={`Contacto ${SITE_NAME}`}
        lead={
          <>
            Un partido se responde en la{" "}
            <Link href="/es/whats-on" className="text-cream underline">
              Agenda
            </Link>
            , no con este formulario. Escríbenos por el formulario o por email
            si tienes otra duda sobre el pub, un grupo o un evento. Te
            responderemos lo antes posible.
          </>
        }
      />
      <p className="mb-8 text-sm text-cream-muted">
        Email{" "}
        <a
          href={PUBLIC_EMAIL_MAILTO}
          data-event="email_click"
          className="text-cream underline"
        >
          {PUBLIC_EMAIL}
        </a>
        , o usa el formulario de abajo.{" "}
        <Link href="/es/privacy" className="text-gold underline">
          Privacidad
        </Link>
        .
      </p>
      <ContactForm locale="es" />
    </PageShell>
  );
}
