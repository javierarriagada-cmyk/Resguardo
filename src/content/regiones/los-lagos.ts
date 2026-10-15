import type { RegionData } from "./types";

export const losLagos: RegionData = {
  slug: "los-lagos",
  nombre: "Los Lagos",
  nombreConArticulo: "la Región de Los Lagos",
  numero: "X",
  titular: "Compraventas en la Región de Los Lagos, del continente a Chiloé",
  bajada:
    "Para propiedades en Puerto Montt, Puerto Varas, Osorno, Frutillar, Castro, Ancud y Quellón.",
  descripcion:
    "En Chiloé y en la ribera del Llanquihue hay títulos antiguos, con deslindes descritos con nombres de vecinos o accidentes del terreno. Comparamos esa descripción con el plano y con lo que existe hoy, para que sepas exactamente qué compras.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Puerto Montt",
      comunas: ["Puerto Montt"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Puerto Varas",
      comunas: ["Puerto Varas", "Llanquihue", "Frutillar", "Fresia"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Osorno",
      comunas: ["Osorno", "Puyehue", "Puerto Octay", "San Pablo"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Calbuco",
      comunas: ["Calbuco"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Castro",
      comunas: ["Castro", "Chonchi", "Queilén", "Puqueldón"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Ancud",
      comunas: ["Ancud", "Quemchi"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Quellón",
      comunas: ["Quellón"],
    },
  ],
  faq: [
    {
      q: "El título describe los deslindes con nombres de vecinos. ¿Sirve?",
      a: "Sirve si permite identificar el inmueble sin dudas. Cuando la descripción es vaga, recomendamos un plano y, a veces, una escritura de aclaración antes de vender o hipotecar.",
    },
    {
      q: "¿Cuándo recibe el vendedor el pago?",
      a: "Cuando se cumple la instrucción notarial: normalmente, cuando la notaría recibe la copia de la inscripción a nombre del comprador, sin hipotecas ni prohibiciones distintas de las pactadas.",
    },
  ],
};
