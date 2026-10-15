import type { Pago, Senal } from "./constantes";

/** Estado del semáforo: verde, amarillo, rojo o neutro ("siempre se revisa"). */
export type Estado = "g" | "a" | "r" | "n";

export type PuntoOrientacion = {
  clave: "base" | Senal | "subsidio";
  estado: Estado;
  titulo: string;
  detalle: string;
};

export const ESTADO_LABEL: Record<Estado, string> = {
  g: "Verde",
  a: "Amarillo",
  r: "Rojo",
  n: "Siempre se revisa",
};

const PUNTOS: Record<PuntoOrientacion["clave"], Omit<PuntoOrientacion, "clave">> = {
  base: {
    estado: "n",
    titulo: "Dominio vigente y cadena de 10 años",
    detalle: "Confirmamos que quien vende es hoy el dueño inscrito.",
  },
  herencia: {
    estado: "a",
    titulo: "Posesión efectiva e inscripción especial de herencia",
    detalle: "Todos los herederos deben estar inscritos y firmar, o haber cedido sus derechos.",
  },
  casado: {
    estado: "a",
    titulo: "Régimen matrimonial del vendedor",
    detalle:
      "Puede requerir la autorización del cónyuge, o la firma del ex cónyuge si no se liquidó la sociedad conyugal.",
  },
  hipoteca: {
    estado: "a",
    titulo: "Alzamiento de la hipoteca",
    detalle: "Pedimos al banco su cláusula y el saldo; la deuda se paga con el mismo vale vista.",
  },
  poder: {
    estado: "a",
    titulo: "Vigencia y facultades del poder",
    detalle: "Revisamos que el mandato permita vender y que no esté revocado.",
  },
  ampliacion: {
    estado: "a",
    titulo: "Recepción final y ampliaciones",
    detalle: "Te explicamos el riesgo de lo no regularizado antes de que ofrezcas un precio.",
  },
  juicio: {
    estado: "r",
    titulo: "Embargo o juicio vigente",
    detalle:
      "No pagues nada todavía. Revisamos la causa y si el acreedor o el juez puede autorizar la venta.",
  },
  promesa: {
    estado: "a",
    titulo: "Tu promesa de compraventa",
    detalle: "Revisamos plazos, multas y condiciones para que no arriesgues el pie.",
  },
  subsidio: {
    estado: "a",
    titulo: "Prohibiciones ligadas al subsidio",
    detalle: "Algunas viviendas con subsidio tienen prohibición SERVIU de enajenar por un plazo.",
  },
};

/** Orden fijo de presentación: siempre el punto base primero; señales sin duplicados. */
const ORDEN: Senal[] = [
  "herencia",
  "casado",
  "hipoteca",
  "poder",
  "ampliacion",
  "juicio",
  "promesa",
];

/**
 * Orientación preliminar: qué revisaríamos primero según lo que marcó la persona.
 * Función pura; no reemplaza un estudio de títulos.
 */
export function orientacion(senales: readonly Senal[], pago: Pago): PuntoOrientacion[] {
  const marcadas = new Set(senales);
  const claves: PuntoOrientacion["clave"][] = ["base", ...ORDEN.filter((s) => marcadas.has(s))];
  if (pago === "subsidio") claves.push("subsidio");
  return claves.map((clave) => ({ clave, ...PUNTOS[clave] }));
}

/** El peor estado de la lista (r > a > n > g), útil para priorizar el contacto. */
export function peorEstado(puntos: readonly PuntoOrientacion[]): Estado {
  const rango: Record<Estado, number> = { g: 0, n: 1, a: 2, r: 3 };
  return puntos.reduce<Estado>((peor, p) => (rango[p.estado] > rango[peor] ? p.estado : peor), "g");
}
