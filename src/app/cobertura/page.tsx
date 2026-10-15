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
          <ul className="regions">
            {regiones.map((reg) => (
              <li key={reg.slug}>
                <Link
                  href={`/cobertura/${reg.slug}`}
                  className="reg"
                  style={{ textDecoration: "none" }}
                >
                  {reg.nombre} <span>{reg.numero}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="card mt-64 p-32"
          style={{
            backgroundColor: "var(--paper-2)",
            borderRadius: "var(--radius-lg)",
            padding: "32px",
            border: "1px solid var(--line)",
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
