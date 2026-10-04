import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { PUBLIC_EMAIL, PUBLIC_EMAIL_MAILTO, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Contact O'Connell St Madrid",
  description:
    "Write to O'Connell St Madrid near Sol — form or comunicacion@oconnellsmadrid.es. Groups, sports nights or events.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell locale="en" altLangHref="/es/contact">
      <PageHero
        eyebrow="Contact"
        title={`Contact ${SITE_NAME}`}
        lead={
          <>
            A match is answered on{" "}
            <Link href="/whats-on" className="text-cream underline">
              What&apos;s On
            </Link>
            , not by this form. Send a message via the form, or email us
            directly. We’ll get back to you as soon as we can.
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
        , or use the form below.{" "}
        <Link href="/privacy" className="text-gold underline">
          Privacy
        </Link>
        .
      </p>
      <ContactForm locale="en" />
    </PageShell>
  );
}
