import type { RegionData } from "./types";

export const ohiggins: RegionData = {
  slug: "ohiggins",
  nombre: "O’Higgins",
  numero: "VI",
  titular: "Estudio de títulos y resguardo legal en la Región de O’Higgins",
  bajada:
    "Acompañamiento integral en Rancagua, Machalí, San Fernando, Pichilemu y comunas agrícolas de Cachapoal, Colchagua y Cardenal Caro.",
  descripcion:
    "En la Región de O’Higgins es habitual encontrar propiedades urbanas y terrenos agrícolas o loteos rústicos. Auditamos títulos de 10 años, derechos de aguas y gravámenes registrales en Rancagua, San Fernando, Rengo, Pichilemu y Peralillo.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Rancagua",
      comunas: ["Rancagua", "Machalí", "Graneros"],
      fuente: "https://www.cbrrancagua.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de San Fernando",
      comunas: ["San Fernando", "Chimbarongo"],
      fuente: "https://www.cbrsanfernando.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Rengo",
      comunas: ["Rengo", "Malloa", "Requínoa"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Pichilemu",
      comunas: ["Pichilemu", "Marchigüe", "La Estrella"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Santa Cruz",
      comunas: ["Santa Cruz", "Palmilla", "Chépica"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de San Vicente de Tagua Tagua",
      comunas: ["San Vicente", "Pichidegua"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Qué precauciones se deben tomar al comprar parcelas en Machalí o Pichilemu?",
      a: "Revisamos que la subdivisión cumpla con la normativa del SAG, no existan prohibiciones SERVIU o hipotecas agrícolas pendientes y se cuente con rol individualizado del SII.",
    },
    {
      q: "¿Cómo se gestiona el envío de la escritura a las notarías de Rancagua?",
      a: "Acordamos el texto final con ambas partes, coordinamos la firma presencial y aseguramos la custodia del dinero bajo instrucción notarial.",
    },
  ],
};
