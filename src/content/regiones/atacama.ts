import type { RegionData } from "./types";

export const atacama: RegionData = {
  slug: "atacama",
  nombre: "Atacama",
  nombreConArticulo: "la Región de Atacama",
  numero: "III",
  titular: "Compraventas en la Región de Atacama: títulos, escritura y pago protegido",
  bajada: "Para casas, departamentos y parcelas en Copiapó, Caldera, Vallenar, Huasco y Chañaral.",
  descripcion:
    "Si compras una parcela en los valles de Copiapó o del Huasco junto con derechos de aprovechamiento de aguas, revisamos esos derechos por separado: tienen su propio registro en el Conservador y conviene que la escritura los transfiera expresamente.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Copiapó",
      comunas: ["Copiapó", "Caldera", "Tierra Amarilla"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Vallenar",
      comunas: ["Vallenar", "Alto del Carmen"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Freirina",
      comunas: ["Freirina", "Huasco"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Chañaral",
      comunas: ["Chañaral", "Diego de Almagro"],
    },
  ],
  faq: [
    {
      q: "La parcela viene con derechos de agua. ¿Qué revisamos?",
      a: "Que los derechos estén inscritos a nombre del vendedor en el Registro de Propiedad de Aguas del Conservador, que no tengan gravámenes y que la escritura los transfiera expresamente.",
    },
    {
      q: "¿Puedo comprar desde Santiago?",
      a: "Sí. El estudio, la escritura y el seguimiento son a distancia. Para firmar tienes que ir a la notaría donde se otorga la escritura o dar un poder por escritura pública a un mandatario que firme por ti.",
    },
  ],
};
