import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, PUBLIC_EMAIL, PUBLIC_EMAIL_MAILTO, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Privacy notice",
  description:
    "How O'Connell St Madrid handles the contact form and comunicacion@oconnellsmadrid.es. Facts only; legal gaps marked pending.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageShell locale="en" altLangHref="/es/privacy">
      <PageHero
        eyebrow="Privacy"
        title="Privacy notice"
        lead="What this website actually does with a contact message. This is not a finished legal opinion."
      />
      <Section title="Who">
        <p>
          {SITE_NAME}, {ADDRESS.full}. Public email:{" "}
          <a href={PUBLIC_EMAIL_MAILTO} className="text-cream underline">
            {PUBLIC_EMAIL}
          </a>
          .
        </p>
        <p>
          Pending legal review: the registered company name, NIF/CIF and
          companies-registry entry are not on file for this page, so they are
          not stated here.
        </p>
      </Section>
      <Section title="Contact form">
        <p>The form asks for:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>name</li>
          <li>email</li>
          <li>reason (general information, groups, sports and matches, events, or other)</li>
          <li>message</li>
        </ul>
        <p>
          A hidden company field is a spam trap. If it is filled in, the
          message is dropped and is not used to reply.
        </p>
        <p>
          We use those details only to read the enquiry and reply. The form is
          sent by the browser to Web3Forms (api.web3forms.com). There is no
          phone field.
        </p>
        <p>
          <Link href="/contact" className="text-gold underline">
            Contact form
          </Link>
        </p>
      </Section>
      <Section title="Email">
        <p>
          Mail to {PUBLIC_EMAIL} is received with Cloudflare Email Routing and
          forwarded to the venue inbox. Replies are sent from {PUBLIC_EMAIL}{" "}
          using SMTP2GO. The internal inbox address is not published on this
          site.
        </p>
      </Section>
      <Section title="Hosting, cookies and analytics">
        <p>
          The site is hosted on Cloudflare Pages. The site code does not load
          Google Analytics (GA4), advertising pixels, or other non-essential
          analytics. There is no cookie banner because those tools are not
          loaded. Cloudflare may process connection data to deliver and protect
          the site. We do not use that for advertising.
        </p>
      </Section>
      <Section title="Your request">
        <p>
          Email {PUBLIC_EMAIL} to ask for a copy, a correction, or deletion of
          a message you sent. The Spanish supervisory authority is the Agencia
          Española de Protección de Datos (aepd.es).
        </p>
      </Section>
      <Section title="Pending legal review">
        <ul className="list-disc space-y-2 pl-5">
          <li>Registered company name, NIF/CIF and registry entry.</li>
          <li>The specific legal basis article.</li>
          <li>
            A fixed retention period. Until that review, messages are kept only
            to handle the enquiry and any follow-up.
          </li>
          <li>
            Supplier transfer paperwork for Web3Forms, Cloudflare and SMTP2GO.
            This page only names the services the site uses.
          </li>
        </ul>
        <p>Last updated: 3 October 2026.</p>
      </Section>
    </PageShell>
  );
}
