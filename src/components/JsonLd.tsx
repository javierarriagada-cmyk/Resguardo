import { empresa } from "@/content/empresa";
import { faq } from "@/content/home";

type Json = Record<string, unknown>;

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

export function faqJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
