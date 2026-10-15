import type { RegionData } from "./types";

export const magallanes: RegionData = {
  slug: "magallanes",
  nombre: "Magallanes",
  nombreConArticulo: "la Región de Magallanes",
  numero: "XII",
  titular: "Compraventas en la Región de Magallanes y de la Antártica Chilena",
  bajada: "Para propiedades en Punta Arenas, Puerto Natales, Porvenir y Puerto Williams.",
  descripcion:
    "Además de casas y departamentos en Punta Arenas, en la región se venden predios rurales de gran superficie, a veces con servidumbres antiguas o con un origen fiscal. Revisamos la cadena de dominio completa y los planos archivados.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Punta Arenas",
      comunas: ["Punta Arenas", "San Gregorio", "Laguna Blanca", "Río Verde"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Puerto Natales",
      comunas: ["Natales", "Torres del Paine"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Porvenir",
      comunas: ["Porvenir", "Primavera", "Timaukel"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Cabo de Hornos",
      comunas: ["Cabo de Hornos", "Antártica"],
    },
  ],
  faq: [
    {
      q: "Compro un predio rural grande. ¿Qué revisamos?",
      a: "Al menos diez años de títulos, como suelen exigir los bancos; los gravámenes, los planos archivados y las servidumbres inscritas. Si el predio viene de una transferencia fiscal, las condiciones del título original.",
    },
    {
      q: "¿El vale vista queda a mi nombre o al del vendedor?",
      a: "Normalmente se toma a nombre del vendedor y queda en la notaría con una instrucción escrita. La notaría lo entrega solo cuando se cumple lo pactado, por lo general la inscripción a tu nombre.",
    },
  ],
};
