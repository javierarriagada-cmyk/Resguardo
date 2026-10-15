import { NOTA_CONCRETADA } from "./home";

/**
 * Fuente única de planes: la usan la sección de precios de la portada y /precios.
 * Montos provisorios (estrategia §9, punto 4) hasta que Javier los confirme.
 */
export type Plan = {
  id: "estudio-titulos" | "compra-protegida" | "venta-protegida";
  titulo: string;
  para: string;
  /** Monto en pesos, si el plan se cobra en CLP. */
  precioCLP?: number;
  /** Monto en UF, si el plan se cobra en UF. */
  precioUF?: number;
  precioTexto: string;
  unidad: string;
  cuando: string;
  incluye: string[];
  cta: readonly [texto: string, href: string];
  feat?: boolean;
  provisorio: boolean;
};

export const planes: Plan[] = [
  {
    id: "estudio-titulos",
    titulo: "Estudio de títulos",
    para: "Para saber si la propiedad está en regla.",
    precioCLP: 190000,
    precioTexto: "$190.000",
    unidad: "honorario",
    cuando:
      "Servicio independiente: se paga al encargarlo. Si después compras con nosotros, se descuenta.",
    incluye: [
      "Informe semáforo explicado",
      "10 años de títulos y 30 de gravámenes",
      "Llamada para explicarte el resultado",
    ],
    cta: ["Pedir estudio", "/#diagnostico"],
    provisorio: true,
  },
  {
    id: "compra-protegida",
    titulo: "Compra protegida",
    para: "De la revisión a la inscripción a tu nombre.",
    precioUF: 14,
    precioTexto: "UF 14",
    unidad: "honorario",
    cuando:
      "Si la operación no se concreta, no pagas. Se cobra cuando enviamos la escritura a la notaría.*",
    incluye: [
      "Estudio de títulos con informe semáforo",
      "Escritura e instrucción notarial",
      "Coordinación del alzamiento bancario",
      "Seguimiento hasta la inscripción",
    ],
    cta: ["Empezar con el diagnóstico", "/#diagnostico"],
    feat: true,
    provisorio: true,
  },
  {
    id: "venta-protegida",
    titulo: "Venta protegida",
    para: "Publicamos y hacemos toda la parte legal.",
    precioUF: 18,
    precioTexto: "UF 18",
    unidad: "precio fijo",
    cuando: "Sin comisión porcentual. Si la operación no se concreta, no pagas.*",
    incluye: [
      "Publicación en portales",
      "Carpeta legal lista para compradores y bancos",
      "Escritura y pago protegido con vale vista",
    ],
    cta: ["Quiero vender", "/#vender"],
    provisorio: true,
  },
];

export type CostoTercero = {
  item: string;
  quienCobra: string;
  detalle: string;
};

/** Montos sin confirmar: se muestran siempre como "Por confirmar" (no dependen de NEXT_PUBLIC_SHOW_PROVISIONAL). */
export const costosTerceros: CostoTercero[] = [
  {
    item: "Escritura de compraventa y copias",
    quienCobra: "Notaría",
    detalle: "Según el arancel de la notaría que elijan las partes y el número de copias.",
  },
  {
    item: "Inscripción de dominio (y de hipoteca, si hay crédito)",
    quienCobra: "Conservador de Bienes Raíces",
    detalle: "Según el arancel del Conservador de la comuna y el valor de la operación.",
  },
  {
    item: "Certificados del inmueble",
    quienCobra: "Conservador, Tesorería y municipalidad",
    detalle:
      "Dominio vigente, hipotecas y gravámenes, deuda de contribuciones y certificados municipales.",
  },
];

export const faqPagos = [
  {
    q: "¿Qué significa “si la operación no se concreta, no pagas”?",
    a: `Si la compraventa se cae antes de enviar la escritura a la notaría, no pagas honorarios de Compra protegida ni de Venta protegida. ${NOTA_CONCRETADA}`,
  },
  {
    q: "¿Cuándo se paga cada plan?",
    a: "Compra protegida y Venta protegida se cobran cuando enviamos la escritura a la notaría para su firma. El estudio de títulos suelto se paga al encargarlo.",
  },
  {
    q: "Si pago el estudio de títulos y después compro con ustedes, ¿lo pago dos veces?",
    a: "No. Si contratas Compra protegida para esa misma propiedad, descontamos lo que pagaste por el estudio.",
  },
  {
    q: "¿Los gastos de notaría y del Conservador están incluidos?",
    a: "No. Los cobran directamente la notaría, el Conservador y quienes emiten los certificados. Antes de firmar te detallamos esos montos con los valores reales de tu operación.",
  },
  {
    q: "¿Cómo se pasa a pesos un plan en UF?",
    a: "Con el valor de la UF del día en que se emite el cobro. El valor de referencia que mostramos en esta página es solo informativo.",
  },
] as const;
