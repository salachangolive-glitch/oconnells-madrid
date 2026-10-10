import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PrivacyCookiesGa4 } from "@/components/PrivacyCookies";
import { ga4Enabled } from "@/lib/analytics";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Privacy — O'Connell St Madrid",
  description:
    "Privacy notice for the O'Connell St website: what the contact form collects, why, and your rights. No shop, bookings or payments.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell locale="en" altLangHref="/es/privacy">
      <PageHero
        eyebrow="Privacy"
        title="Privacy"
        lead="This website is for information. There is no online shop, no table booking and no payments."
      />
      <Section title="Who we are">
        <p>
          This website belongs to {SITE_NAME}, the Irish pub at {ADDRESS.full}.
          For anything about your personal data, write to{" "}
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
      <Section title="Contact form">
        <p>
          If you use the{" "}
          <Link href="/contact" data-event="contact" className="text-cream underline">
            contact form
          </Link>
          , we receive your name, email, reason and message. We use them only
          to answer your enquiry, because you asked us to, and we never use them
          for advertising or newsletters. The form is delivered by Web3Forms, a
          form-sending service, to the pub inbox, and our reply goes to the
          email address you typed. You can also write to {PUBLIC_EMAIL}{" "}
          directly.
        </p>
        <p className="mt-3">
          We keep your message only for as long as we need it to answer you and
          deal with any follow-up. We do not sell or share it with anyone else.
        </p>
      </Section>
      <Section title="Your rights">
        <p>
          You can ask to see, correct or delete your data, or object to how we
          use it, by writing to {PUBLIC_EMAIL}. If you are not happy with our
          answer, you can complain to the Spanish Data Protection Agency (
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
      {ga4Enabled() ? (
        <PrivacyCookiesGa4 locale="en" />
      ) : (
        <Section title="Cookies and analytics">
          <p>
            These pages do not load Google Analytics or advertising pixels, and
            they do not set cookies. Our host, Cloudflare, counts visits in
            aggregate with Cloudflare Web Analytics, which does not use cookies
            or identify you. A click on What’s On, Directions, Contact, email or
            the form is sent as an event only if Google Analytics is already
            running in your browser; this site does not load it. Directions
            opens Google Maps, which is Google’s website.
          </p>
        </Section>
      )}
    </PageShell>
  );
}
