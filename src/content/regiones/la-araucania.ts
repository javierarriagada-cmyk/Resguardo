import type { RegionData } from "./types";

export const laAraucania: RegionData = {
  slug: "la-araucania",
  nombre: "La Araucanía",
  nombreConArticulo: "la Región de La Araucanía",
  numero: "IX",
  titular: "Compraventas en la Región de La Araucanía, con la Ley Indígena en el radar",
  bajada:
    "Para propiedades en Temuco, Padre Las Casas, Villarrica, Pucón, Angol, Victoria y Lautaro.",
  descripcion:
    "En La Araucanía, una parte del territorio son tierras indígenas protegidas por la Ley 19.253. Antes de comprar un terreno rural o en sectores lacustres verificamos su calidad jurídica, porque esas tierras tienen limitaciones legales para venderse.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Temuco",
      comunas: ["Temuco", "Vilcún"],
    },
    {
      nombre: "Segundo Conservador de Bienes Raíces de Temuco",
      comunas: ["Padre Las Casas", "Freire"],
      fuente: {
        url: "https://segundoconservadortemuco.cl/informacion/conservador.php",
        consultada: "2026-10-15",
      },
    },
    {
      nombre: "Conservador de Bienes Raíces de Villarrica",
      comunas: ["Villarrica"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Pucón",
      comunas: ["Pucón"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Angol",
      comunas: ["Angol", "Renaico"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Lautaro",
      comunas: ["Lautaro", "Galvarino", "Perquenco"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Victoria",
      comunas: ["Victoria", "Curacautín"],
    },
  ],
  faq: [
    {
      q: "¿Por qué importa si un terreno es tierra indígena?",
      a: "Porque la Ley 19.253, art. 13, impide enajenar, embargar o adquirir por prescripción las tierras indígenas, salvo entre comunidades o personas indígenas de una misma etnia; gravarlas requiere autorización de la CONADI. Un contrato que infrinja esa regla adolece de nulidad absoluta.",
    },
    {
      q: "Compro en Padre Las Casas. ¿Es el mismo Conservador que Temuco?",
      a: "No. Padre Las Casas y Freire se inscriben en el Segundo Conservador de Temuco, según su propio sitio. Pedimos los certificados en el oficio que corresponde.",
    },
  ],
};
