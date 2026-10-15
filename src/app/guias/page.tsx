import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { fechaLarga, getAllGuias, minutosLectura } from "@/content/guias";

const descripcion =
  "Guías claras sobre compraventa de propiedades en Chile: los documentos que pedir, la instrucción notarial y el vale vista, con la norma citada.";

export const metadata: Metadata = {
  title: "Guías",
  description: descripcion,
  alternates: { canonical: "/guias" },
  openGraph: {
    title: "Guías · Resguardo",
    description: descripcion,
    url: "/guias",
    locale: "es_CL",
    type: "website",
  },
};

export default function GuiasPage() {
  const [destacada, ...resto] = getAllGuias();
  if (!destacada) return null;

  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero" aria-labelledby="guias-t">
          <div className="wrap">
            <Breadcrumb
              items={[
                { name: "Inicio", url: "/" },
                { name: "Guías", url: "/guias" },
              ]}
            />
            <p className="kicker">Guías</p>
            <h1 id="guias-t">Lo que conviene saber antes de firmar.</h1>
            <p className="lead">
              Tres guías sobre cómo se compra y se vende una propiedad en Chile. Cada requisito
              legal lleva su norma citada; lo que no pudimos verificar está marcado como “por
              confirmar”.
            </p>
          </div>
        </section>

        <section className="sec-tight" aria-label="Índice de guías">
          <div className="wrap">
            <article className="g-feat">
              <p className="g-meta">
                <span>{destacada.categoria}</span>
                <span>{minutosLectura(destacada)} min de lectura</span>
              </p>
              <h2>
                <Link href={`/guias/${destacada.slug}`}>{destacada.titulo}</Link>
              </h2>
              <p className="lead">{destacada.bajada}</p>
              <ul className="g-feat-list">
                {destacada.enBreve.slice(0, 3).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="g-date">Revisada el {fechaLarga(destacada.revisada)}</p>
            </article>

            <ol className="g-grid">
              {resto.map((g, i) => (
                <li key={g.slug}>
                  <article className="g-card">
                    <span className="g-num" aria-hidden="true">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    <p className="g-meta">
                      <span>{g.categoria}</span>
                      <span>{minutosLectura(g)} min</span>
                    </p>
                    <h2>
                      <Link href={`/guias/${g.slug}`}>{g.titulo}</Link>
                    </h2>
                    <p>{g.bajada}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="band" aria-labelledby="guias-cta-t">
          <div className="wrap cta-box">
            <div>
              <h2 id="guias-cta-t">¿Tu caso no calza con ninguna guía?</h2>
              <p className="lead mt-14">
                Cuéntanos qué estás comprando o vendiendo y te decimos qué revisar primero.
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
