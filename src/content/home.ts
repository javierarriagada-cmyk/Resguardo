/** Textos de la portada (fuente: docs/boceto-portada.html, aprobado). */

export const NOTA_CONCRETADA =
  "Operación concretada = cuando enviamos la escritura a la notaría para su firma. Si se cae antes, no pagas honorarios; desde ese momento sí corresponden.";

export const persona = {
  compro: {
    boton: "Voy a comprar",
    titulo: ["Tu plata no se mueve hasta que la propiedad es ", "tuya", "."],
    bajada:
      "Revisamos los títulos con criterio bancario, redactamos la escritura y dejamos el pago en custodia en la notaría con instrucción notarial. Te acompañamos hasta la inscripción en el Conservador, en cualquier región de Chile.",
  },
  vendo: {
    boton: "Voy a vender",
    titulo: ["Firmas sabiendo que la plata ", "ya existe", "."],
    bajada:
      "Publicamos tu propiedad, preparamos la carpeta legal y redactamos la escritura. El comprador deja el pago en vale vista en la notaría antes de que entregues nada. Precio fijo, sin comisión porcentual.",
  },
} as const;

export type Persona = keyof typeof persona;

export const riesgos = [
  {
    titulo: "Quien vende no es el dueño inscrito",
    texto:
      "Suplantación, poderes revocados o un “dueño” que en realidad es heredero sin inscripción especial de herencia.",
    como: [
      "Cómo lo revisamos:",
      "dominio vigente con certificado de no más de 90 días, cadena de títulos de 10 años y vigencia de los mandatos.",
    ],
  },
  {
    titulo: "Falta una firma que nadie mencionó",
    texto:
      "Vendedor casado en sociedad conyugal, divorciado sin liquidarla o un inmueble declarado bien familiar. Sin esa firma, el Conservador puede rechazar la inscripción.",
    como: [
      "Cómo lo revisamos:",
      "certificado de matrimonio con subinscripciones y régimen patrimonial de cada parte.",
    ],
  },
  {
    titulo: "Deudas que viajan con la propiedad",
    texto:
      "Hipotecas, embargos, medidas precautorias, prohibiciones SERVIU, contribuciones o gastos comunes impagos.",
    como: [
      "Cómo lo revisamos:",
      "certificado de hipotecas, gravámenes y prohibiciones de 30 años, Tesorería y administración del condominio.",
    ],
  },
  {
    titulo: "Pagar antes de tiempo",
    texto:
      "Transferencias “para reservar”, cheques o pagos directos al vendedor que no se recuperan si algo falla.",
    como: [
      "Cómo lo evitamos:",
      "vale vista en custodia en la notaría, con instrucciones escritas de cuándo y a quién se entrega.",
    ],
  },
  {
    titulo: "La propiedad no es la que crees",
    texto:
      "Ampliaciones sin regularizar, sin recepción final o afecta a expropiación municipal o SERVIU.",
    como: [
      "Cómo lo revisamos:",
      "certificados municipales y de no expropiación. Te explicamos el riesgo y tú decides.",
    ],
  },
] as const;

export const pasos = [
  {
    titulo: "Diagnóstico gratis",
    texto: "Nos cuentas el caso y te decimos qué revisar primero y qué documentos pedir.",
    quien: "1 día hábil",
    prov: true,
  },
  {
    titulo: "Estudio de títulos",
    texto:
      "Revisamos 10 años de títulos y 30 de gravámenes. Recibes el informe semáforo explicado.",
    quien: "3 a 5 días hábiles",
    prov: true,
  },
  {
    titulo: "Escritura e instrucción notarial",
    texto: "Redactamos ambas y acordamos con las partes cuándo se libera el pago.",
    quien: "Al enviarla a la notaría, la operación queda concretada",
    prov: false,
  },
  {
    titulo: "Firma en notaría",
    texto:
      "El vale vista queda en custodia. Si hay hipoteca, coordinamos el alzamiento con el banco.",
    quien: "En la notaría que elijan",
    prov: false,
  },
  {
    titulo: "Inscripción en el Conservador",
    texto: "Seguimos el ingreso, respondemos reparos y te entregamos el dominio a tu nombre.",
    quien: "Plazo según cada Conservador",
    prov: false,
  },
] as const;

export const plata = [
  { texto: "Sigue en tu cuenta", tipo: "" },
  { texto: "Sigue en tu cuenta", tipo: "" },
  { texto: "Tu banco emite el vale vista", tipo: "" },
  { texto: "En custodia en la notaría", tipo: "hold" },
  { texto: "Se entrega al vendedor al inscribir", tipo: "free" },
] as const;

export const regiones = [
  ["Arica y Parinacota", "XV"],
  ["Tarapacá", "I"],
  ["Antofagasta", "II"],
  ["Atacama", "III"],
  ["Coquimbo", "IV"],
  ["Valparaíso", "V"],
  ["Metropolitana", "RM"],
  ["O’Higgins", "VI"],
  ["Maule", "VII"],
  ["Ñuble", "XVI"],
  ["Biobío", "VIII"],
  ["La Araucanía", "IX"],
  ["Los Ríos", "XIV"],
  ["Los Lagos", "X"],
  ["Aysén", "XI"],
  ["Magallanes", "XII"],
] as const;

export const faq = [
  {
    q: "¿Qué es una instrucción notarial y por qué me protege?",
    a: "Es un documento que queda en la notaría junto con el pago, normalmente un vale vista. Dice por escrito a quién y cuándo se entrega la plata: por lo general, cuando el Conservador inscribe la propiedad a nombre del comprador. El vendedor sabe que la plata existe y el comprador, que no se entrega antes de tiempo.",
    open: true,
  },
  {
    q: "¿Cuándo pago y qué pasa si la operación no se concreta?",
    a: "Si la operación no se concreta, no pagas. Para nosotros, una operación está concretada cuando enviamos la escritura a la notaría para su firma: ese día se cobran los honorarios. Si se cae antes, no pagas nada de honorarios; si se cae después, los honorarios ya corresponden. Los certificados del Conservador o del municipio son costos de terceros y se pagan aparte.",
    open: true,
  },
  {
    q: "Compro con crédito hipotecario. ¿Igual los necesito?",
    a: "El banco estudia los títulos para protegerse a sí mismo, no a ti. Podemos acompañarte en la promesa y el pie, revisar lo que el banco no mira (como gastos comunes o ampliaciones) y coordinar los plazos con la notaría.",
    open: false,
  },
  {
    q: "¿Atienden fuera de Santiago?",
    a: "Sí, en todo Chile. Pedimos los certificados al Conservador de la comuna y coordinamos con la notaría que elijan las partes. Solo la firma de la escritura es presencial.",
    open: false,
  },
  {
    q: "¿Cómo revisan los títulos?",
    a: "Con una pauta escrita, la misma en cada caso: 10 años de títulos, 30 años de gravámenes, certificados vigentes, estado civil de las partes, poderes y certificados municipales. Cada punto del informe dice en qué documento consta, para que puedas verificarlo.",
    open: false,
  },
] as const;
