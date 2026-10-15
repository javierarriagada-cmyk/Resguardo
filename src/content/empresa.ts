/**
 * Datos públicos de la empresa. Todo campo con `porConfirmar: true` es provisorio
 * y debe validarse con Javier antes de publicar (docs/estrategia.md §9).
 * Por decisión vigente no se publica ninguna persona (nombre, firma ni habilitación).
 */
export const empresa = {
  nombre: "Resguardo",
  descriptor: "Compraventas protegidas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://resguardo.cl",
  telefono: { valor: "+56900000000", visible: "+56 9 0000 0000", porConfirmar: true },
  whatsapp: { url: "https://wa.me/56900000000", porConfirmar: true },
  razonSocial: { valor: null, porConfirmar: true },
  rut: { valor: null, porConfirmar: true },
  priceRange: "$$",
  areaServed: "Chile",
} as const;

/** Marcas de trabajo interno ("provisorio", "por confirmar"). Se ocultan con NEXT_PUBLIC_SHOW_PROVISIONAL=false. */
export const mostrarProvisorio = process.env.NEXT_PUBLIC_SHOW_PROVISIONAL !== "false";
