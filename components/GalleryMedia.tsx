import Link from "next/link";
import {
  GALLERY_PATH,
  GALLERY_PHOTOS,
  GALLERY_VIDEOS,
  type GalleryPhoto,
} from "@/lib/gallery";
import { PageHero, Section } from "@/components/Prose";

type Locale = "en" | "es";

const COPY = {
  en: {
    eyebrow: "Gallery",
    title: "Inside O'Connell St",
    lead:
      "Photos and a short clip from our Irish pub at Calle de Espoz y Mina 7, a short walk from Puerta del Sol. For what's on the screens, see What's On.",
    photos: "Photos",
    video: "Video",
    whatsOn: "What's On",
  },
  es: {
    eyebrow: "Galería",
    title: "Dentro de O'Connell St",
    lead:
      "Fotos y un clip corto de nuestro pub irlandés en Calle de Espoz y Mina 7, a dos minutos de Puerta del Sol. Para lo que hay en pantalla, consulta la Agenda.",
    photos: "Fotos",
    video: "Vídeo",
    whatsOn: "Agenda",
  },
} as const;

function PhotoTile({ photo, locale }: { photo: GalleryPhoto; locale: Locale }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-cream/10 bg-pub-burgundy-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.webp}
        alt={photo.alt[locale]}
        width={1600}
        height={1200}
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] w-full object-cover"
      />
    </figure>
  );
}

export function GalleryPageBody({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const whatsOn = locale === "es" ? "/es/whats-on" : "/whats-on";

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <Section title={c.photos}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_PHOTOS.map((p) => (
            <PhotoTile key={p.id} photo={p} locale={locale} />
          ))}
        </div>
      </Section>
      {GALLERY_VIDEOS.length ? (
        <Section title={c.video}>
          <GalleryVideos locale={locale} />
        </Section>
      ) : null}
      <p className="text-sm text-cream-muted">
        <Link href={whatsOn} className="text-gold underline">
          {c.whatsOn}
        </Link>
      </p>
    </>
  );
}

function GalleryVideos({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-6">
      {GALLERY_VIDEOS.map((v) => (
        <figure
          key={v.id}
          className="overflow-hidden rounded-lg border border-cream/10 bg-black"
        >
          <video
            className="aspect-video w-full bg-black"
            controls
            muted
            playsInline
            preload="metadata"
            poster={v.poster}
            aria-label={v.alt[locale]}
          >
            <source src={v.mp4} type="video/mp4" />
          </video>
          <figcaption className="sr-only">{v.alt[locale]}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Home strip: preview photos + link to full gallery. */
export function HomeGalleryPreview({ locale }: { locale: Locale }) {
  const full = GALLERY_PATH[locale];
  const title = locale === "es" ? "Galería" : "Gallery";
  const cta =
    locale === "es"
      ? "Ver galería completa"
      : "See the full gallery";
  const lead =
    locale === "es"
      ? "Tres fotos de ambiente y un vídeo corto del pub en Espoz y Mina 7."
      : "Three interior photos and a short clip from the pub at Espoz y Mina 7.";

  return (
    <section className="mb-12" aria-label={title}>
      <h2 className="font-serif text-xl font-bold text-cream">{title}</h2>
      <div className="pub-rule my-3" />
      <p className="mb-4 text-sm text-cream-muted sm:text-base">{lead}</p>
      <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
        {GALLERY_PHOTOS.map((p) => (
          <Link key={p.id} href={full} className="block overflow-hidden rounded-md border border-cream/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.webp}
              alt={p.alt[locale]}
              width={400}
              height={300}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition hover:opacity-90"
            />
          </Link>
        ))}
      </div>
      <Link
        href={full}
        className="inline-block rounded border border-gold/50 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/10"
      >
        {cta} →
      </Link>
    </section>
  );
}
