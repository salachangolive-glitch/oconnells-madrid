import { CONSENT_STORAGE_KEY } from "@/lib/analytics";

type Locale = "en" | "es";

const btn =
  "inline text-cream underline hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

/**
 * "Cookies and analytics" text for when GA4 is on. Privacy pages render it
 * only if ga4Enabled(); otherwise they keep the no-GA text.
 */
export function PrivacyCookiesGa4({ locale = "en" }: { locale?: Locale }) {
  if (locale === "es") {
    return (
      <section id="cookies" className="mb-10 scroll-mt-24">
        <h2 className="mb-3 font-serif text-xl font-semibold text-cream sm:text-2xl">
          Cookies y analítica
        </h2>
        <div className="space-y-3 text-cream/80 leading-relaxed">
          <p>
            <strong className="text-cream">Analítica, solo si la aceptas.</strong>{" "}
            Si pulsas «Aceptar» en el aviso de cookies, usamos Google Analytics
            4, de Google Ireland Limited, para contar visitas y clics en Agenda,
            Cómo llegar, Contacto, el email y los envíos del formulario. No le
            enviamos tu nombre, tu email ni tu mensaje. Lo usamos para saber
            cómo se usa la web y si la gente encuentra cómo llegar o
            contactarnos. La base legal es tu consentimiento.
          </p>
          <p>
            Google instala las cookies <code>_ga</code> y <code>_ga_*</code>,
            que duran hasta 2 años. Google puede tratar datos fuera del Espacio
            Económico Europeo, en Estados Unidos, con las garantías del Marco de
            Privacidad de Datos UE-EE. UU. Más información en la{" "}
            <a
              href="https://policies.google.com/privacy?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream underline"
            >
              política de privacidad de Google
            </a>
            . No usamos cookies publicitarias: las señales de publicidad están
            siempre desactivadas.
          </p>
          <p>
            Si rechazas o no eliges nada, Google Analytics no se carga y no se
            instala ninguna de esas cookies.
          </p>
          <p>
            <strong className="text-cream">Almacenamiento necesario.</strong> Tu
            elección se guarda en tu navegador (<code>{CONSENT_STORAGE_KEY}</code>)
            para no volver a preguntarte. No necesita consentimiento.
          </p>
          <p>
            Nuestro proveedor de alojamiento, Cloudflare, cuenta las visitas de
            forma agregada con Cloudflare Web Analytics, que no usa cookies ni
            te identifica. Cómo llegar abre Google Maps, que es la web de
            Google.
          </p>
          <p>
            Puedes cambiar o retirar tu consentimiento cuando quieras en{" "}
            <button type="button" data-cookie-settings="" className={btn}>
              Configurar cookies
            </button>{" "}
            (también en el pie de cada página). Si lo retiras, dejamos de usar
            Google Analytics y borramos sus cookies de esta web.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section id="cookies" className="mb-10 scroll-mt-24">
      <h2 className="mb-3 font-serif text-xl font-semibold text-cream sm:text-2xl">
        Cookies and analytics
      </h2>
      <div className="space-y-3 text-cream/80 leading-relaxed">
        <p>
          <strong className="text-cream">Analytics, only if you accept.</strong>{" "}
          If you click “Accept” in the cookie notice, we use Google Analytics 4,
          provided by Google Ireland Limited, to count visits and clicks on
          What’s On, Directions, Contact, email and contact-form submissions. We
          do not send it your name, email or message. We use it to understand
          how the site is used and whether people find directions or a way to
          contact us. The legal basis is your consent.
        </p>
        <p>
          Google sets the cookies <code>_ga</code> and <code>_ga_*</code>, which
          last up to 2 years. Google may process data outside the European
          Economic Area, in the United States, under the EU-US Data Privacy
          Framework. More in{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            Google’s Privacy Policy
          </a>
          . We do not use advertising cookies: advertising signals are always
          off.
        </p>
        <p>
          If you reject or do not choose, Google Analytics is not loaded and
          none of those cookies are set.
        </p>
        <p>
          <strong className="text-cream">Necessary storage.</strong> Your choice
          is saved in your browser (<code>{CONSENT_STORAGE_KEY}</code>) so we do
          not ask again. It does not need consent.
        </p>
        <p>
          Our host, Cloudflare, counts visits in aggregate with Cloudflare Web
          Analytics, which does not use cookies or identify you. Directions
          opens Google Maps, which is Google’s website.
        </p>
        <p>
          You can change or withdraw your consent at any time in{" "}
          <button type="button" data-cookie-settings="" className={btn}>
            Cookie settings
          </button>{" "}
          (also in the footer of every page). If you withdraw it, we stop using
          Google Analytics and delete its cookies from this site.
        </p>
      </div>
    </section>
  );
}
