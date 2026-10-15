/** Las 16 regiones de Chile, en orden norte → sur. */
export const REGIONES = [
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "Metropolitana de Santiago",
  "O’Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén",
  "Magallanes",
] as const;

export const OBJETIVOS = ["comprar", "vender", "estudio", "corredor"] as const;
export const TIPOS = [
  "Departamento",
  "Casa",
  "Terreno o sitio",
  "Parcela",
  "Local u oficina",
] as const;
export const PAGOS = ["contado", "credito", "subsidio", "nose"] as const;
export const SENALES = [
  "herencia",
  "casado",
  "hipoteca",
  "poder",
  "ampliacion",
  "juicio",
  "promesa",
] as const;

export type Objetivo = (typeof OBJETIVOS)[number];
export type Pago = (typeof PAGOS)[number];
export type Senal = (typeof SENALES)[number];

export const PAGO_LABEL: Record<Pago, string> = {
  contado: "Al contado",
  credito: "Con crédito hipotecario",
  subsidio: "Con subsidio habitacional",
  nose: "Aún no lo sé",
};

export const SENAL_LABEL: Record<Senal, string> = {
  herencia: "Viene de una herencia",
  casado: "Vendedor casado o divorciado",
  hipoteca: "Tiene hipoteca",
  poder: "Firma alguien con poder",
  ampliacion: "Tiene ampliaciones",
  juicio: "Hay un juicio o embargo",
  promesa: "Ya firmé una promesa",
};
