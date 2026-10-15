import type { RegionData } from "./types";

export const metropolitana: RegionData = {
  slug: "metropolitana",
  nombre: "Metropolitana",
  nombreConArticulo: "la Región Metropolitana",
  numero: "RM",
  titular: "Compraventas en la Región Metropolitana: estudio, escritura y pago protegido",
  bajada:
    "Para propiedades en Santiago y en las provincias de Cordillera, Maipo, Talagante, Melipilla y Chacabuco.",
  descripcion:
    "En la región hay varios Conservadores, y los límites no siempre son intuitivos: Colina, Lampa y Tiltil se inscriben en Santiago, mientras que San Miguel tiene su propio Conservador. Lo primero que hacemos es confirmar el Conservador de tu propiedad.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Santiago",
      comunas: [
        "Cerrillos",
        "Cerro Navia",
        "Colina",
        "Conchalí",
        "Estación Central",
        "Huechuraba",
        "Independencia",
        "La Florida",
        "La Reina",
        "Lampa",
        "Las Condes",
        "Lo Barnechea",
        "Lo Prado",
        "Macul",
        "Maipú",
        "Ñuñoa",
        "Peñalolén",
        "Providencia",
        "Pudahuel",
        "Quilicura",
        "Quinta Normal",
        "Recoleta",
        "Renca",
        "Santiago",
        "Tiltil",
        "Vitacura",
      ],
      fuente: {
        url: "https://www.conservador.cl/informacion/acerca/jurisdiccion",
        consultada: "2026-10-15",
      },
      nota: "En La Florida, solo hasta el límite de la avenida Diego Portales, según su sitio.",
    },
    {
      nombre: "Conservador de Bienes Raíces de San Miguel",
      comunas: [
        "San Miguel",
        "La Cisterna",
        "La Granja",
        "El Bosque",
        "San Ramón",
        "San Joaquín",
        "Lo Espejo",
        "La Pintana",
      ],
    },
    {
      nombre: "Conservador de Bienes Raíces de Pedro Aguirre Cerda",
      comunas: ["Pedro Aguirre Cerda"],
      nota: "Oficio nuevo anunciado en el sitio del Conservador de San Miguel.",
    },
    {
      nombre: "Conservador de Bienes Raíces de Puente Alto",
      comunas: ["Puente Alto", "San José de Maipo", "Pirque"],
    },
    {
      nombre: "Conservador de Bienes Raíces de San Bernardo",
      comunas: ["San Bernardo", "Calera de Tango"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Buin",
      comunas: ["Buin", "Paine"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Talagante",
      comunas: ["Talagante", "El Monte", "Isla de Maipo", "Peñaflor", "Padre Hurtado"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Melipilla",
      comunas: ["Melipilla", "Alhué", "San Pedro", "Curacaví", "María Pinto"],
    },
  ],
  faq: [
    {
      q: "¿Qué Conservador corresponde a mi propiedad en Santiago?",
      a: "Depende de la comuna, no del lugar donde vives. El Conservador de Santiago atiende 26 comunas, entre ellas Colina, Lampa y Tiltil; en La Florida, solo hasta Diego Portales. San Miguel, Puente Alto, San Bernardo y otras comunas tienen su propio Conservador.",
    },
    {
      q: "Compro un departamento con crédito hipotecario. ¿Qué hacen ustedes y qué hace el banco?",
      a: "El banco hace su propio estudio de títulos y redacta la escritura de compraventa e hipoteca. Nosotros revisamos los títulos para ti, revisamos ese borrador, cuidamos que la instrucción notarial proteja tu pago y hacemos el seguimiento hasta la inscripción.",
    },
  ],
};
