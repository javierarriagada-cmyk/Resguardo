import type { RegionData } from "./types";

export const laAraucania: RegionData = {
  slug: "la-araucania",
  nombre: "La Araucanía",
  numero: "IX",
  titular: "Estudio de títulos y resguardo notarial en La Araucanía",
  bajada:
    "Seguridad legal garantizada para compraventas en Temuco, Padre Las Casas, Villarrica, Pucón, Angol y Lautaro.",
  descripcion:
    "La Región de La Araucanía combina sectores urbanos con alta demanda lacustre y rural. Verificamos la calidad del título, deslindes, exención o sujeción a la Ley Indígena N° 19.253 y gravámenes en los Conservadores de Temuco, Villarrica, Pucón, Angol y Lautaro.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Temuco",
      comunas: ["Temuco", "Padre Las Casas", "Vilcún"],
      fuente: "https://www.cbrtemuco.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Villarrica",
      comunas: ["Villarrica"],
      fuente: "https://www.cbrvillarrica.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Pucón",
      comunas: ["Pucón"],
      fuente: "https://www.cbrpucon.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Angol",
      comunas: ["Angol", "Renaico"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Lautaro",
      comunas: ["Lautaro", "Galvarino", "Perquenco"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Victoria",
      comunas: ["Victoria", "Curacautín"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Por qué es crucial revisar la calidad indígena del predio en La Araucanía?",
      a: "Si un predio reviste calidad indígena conforme a la Ley 19.253, existen restricciones legales estrictas para su enajenación o gravamen. El estudio confirma previamente la libre disposición.",
    },
    {
      q: "¿Cómo opera la instrucción notarial en compraventas en Villarrica y Pucón?",
      a: "El vale vista con el saldo o pie queda resguardado en la notaría de Villarrica o Pucón y solo se entrega al vendedor cuando el Conservador emite la inscripción libre de reparos.",
    },
  ],
};
