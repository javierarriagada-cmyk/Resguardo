import type { RegionData } from "./types";

export const biobio: RegionData = {
  slug: "biobio",
  nombre: "Biobío",
  nombreConArticulo: "la Región del Biobío",
  numero: "VIII",
  titular: "Servicios legales inmobiliarios en la Región del Biobío",
  bajada:
    "Acompañamiento en tus transacciones en Concepción, Talcahuano, San Pedro de la Paz, Los Ángeles, Coronel, Chiguayante y Arauco.",
  descripcion:
    "El mercado inmobiliario e industrial del Biobío exige un estudio riguroso. Revisamos 10 años de dominio y 30 años de gravámenes en los Conservadores de Concepción, Talcahuano, San Pedro de la Paz, Chiguayante, Los Ángeles, Coronel y Cañete.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Concepción",
      comunas: ["Concepción", "Penco", "Hualqui"],
      fuente: "https://www.cbrconcepcion.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Talcahuano",
      comunas: ["Talcahuano", "Hualpén"],
      fuente: "https://www.cbrtalcahuano.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de San Pedro de la Paz",
      comunas: ["San Pedro de la Paz"],
      fuente: "https://www.cbrsanpedro.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Ángeles",
      comunas: ["Los Ángeles", "Quilleco"],
      fuente: "https://www.cbrlosangeles.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Coronel",
      comunas: ["Coronel"],
      fuente: "https://www.cbrcoronel.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Chiguayante",
      comunas: ["Chiguayante"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Lota",
      comunas: ["Lota"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Arauco",
      comunas: ["Arauco", "Curanilahue"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Cómo gestionan el proceso si las partes están en distintas comunas del Gran Concepción?",
      a: "Acordamos una notaría centralizada o coordinamos firmas en distintas notarías (ej. San Pedro y Concepción) utilizando la misma redacción de escritura y custodia de vale vista.",
    },
    {
      q: "¿Cuánto demora la inscripción en el Gran Concepción?",
      a: "Los CBR del Gran Concepción (Concepción, Talcahuano, San Pedro) registran las escrituras en un promedio de 6 a 12 días hábiles.",
    },
  ],
};
