export interface ConservadorData {
  nombre: string;
  comunas: string[];
  fuente?: string;
  verificado: boolean;
}

export interface FAQData {
  q: string;
  a: string;
}

export interface RegionData {
  slug: string;
  nombre: string;
  nombreConArticulo: string;
  numero: string;
  titular: string;
  bajada: string;
  descripcion: string;
  conservadores: ConservadorData[];
  faq: FAQData[];
}
