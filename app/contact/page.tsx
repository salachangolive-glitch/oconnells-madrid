import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Contact O'Connell St Madrid",
  description:
    "Write to O'Connell St Madrid near Sol — general questions, groups, sports nights or events. Contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell locale="en" altLangHref="/es/contact">
      <PageHero
        eyebrow="Contact"
        title={`Contact ${SITE_NAME}`}
        lead="Send a message via the form about the pub, a group, a sports night or an event. We’ll get back to you as soon as we can."
      />
      <p className="mb-8 text-sm text-cream-muted">
        Use the form below. We don’t publish a phone number on this site — the
        form is the channel.
      </p>
      <ContactForm locale="en" />
    </PageShell>
  );
}
