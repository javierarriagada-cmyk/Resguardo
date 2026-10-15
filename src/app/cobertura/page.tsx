import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getAllRegiones } from "@/content/regiones";
import { empresa } from "@/content/empresa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cobertura Nacional · Conservadores y Notarías de Chile | Resguardo",
  description:
    "Cobertura legal para compraventas de propiedades en las 16 regiones de Chile. Coordinamos con el Conservador de Bienes Raíces de cada comuna.",
  alternates: {
    canonical: `${empresa.url}/cobertura`,
  },
  openGraph: {
    title: "Cobertura Nacional · Conservadores y Notarías de Chile | Resguardo",
    description: "Cobertura legal para compraventas de propiedades en las 16 regiones de Chile.",
    url: `${empresa.url}/cobertura`,
    locale: "es_CL",
    type: "website",
  },
};

export default function CoberturaIndexPage() {
  const regiones = getAllRegiones();

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { name: "Inicio", url: "/" },
          { name: "Cobertura", url: "/cobertura" },
        ]}
      />
      <main id="contenido" className="wrap mt-32 mb-64">
        <header className="max-w-prose">
          <p className="kicker">Cobertura Nacional</p>
          <h1 className="mt-14">
            Estudio de títulos e instrucciones notariales en las 16 regiones de Chile.
          </h1>
          <p className="lead mt-18">
            Revisamos la carpeta registral ante el Conservador de Bienes Raíces de cada comuna y
            coordinamos la firma en la notaría elegida por las partes. La firma es presencial; todo
            el seguimiento, digital y transparente.
          </p>
        </header>

        <section className="mt-44" aria-labelledby="regiones-tit">
          <h2 id="regiones-tit" className="sr-only">
            Regiones de Chile
          </h2>
          <ul
            className="regions"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
              padding: 0,
              listStyle: "none",
            }}
          >
            {regiones.map((reg) => (
              <li key={reg.slug}>
                <Link
                  href={`/cobertura/${reg.slug}`}
                  className="card"
                  style={{
                    display: "block",
                    padding: "20px",
                    textDecoration: "none",
                    color: "inherit",
                    border: "1px solid var(--border, #e2e8f0)",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        fontFamily: "var(--font-serif)",
                      }}
                    >
                      {reg.nombre}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "14px",
                        color: "var(--ink-2)",
                      }}
                    >
                      {reg.numero}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--ink-2)", marginTop: "8px" }}>
                    {reg.conservadores.length}{" "}
                    {reg.conservadores.length === 1
                      ? "Conservador registrado"
                      : "Conservadores registrados"}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="card mt-64 p-32"
          style={{
            backgroundColor: "var(--paper-dark, #f8f9fa)",
            borderRadius: "12px",
            padding: "32px",
          }}
        >
          <h2>¿Necesitas comprar o vender una propiedad en regiones?</h2>
          <p className="lead mt-14">
            Evaluamos tu caso gratis en 1 día hábil y te guiamos paso a paso con los documentos
            requeridos según tu Conservador local.
          </p>
          <div className="mt-24">
            <Link href="/#diagnostico" className="btn btn-primary">
              Iniciar diagnóstico gratis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
