import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getAllRegiones } from "@/content/regiones";

const descripcion =
  "Compraventas de propiedades en las 16 regiones de Chile: el Conservador de Bienes Raíces de cada comuna, preguntas frecuentes locales y cómo trabajamos a distancia.";

export const metadata: Metadata = {
  title: "Cobertura por región",
  description: descripcion,
  alternates: { canonical: "/cobertura" },
  openGraph: {
    title: "Cobertura por región · Resguardo",
    description: descripcion,
    url: "/cobertura",
    locale: "es_CL",
    type: "website",
  },
};

export default function CoberturaIndexPage() {
  const regiones = getAllRegiones();
  const verificados = regiones.flatMap((r) => r.conservadores).filter((c) => c.fuente).length;

  return (
    <>
      <Header />
      <main id="contenido">
        <section className="page-hero" aria-labelledby="cob-t">
          <div className="wrap">
            <Breadcrumb
              items={[
                { name: "Inicio", url: "/" },
                { name: "Cobertura", url: "/cobertura" },
              ]}
            />
            <p className="kicker">Cobertura</p>
            <h1 id="cob-t">Las 16 regiones, con el Conservador que corresponde.</h1>
            <p className="lead">
              Trabajamos con el Conservador de la comuna donde está la propiedad y con la notaría
              que elijan las partes. La firma es presencial en notaría; todo lo demás, a distancia.
            </p>
          </div>
        </section>

        <section className="sec-tight" aria-labelledby="regiones-t">
          <div className="wrap cover-grid">
            <div>
              <h2 id="regiones-t">Elige tu región.</h2>
              <p className="lead mt-18">
                En cada región verás sus Conservadores, las comunas que atienden y preguntas
                frecuentes propias de esa zona.
              </p>
              <p className="note">
                Indicamos el territorio de un Conservador como verificado solo cuando lo respalda
                una página pública concreta ({verificados} hasta ahora). El resto aparece como
                “Territorio por confirmar”.
              </p>
            </div>
            <ul className="regions">
              {regiones.map((reg) => (
                <li key={reg.slug}>
                  <Link href={`/cobertura/${reg.slug}`} className="reg">
                    {reg.nombre} <span>{reg.numero}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band" aria-labelledby="cob-cta-t">
          <div className="wrap cta-box">
            <div>
              <h2 id="cob-cta-t">¿Compras o vendes una propiedad?</h2>
              <p className="lead mt-14">
                Cuéntanos tu caso en el diagnóstico y te decimos qué revisar primero.
              </p>
            </div>
            <Link href="/#diagnostico" className="btn btn-primary">
              Iniciar diagnóstico
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
