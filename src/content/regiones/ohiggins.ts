import type { RegionData } from "./types";

export const ohiggins: RegionData = {
  slug: "ohiggins",
  nombre: "O’Higgins",
  nombreConArticulo: "la Región de O’Higgins",
  numero: "VI",
  titular: "Compraventas en la Región de O’Higgins, en la ciudad y en el campo",
  bajada:
    "Para propiedades en Rancagua, Machalí, San Fernando, Santa Cruz, Pichilemu y las comunas agrícolas de Colchagua y Cachapoal.",
  descripcion:
    "Si compras un terreno agrícola o una parcela, además del dominio revisamos los derechos de agua, las servidumbres de paso y si la subdivisión del predio está aprobada.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Rancagua",
      comunas: ["Rancagua", "Machalí", "Graneros"],
    },
    {
      nombre: "Conservador de Bienes Raíces de San Fernando",
      comunas: ["San Fernando", "Chimbarongo"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Rengo",
      comunas: ["Rengo", "Malloa", "Requínoa"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Santa Cruz",
      comunas: ["Santa Cruz", "Palmilla", "Chépica"],
    },
    {
      nombre: "Conservador de Bienes Raíces de San Vicente de Tagua Tagua",
      comunas: ["San Vicente", "Pichidegua"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Pichilemu",
      comunas: ["Pichilemu", "Marchigüe", "La Estrella"],
    },
  ],
  faq: [
    {
      q: "La parcela tiene un camino de acceso por el campo del vecino. ¿Es un problema?",
      a: "Puede serlo si esa servidumbre de tránsito no está constituida ni inscrita. La buscamos en los títulos y, si no existe, te decimos cómo constituirla antes de comprar.",
    },
    {
      q: "¿El rol de avalúo tiene que estar separado?",
      a: "Si compras un lote que salió de una subdivisión, conviene que tenga su propio rol en el SII. Si todavía está en trámite, lo dejamos escrito en la promesa y en la escritura.",
    },
  ],
};
