import type { RegionData } from "./types";

export const antofagasta: RegionData = {
  slug: "antofagasta",
  nombre: "Antofagasta",
  numero: "II",
  titular: "Estudio de títulos y firma protegida en la Región de Antofagasta",
  bajada:
    "Cierre legal transparente para compraventas en Antofagasta, Calama, Tocopilla y comunas mineras.",
  descripcion:
    "El mercado inmobiliario en Antofagasta y Calama se caracteriza por inmuebles de alto valor y complejas cadenas de dominio. Evaluamos gravámenes de 30 años, concesiones o servidumbres aplicables y vigencias de dominio en toda la región.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Antofagasta",
      comunas: ["Antofagasta", "Mejillones"],
      fuente: "https://www.cbrantofagasta.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Calama",
      comunas: ["Calama", "Ollagüe", "San Pedro de Atacama"],
      fuente: "https://www.cbrcalama.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Tocopilla",
      comunas: ["Tocopilla", "María Elena"],
      fuente: "https://www.pjud.cl",
      verificado: true,
    },
    {
      nombre: "Conservador de Bienes Raíces de Taltal",
      comunas: ["Taltal"],
      verificado: false,
    },
  ],
  faq: [
    {
      q: "¿Qué se debe considerar al comprar terrenos o casas en San Pedro de Atacama?",
      a: "Es fundamental revisar si el inmueble se encuentra sujeto a la Ley Indígena (N° 19.253) o a limitaciones de Bienes Nacionales, verificando la validez del título de propiedad en el CBR de Calama.",
    },
    {
      q: "¿Cuál es el tiempo de respuesta del CBR de Antofagasta?",
      a: "Para certificados de dominio y gravámenes la entrega suele ser digital en 3 a 5 días hábiles, mientras que la inscripción de la escritura final toma entre 7 y 12 días hábiles.",
    },
  ],
};
