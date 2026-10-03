import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, PUBLIC_EMAIL, PUBLIC_EMAIL_MAILTO, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Aviso de privacidad",
  description:
    "Cómo O'Connell St Madrid trata el formulario y comunicacion@oconnellsmadrid.es. Solo datos reales; lagunas jurídicas marcadas.",
  path: "/es/privacy",
  locale: "es",
});

export default function EsPrivacyPage() {
  return (
    <PageShell locale="es" altLangHref="/privacy">
      <PageHero
        eyebrow="Privacidad"
        title="Aviso de privacidad"
        lead="Qué hace esta web con un mensaje de contacto. No es un dictamen jurídico cerrado."
      />
      <Section title="Quién">
        <p>
          {SITE_NAME}, {ADDRESS.full}. Email público:{" "}
          <a href={PUBLIC_EMAIL_MAILTO} className="text-cream underline">
            {PUBLIC_EMAIL}
          </a>
          .
        </p>
        <p>
          Pendiente de revisión jurídica: la razón social, el NIF/CIF y la
          inscripción registral no constan para esta página, así que no se
          inventan aquí.
        </p>
      </Section>
      <Section title="Formulario">
        <p>El formulario pide:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>nombre</li>
          <li>email</li>
          <li>motivo (información general, grupos, deportes y partidos, eventos u otros)</li>
          <li>mensaje</li>
        </ul>
        <p>
          Un campo oculto de empresa es una trampa para spam. Si se rellena, el
          mensaje se descarta y no se usa para responder.
        </p>
        <p>
          Usamos esos datos solo para leer la consulta y responder. El
          navegador envía el formulario a Web3Forms (api.web3forms.com). No hay
          campo de teléfono.
        </p>
        <p>
          <Link href="/es/contact" className="text-gold underline">
            Formulario de contacto
          </Link>
        </p>
      </Section>
      <Section title="Email">
        <p>
          El correo a {PUBLIC_EMAIL} se recibe con Cloudflare Email Routing y se
          reenvía al buzón del local. Las respuestas salen desde {PUBLIC_EMAIL}{" "}
          con SMTP2GO. La dirección interna no se publica en esta web.
        </p>
      </Section>
      <Section title="Alojamiento, cookies y analítica">
        <p>
          La web está en Cloudflare Pages. El código no carga Google Analytics
          (GA4), píxeles publicitarios ni otra analítica no esencial. No hay
          banner de cookies porque esas herramientas no están cargadas.
          Cloudflare puede tratar datos de conexión para servir y proteger el
          sitio. No los usamos para publicidad.
        </p>
      </Section>
      <Section title="Tu solicitud">
        <p>
          Escribe a {PUBLIC_EMAIL} para pedir copia, corrección o supresión de
          un mensaje que nos hayas enviado. La autoridad de control en España es
          la Agencia Española de Protección de Datos (aepd.es).
        </p>
      </Section>
      <Section title="Pendiente de revisión jurídica">
        <ul className="list-disc space-y-2 pl-5">
          <li>Razón social, NIF/CIF e inscripción registral.</li>
          <li>El artículo concreto de la base jurídica.</li>
          <li>
            Un plazo fijo de conservación. Hasta esa revisión, los mensajes se
            guardan solo para atender la consulta y el seguimiento.
          </li>
          <li>
            La documentación de transferencias de Web3Forms, Cloudflare y
            SMTP2GO. Esta página solo nombra los servicios que usa la web.
          </li>
        </ul>
        <p>Última actualización: 3 de octubre de 2026.</p>
      </Section>
    </PageShell>
  );
}
