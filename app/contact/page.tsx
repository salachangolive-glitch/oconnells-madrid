import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/venue";

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
      <p className="mb-8 text-sm text-cream-muted">
        Prefer to call?{" "}
        <a href={PHONE_TEL} className="text-gold underline">
          {PHONE_DISPLAY}
        </a>
      </p>
      <ContactForm locale="en" />
    </PageShell>
  );
}
