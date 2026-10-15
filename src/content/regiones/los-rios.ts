import type { RegionData } from "./types";

export const losRios: RegionData = {
  slug: "los-rios",
  nombre: "Los Ríos",
  nombreConArticulo: "la Región de Los Ríos",
  numero: "XIV",
  titular: "Compraventas en la Región de Los Ríos, en Valdivia y en los lagos",
  bajada: "Para propiedades en Valdivia, Panguipulli, La Unión, Río Bueno, Los Lagos y Futrono.",
  descripcion:
    "Si compras una parcela o una casa junto a los lagos Ranco, Panguipulli o Calafquén, revisamos con más cuidado los accesos, las servidumbres y si el lote viene de una subdivisión aprobada.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Valdivia",
      comunas: ["Valdivia", "Corral"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Panguipulli",
      comunas: ["Panguipulli"],
    },
    {
      nombre: "Conservador de Bienes Raíces de La Unión",
      comunas: ["La Unión"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Río Bueno",
      comunas: ["Río Bueno", "Lago Ranco"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Lagos",
      comunas: ["Los Lagos", "Futrono"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Paillaco",
      comunas: ["Paillaco"],
    },
  ],
  faq: [
    {
      q: "¿Qué revisamos en una parcela junto a un lago?",
      a: "El dominio, el plano de subdivisión archivado, los deslindes con el lago y el camino de acceso. Si el acceso cruza otros predios, verificamos que la servidumbre esté inscrita.",
    },
    {
      q: "Mis títulos dicen “Región de Los Lagos”. ¿Está mal?",
      a: "No. Los Ríos se creó en 2007 (Ley 20.174) y los títulos anteriores citan la región de entonces. Lo importante es que la cadena de inscripciones esté completa en el Conservador que corresponde a la comuna.",
    },
  ],
};
