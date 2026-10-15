import type { RegionData } from "./types";

export const nuble: RegionData = {
  slug: "nuble",
  nombre: "Ñuble",
  nombreConArticulo: "la Región de Ñuble",
  numero: "XVI",
  titular: "Compraventas en la Región de Ñuble, de Chillán a la costa",
  bajada:
    "Para propiedades en Chillán, Chillán Viejo, San Carlos, Bulnes, Yungay, Quirihue y Cobquecura.",
  descripcion:
    "Ñuble es región desde 2018 (Ley 21.033). Los títulos anteriores pueden citar a la antigua provincia de Ñuble de la Región del Biobío. No es un error: lo que importa es que la inscripción esté en el Conservador que corresponde a la comuna.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Chillán",
      comunas: ["Chillán", "Chillán Viejo", "Pinto", "Coihueco"],
    },
    {
      nombre: "Conservador de Bienes Raíces de San Carlos",
      comunas: ["San Carlos", "San Nicolás"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Bulnes",
      comunas: ["Bulnes", "San Ignacio"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Yungay",
      comunas: ["Yungay", "Pemuco", "El Carmen", "Tucapel"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Quirihue",
      comunas: ["Quirihue", "Cobquecura", "Ninhue"],
    },
  ],
  faq: [
    {
      q: "Mis títulos dicen “Región del Biobío”. ¿Hay que corregirlos?",
      a: "No. La creación de la región no obliga a rectificar las inscripciones. Revisamos que la propiedad esté bien individualizada y que la cadena de inscripciones esté completa.",
    },
    {
      q: "Compro un terreno en la costa de Cobquecura. ¿Qué revisamos?",
      a: "El dominio y los gravámenes, los deslindes y el acceso. Si el terreno da al mar, revisamos que la venta no incluya la playa de mar, que es un bien nacional de uso público (Código Civil, arts. 589 y 594).",
    },
  ],
};
