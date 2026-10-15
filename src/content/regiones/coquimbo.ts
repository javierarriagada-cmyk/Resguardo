import type { RegionData } from "./types";

export const coquimbo: RegionData = {
  slug: "coquimbo",
  nombre: "Coquimbo",
  numero: "IV",
  titular: "Estudio de títulos y resguardo de fondos en Coquimbo y La Serena",
  bajada:
    "Acompañamiento legal completo para compraventas en La Serena, Coquimbo, Ovalle, Illapel y el Valle del Elqui.",
  descripcion:
    "La Región de Coquimbo presenta un dinámico mercado residencial y vacacional. Analizamos la legalidad de parcelaciones, recepciones finales municipales y antecedentes registrales en los Conservadores de La Serena, Coquimbo, Ovalle, Vicuña e Illapel.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de La Serena",
      comunas: ["La Serena"],
      fuente: "https://www.cbrlaserena.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Coquimbo",
      comunas: ["Coquimbo"],
      fuente: "https://www.cbrcoquimbo.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Ovalle",
      comunas: ["Ovalle", "Monte Patria", "Punitaqui", "Río Hurtado"],
      fuente: "https://www.cbrovalle.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Vicuña",
      comunas: ["Vicuña", "Paihuano"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Illapel",
      comunas: ["Illapel", "Salamanca"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Vilos",
      comunas: ["Los Vilos", "Canela"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Qué resguardos especiales se aplican a parcelas en el Valle del Elqui?",
      a: "Revisamos el cumplimiento del DL 3.516 sobre división de predios rústicos, resoluciones del SAG y certificaciones del Servicio de Impuestos Internos.",
    },
    {
      q: "¿Cuánto tarda la inscripción en La Serena y Coquimbo?",
      a: "En promedio, el proceso de inscripción en los CBR de La Serena y Coquimbo demora entre 5 y 10 días hábiles tras el ingreso formal de la escritura.",
    },
  ],
};
