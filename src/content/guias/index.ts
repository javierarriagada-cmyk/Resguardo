import type { Bloque, Guia } from "./types";
import { documentosAntesDeComprar } from "./documentos-antes-de-comprar";
import { instruccionNotarial } from "./instruccion-notarial";
import { valeVista } from "./vale-vista";

export type { Guia } from "./types";

const guias: Guia[] = [documentosAntesDeComprar, instruccionNotarial, valeVista];

export function getAllGuias(): Guia[] {
  return guias;
}

export function getGuia(slug: string): Guia | undefined {
  return guias.find((g) => g.slug === slug);
}

const sinEnlaces = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

function textoBloque(b: Bloque): string {
  switch (b.tipo) {
    case "p":
    case "pendiente":
      return b.texto;
    case "nota":
      return `${b.titulo} ${b.texto}`;
    case "lista":
      return b.items.join(" ");
    case "pasos":
      return b.items.map((i) => `${i.titulo} ${i.texto}`).join(" ");
  }
}

export function textoPlano(g: Guia): string {
  return sinEnlaces(
    [
      g.bajada,
      ...g.enBreve,
      ...g.secciones.flatMap((s) => [s.titulo, ...s.bloques.map(textoBloque)]),
    ].join(" "),
  );
}

/** Minutos de lectura a 200 palabras por minuto, redondeado hacia arriba. */
export function minutosLectura(g: Guia): number {
  const palabras = textoPlano(g).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(palabras / 200));
}

export function fechaLarga(iso: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Santiago",
  }).format(new Date(`${iso}T12:00:00-03:00`));
}
