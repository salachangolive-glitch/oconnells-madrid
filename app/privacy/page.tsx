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
    "Privacy notice for the O'Connell St website: contact form only. No shop, bookings or payments. Owner details pending.",
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
      <Section title="Owner">
        <p>
          {SITE_NAME}, {ADDRESS.full}. Questions:{" "}
          <a
            href={PUBLIC_EMAIL_MAILTO}
            data-event="email_click"
            className="text-cream underline"
          >
            {PUBLIC_EMAIL}
          </a>
          .
        </p>
        <p>Owner details pending.</p>
      </Section>
      <Section title="Contact form">
        <p>
          If you use the{" "}
          <Link href="/contact" data-event="contact" className="text-cream underline">
            contact form
          </Link>
          , we receive your name, email, reason and message, and use them only
          to reply. The form is sent through Web3Forms to the pub inbox. The
          reply goes to the email address you type in the form. You can also
          write to {PUBLIC_EMAIL} directly.
        </p>
      </Section>
      <Section title="Cookies and analytics">
        <p>
          These pages do not load Google Analytics, advertising pixels or any
          other measurement script, and they do not set their own cookies. A
          click on What’s On, Directions, Contact, email or the form can be
          forwarded only if a measurement tool is already running in the
          browser; this site does not add one. Directions opens Google Maps,
          which is Google’s website.
        </p>
      </Section>
    </PageShell>
  );
}
