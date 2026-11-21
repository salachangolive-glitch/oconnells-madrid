import Link from "next/link";
import { Section } from "@/components/Prose";

/** Duran Duran archive pattern: keep the page, mark the event as over. */
export function PastEventNotice({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <Section title={es ? "Este evento ya ha tenido lugar" : "This event has taken place"}>
      <p>
        {es ? (
          <>
            Este evento ya ha tenido lugar. Para lo que viene, consulta la{" "}
            <Link href="/es/whats-on" className="text-gold underline">
              Agenda
            </Link>
            . El horario de cada día está en la{" "}
            <Link href="/es/location" className="text-gold underline">
              página de ubicación
            </Link>
            .
          </>
        ) : (
          <>
            This event has now taken place. For what is coming up next, see{" "}
            <Link href="/whats-on" className="text-gold underline">
              What&apos;s On
            </Link>
            . Opening times for every day are on the{" "}
            <Link href="/location" className="text-gold underline">
              location page
            </Link>
            .
          </>
        )}
      </p>
    </Section>
  );
}
