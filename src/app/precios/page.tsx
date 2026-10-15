import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlanCard } from "@/components/Precios";
import { UfReferencia, aproximarPesos } from "@/components/precios/UfReferencia";
import { Icon } from "@/components/ui/Icons";
import { JsonLd, faqJsonLd, serviciosJsonLd } from "@/components/JsonLd";
import { costosTerceros, faqPagos, planes } from "@/content/precios";
import { NOTA_CONCRETADA } from "@/content/home";
import { obtenerValorUF } from "@/lib/uf";

const descripcion =
  "Estudio de títulos, Compra protegida y Venta protegida a precio fijo. Qué incluye cada plan, cuándo se paga y qué cobran aparte la notaría y el Conservador.";

export const metadata: Metadata = {
  title: "Precios y aranceles",
  description: descripcion,
  alternates: { canonical: "/precios" },
  openGraph: {
    title: "Precios y aranceles · Resguardo",
    description: descripcion,
    url: "/precios",
    locale: "es_CL",
    type: "website",
  },
};

// Revalida la página (y la UF) una vez al día.
export const revalidate = 86400;

export default async function PreciosPage() {
  const uf = await obtenerValorUF();

  return (
    <>
      <JsonLd data={serviciosJsonLd()} />
      <JsonLd data={faqJsonLd(faqPagos)} />
      <Header />
      <main id="main">
        <section className="page-hero" aria-labelledby="precios-t">
          <div className="wrap page-hero-grid">
            <div>
              <p className="kicker">Precios y aranceles</p>
              <h1 id="precios-t">Cuánto cuesta y cuándo se paga.</h1>
              <p className="lead">
                Sabes cuánto pagas, qué incluye y cuándo se cobra. Lo que cobran la notaría y el
                Conservador va aparte, y te lo detallamos con los valores reales de tu operación.
              </p>
            </div>
            <UfReferencia uf={uf} />
          </div>
        </section>

        <section className="band sec-tight" aria-labelledby="planes-t">
          <div className="wrap">
            <h2 id="planes-t" className="sr-only">
              Planes
            </h2>
            <div className="plans">
              {planes.map((p) => (
                <PlanCard key={p.id} plan={p} conId aproxPesos={aproximarPesos(p.precioUF, uf)} />
              ))}
            </div>
            <p className="costs">* {NOTA_CONCRETADA}</p>
          </div>
        </section>

        <section aria-labelledby="terceros-t">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="kicker">Costos de terceros</p>
                <h2 id="terceros-t">Lo que no cobramos nosotros.</h2>
              </div>
              <p className="lead">
                Estos montos los cobran directamente la notaría, el Conservador y quienes emiten los
                certificados. Dependen de la comuna y del valor de la operación.
              </p>
            </div>
            <div className="cost-table" role="region" aria-labelledby="terceros-t" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Concepto</th>
                    <th scope="col">Quién lo cobra</th>
                    <th scope="col">Monto</th>
                    <th scope="col">De qué depende</th>
                  </tr>
                </thead>
                <tbody>
                  {costosTerceros.map((c) => (
                    <tr key={c.item}>
                      <th scope="row">{c.item}</th>
                      <td>{c.quienCobra}</td>
                      <td>
                        <span className="tbd">Por confirmar</span>
                      </td>
                      <td>{c.detalle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">
              Antes de firmar te entregamos el detalle de estos montos para tu caso, con su fecha.
            </p>
          </div>
        </section>

        <section className="band" id="faq-pagos" aria-labelledby="faq-pagos-t">
          <div className="wrap faq-grid">
            <div>
              <p className="kicker">Pagos y garantía</p>
              <h2 id="faq-pagos-t">Preguntas sobre pagos.</h2>
              <p className="lead mt-18">
                Si tu duda no está aquí, cuéntanos tu caso en el diagnóstico.
              </p>
              <Link className="btn btn-quiet mt-24" href="/#diagnostico">
                Ir al diagnóstico
              </Link>
            </div>
            <div className="faq">
              {faqPagos.map((item, idx) => (
                <details key={item.q} open={idx === 0}>
                  <summary>
                    <span>{item.q}</span>
                    <Icon name="plus" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
