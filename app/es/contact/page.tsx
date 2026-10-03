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
        lead="Escríbenos por el formulario o por email si tienes dudas sobre el pub, un grupo, una noche de deporte o un evento. Te responderemos lo antes posible."
      />
      <p className="mb-8 text-sm text-cream-muted">
        Email{" "}
        <a href={PUBLIC_EMAIL_MAILTO} className="text-cream underline">
          {PUBLIC_EMAIL}
        </a>
        , o usa el formulario de abajo. En esta web no publicamos teléfono.
      </p>
      <p className="mb-6 text-sm text-cream-muted">
        <Link href="/es/privacy" className="text-gold underline">
          Aviso de privacidad
        </Link>
      </p>
      <ContactForm locale="es" />
    </PageShell>
  );
}
