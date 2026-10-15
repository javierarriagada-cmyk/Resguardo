import { fuente, type Guia } from "./types";

export const valeVista: Guia = {
  slug: "vale-vista",
  titulo: "Cómo funciona el vale vista en una compraventa",
  corto: "El vale vista",
  bajada:
    "Es la forma más usada de pagar una propiedad en Chile. Te explicamos qué es, a nombre de quién se emite y qué cuidar para que no se cobre antes de tiempo.",
  categoria: "Pagar",
  revisada: "2026-10-15",
  enBreve: [
    "Un vale vista es un documento que emite un banco con fondos ya descontados: no rebota.",
    "Se emite a nombre del vendedor (o de su banco, si hay una hipoteca que alzar) y se deja en custodia del notario.",
    "El notario lo entrega solo cuando se cumple la instrucción notarial firmada por las partes.",
    "Pagar al vendedor antes de la inscripción, sin custodia, te deja sin resguardo si algo falla.",
  ],
  secciones: [
    {
      id: "que-es",
      titulo: "Qué es un vale vista",
      bloques: [
        {
          tipo: "p",
          texto:
            "Es un documento bancario que el banco emite contra fondos que el cliente ya pagó o que se cargan en su cuenta al emitirlo. Quien lo recibe sabe que el dinero existe, a diferencia de un cheque, que depende de que haya fondos el día del cobro. Se emite a nombre de un beneficiario determinado.",
        },
        {
          tipo: "pendiente",
          texto:
            "No identificamos una ley que defina el vale vista; es un producto bancario cuyas condiciones (vigencia, endoso, cobro) fija cada banco. Revisa las del banco emisor antes de pedirlo.",
        },
      ],
    },
    {
      id: "flujo",
      titulo: "El recorrido del dinero, paso a paso",
      bloques: [
        {
          tipo: "pasos",
          items: [
            {
              titulo: "1. Se emite",
              texto:
                "El comprador (o su banco, si hay crédito hipotecario) pide el vale vista por el precio que se paga en la escritura, a nombre del vendedor.",
            },
            {
              titulo: "2. Se firma la escritura y la instrucción",
              texto:
                "Las partes firman la compraventa y, por separado, la [instrucción notarial](/guias/instruccion-notarial), que identifica el vale vista y fija la condición para entregarlo (COT, art. 439 ter).",
            },
            {
              titulo: "3. El notario lo custodia",
              texto:
                "El documento queda en la notaría. Nadie puede retirarlo sin cumplir la instrucción.",
            },
            {
              titulo: "4. Se inscribe",
              texto:
                "La escritura se presenta al Conservador. Con la inscripción, el dominio pasa al comprador (Código Civil, art. 686).",
            },
            {
              titulo: "5. Se entrega al vendedor",
              texto:
                "Acreditada la condición, normalmente con la nueva inscripción y un certificado de gravámenes, el notario entrega el vale vista al vendedor, que lo cobra.",
            },
          ],
        },
      ],
    },
    {
      id: "hipoteca-vendedor",
      titulo: "Si el vendedor todavía debe un crédito hipotecario",
      bloques: [
        {
          tipo: "p",
          texto:
            "La hipoteca persigue la propiedad sin importar quién sea su dueño (Código Civil, art. 2428). Por eso el comprador necesita que la deuda del vendedor se pague y la hipoteca se cancele: la cancelación la otorga el acreedor por escritura pública y se anota al margen de la inscripción (Código Civil, art. 2434).",
        },
        {
          tipo: "p",
          texto:
            "En la práctica, parte del precio se paga con un vale vista a nombre del banco del vendedor por el saldo de su deuda, y el resto a nombre del vendedor. Algunos bancos exigen condiciones propias para ese vale vista, como una vigencia mínima o un monto adicional que cubra dividendos que venzan mientras se tramita el alzamiento.",
        },
        {
          tipo: "pendiente",
          texto:
            "Las condiciones del vale vista para alzar una hipoteca varían entre bancos y no las fija una norma general. Pide al banco del vendedor una liquidación de la deuda y sus requisitos por escrito.",
        },
      ],
    },
    {
      id: "riesgos",
      titulo: "Qué cuidar",
      bloques: [
        {
          tipo: "lista",
          items: [
            "Que el beneficiario esté bien escrito: nombre completo y RUT del vendedor o del banco.",
            "Que la vigencia del documento cubra el tiempo que puede tardar la inscripción, incluidos posibles reparos del Conservador.",
            "Que la instrucción diga qué pasa si la inscripción no se logra en plazo: lo habitual es devolver el vale vista a quien lo entregó.",
            "No transferir dinero directamente al vendedor antes de la inscripción. Si la venta no se inscribe, recuperar lo pagado puede requerir un juicio.",
          ],
        },
        {
          tipo: "nota",
          titulo: "Si el comprador no paga",
          texto:
            "El vendedor también está protegido: si el comprador cae en mora de pagar el precio, el vendedor puede exigir el pago o la resolución de la venta, con indemnización de perjuicios (Código Civil, art. 1873). La custodia notarial evita llegar a ese punto.",
        },
      ],
    },
  ],
  fuentes: [fuente("cot", "art. 439 ter"), fuente("cc", "arts. 686, 1873, 2428 y 2434")],
  relacionadas: ["instruccion-notarial", "documentos-antes-de-comprar"],
};
