import { empresa } from "@/content/empresa";
import { faq } from "@/content/home";
import { planes } from "@/content/precios";

type Json = Record<string, unknown>;

export type ItemPregunta = {
  readonly q: string;
  readonly a: string;
};

/** Inserta JSON-LD escapando "<" para que el contenido no pueda cerrar el <script>. */
export function JsonLd({ data }: { data: Json }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** LegalService + Organization. Sin `Person` hasta resolver la presentación de personas (estrategia §3.5). */
export function organizacionJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization"],
    "@id": `${empresa.url}/#organizacion`,
    name: empresa.nombre,
    description:
      "Servicio legal para compraventas de propiedades entre particulares: estudio de títulos, escritura, instrucción notarial con vale vista en custodia y seguimiento hasta la inscripción.",
    url: empresa.url,
    areaServed: { "@type": "Country", name: empresa.areaServed },
    priceRange: empresa.priceRange,
    inLanguage: "es-CL",
    knowsAbout: [
      "Estudio de títulos",
      "Instrucción notarial",
      "Compraventa de inmuebles",
      "Conservador de Bienes Raíces",
    ],
    // TODO: agregar telephone, address y legalName cuando estén confirmados (empresa.ts → porConfirmar).
  };
}

export function faqJsonLd(preguntas: readonly ItemPregunta[] = faq): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Un `Service` por plan con su `Offer`. Montos en UF con el código ISO 4217 "CLF". */
export function serviciosJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@graph": planes.map((plan) => {
      const monto = plan.precioCLP ?? plan.precioUF;
      const moneda = plan.precioCLP ? "CLP" : "CLF";
      return {
        "@type": "Service",
        "@id": `${empresa.url}/precios#${plan.id}`,
        name: plan.titulo,
        description: plan.para,
        serviceType: plan.titulo,
        areaServed: { "@type": "Country", name: empresa.areaServed },
        provider: { "@id": `${empresa.url}/#organizacion` },
        offers: {
          "@type": "Offer",
          url: `${empresa.url}/precios#${plan.id}`,
          ...(monto ? { price: monto, priceCurrency: moneda } : {}),
        },
      };
    }),
  };
}
