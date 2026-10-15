import { fuente, type Guia } from "./types";

export const instruccionNotarial: Guia = {
  slug: "instruccion-notarial",
  titulo: "Qué es una instrucción notarial y por qué te protege",
  corto: "La instrucción notarial",
  bajada:
    "Es el documento que le dice al notario cuándo puede entregar el dinero al vendedor. Bien redactada, evita que pagues por una propiedad que no quedó a tu nombre.",
  categoria: "Pagar",
  revisada: "2026-10-15",
  enBreve: [
    "El notario guarda el pago (por ejemplo, un vale vista) y lo entrega solo cuando se cumplen las condiciones escritas.",
    "La ley exige que la instrucción sea escrita, en castellano claro y firmada por todas las partes (COT, art. 439 ter).",
    "Solo se modifica con una declaración suscrita ante notario por las mismas partes.",
    "La condición habitual: que la propiedad quede inscrita a nombre del comprador y sin gravámenes distintos de los pactados.",
  ],
  secciones: [
    {
      id: "que-es",
      titulo: "Qué es",
      bloques: [
        {
          tipo: "p",
          texto:
            "En una compraventa, comprador y vendedor firman la escritura el mismo día, pero el dominio recién pasa al comprador cuando el Conservador inscribe (Código Civil, art. 686), lo que puede tardar semanas. La instrucción notarial resuelve ese desfase: el comprador deja el pago en custodia del notario y todos acuerdan por escrito qué debe pasar para que el notario lo entregue.",
        },
        {
          tipo: "p",
          texto:
            "El artículo 439 ter del Código Orgánico de Tribunales regula esa custodia: la califica como un encargo o comisión de confianza que obliga al notario, si la acepta, a cumplirla en la forma y condiciones que le indicaron las partes.",
        },
      ],
    },
    {
      id: "que-exige-la-ley",
      titulo: "Qué exige la ley",
      bloques: [
        {
          tipo: "p",
          texto: "Según el artículo 439 ter del Código Orgánico de Tribunales:",
        },
        {
          tipo: "lista",
          items: [
            "Las instrucciones deben constar por escrito, en idioma castellano y en términos claros.",
            "Deben estar firmadas por todas las partes e identificar los documentos que se entregan en custodia.",
            "Tienen la forma de un contrato entre las partes y solo pueden modificarse por una declaración suscrita ante notario por los mismos firmantes.",
            "El notario no acepta instrucciones en sobre cerrado cuyo contenido no conozca, ni instrucciones firmadas por una sola parte, salvo actos unilaterales, ofertas de pago u otros casos en que, a su juicio, no sea posible o necesaria la otra parte.",
            "No puede dar copia de las instrucciones a terceros, ni siquiera después de cumplidas, salvo requerimiento judicial. Una vez cumplidas, debe conservar una copia íntegra al menos por un año.",
          ],
        },
        {
          tipo: "p",
          texto:
            "El mismo artículo hace aplicable a este encargo el deber de informar operaciones sospechosas de la Ley 19.913 (art. 3). Por eso el notario puede pedirte antecedentes sobre el origen de los fondos.",
        },
      ],
    },
    {
      id: "que-debe-decir",
      titulo: "Qué debería decir una buena instrucción",
      bloques: [
        {
          tipo: "lista",
          ordenada: true,
          items: [
            "Qué documento se deja en custodia: banco emisor, número, monto y beneficiario del vale vista.",
            "La condición de entrega, redactada sin ambigüedad. Lo habitual: que se acredite con copia de la inscripción que el dominio quedó a nombre del comprador y con un certificado de hipotecas, gravámenes y prohibiciones que solo muestre lo pactado (por ejemplo, la hipoteca del banco del comprador).",
            "Qué pasa si hay un reparo del Conservador: quién lo subsana y en qué plazo.",
            "Un plazo final y qué se hace con el documento si vence sin cumplirse la condición: normalmente, devolverlo a quien lo entregó.",
            "Quién puede retirarlo y con qué identificación.",
          ],
        },
        {
          tipo: "nota",
          titulo: "Un detalle que importa",
          texto:
            "En Resguardo redactamos la instrucción como documento separado, firmado ante el notario, y no la insertamos en la escritura de compraventa. Así la escritura que se inscribe no queda condicionada por la mecánica del pago, y la instrucción puede modificarse con las formalidades del art. 439 ter sin tocar la escritura.",
        },
      ],
    },
    {
      id: "errores",
      titulo: "Errores comunes",
      bloques: [
        {
          tipo: "lista",
          items: [
            "Condiciones vagas, como “una vez inscrita la propiedad”, sin decir a nombre de quién ni sin qué gravámenes.",
            "Olvidar el alzamiento: si la propiedad tenía una hipoteca del vendedor, la condición debe exigir que se haya cancelado o que el pago al banco acreedor esté resuelto.",
            "Sin plazo de vencimiento, el documento puede quedar meses en la notaría sin que nadie sepa qué hacer.",
            "Instrucciones firmadas por una sola de las partes: en una compraventa, el notario no debería aceptarlas (COT, art. 439 ter).",
          ],
        },
      ],
    },
    {
      id: "relacion-vale-vista",
      titulo: "La instrucción y el vale vista",
      bloques: [
        {
          tipo: "p",
          texto:
            "La instrucción define cuándo se paga; el vale vista es, normalmente, con qué se paga. Explicamos el segundo en [cómo funciona el vale vista](/guias/vale-vista).",
        },
      ],
    },
  ],
  fuentes: [fuente("cot", "art. 439 ter"), fuente("cc", "art. 686")],
  relacionadas: ["vale-vista", "documentos-antes-de-comprar"],
};
