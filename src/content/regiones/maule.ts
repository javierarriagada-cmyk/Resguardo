import type { RegionData } from "./types";

export const maule: RegionData = {
  slug: "maule",
  nombre: "Maule",
  nombreConArticulo: "la Región del Maule",
  numero: "VII",
  titular: "Compraventas en la Región del Maule, con un precio fijo y conocido",
  bajada: "Para propiedades en Talca, Curicó, Linares, Constitución, Cauquenes y Parral.",
  descripcion:
    "Si la propiedad es heredada y la venden varios hermanos, antes de la promesa revisamos que la posesión efectiva y la inscripción especial de herencia estén hechas, porque sin ellas los herederos no pueden vender.",
  conservadores: [
    {
      nombre: "Conservador de Bienes Raíces de Talca",
      comunas: ["Talca", "Pelarco", "Pencahue", "San Clemente", "Río Claro"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Curicó",
      comunas: ["Curicó", "Rauco", "Romeral", "Teno"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Linares",
      comunas: ["Linares", "Colbún", "Yerbas Buenas"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Constitución",
      comunas: ["Constitución", "Empedrado"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Cauquenes",
      comunas: ["Cauquenes"],
    },
    {
      nombre: "Conservador de Bienes Raíces de Parral",
      comunas: ["Parral", "Retiro"],
    },
  ],
  faq: [
    {
      q: "Los vendedores son herederos. ¿Qué tiene que estar listo?",
      a: "La posesión efectiva (ante el Registro Civil si no hay testamento, o ante el tribunal si lo hay, según la Ley 19.903) y la inscripción especial de herencia en el Conservador (Código Civil, art. 688). Si falta algo, te decimos cuánto falta antes de que firmes nada.",
    },
    {
      q: "¿Firman todos los herederos?",
      a: "Sí, todos los que figuran como dueños en la inscripción, personalmente o mediante un mandatario con poder suficiente. Si hay un heredero menor de edad, la venta puede necesitar autorización judicial.",
    },
  ],
};
