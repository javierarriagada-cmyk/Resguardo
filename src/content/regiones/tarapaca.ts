import type { RegionData } from "./types";

export const tarapaca: RegionData = {
  slug: "tarapaca",
  nombre: "Tarapacá",
  numero: "I",
  titular: "Seguridad jurídica en compraventas inmobiliarias en Tarapacá",
  bajada:
    "Protegemos tus operaciones en Iquique, Alto Hospicio y la Provincia del Tamarugal con estudio exhaustivo de títulos.",
  descripcion:
    "En la Región de Tarapacá, el dinámico mercado de Iquique y Alto Hospicio requiere revisar cuidadosamente los deslindes, inscripciones de dominio y gravámenes. Gestionamos la revisión registral en los Conservadores de Iquique y Pozo Almonte.",
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
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
  ],
  faq: [
    {
      q: "¿Qué aspectos particulares se revisan en los títulos de Alto Hospicio?",
      a: "En Alto Hospicio se verifica especialmente la regularidad de las transferencias originales del Serviu o Bienes Nacionales, asegurando que no existan prohibiciones de enajenar vigentes.",
    },
    {
      q: "¿Cómo se custodia el pago en una compraventa en Iquique?",
      a: "El pago queda resguardado mediante instrucciones notariales con vale vista en la notaría acordada de Iquique, liberándose únicamente tras la inscripción conforme en el CBR de Iquique.",
    },
  ],
};
