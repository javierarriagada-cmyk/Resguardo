import type { RegionData } from "./types";

export const maule: RegionData = {
  slug: "maule",
  nombre: "Maule",
  numero: "VII",
  titular: "Compraventas protegidas y estudio registral en la Región del Maule",
  bajada:
    "Cierre transparente de operaciones inmobiliarias en Talca, Curicó, Linares, Cauquenes y Constitución.",
  descripcion:
    "El mercado maulino abarca zonas urbanas en expansión y amplio sector agrícola. Analizamos los títulos en los Conservadores de Talca, Curicó, Linares, Cauquenes, Constitución, San Javier, Parral y Molinetes.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Talca",
      comunas: ["Talca", "Pelarco", "Pencahue", "San Clemente", "Rio Claro"],
      fuente: "https://www.cbrtalca.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Curicó",
      comunas: ["Curicó", "Rauco", "Romeral", "Teno"],
      fuente: "https://www.cbrcurico.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Linares",
      comunas: ["Linares", "Colbún", "Yerbas Buenas"],
      fuente: "https://www.cbrlinares.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Cauquenes",
      comunas: ["Cauquenes"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Constitución",
      comunas: ["Constitución", "Empedrado"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de Parral",
      comunas: ["Parral", "Retiro"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Cuánto demora la inscripción en los Conservadores de Talca y Curicó?",
      a: "Por lo general, las inscripciones de dominio y alzamientos en Talca y Curicó demoran entre 5 y 10 días hábiles una vez ingresada la escritura.",
    },
    {
      q: "¿Se realiza revisión de sucesiones y herencias en la Región del Maule?",
      a: "Sí. Verificamos la Posesión Efectiva (Registro Civil o Tribunal), pago o exención del Impuesto a las Herencias ante el SII e Inscripción Especial de Herencia en el CBR.",
    },
  ],
};
