import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sunday 8 Nov at O'Connell's — NFL screens from 12:00",
  description:
    "Sunday 8 November: O'Connell's opens from 12:00 at Espoz y Mina 7. Bengals vs Falcons 15:30, NFL from 19:00, Atlético vs Barcelona 21:00. Ask which game is on. Four Corner from 14:00.",
  path: PATHS.sundayEn,
});

export default function SundayNflPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.sundayEs}>
      <PageHero
        eyebrow="Sunday 8 November · from 12:00"
        title="NFL Sunday at O'Connell's, near Sol"
        lead="One-day exception: we open from 12:00 (usual Sunday is 14:00). Irish pub at Espoz y Mina 7, by Puerta del Sol. Independent — not an official NFL event. Ask which game is on."
      />

      <Section title="Why we open at midday" featured>
        <p>
          {ADDRESS.full}. Usual Sundays start at 14:00. Sunday 8 November we
          unlock the door at 12:00 so the room is already moving before the
          Madrid game. {WEEKEND_HOURS.sun8NovNoteEn}
        </p>
        <p>
          The NFL Madrid Game is at the Bernabéu. You can watch Bengals vs
          Falcons here on the big screen if you are not at the stadium. From
          19:00 this is also the stop if you are coming back into the centre.
        </p>
      </Section>

      <Section title="Sunday windows (Madrid time)">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-cream">15:30</strong> — Bengals vs Falcons
            (Bernabéu game; also on our big screen).
          </li>
          <li>
            <strong className="text-cream">19:00</strong> — seven NFL games, then
            another at <strong className="text-cream">22:05</strong> and three
            more at <strong className="text-cream">22:25</strong>. Ask which is
            up. We do not promise every kickoff on every screen.
          </li>
          <li>
            <strong className="text-cream">21:00</strong> — Atlético vs
            Barcelona, same room, same night. Ask at the bar.
          </li>
        </ul>
        <p>
          Screens are shared. If you need a particular game, say so when you
          walk in — we would rather tell you the truth than pretend every
          window is on every set.
        </p>
      </Section>

      <Section title="The other three rooms">
        <p>
          Dubliners is on this street from 12:00. O&apos;Reilly&apos;s
          (Pasaje de Matheu 4) keeps its usual 11:30–01:30. Four Corner (Calle
          de la Victoria 6) opens Sunday from 14:00 until late. NFL on the
          screens — ask which game is on.
        </p>
        <p>
          <Link href={PATHS.hubEn} className="text-gold underline">
            Addresses, Maps and hours for all four
          </Link>
          {" · "}
          <Link href={PATHS.saturdayEn} className="text-gold underline">
            Saturday first — no live NFL
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="en" />
    </PageShell>
  );
}
