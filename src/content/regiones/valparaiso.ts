import type { RegionData } from "./types";

export const valparaiso: RegionData = {
  slug: "valparaiso",
  nombre: "Valparaíso",
  numero: "V",
  titular: "Estudio de títulos y custodia notarial en la Región de Valparaíso",
  bajada:
    "Protegemos tus transacciones en Viña del Mar, Valparaíso, Concón, Quilpué, Quillota, San Antonio y Los Andes.",
  descripcion:
    "La Región de Valparaíso cuenta con una gran diversidad de Conservadores. Revisamos cuidadosamente certificados de deslindes, recepciones municipales, gravámenes y afectaciones a utilidad pública en Viña del Mar, Valparaíso, Marga Marga y el Litoral Central.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Valparaíso",
      comunas: ["Valparaíso", "Juan Fernández"],
      fuente: "https://www.cbrvalparaiso.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Viña del Mar",
      comunas: ["Viña del Mar", "Concón"],
      fuente: "https://www.cbrvina.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Quilpué",
      comunas: ["Quilpué"],
      fuente: "https://www.cbrquilpue.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Villa Alemana",
      comunas: ["Villa Alemana"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Quillota",
      comunas: ["Quillota", "La Cruz", "La Calera", "Nogales", "Hijkena"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de San Antonio",
      comunas: ["San Antonio", "Santo Domingo", "Cartagena"],
      fuente: "https://www.cbrsanantonio.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Andes",
      comunas: ["Los Andes", "Calle Larga", "San Esteban", "Rinconada"],
      verificado: false,
    },
    {
      nombre: "Conservador de Bienes Raíces de San Felipe",
      comunas: ["San Felipe", "Putaendo", "Santa María", "Panquehue", "Llaillay", "Catemu"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Cómo es el flujo con la notaría e instrucción en Viña del Mar y Valparaíso?",
      a: "Acordamos el borrador con las partes, se coordina la firma en la notaría elegida en Viña del Mar o Valparaíso con entrega de vale vista bajo instrucción notarial.",
    },
    {
      q: "¿Se revisa el pago de contribuciones y aseo en propiedades de la costa?",
      a: "Sí, auditamos la deuda de contribuciones ante Tesorería y los certificados de derechos de aseo municipal antes de autorizar la escritura.",
    },
  ],
};
