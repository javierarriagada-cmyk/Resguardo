import type { RegionData } from "./types";

export const coquimbo: RegionData = {
  slug: "coquimbo",
  nombre: "Coquimbo",
  nombreConArticulo: "la Región de Coquimbo",
  numero: "IV",
  titular: "Compraventas en la Región de Coquimbo, de La Serena al Valle del Elqui",
  bajada:
    "Para departamentos en la costa, casas en Ovalle e Illapel y parcelas en el Valle del Elqui.",
  descripcion:
    "Si compras una parcela de agrado, revisamos que el lote venga de una subdivisión aprobada y que la superficie calce con el plano archivado en el Conservador.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de La Serena",
      comunas: ["La Serena", "La Higuera"],
      fuente: {
        url: "https://cbrls.cl/",
        consultada: "2026-10-15",
      },
    },
    {
      nombre: "Conservador de Bienes Raíces de Coquimbo",
      comunas: ["Coquimbo"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Ovalle",
      comunas: ["Ovalle", "Monte Patria", "Punitaqui", "Río Hurtado"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Vicuña",
      comunas: ["Vicuña", "Paihuano"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Illapel",
      comunas: ["Illapel", "Salamanca"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Vilos",
      comunas: ["Los Vilos", "Canela"],
    },
  ],
  faq: [
    {
      q: "¿Qué revisamos en una parcela del Valle del Elqui?",
      a: "Que la subdivisión respete el DL 3.516, art. 1, que fija en media hectárea el mínimo de los lotes rústicos, y que el plano esté certificado por el SAG y archivado en el Conservador. Si el lote es menor, puede tener problemas para obtener permisos o un crédito.",
    },
    {
      q: "Compro un departamento para arrendar en la costa. ¿Qué pido?",
      a: "Además de los certificados de dominio y de hipotecas y gravámenes, el reglamento de copropiedad (hoy regido por la Ley 21.442) y un certificado de la administración sobre la deuda de gastos comunes.",
    },
  ],
};
