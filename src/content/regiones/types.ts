/** Página concreta que respalda el territorio de un Conservador, abierta y revisada en la fecha indicada. */
export interface FuenteTerritorio {
  url: string;
  /** Fecha de consulta, AAAA-MM-DD. */
  consultada: string;
}

export interface ConservadorData {
  nombre: string;
  comunas: string[];
  /** Solo si una página concreta respalda las comunas. Sin fuente = "Territorio por confirmar". */
  fuente?: FuenteTerritorio;
  nota?: string;
}

export interface FAQData {
  q: string;
  a: string;
}

export interface RegionData {
  slug: string;
  nombre: string;
  /** Con artículo, para usar dentro de una frase: "la Región de Valparaíso". */
  nombreConArticulo: string;
  numero: string;
  titular: string;
  bajada: string;
  descripcion: string;
  conservadores: ConservadorData[];
  faq: FAQData[];
}
