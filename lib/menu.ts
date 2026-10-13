/**
 * O'Connell St food menu — transcribed ONLY from the 3 menu photos supplied by
 * the owner (/workspace/cartas-pubs-2026-10-13/, 13 Oct 2026). Prices in €.
 * en = English line printed on the menu (obvious typos fixed: "suace", "whit").
 * Left out on purpose (PENDIENTE): allergens, illegible/ambiguous items.
 */
export type MenuItem = { es: string; en?: string; descEs?: string; descEn?: string; price: number };
export type MenuSection = { id: string; es: string; en: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  {
    id: "arroces", es: "Arroces", en: "Rice dishes",
    items: [
      { es: "Arroz mixto en su punto", en: "Mixed rice with seafood and chicken", price: 15 },
      { es: "Arroz de mariscos en su punto", en: "Rice seafood", price: 15 },
      { es: "Arroz negro con alioli", en: "Black rice with aioli", price: 15 },
    ],
  },
  {
    id: "raciones", es: "Raciones y tapas", en: "Raciones & tapas",
    items: [
      { es: "Aros de cebolla", en: "Breaded onion rings with ranch sauce", price: 9 },
      { es: "Jamón ibérico de bellota", en: "Iberian ham", price: 24 },
      { es: "Queso manchego", en: "Manchego cheese", price: 12 },
      { es: "Patatas bravas o alioli", en: "Bravas potatoes or alioli", price: 9 },
      { es: "Croquetas caseras (6 uds.)", en: "Homemade croquettes", price: 11 },
      { es: "Alitas de pollo", en: "Chicken wings", price: 12 },
      { es: "Finger de pollo", en: "Chicken fingers", price: 10 },
      { es: "Pulpo a la gallega", en: "Galician-style octopus", price: 23 },
      { es: "Calamares a la romana", en: "Roman style squid", price: 16 },
      { es: "Gambón al ajillo", en: "Shrimp with garlic", price: 17 },
      { es: "Torreznos de Soria", price: 17 },
      { es: "Tortilla de patatas", en: "Potato omelette", price: 8 },
      { es: "Callos a la madrileña", en: "Madrid style", price: 16 },
      { es: "Nachos con guacamole (carne y queso)", en: "Nachos with guacamole (meat and cheese)", price: 12 },
      { es: "Quesadillas con guacamole", en: "Quesadillas with guacamole", price: 9 },
      { es: "Gildas (6 uds.)", en: "Basque skewers", price: 15 },
      { es: "Chorizo casero", en: "Homemade chorizo", price: 12 },
      { es: "Salmorejo", en: "Cold Andalusian soup", price: 10 },
      { es: "Mejillones a la marinera", en: "Seafood-style mussels", price: 16 },
    ],
  },
  {
    id: "ensaladas", es: "Ensaladas", en: "Salads",
    items: [
      { es: "Ensalada César con pollo", en: "Caesar salad", price: 14 },
      { es: "Ensalada de lechuga y tomate", en: "Lettuce and tomato salad", price: 8 },
      { es: "Ensalada de la casa", price: 12 },
      { es: "Pimientos de Padrón", en: "Padrón peppers", price: 12 },
      { es: "Burrata con pesto", price: 13 },
      { es: "Ensaladilla rusa", en: "Russian salad", price: 10 },
    ],
  },
  {
    id: "hamburguesas", es: "Hamburguesas, pasta y pizza", en: "Burgers, pasta & pizza",
    items: [
      { es: "Hamburguesa Black Angus", en: "Black Angus burger", price: 18 },
      { es: "Lasaña estilo italiano", en: "Classic Italian lasagna", price: 12 },
      { es: "Pizza de jamón y queso", en: "Ham & cheese pizza", descEs: "Salsa de tomate, jamón york, mozzarella y orégano", descEn: "Tomato sauce, ham, mozzarella and fresh oregano", price: 16 },
      { es: "Pizza cuatro estaciones", en: "Four seasons pizza", descEs: "Salsa de tomate, jamón york, bacon, champiñón, mozzarella y orégano", descEn: "Tomato sauce, ham, bacon, mushrooms, mozzarella and fresh oregano", price: 16 },
      { es: "Pizza 3 quesos", en: "3 cheese pizza", price: 16 },
    ],
  },
  {
    id: "principales", es: "Platos principales", en: "Main dishes",
    items: [
      { es: "Pollo al curry", en: "Chicken curry", descEs: "Pechuga de pollo en salsa de curry suave servido sobre arroz", descEn: "Chicken breast in mild curry sauce served on rice", price: 19 },
      { es: "Salmón a la parrilla", en: "Grilled salmon", descEs: "Con patatas fritas", descEn: "Served with french fries", price: 18 },
      { es: "Huevos estrellados con jamón ibérico", price: 14 },
      { es: "Rabo de toro guisado y patatas", en: "Stewed oxtail and potatoes", price: 19 },
    ],
  },
  {
    id: "especialidades", es: "Especialidades de la casa", en: "House specialities",
    items: [
      { es: "Desayuno irlandés", en: "Irish Breakfast", descEs: "Salchichas irlandesas, bacon, tomate a la plancha, champiñones, morcilla, alubias tostadas, huevos fritos y patatas fritas", descEn: "Irish sausages, bacon rashers, grilled tomatoes, mushrooms, black pudding, baked beans, fried eggs and chips", price: 12 },
      { es: "Costillar a la barbacoa", en: "BBQ ribs", descEs: "Con patatas fritas", descEn: "Served with french fries", price: 21 },
      { es: "Entrecot de vaca madurado", en: "Dry-aged sirloin steak", descEs: "Con patatas fritas", descEn: "Served with potatoes", price: 23 },
      { es: "Judiones de la granja", price: 10 },
    ],
  },
  {
    id: "postres", es: "Postres", en: "Desserts",
    items: [
      { es: "Tarta de queso", price: 6 },
      { es: "Brownie de chocolate", price: 5 },
    ],
  },
];

export const MENU_IMAGES = [
  { src: "/images/menu/carta-completa.jpg", w: 1600, h: 1200, en: "Full food menu (photo)", es: "Carta completa (foto)" },
  { src: "/images/menu/carta-raciones-tapas.jpg", w: 1200, h: 1600, en: "Raciones & tapas (photo)", es: "Raciones y tapas (foto)" },
  { src: "/images/menu/carta-arroces-platos.jpg", w: 1200, h: 1600, en: "Rice dishes and plates (photo)", es: "Arroces y platos (foto)" },
];
