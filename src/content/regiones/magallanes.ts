import type { RegionData } from "./types";

export const magallanes: RegionData = {
  slug: "magallanes",
  nombre: "Magallanes",
  numero: "XII",
  titular: "Estudio de títulos y firma respaldada en Magallanes y Antártica Chilena",
  bajada:
    "Seguridad plena en compraventas urbanas y rústicas en Punta Arenas, Puerto Natales, Porvenir y Cabo de Hornos.",
  descripcion:
    "En la región austral de Chile revisamos detenidamente la legalidad de los títulos, servidumbres y gravámenes en los Conservadores de Punta Arenas, Puerto Natales, Porvenir y Cabo de Hornos.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Punta Arenas",
      comunas: ["Punta Arenas", "San Gregorio", "Laguna Blanca", "Río Verde"],
      fuente: "https://www.cbrpuntaarenas.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces y Letras de Puerto Natales",
      comunas: ["Natales", "Torres del Paine"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces y Letras de Porvenir",
      comunas: ["Porvenir", "Primavera", "Timaukel"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces y Letras de Cabo de Hornos",
      comunas: ["Cabo de Hornos", "Antártica"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Cuánto tiempo toma inscribir una propiedad en el CBR de Punta Arenas?",
      a: "El Conservador de Punta Arenas suele demorar entre 5 y 10 días hábiles en procesar e inscribir la escritura de compraventa.",
    },
    {
      q: "¿Cómo opera la garantía de la custodia del pago en Magallanes?",
      a: "El comprador emite el vale vista a nombre del vendedor pero la notaría de Punta Arenas o Puerto Natales lo retiene bajo la condición expresada en la instrucción de inscribir la propiedad a su nombre.",
    },
  ],
};
