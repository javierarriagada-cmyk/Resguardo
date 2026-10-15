import type { RegionData } from "./types";

export const losLagos: RegionData = {
  slug: "los-lagos",
  nombre: "Los Lagos",
  nombreConArticulo: "la Región de Los Lagos",
  numero: "X",
  titular: "Estudio de títulos y resguardo de compraventas en la Región de Los Lagos",
  bajada:
    "Cierre seguro en Puerto Montt, Puerto Varas, Osorno, Castro, Ancud, Quellón y la provincia de Palena.",
  descripcion:
    "La Región de Los Lagos exige rigurosidad legal tanto en zonas urbanas como en predios insulares y de borde costero. Analizamos los títulos en los Conservadores de Puerto Montt, Puerto Varas, Osorno, Castro, Ancud y Calbuco.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Puerto Montt",
      comunas: ["Puerto Montt"],
      fuente: "https://www.cbrpuertomontt.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Puerto Varas",
      comunas: ["Puerto Varas", "Llanquihue", "Frutillar", "Fresia"],
      fuente: "https://www.cbrpuertovaras.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Osorno",
      comunas: ["Osorno", "Puyehue", "Puerto Octay", "San Pablo"],
      fuente: "https://www.cbrosorno.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Castro",
      comunas: ["Castro", "Chonchi", "Queilen", "Puqueldón"],
      fuente: "https://www.cbrcastro.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Ancud",
      comunas: ["Ancud", "Quemchi"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Calbuco",
      comunas: ["Calbuco"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Quellón",
      comunas: ["Quellón"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Qué particularidades tienen los títulos de propiedad en la Isla de Chiloé?",
      a: "Verificamos minuciosamente los títulos históricos, deslindes de bordemar, planos SAG archivados en el CBR de Castro o Ancud y ausencia de litigios familiares o territoriales.",
    },
    {
      q: "¿Cómo se protege el vale vista en compras en Puerto Varas o Frutillar?",
      a: "Se redacta la instrucción notarial estableciendo que la notaría retendrá los fondos hasta exhibir la copia autorizada del CBR de Puerto Varas con dominio vigente a nombre del comprador.",
    },
  ],
};
