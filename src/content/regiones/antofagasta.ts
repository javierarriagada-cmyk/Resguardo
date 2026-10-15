import type { RegionData } from "./types";

export const antofagasta: RegionData = {
  slug: "antofagasta",
  nombre: "Antofagasta",
  nombreConArticulo: "la Región de Antofagasta",
  numero: "II",
  titular: "Compraventas en la Región de Antofagasta, con un solo equipo de principio a fin",
  bajada:
    "Para propiedades en Antofagasta, Calama, Tocopilla, Mejillones, Taltal y San Pedro de Atacama.",
  descripcion:
    "Si trabajas por turnos o vives en otra ciudad, ordenamos el proceso para que solo tengas que ir a la notaría a firmar. En los terrenos fuera del radio urbano revisamos además el origen del título y si hay restricciones legales.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Antofagasta",
      comunas: ["Antofagasta", "Mejillones"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Calama",
      comunas: ["Calama", "Ollagüe", "San Pedro de Atacama"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Tocopilla",
      comunas: ["Tocopilla", "María Elena"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Taltal",
      comunas: ["Taltal"],
    },
  ],
  faq: [
    {
      q: "¿Qué cambia si compro un terreno en San Pedro de Atacama?",
      a: "Revisamos si el terreno es tierra indígena. Según la Ley 19.253, art. 13, esas tierras no pueden enajenarse, embargarse ni adquirirse por prescripción, salvo entre comunidades o personas indígenas de una misma etnia, y solo pueden gravarse con autorización de la CONADI. Si aplica, te lo decimos antes de que pagues nada.",
    },
    {
      q: "Trabajo por turnos. ¿Cómo coordinamos la firma?",
      a: "Elegimos contigo la notaría, y cada parte puede firmar en un día distinto mientras la escritura esté abierta. Si no puedes ir, puedes dar un poder por escritura pública a un mandatario. El resto lo hacemos a distancia.",
    },
  ],
};
