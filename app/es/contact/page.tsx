import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Contacto O'Connell St Madrid",
  description:
    "Escríbenos a O'Connell St Madrid cerca de Sol — información general, grupos, deportes o eventos. Formulario de contacto.",
  path: "/es/contact",
  locale: "es",
});

export default function EsContactPage() {
  return (
    <PageShell locale="es" altLangHref="/contact">
      <PageHero
        eyebrow="Contacto"
        title={`Contacto ${SITE_NAME}`}
        lead="Escríbenos por el formulario si tienes dudas sobre el pub, un grupo, una noche de deporte o un evento. Te responderemos lo antes posible."
      />
      <p className="mb-8 text-sm text-cream-muted">
        Usa el formulario de abajo. En esta web no publicamos teléfono: el
        canal es el formulario.
      </p>
      <ContactForm locale="es" />
    </PageShell>
  );
}
