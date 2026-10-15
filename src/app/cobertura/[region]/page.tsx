import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Prov } from "@/components/ui/Prov";
import { getAllRegiones, getRegionBySlug } from "@/content/regiones";
import { empresa } from "@/content/empresa";
import type { Metadata } from "next";

function obtenerDominio(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

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
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: "24px",
                  boxShadow: "var(--shadow)",
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
                  <div style={{ flex: "1 1 300px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 600, margin: 0 }}>{cbr.nombre}</h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                        marginTop: "12px",
                      }}
                    >
                      <span style={{ fontSize: "13px", color: "var(--ink-2)" }}>Comunas:</span>
                      <ul
                        style={{
                          display: "inline-flex",
                          flexWrap: "wrap",
                          gap: "6px",
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {cbr.comunas.map((comuna) => (
                          <li
                            key={comuna}
                            style={{
                              fontFamily: "var(--mono)",
                              fontSize: "12px",
                              backgroundColor: "var(--paper-2)",
                              border: "1px solid var(--line)",
                              borderRadius: "var(--radius)",
                              padding: "2px 8px",
                              color: "var(--ink)",
                            }}
                          >
                            {comuna}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                          fontFamily: "var(--sans)",
                        }}
                      >
                        Fuente: {obtenerDominio(cbr.fuente)}
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
                  style={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius)",
                    padding: "20px",
                    boxShadow: "var(--shadow)",
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
          className="mt-64"
          style={{
            backgroundColor: "var(--paper-2)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-lg)",
            padding: "32px",
          }}
        >
          <h2>¿Vas a comprar o vender una propiedad en {regionData.nombreConArticulo}?</h2>
          <p className="lead mt-14">
            Te guiamos desde el diagnóstico inicial hasta la entrega del dominio en el Conservador.
          </p>
          <div className="mt-24">
            <Link href="/#diagnostico" className="btn btn-primary">
              Iniciar diagnóstico en {regionData.nombreConArticulo}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
