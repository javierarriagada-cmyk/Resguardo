import type { RegionData } from "./types";

export const aysen: RegionData = {
  slug: "aysen",
  nombre: "Aysén",
  nombreConArticulo: "la Región de Aysén",
  numero: "XI",
  titular: "Compraventas en la Región de Aysén, coordinadas a distancia",
  bajada: "Para propiedades en Coyhaique, Puerto Aysén, Chile Chico y Cochrane.",
  descripcion:
    "Las distancias en Aysén hacen que muchas operaciones se coordinen entre ciudades. Hacemos a distancia el estudio, la redacción y el seguimiento, y en los terrenos rurales revisamos con atención el origen del título, que a veces es una transferencia del Fisco.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Coyhaique",
      comunas: ["Coyhaique"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Puerto Aysén",
      comunas: ["Aysén", "Cisnes", "Guaitecas"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Chile Chico",
      comunas: ["Chile Chico", "Río Ibáñez"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Cochrane",
      comunas: ["Cochrane", "O’Higgins", "Tortel"],
    },
  ],
  faq: [
    {
      q: "El terreno fue entregado por el Fisco. ¿Qué revisamos?",
      a: "El título de dominio otorgado por Bienes Nacionales y si tiene condiciones o prohibiciones de enajenar inscritas. Si hay una limitación vigente, la venta puede necesitar autorización previa.",
    },
    {
      q: "¿Tenemos que firmar en la misma ciudad?",
      a: "No necesariamente. Cada parte puede firmar en un día distinto en la misma notaría o dar un poder por escritura pública a un mandatario.",
    },
  ],
};
