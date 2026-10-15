import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Prov } from "@/components/ui/Prov";
import { getAllRegiones, getRegionBySlug } from "@/content/regiones";
import { empresa } from "@/content/empresa";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllRegiones().map((r) => ({
    region: r.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const regionData = getRegionBySlug(params.region);
  if (!regionData) return {};

  return {
    title: `${regionData.titular} | Resguardo`,
    description: regionData.descripcion,
    alternates: {
      canonical: `${empresa.url}/cobertura/${regionData.slug}`,
    },
    openGraph: {
      title: `${regionData.titular} | Resguardo`,
      description: regionData.descripcion,
      url: `${empresa.url}/cobertura/${regionData.slug}`,
      locale: "es_CL",
      type: "website",
    },
  };
}

export default async function RegionPage(props: { params: Promise<{ region: string }> }) {
  const params = await props.params;
  const regionData = getRegionBySlug(params.region);

  if (!regionData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: regionData.titular,
    description: regionData.descripcion,
    provider: {
      "@type": "LegalService",
      name: empresa.nombre,
      url: empresa.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: regionData.nombre,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <Breadcrumb
        items={[
          { name: "Inicio", url: "/" },
          { name: "Cobertura", url: "/cobertura" },
          { name: regionData.nombre, url: `/cobertura/${regionData.slug}` },
        ]}
      />
      <main id="contenido" className="wrap mt-32 mb-64">
        <header className="max-w-prose">
          <p className="kicker">
            Región {regionData.nombre} ({regionData.numero})
          </p>
          <h1 className="mt-14">{regionData.titular}</h1>
          <p className="lead mt-18">{regionData.bajada}</p>
        </header>

        <section className="mt-32 max-w-prose">
          <p>{regionData.descripcion}</p>
        </section>

        <section className="mt-44" aria-labelledby="cbr-heading">
          <h2 id="cbr-heading">Conservadores de Bienes Raíces en {regionData.nombre}</h2>
          <p className="lead mt-14">
            Revisamos la carpeta registral en cada uno de los Conservadores con jurisdicción en la
            región.
          </p>

          <div className="mt-24" style={{ display: "grid", gap: "20px" }}>
            {regionData.conservadores.map((cbr) => (
              <article
                key={cbr.nombre}
                className="card p-24"
                style={{
                  border: "1px solid var(--border, #e2e8f0)",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 600, margin: 0 }}>{cbr.nombre}</h3>
                    <p style={{ fontSize: "14px", color: "var(--ink-2)", marginTop: "6px" }}>
                      Comunas: {cbr.comunas.join(", ")}
                    </p>
                  </div>
                  <div>
                    {cbr.verificado && cbr.fuente ? (
                      <a
                        href={cbr.fuente}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "13px",
                          color: "var(--seal)",
                          textDecoration: "underline",
                        }}
                      >
                        Fuente pública verificada
                      </a>
                    ) : (
                      <Prov>Datos del Conservador por confirmar</Prov>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {regionData.faq.length > 0 && (
          <section className="mt-64" aria-labelledby="faq-local-heading">
            <h2 id="faq-local-heading">Preguntas frecuentes en {regionData.nombre}</h2>
            <dl className="mt-24" style={{ display: "grid", gap: "20px" }}>
              {regionData.faq.map((item) => (
                <div
                  key={item.q}
                  className="card p-24"
                  style={{
                    border: "1px solid var(--border, #e2e8f0)",
                    borderRadius: "8px",
                    padding: "20px",
                  }}
                >
                  <dt style={{ fontWeight: 600, fontSize: "16px", color: "var(--ink)" }}>
                    {item.q}
                  </dt>
                  <dd style={{ marginTop: "8px", color: "var(--ink-2)", marginInlineStart: 0 }}>
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section
          className="card mt-64 p-32"
          style={{
            backgroundColor: "var(--paper-dark, #f8f9fa)",
            borderRadius: "12px",
            padding: "32px",
          }}
        >
          <h2>¿Vas a comprar o vender una propiedad en {regionData.nombre}?</h2>
          <p className="lead mt-14">
            Te guiamos desde el diagnóstico inicial hasta la entrega del dominio en el Conservador.
          </p>
          <div className="mt-24">
            <Link href="/#diagnostico" className="btn btn-primary">
              Iniciar diagnóstico en {regionData.nombre}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
