import { NOTA_CONCRETADA } from "./home";

export type PlanPrecio = {
  id: string;
  titulo: string;
  para: string;
  precioUF?: number;
  precioCLP?: number;
  precioTexto: string;
  unidad: string;
  cuando: string;
  incluye: string[];
  cta: [string, string];
  feat?: boolean;
  provisorio: boolean;
};

export const planesPrecios: PlanPrecio[] = [
  {
    id: "estudio-titulos",
    titulo: "Estudio de títulos",
    para: "Para saber si la propiedad está libre de riesgos legales antes de promesar o pagar.",
    precioCLP: 190000,
    precioTexto: "$190.000",
    unidad: "honorario fijo",
    cuando:
      "Servicio independiente: se paga al encargarlo. Si después compras con nosotros, se descuenta del plan de Compra protegida.",
    incluye: [
      "Informe semáforo explicado punto por punto",
      "Revisión de 10 años de títulos y 30 de gravámenes",
      "Llamada con el equipo legal para revisar hallazgos",
      "Copia en PDF con citas a fojas, números y años",
    ],
    cta: ["Pedir estudio de títulos", "/#diagnostico"],
    provisorio: true,
  },
  {
    id: "compra-protegida",
    titulo: "Compra protegida",
    para: "Acompañamiento legal completo desde el estudio de títulos hasta la inscripción a tu nombre.",
    precioUF: 14,
    precioTexto: "UF 14",
    unidad: "honorario fijo",
    cuando:
      "Si la operación no se concreta, no pagas honorarios. Se cobra cuando enviamos la escritura a la notaría para su firma.",
    incluye: [
      "Estudio de títulos completo con informe semáforo",
      "Redacción de la promesa y escritura de compraventa",
      "Redacción de la instrucción notarial para custodia del pago",
      "Coordinación del alzamiento de hipotecas bancarias",
      "Ingreso y seguimiento hasta la inscripción en el Conservador",
    ],
    cta: ["Empezar con el diagnóstico", "/#diagnostico"],
    feat: true,
    provisorio: true,
  },
  {
    id: "venta-protegida",
    titulo: "Venta protegida",
    para: "Para vendedores que buscan cerrar rápido, con la carpeta legal lista y el pago garantizado.",
    precioUF: 18,
    precioTexto: "UF 18",
    unidad: "precio fijo sin comisión",
    cuando:
      "Sin comisión porcentual. Si la operación no se concreta, no pagas honorarios. Se cobra al enviar la escritura a la notaría.",
    incluye: [
      "Publicación profesional de la propiedad",
      "Armado de carpeta legal lista para compradores y bancos",
      "Redacción de escritura e instrucción notarial con vale vista en custodia",
      "Coordinación de firmas y seguimiento de inscripción",
    ],
    cta: ["Quiero vender mi propiedad", "/#diagnostico"],
    provisorio: true,
  },
];

export type CostoTercero = {
  item: string;
  entidad: string;
  montoTexto: string;
  porConfirmar: boolean;
  nota: string;
};

export const costosTerceros: CostoTercero[] = [
  {
    item: "Derechos y arancel notarial",
    entidad: "Notaría pública",
    montoTexto: "POR CONFIRMAR",
    porConfirmar: true,
    nota: "Varía según arancel notarial vigente (Ley 21.772), extensión de la escritura y copias autorizadas requeridas.",
  },
  {
    item: "Inscripción de dominio y gravámenes",
    entidad: "Conservador de Bienes Raíces (CBR)",
    montoTexto: "POR CONFIRMAR",
    porConfirmar: true,
    nota: "Calculado según el precio de venta acordado y la tabla de aranceles oficial del Conservador correspondiente a la comuna.",
  },
  {
    item: "Certificados de dominio, GP y municipales",
    entidad: "CBR / Tesorería / Municipio / SERVIU",
    montoTexto: "POR CONFIRMAR",
    porConfirmar: true,
    nota: "Certificados de dominio vigente, hipotecas y gravámenes (30 años), deuda de contribuciones y no expropiación.",
  },
];

export const faqPagos = [
  {
    q: "¿Cómo funciona la garantía “si la operación no se concreta, no pagas”?",
    a: `Nuestra promesa es clara: si por algún motivo la compraventa no puede realizarse, no pagas honorarios legales por el cierre. La operación se considera concretada cuando se envía el documento (la escritura de compraventa e instrucción notarial) a la notaría para la firma de las partes. ${NOTA_CONCRETADA}`,
  },
  {
    q: "¿Cuándo y cómo se realiza el pago de los honorarios?",
    a: "Para los planes de Compra Protegida y Venta Protegida, los honorarios se cobran exactamente en el momento en que enviamos la borrador final de la escritura a la notaría seleccionada para su firma. Para el Estudio de Títulos suelto, al ser un servicio independiente de diagnóstico previo, el valor se paga al momento de solicitar el informe.",
  },
  {
    q: "¿Los gastos de notaría y Conservador están incluidos en los planes?",
    a: "No. Los aranceles notariales, derechos del Conservador de Bienes Raíces y costos de emisión de certificados oficiales son cobrados directamente por cada institución y no forman parte de nuestros honorarios. En cada caso te entregamos un desglose estimado transparente de dichos costos de terceros antes de firmar.",
  },
  {
    q: "¿Qué ocurre si contraté el Estudio de Títulos y luego decido contratar Compra Protegida?",
    a: "Si contratas primero el Estudio de Títulos suelto ($190.000) y el informe resulta conforme (verde) o corregible (amarillo) y decides avanzar en la compra con nuestro plan de Compra Protegida, descontamos el 100% de lo que pagaste por el estudio del valor total de la Compra Protegida.",
  },
  {
    q: "¿Cómo se calcula el valor en pesos si el precio está fijado en UF?",
    a: "Los planes expresados en UF (Compra Protegida y Venta Protegida) se convierten a pesos chilenos (CLP) utilizando el valor oficial de la UF informado por el Banco Central / Servicio de Impuestos Internos correspondiente al día en que se emite la orden de cobro.",
  },
] as const;
