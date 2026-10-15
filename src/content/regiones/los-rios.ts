import type { RegionData } from "./types";

export const losRios: RegionData = {
  slug: "los-rios",
  nombre: "Los Ríos",
  nombreConArticulo: "la Región de Los Ríos",
  numero: "XIV",
  titular: "Acompañamiento registral y legal en la Región de Los Ríos",
  bajada:
    "Estudio de títulos en compraventas de propiedades urbanas y rurales en Valdivia, Panguipulli, La Unión, Río Bueno y Mariquina.",
  descripcion:
    "La Región de Los Ríos destaca por su mercado residencial, parcelaciones de agrado y desarrollos turísticos. Evaluamos títulos de 10 años, recepciones municipales y regulaciones de bienes rústicos en los Conservadores de la región.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Valdivia",
      comunas: ["Valdivia", "Corral"],
      fuente: "https://www.cbrvaldivia.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Panguipulli",
      comunas: ["Panguipulli"],
      fuente: "https://www.cbrpanguipulli.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de La Unión",
      comunas: ["La Unión"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Río Bueno",
      comunas: ["Río Bueno", "Lago Ranco"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Lagos",
      comunas: ["Los Lagos", "Futrono"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Paillaco",
      comunas: ["Paillaco"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Qué aspectos se examinan en propiedades ubicadas en cuencas de lagos como Ranco o Panguipulli?",
      a: "Revisamos los deslindes ribereños, servidumbres de tránsito, certificaciones de Bienes Nacionales y cumplimiento de subdivisiones agrícolas.",
    },
    {
      q: "¿Cuál es el tiempo de tramitación en el CBR de Valdivia?",
      a: "El CBR de Valdivia realiza las inscripciones habitualmente en un plazo de 6 a 10 días hábiles desde el ingreso formal.",
    },
  ],
};
