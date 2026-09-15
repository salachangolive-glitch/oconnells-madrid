import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Contact O'Connell's Madrid",
  description:
    "Contact O'Connell's Madrid near Puerta del Sol — general questions, groups, sports & matches, or events.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell locale="en" altLangHref="/es/contact">
      <PageHero
        eyebrow="Contact"
        title={`Contact ${SITE_NAME}`}
        lead="Send a message about the pub, groups, sports nights or events. We’ll get back to you as soon as we can."
      />
      <p className="mb-8 text-sm text-cream-muted">Use the form below — we reply as soon as we can.</p>
      <ContactForm locale="en" />
    </PageShell>
  );
}
