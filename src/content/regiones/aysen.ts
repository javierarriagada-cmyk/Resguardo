import type { RegionData } from "./types";

export const aysen: RegionData = {
  slug: "aysen",
  nombre: "Aysén",
  nombreConArticulo: "la Región de Aysén",
  numero: "XI",
  titular: "Cobertura legal e instruccional en la Región de Aysén",
  bajada: "Transacciones inmobiliarias seguras en Coyhaique, Puerto Aysén, Chile Chico y Cochrane.",
  descripcion:
    "En la Región de Aysén del General Carlos Ibáñez del Campo, las distancias geográficas hacen indispensable un proceso remoto ordenado. Auditamos títulos y prohibiciones en los Conservadores de Coyhaique, Puerto Aysén, Chile Chico y Cochrane.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Coyhaique",
      comunas: ["Coyhaique"],
      fuente: "https://www.cbrcoyhaique.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces y Letras de Puerto Aysén",
      comunas: ["Aysén", "Cisnes", "Guaitecas"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces y Letras de Chile Chico",
      comunas: ["Chile Chico", "Río Ibáñez"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces y Letras de Cochrane",
      comunas: ["Cochrane", "O'Higgins", "Tortel"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Cómo se gestiona el envío y firma de escrituras si las partes están en distintas localidades de Aysén?",
      a: "El estudio de títulos y la redacción de la escritura se coordinan a distancia. La firma se gestiona mediante coordinación notarial o por mandato, manteniendo la custodia del vale vista hasta la inscripción conforme.",
    },
    {
      q: "¿Qué se revisa en terrenos de Bienes Nacionales o colonizaciones antiguas?",
      a: "Verificamos el cumplimiento de los decretos de concesión o títulos definitivos de dominio dictados por el Ministerio de Bienes Nacionales para confirmar la ausencia de caducidades.",
    },
  ],
};
