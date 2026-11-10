/** Owner gallery (T32): only assets present in media store 9 Nov 2026. */

export type GalleryPhoto = {
  id: string;
  webp: string;
  jpg: string;
  alt: { en: string; es: string };
};

export type GalleryVideo = {
  id: string;
  mp4: string;
  poster: string;
  alt: { en: string; es: string };
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "ambiente-01",
    webp: "/images/gallery/oconnells-ambiente-01.webp",
    jpg: "/images/gallery/oconnells-ambiente-01.jpg",
    alt: {
      en: "Busy bar counter with drinks at O'Connell St Irish pub near Puerta del Sol",
      es: "Barra con clientes y bebidas en O'Connell St, pub irlandés junto a Puerta del Sol",
    },
  },
  {
    id: "ambiente-02",
    webp: "/images/gallery/oconnells-ambiente-02.webp",
    jpg: "/images/gallery/oconnells-ambiente-02.jpg",
    alt: {
      en: "Seating area and wall-mounted sports screens at O'Connell St Madrid",
      es: "Zona de mesas y pantallas deportivas en O'Connell St Madrid",
    },
  },
  {
    id: "ambiente-03",
    webp: "/images/gallery/oconnells-ambiente-03.webp",
    jpg: "/images/gallery/oconnells-ambiente-03.jpg",
    alt: {
      en: "Tables and match atmosphere inside O'Connell St by Sol",
      es: "Mesas y ambiente de partido en el interior de O'Connell St junto a Sol",
    },
  },
];

export const GALLERY_VIDEOS: GalleryVideo[] = [
  {
    id: "video-01",
    mp4: "/videos/gallery/oconnells-video-01.mp4",
    poster: "/images/gallery/oconnells-video-01-poster.jpg",
    alt: {
      en: "Short walk-through of O'Connell St interior near Puerta del Sol",
      es: "Recorrido breve por el interior de O'Connell St junto a Puerta del Sol",
    },
  },
];

export const GALLERY_PATH = { en: "/gallery", es: "/es/galeria" } as const;
