import type { RegionData } from "./types";

export const tarapaca: RegionData = {
  slug: "tarapaca",
  nombre: "Tarapacá",
  nombreConArticulo: "la Región de Tarapacá",
  numero: "I",
  titular: "Compraventas en la Región de Tarapacá con el pago en custodia",
  bajada: "Para propiedades en Iquique, Alto Hospicio y las comunas de la provincia del Tamarugal.",
  descripcion:
    "Si la vivienda que compras en Iquique o Alto Hospicio se adquirió con subsidio habitacional, revisamos con especial cuidado las prohibiciones de enajenar inscritas a favor del SERVIU y si siguen vigentes o ya se alzaron.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Iquique",
      comunas: ["Iquique", "Alto Hospicio"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Pozo Almonte",
      comunas: ["Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    },
  ],
  faq: [
    {
      q: "Compro una vivienda que tuvo subsidio. ¿Qué miramos?",
      a: "El Registro de Prohibiciones del Conservador. Si hay una prohibición vigente a favor del SERVIU, la venta necesita su autorización o el alzamiento previo. Te decimos cuál de las dos corresponde antes de firmar la promesa.",
    },
    {
      q: "¿Dónde queda el dinero mientras se inscribe?",
      a: "En la notaría, con un vale vista y una instrucción notarial escrita. La notaría lo entrega al vendedor solo cuando se cumplen las condiciones pactadas, normalmente la inscripción del dominio a nombre del comprador.",
    },
  ],
};
