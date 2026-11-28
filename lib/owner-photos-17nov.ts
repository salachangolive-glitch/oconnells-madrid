/** Owner photos 17 Nov 2026 — atmosphere only; no broadcaster names in alt text. */

export const OWNER_PHOTOS_17NOV = {
  pantallasFutbol: {
    src: "/images/owner-17nov/oconnells-pantallas-futbol.webp",
    position: "object-[center_22%]",
    alt: {
      en: "Wall-mounted sports TVs and wooden bar on a busy match evening at O'Connell St near Puerta del Sol",
      es: "Pantallas deportivas en la pared y barra de madera en un partido con ambiente en O'Connell St junto a Sol",
    },
  },
  ambientePartido: {
    src: "/images/owner-17nov/oconnells-ambiente-partido.webp",
    position: "object-center",
    alt: {
      en: "Wooden tables and seating with guests watching sports on screens inside O'Connell St Irish pub",
      es: "Mesas de madera y clientes viendo deporte en pantalla en el interior del pub O'Connell St",
    },
  },
} as const;

export type OwnerPhotoLocale = "en" | "es";

export function ownerPhotoAlt(
  key: keyof typeof OWNER_PHOTOS_17NOV,
  locale: OwnerPhotoLocale,
): string {
  return OWNER_PHOTOS_17NOV[key].alt[locale];
}