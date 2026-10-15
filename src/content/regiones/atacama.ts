import type { RegionData } from "./types";

export const atacama: RegionData = {
  slug: "atacama",
  nombre: "Atacama",
  nombreConArticulo: "la Región de Atacama",
  numero: "III",
  titular: "Cobertura registral e instruccional en la Región de Atacama",
  bajada:
    "Acompañamiento en compras y ventas de inmuebles en Copiapó, Vallenar, Caldera y Chañaral.",
  descripcion:
    "Atacama combina áreas urbanas, agrícolas y costeras. Estudiamos títulos de 10 años e hipotecas/gravámenes de 30 años en los Conservadores de Copiapó, Vallenar, Freirina y Chañaral.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Copiapó",
      comunas: ["Copiapó", "Caldera", "Tierra Amarilla"],
      fuente: "https://www.cbrcopiapo.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Vallenar",
      comunas: ["Vallenar", "Alto del Carmen"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Freirina",
      comunas: ["Freirina", "Huasco"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Chañaral",
      comunas: ["Chañaral", "Diego de Almagro"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Se realiza revisión de derechos de agua en propiedades agrícolas de Huasco o Vallenar?",
      a: "Sí, en propiedades rurales o parcelas examinamos las inscripciones en el Registro de Propiedad de Aguas del Conservador correspondiente para validar los derechos de aprovechamiento.",
    },
    {
      q: "¿Es posible firmar la escritura en Copiapó si el comprador está en Santiago?",
      a: "Sí. Coordinamos la firma mediante mandato o firman en distintas notarías bajo el mismo texto de escritura pactado.",
    },
  ],
};
