import { GalleryPageBody } from "@/components/GalleryMedia";
import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";
import { GALLERY_PATH } from "@/lib/gallery";

export const metadata = buildMetadata({
  title: "Galería — dentro de O'Connell St junto a Sol",
  description:
    "Fotos y un vídeo corto del interior de O'Connell St, pub irlandés en Espoz y Mina 7 junto a Puerta del Sol. Barra, mesas y pantallas.",
  path: GALLERY_PATH.es,
  locale: "es",
});

export default function EsGaleriaPage() {
  return (
    <PageShell locale="es" altLangHref={GALLERY_PATH.en}>
      <GalleryPageBody locale="es" />
    </PageShell>
  );
}
