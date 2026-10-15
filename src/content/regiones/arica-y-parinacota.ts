import type { RegionData } from "./types";

export const aricaParinacota: RegionData = {
  slug: "arica-y-parinacota",
  nombre: "Arica y Parinacota",
  numero: "XV",
  titular: "Estudio de títulos y escrituras en la Región de Arica y Parinacota",
  bajada:
    "Acompañamos tu compraventa en el extremo norte de Chile, coordinando revisiones registrales y notariales en Arica y Putre.",
  descripcion:
    "La Región de Arica y Parinacota cuenta con particularidades territoriales y fronterizas en sus títulos. Revisamos la cadena de dominio y prohibiciones en los Conservadores locales para garantizar que tu inversión esté 100% protegida antes de enviar la escritura a notaría.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Arica",
      comunas: ["Arica", "Camarones"],
      fuente: "https://www.cbrarica.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces y Letras de Putre",
      comunas: ["Putre", "General Lagos"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
  ],
  faq: [
    {
      q: "¿Cuánto demora la inscripción en el Conservador de Bienes Raíces de Arica?",
      a: "El Conservador de Arica suele tramitar las inscripciones de compraventa en un plazo aproximado de 5 a 10 días hábiles, siempre que la carpeta registral no presente reparos o falta de certificados municipales.",
    },
    {
      q: "¿Cómo se gestionan las propiedades ubicadas en zonas fronterizas en Parinacota?",
      a: "En comunas como Putre o General Lagos, la pauta de estudio revisa restricciones especiales relativas a adquirentes extranjeros y normas de fronteras vigentes en la legislación chilena.",
    },
  ],
};
