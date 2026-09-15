import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Contacto O'Connell's Madrid",
  description:
    "Contacta con O'Connell's Madrid cerca de Puerta del Sol — información general, grupos, deportes y partidos, o eventos.",
  path: "/es/contact",
  locale: "es",
});

export default function EsContactPage() {
  return (
    <PageShell locale="es" altLangHref="/contact">
      <PageHero
        eyebrow="Contacto"
        title={`Contacto ${SITE_NAME}`}
        lead="Escríbenos por el pub, grupos, noches de deporte o eventos. Te responderemos lo antes posible."
      />
      <p className="mb-8 text-sm text-cream-muted">
        ¿Prefieres llamar?{" "}
        <a href={PHONE_TEL} className="text-gold underline">
          {PHONE_DISPLAY}
        </a>
      </p>
      <ContactForm locale="es" />
    </PageShell>
  );
}
