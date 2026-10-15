import { fuente, type Guia } from "./types";

export const documentosAntesDeComprar: Guia = {
  slug: "documentos-antes-de-comprar",
  titulo: "Los 6 documentos que debes pedir antes de comprar una propiedad",
  corto: "Documentos para comprar",
  bajada:
    "Antes de firmar una promesa o pagar un peso, pide estos papeles. Con ellos sabes quién es el dueño, qué pesa sobre la propiedad y si puede usarse para lo que la quieres.",
  categoria: "Comprar",
  revisada: "2026-10-15",
  enBreve: [
    "El dueño es quien figura inscrito en el Conservador de Bienes Raíces, no quien tiene las llaves.",
    "El certificado de hipotecas, gravámenes y prohibiciones muestra lo que el Conservador tiene registrado sobre el inmueble.",
    "Una deuda de gastos comunes sigue a la unidad: la puede heredar quien compra.",
    "Pide certificados recientes. Lo que no está escrito en ellos no lo des por revisado.",
  ],
  secciones: [
    {
      id: "por-que",
      titulo: "Por qué pedir papeles antes de comprometerte",
      bloques: [
        {
          tipo: "p",
          texto:
            "En Chile el dominio de un inmueble se transfiere con la inscripción del título en el Registro de Propiedad del Conservador de Bienes Raíces (Código Civil, art. 686). Por eso la pregunta “¿quién es el dueño?” se responde en el Conservador, y la pregunta “¿qué problemas tiene?” también se responde, en buena parte, con certificados de ese mismo registro.",
        },
        {
          tipo: "p",
          texto:
            "Una promesa de compraventa ya te obliga. Pedir los documentos antes de firmarla te permite negociar con información y no descubrir un problema cuando ya entregaste un pie.",
        },
      ],
    },
    {
      id: "los-seis",
      titulo: "Los seis documentos",
      bloques: [
        {
          tipo: "pasos",
          items: [
            {
              titulo: "1. Copia de la inscripción de dominio con certificado de vigencia",
              texto:
                "La emite el Conservador de la comuna donde está la propiedad. Muestra a nombre de quién está inscrita y si esa inscripción sigue vigente. Contrasta el nombre y el RUT con el de quien te vende.",
            },
            {
              titulo: "2. Certificado de hipotecas, gravámenes y prohibiciones",
              texto:
                "También del Conservador. Lista hipotecas, servidumbres, usufructos, embargos y prohibiciones inscritas. Un embargo o una prohibición judicial solo afectan a terceros desde que se inscriben (Código de Procedimiento Civil, arts. 297 y 453), así que este certificado es tu principal radiografía.",
            },
            {
              titulo: "3. Títulos anteriores",
              texto:
                "Las escrituras e inscripciones de las transferencias previas. Permiten reconstruir la cadena de dueños y detectar herencias sin cerrar, ventas de cónyuges sin autorización o representantes sin poder. Es la base del estudio de títulos.",
            },
            {
              titulo: "4. Certificado de recepción definitiva de obras",
              texto:
                "Lo otorga la Dirección de Obras de la municipalidad. Ninguna obra puede habitarse ni destinarse a uso alguno antes de su recepción definitiva (Ley General de Urbanismo y Construcciones, art. 145). Si la casa tiene ampliaciones, revisa que también estén recibidas.",
            },
            {
              titulo: "5. Certificado de deuda de contribuciones y certificado de avalúo fiscal",
              texto:
                "El primero, de la Tesorería, indica si hay contribuciones impagas; el segundo, del Servicio de Impuestos Internos, identifica el rol y el avalúo del inmueble. Sirven para confirmar que hablas de la misma propiedad que figura en el Conservador.",
            },
            {
              titulo: "6. Certificado de no expropiación",
              texto:
                "Se pide a la municipalidad y al SERVIU. Indica si la propiedad está afecta a una expropiación o a un trazado vial. Los bancos lo exigen habitualmente para un crédito hipotecario.",
            },
          ],
        },
        {
          tipo: "pendiente",
          texto:
            "No encontramos una norma que fije la antigüedad máxima de los certificados para una compraventa. Es práctica de notarías y bancos exigirlos recientes (los bancos suelen pedir menos de 90 días); confirma el plazo con tu notaría y tu banco.",
        },
      ],
    },
    {
      id: "departamento",
      titulo: "Si compras un departamento o una casa en condominio",
      bloques: [
        {
          tipo: "p",
          texto:
            "Pide además un certificado de gastos comunes al día, firmado por la administración. La obligación de pagar gastos comunes sigue siempre al dueño de la unidad, aun por deudas anteriores a su compra (Ley 21.442, art. 6). Si el vendedor debe, esa deuda puede pasar a ser tuya.",
        },
        {
          tipo: "p",
          texto:
            "Revisa también el reglamento de copropiedad: fija cómo se reparten los gastos y qué puedes hacer con tu unidad, como arrendarla por días o tener mascotas.",
        },
      ],
    },
    {
      id: "situaciones",
      titulo: "Situaciones que piden documentos adicionales",
      bloques: [
        {
          tipo: "lista",
          items: [
            "Propiedad heredada: la posesión efectiva y sus inscripciones, porque los herederos no pueden disponer del inmueble mientras no se hagan (Código Civil, art. 688).",
            "Vendedor casado en sociedad conyugal: el certificado de matrimonio, porque el marido necesita la autorización de la mujer para enajenar los inmuebles sociales (Código Civil, art. 1749).",
            "Inmueble declarado bien familiar: el cónyuge no propietario debe autorizar la venta (Código Civil, art. 142).",
            "Vendedor que actúa por medio de otra persona: el mandato vigente, con facultad expresa para vender ese inmueble. En la práctica, notarías y Conservadores lo exigen por escritura pública.",
            "Vendedor menor de edad: autorización judicial previa (Código Civil, art. 254).",
          ],
        },
      ],
    },
    {
      id: "que-no-dicen",
      titulo: "Lo que los certificados no dicen",
      bloques: [
        {
          tipo: "p",
          texto:
            "Los certificados describen lo inscrito. No muestran el estado físico de la propiedad, ocupantes sin contrato ni deudas de servicios básicos. Visítala, pide boletas de luz, agua y gas, y pregunta quién vive ahí.",
        },
        {
          tipo: "nota",
          titulo: "Cómo lo hacemos en Resguardo",
          texto:
            "Pedimos los certificados nosotros, los revisamos uno por uno y te entregamos un informe con semáforo: qué está en orden, qué hay que aclarar y qué es un riesgo. Empieza por el [diagnóstico](/#diagnostico).",
        },
      ],
    },
  ],
  fuentes: [
    fuente("cc", "arts. 142, 254, 686, 688 y 1749"),
    fuente("cpc", "arts. 297 y 453"),
    fuente("lguc", "art. 145"),
    fuente("l21442", "art. 6"),
  ],
  relacionadas: ["instruccion-notarial", "vale-vista"],
};
