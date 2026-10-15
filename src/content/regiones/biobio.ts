import type { RegionData } from "./types";

export const biobio: RegionData = {
  slug: "biobio",
  nombre: "Biobío",
  nombreConArticulo: "la Región del Biobío",
  numero: "VIII",
  titular: "Compraventas en la Región del Biobío, comuna por comuna",
  bajada:
    "Para propiedades en Concepción, Talcahuano, San Pedro de la Paz, Chiguayante, Coronel, Lota y Los Ángeles.",
  descripcion:
    "En el Gran Concepción casi cada comuna tiene su propio Conservador. Una propiedad en San Pedro de la Paz no se inscribe en Concepción, aunque esté a pocos minutos. Por eso partimos confirmando el Conservador competente y pedimos los certificados ahí.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Concepción",
      comunas: ["Concepción"],
      fuente: {
        url: "https://www.cbrconcepcion.cl/acerca.php",
        consultada: "2026-10-15",
      },
    },
    {
      nombre: "Conservador de Bienes Raíces de Talcahuano",
      comunas: ["Talcahuano", "Hualpén"],
    },
    {
      nombre: "Conservador de Bienes Raíces de San Pedro de la Paz",
      comunas: ["San Pedro de la Paz"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Chiguayante",
      comunas: ["Chiguayante"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Coronel",
      comunas: ["Coronel"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Lota",
      comunas: ["Lota"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Ángeles",
      comunas: ["Los Ángeles", "Quilleco"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Arauco",
      comunas: ["Arauco", "Curanilahue"],
    },
  ],
  faq: [
    {
      q: "Mi propiedad está en Hualpén. ¿Dónde se inscribe?",
      a: "Hualpén se creó en 2004 a partir de Talcahuano, y sus inscripciones antiguas pueden estar en ese Conservador. Confirmamos dónde está la inscripción vigente antes de pedir certificados.",
    },
    {
      q: "No podemos firmar el mismo día. ¿Es un problema?",
      a: "No. Cada parte puede firmar en un día distinto en la misma notaría, o mediante un mandatario con poder por escritura pública. La instrucción notarial y el vale vista quedan en esa notaría.",
    },
  ],
};
