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
  title: "Privacy — O'Connell St Madrid",
  description:
    "Privacy notice for the O'Connell St website: contact form, email comunicacion@oconnellsmadrid.es, and no analytics cookies.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell locale="en" altLangHref="/es/privacy">
      <PageHero
        eyebrow="Privacy"
        title="Privacy"
        lead={`${SITE_NAME}, ${ADDRESS.full}. Questions about this page: ${PUBLIC_EMAIL}.`}
      />
      <Section title="Who this notice is about">
        <p>
          This notice is for the website of {SITE_NAME}, the Irish pub at{" "}
          {ADDRESS.full}. Write to{" "}
          <a
            href={PUBLIC_EMAIL_MAILTO}
            data-event="email_click"
            className="text-cream underline"
          >
            {PUBLIC_EMAIL}
          </a>
          . We are not publishing a company legal name, tax number, or
          companies-registry entry on this site, because those details are not
          stated here.
        </p>
      </Section>
      <Section title="Contact form">
        <p>
          If you use the{" "}
          <Link href="/contact" data-event="contact" className="text-cream underline">
            contact form
          </Link>
          , you send your name, email address, a reason and a message. We use
          that only to reply to that message. The form is delivered by
          Web3Forms, the provider this site already uses. The reply-to address
          on those messages is {PUBLIC_EMAIL}. You can also email that address
          directly.
        </p>
      </Section>
      <Section title="Cookies and analytics">
        <p>
          This website does not use Google Analytics and does not set its own
          analytics or advertising cookies. There is no advertising pixel on
          these pages. Links labelled Directions open Google Maps, which is
          Google&apos;s site, not ours. Choosing Directions is not counted as a
          visit to the pub.
        </p>
      </Section>
    </PageShell>
  );
}
