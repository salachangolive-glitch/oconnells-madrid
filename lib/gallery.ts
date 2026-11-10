/** Owner gallery (T32 + T34): media store oconnells-galeria-2026-11-09. */

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
  {
    id: "ambiente-04",
    webp: "/images/gallery/oconnells-ambiente-04.webp",
    jpg: "/images/gallery/oconnells-ambiente-04.jpg",
    alt: {
      en: "Wooden bar with chrome beer taps and lit red shelving at O'Connell St near Sol",
      es: "Barra de madera con grifos de cerveza y estanterías rojas iluminadas en O'Connell St junto a Sol",
    },
  },
  {
    id: "ambiente-05",
    webp: "/images/gallery/oconnells-ambiente-05.webp",
    jpg: "/images/gallery/oconnells-ambiente-05.jpg",
    alt: {
      en: "Seating area with wooden tables, wall screen and barrel decor inside O'Connell St Madrid",
      es: "Sala con mesas de madera, pantalla en la pared y barriles decorativos en O'Connell St Madrid",
    },
  },
  {
    id: "ambiente-06",
    webp: "/images/gallery/oconnells-ambiente-06.webp",
    jpg: "/images/gallery/oconnells-ambiente-06.jpg",
    alt: {
      en: "Corner bar with bar stools and warm pendant lights at O'Connell St Irish pub",
      es: "Barra en esquina con taburetes y lámparas colgantes en el pub irlandés O'Connell St",
    },
  },
  {
    id: "ambiente-07",
    webp: "/images/gallery/oconnells-ambiente-07.webp",
    jpg: "/images/gallery/oconnells-ambiente-07.jpg",
    alt: {
      en: "Wooden stairs and a decorative whiskey barrel by the entrance area at O'Connell St",
      es: "Escaleras de madera y barril decorativo junto a la entrada en O'Connell St",
    },
  },
  {
    id: "ambiente-08",
    webp: "/images/gallery/oconnells-ambiente-08.webp",
    jpg: "/images/gallery/oconnells-ambiente-08.jpg",
    alt: {
      en: "Long bar with draught taps, bottle shelves and warm ceiling lights at O'Connell St Madrid",
      es: "Barra larga con grifos, estanterías de botellas y luz cálida en O'Connell St Madrid",
    },
  },
  {
    id: "ambiente-09",
    webp: "/images/gallery/oconnells-ambiente-09.webp",
    jpg: "/images/gallery/oconnells-ambiente-09.jpg",
    alt: {
      en: "Dining room with wooden tables and wall-mounted sports screens at O'Connell St by Sol",
      es: "Comedor con mesas de madera y pantallas deportivas en la pared en O'Connell St junto a Sol",
    },
  },
  {
    id: "ambiente-10",
    webp: "/images/gallery/oconnells-ambiente-10.webp",
    jpg: "/images/gallery/oconnells-ambiente-10.jpg",
    alt: {
      en: "Tables and chairs in a green-lit seating area inside O'Connell St Madrid",
      es: "Mesas y sillas en una zona de comedor con luz verde en el interior de O'Connell St Madrid",
    },
  },
  {
    id: "ambiente-11",
    webp: "/images/gallery/oconnells-ambiente-11.webp",
    jpg: "/images/gallery/oconnells-ambiente-11.jpg",
    alt: {
      en: "Green-lit walkway between wooden pillars and sports screens at O'Connell St near Sol",
      es: "Pasillo con luz verde entre pilares de madera y pantallas deportivas en O'Connell St junto a Sol",
    },
  },
];

/** Home preview: first three T32 shots plus two T34 picks (bar taps, green-lit room). */
export const GALLERY_HOME_PREVIEW_IDS = [
  "ambiente-01",
  "ambiente-02",
  "ambiente-03",
  "ambiente-04",
  "ambiente-10",
] as const;

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
