import { GalleryPageBody } from "@/components/GalleryMedia";
import { PageShell } from "@/components/PageShell";
import { buildMetadata } from "@/lib/seo";
import { GALLERY_PATH } from "@/lib/gallery";

export const metadata = buildMetadata({
  title: "Gallery — inside O'Connell St near Puerta del Sol",
  description:
    "Photos and a short video inside O'Connell St, an Irish pub at Espoz y Mina 7 by Puerta del Sol. Bar, seating and sports screens.",
  path: GALLERY_PATH.en,
});

export default function GalleryPage() {
  return (
    <PageShell locale="en" altLangHref={GALLERY_PATH.es}>
      <GalleryPageBody locale="en" />
    </PageShell>
  );
}
