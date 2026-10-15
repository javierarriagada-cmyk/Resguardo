import type { RegionData } from "./types";

export const aricaParinacota: RegionData = {
  slug: "arica-y-parinacota",
  nombre: "Arica y Parinacota",
  nombreConArticulo: "la Región de Arica y Parinacota",
  numero: "XV",
  titular: "Compraventas en la Región de Arica y Parinacota, de la revisión a la inscripción",
  bajada:
    "Estudio de títulos, escritura e instrucción notarial para propiedades en Arica, Camarones, Putre y General Lagos.",
  descripcion:
    "Es una región fronteriza con Perú y Bolivia, y eso tiene consecuencias legales para algunos compradores. Revisamos la cadena de dominio, los gravámenes y las prohibiciones inscritas, y te decimos si la operación tiene alguna restricción antes de que pagues.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Arica",
      comunas: ["Arica", "Camarones"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Putre",
      comunas: ["Putre", "General Lagos"],
    },
  ],
  faq: [
    {
      q: "¿Puede cualquier persona comprar una propiedad en zona fronteriza?",
      a: "No siempre. El DL 1.939, art. 7, prohíbe a los nacionales de países limítrofes adquirir el dominio u otros derechos reales sobre inmuebles ubicados en zonas declaradas fronterizas, salvo que se les autorice. Si el comprador es peruano, boliviano o argentino, lo revisamos antes de redactar la promesa.",
    },
    {
      q: "Vivo en otra región. ¿Tengo que viajar a Arica?",
      a: "Solo para firmar en la notaría, y ni siquiera eso si das un poder por escritura pública a un mandatario. Las partes pueden firmar en días distintos en la misma notaría. El estudio, la redacción y el seguimiento se hacen a distancia.",
    },
  ],
};
