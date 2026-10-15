import type { RegionData } from "./types";

export const tarapaca: RegionData = {
  slug: "tarapaca",
  nombre: "Tarapacá",
  nombreConArticulo: "la Región de Tarapacá",
  numero: "I",
  titular: "Revisión de títulos y escrituras en la Región de Tarapacá",
  bajada:
    "Acompañamos tus operaciones en Iquique, Alto Hospicio y la Provincia del Tamarugal con estudio riguroso de títulos.",
  descripcion:
    "En la Región de Tarapacá, el dinámico mercado de Iquique y Alto Hospicio requiere revisar cuidadosamente los deslindes, inscripciones de dominio y gravámenes en los Conservadores competentes.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Iquique",
      comunas: ["Iquique", "Alto Hospicio"],
      fuente: "https://www.cbriquique.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Pozo Almonte",
      comunas: ["Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Qué aspectos se revisan en los títulos de Alto Hospicio?",
      a: "En Alto Hospicio se verifica especialmente la regularidad de las transferencias originales del Serviu o Bienes Nacionales, asegurando que no existan prohibiciones de enajenar vigentes.",
    },
    {
      q: "¿Cómo se custodia el pago en una compraventa en Iquique?",
      a: "El pago queda resguardado mediante instrucciones notariales con vale vista en la notaría acordada de Iquique, liberándose únicamente tras la inscripción conforme en el CBR de Iquique.",
    },
  ],
};
