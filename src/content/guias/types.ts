/**
 * Modelo de contenido de las guías.
 *
 * Los textos admiten enlaces en línea con la sintaxis `[texto](/ruta)`; nada más.
 * Toda afirmación sobre un requisito legal cita ley y artículo. Lo que no pudimos
 * verificar va en un bloque `pendiente`, que se muestra siempre (no depende de
 * NEXT_PUBLIC_SHOW_PROVISIONAL).
 */
export type Bloque =
  | { tipo: "p"; texto: string }
  | { tipo: "lista"; items: string[]; ordenada?: boolean }
  | { tipo: "pasos"; items: { titulo: string; texto: string }[] }
  | { tipo: "nota"; titulo: string; texto: string }
  | { tipo: "pendiente"; texto: string };

export interface Seccion {
  id: string;
  titulo: string;
  bloques: Bloque[];
}

export interface FuenteNorma {
  /** Ej.: "Código Civil". */
  norma: string;
  /** Ej.: "arts. 686 y 688". */
  articulos: string;
  url: string;
}

export interface Guia {
  slug: string;
  titulo: string;
  /** Título corto para menús y tarjetas. */
  corto: string;
  bajada: string;
  categoria: "Comprar" | "Vender" | "Pagar" | "Revisar";
  /** Fecha ISO de la última revisión jurídica. */
  revisada: string;
  enBreve: string[];
  secciones: Seccion[];
  fuentes: FuenteNorma[];
  relacionadas: string[];
}

export const LEYCHILE = (idNorma: number) =>
  `https://www.bcn.cl/leychile/navegar?idNorma=${idNorma}`;

export const NORMAS = {
  cc: { norma: "Código Civil", url: LEYCHILE(172986) },
  cot: { norma: "Código Orgánico de Tribunales", url: LEYCHILE(25563) },
  cpc: { norma: "Código de Procedimiento Civil", url: LEYCHILE(22740) },
  l19903: { norma: "Ley 19.903, sobre posesión efectiva", url: LEYCHILE(215613) },
  l16271: { norma: "Ley 16.271, de impuesto a las herencias", url: LEYCHILE(28367) },
  lguc: { norma: "Ley General de Urbanismo y Construcciones (DFL 458)", url: LEYCHILE(13560) },
  l19253: { norma: "Ley 19.253, Ley Indígena", url: LEYCHILE(30620) },
  dl1939: { norma: "DL 1.939, sobre bienes del Estado", url: LEYCHILE(6778) },
  l21442: { norma: "Ley 21.442, de copropiedad inmobiliaria", url: LEYCHILE(1174663) },
} as const;

export function fuente(clave: keyof typeof NORMAS, articulos: string): FuenteNorma {
  return { ...NORMAS[clave], articulos };
}
