import type { RegionData } from "./types";

export const nuble: RegionData = {
  slug: "nuble",
  nombre: "Ñuble",
  numero: "XVI",
  titular: "Estudio de títulos y resguardo notarial en la Región de Ñuble",
  bajada:
    "Acompañamiento especializado para compraventas en Chillán, Chillán Viejo, San Carlos, Bulnes y toda la provincia del Diguillín, Punilla e Itata.",
  descripcion:
    "La Región de Ñuble consolidó su institucionalidad registral propia. Analizamos en detalle las cadenas de dominio, inscripciones de herencia, expropiaciones viales y gravámenes en los Conservadores de Chillán, San Carlos, Yungay, Bulnes y Coelemu.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Chillán",
      comunas: ["Chillán", "Chillán Viejo", "Pinto", "Coihueco"],
      fuente: "https://www.cbrchillan.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de San Carlos",
      comunas: ["San Carlos", "San Nicolás"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Bulnes",
      comunas: ["Bulnes", "San Ignacio"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Yungay",
      comunas: ["Yungay", "Pemuco", "El Carmen", "Tucapel"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Quirihue",
      comunas: ["Quirihue", "Cobquecura", "Ninhue"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Qué aspectos son claves al comprar en zonas turísticas o costeras como Cobquecura o Pinto?",
      a: "Revisamos los deslindes, resoluciones ambientales o forestales aplicables, permisos municipales y ausencia de prohibiciones o litigios pendientes.",
    },
    {
      q: "¿Cuándo se liberan los fondos en una compraventa en Chillán?",
      a: "La custodia notarial entrega los vale vista al vendedor únicamente cuando disponemos de la copia autorizada con la inscripción vigente emitida por el CBR de Chillán.",
    },
  ],
};
