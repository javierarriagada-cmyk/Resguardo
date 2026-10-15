import type { RegionData } from "./types";

export const valparaiso: RegionData = {
  slug: "valparaiso",
  nombre: "Valparaíso",
  nombreConArticulo: "la Región de Valparaíso",
  numero: "V",
  titular:
    "Compraventas en la Región de Valparaíso, con el Conservador que corresponde a cada comuna",
  bajada:
    "Para propiedades en Valparaíso, Viña del Mar, Quilpué, Villa Alemana, Quillota, San Antonio y Los Andes.",
  descripcion:
    "En la región hay muchos Conservadores y comunas vecinas que no comparten registro: Valparaíso y Viña del Mar, por ejemplo, tienen Conservadores distintos. Antes de pedir un certificado confirmamos cuál es el competente, para no pagar documentos que no sirven.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Valparaíso",
      comunas: ["Valparaíso"],
      fuente: {
        url: "https://www.cbrvalpo.cl/acerca.php",
        consultada: "2026-10-15",
      },
    },
    {
      nombre: "Conservador de Bienes Raíces de Viña del Mar",
      comunas: ["Viña del Mar", "Concón"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Quilpué",
      comunas: ["Quilpué"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Villa Alemana",
      comunas: ["Villa Alemana"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Quillota",
      comunas: ["Quillota", "La Cruz", "La Calera", "Nogales", "Hijuelas"],
    },
    {
      nombre: "Conservador de Bienes Raíces de San Antonio",
      comunas: ["San Antonio", "Santo Domingo", "Cartagena"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Los Andes",
      comunas: ["Los Andes", "Calle Larga", "San Esteban", "Rinconada"],
    },
    {
      nombre: "Conservador de Bienes Raíces de San Felipe",
      comunas: ["San Felipe", "Putaendo", "Santa María", "Panquehue", "Llaillay", "Catemu"],
    },
  ],
  faq: [
    {
      q: "Mi casa está en un cerro de Valparaíso. ¿Hay algo especial?",
      a: "A veces los deslindes antiguos no calzan con lo construido o hay ampliaciones sin recepción municipal. Comparamos la inscripción con el plano y con los certificados municipales, y te decimos qué hay que regularizar antes de firmar.",
    },
    {
      q: "¿Quién paga las contribuciones atrasadas?",
      a: "Las partes lo acuerdan en la promesa. Pedimos el certificado de deuda de contribuciones de la Tesorería para saber si hay deuda y dejar escrito quién la paga, normalmente con cargo al precio.",
    },
  ],
};
