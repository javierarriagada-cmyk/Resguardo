import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/ui/Icons";
import { Prov } from "@/components/ui/Prov";
import { JsonLd, faqJsonLd, offerCatalogJsonLd } from "@/components/JsonLd";
import { planesPrecios, costosTerceros, faqPagos } from "@/content/precios";
import { NOTA_CONCRETADA } from "@/content/home";
import { obtenerValorUF, formatearPesos } from "@/lib/uf";

export const metadata: Metadata = {
  title: "Precios y Aranceles · Resguardo",
  description:
    "Precios fijos y transparentes para tu compraventa. Compra protegida, venta protegida y estudio de títulos. Conoce qué incluye cada plan y los costos de terceros.",
  alternates: {
    canonical: "/precios",
  },
  openGraph: {
    title: "Precios y Aranceles · Resguardo",
    description:
      "Precios fijos y transparentes para tu compraventa. Conoce qué incluye cada plan y la garantía: si la operación no se concreta, no pagas.",
    url: "/precios",
    locale: "es_CL",
    type: "website",
  },
};

export default async function PreciosPage() {
  const datosUF = await obtenerValorUF();

  return (
    <>
      <JsonLd data={offerCatalogJsonLd()} />
      <JsonLd data={faqJsonLd(faqPagos)} />
      <Header />
      <main id="contenido">
        {/* Banner o Hero de la página de precios */}
        <section className="hero">
          <div className="wrap">
            <p className="kicker">Tarifas y planes</p>
            <h1>Precios fijos. Sin sorpresas ni comisiones ocultas.</h1>
            <p className="lead">
              Sabes exactamente cuánto pagas, qué incluye el servicio y cuándo se cobra. Tu dinero
              en custodia notarial y la garantía que protege tu inversión de principio a fin.
            </p>

            {/* Banner con la UF del día */}
            <div className="money" style={{ maxWidth: "480px", margin: "28px 0 0" }}>
              <div>
                <small>Valor UF de referencia</small>
                <strong>
                  {datosUF ? (
                    <>
                      {formatearPesos(datosUF.valor)}{" "}
                      <span
                        style={{ fontSize: "0.85rem", fontStyle: "normal", color: "var(--ink-3)" }}
                      >
                        CLP
                      </span>
                    </>
                  ) : (
                    "UF al día"
                  )}
                </strong>
                <p>
                  {datosUF ? (
                    <>
                      Valor oficial al {datosUF.fechaTexto} (vía mindicador.cl). Los planes en UF se
                      convierten a CLP el día del pago.
                    </>
                  ) : (
                    <>
                      Los planes en UF se convierten a pesos (CLP) según el valor oficial del Banco
                      Central el día del cobro.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección principal de Planes */}
        <section className="band" style={{ paddingTop: "40px" }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="kicker">Planes de servicio</p>
                <h2>Elige la protección que necesitas para tu compraventa.</h2>
              </div>
              <p className="lead">
                Todos los planes incluyen un equipo dedicado y una pauta de revisión escrita con
                criterio bancario.
              </p>
            </div>

            <div className="plans">
              {planesPrecios.map((p) => {
                let precioCalculadoCLP: string | null = null;
                if (p.precioUF && datosUF) {
                  precioCalculadoCLP = formatearPesos(Math.round(p.precioUF * datosUF.valor));
                }

                return (
                  <article key={p.id} className={p.feat ? "plan feat" : "plan"}>
                    {p.feat ? <span className="tagline">Más elegido</span> : null}
                    <h3>{p.titulo}</h3>
                    <p className="for">{p.para}</p>
                    <div className="price">
                      {p.provisorio ? <Prov>provisorio</Prov> : null}
                      <span>{p.precioTexto}</span>
                      <small>({p.unidad})</small>
                    </div>

                    {precioCalculadoCLP ? (
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--ink-2)",
                          marginTop: "6px",
                          fontWeight: 500,
                        }}
                      >
                        ≈ {precioCalculadoCLP} CLP{" "}
                        <span style={{ fontSize: "0.76rem", color: "var(--ink-3)" }}>
                          (estimado al día)
                        </span>
                      </p>
                    ) : null}

                    <p className="when-pay">{p.cuando}</p>

                    <ul>
                      {p.incluye.map((item, idx) => (
                        <li key={idx}>
                          <Icon name="check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link className={p.feat ? "btn btn-primary" : "btn btn-quiet"} href={p.cta[1]}>
                      {p.cta[0]}
                    </Link>
                  </article>
                );
              })}
            </div>

            <p className="costs" style={{ marginTop: "32px" }}>
              * {NOTA_CONCRETADA} Todos los montos expresados en UF o pesos están marcados como
              provisorios por confirmar según la estimación comercial aprobada.
            </p>
          </div>
        </section>

        {/* Tabla de costos de terceros */}
        <section>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="kicker">Gastos operacionales</p>
                <h2>Tabla de costos de terceros</h2>
              </div>
              <p className="lead">
                Los aranceles notariales, derechos del Conservador de Bienes Raíces y certificados
                no son honorarios legales de Resguardo: se pagan directamente a cada institución.
              </p>
            </div>

            <div
              className="report"
              tabIndex={0}
              role="region"
              aria-label="Tabla de costos de terceros"
              style={{ overflowX: "auto" }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "left",
                  fontSize: "0.93rem",
                }}
              >
                <thead>
                  <tr
                    style={{
                      borderBottom: "2px solid var(--line)",
                      background: "var(--paper)",
                    }}
                  >
                    <th style={{ padding: "16px 20px", fontWeight: "600" }}>Trámite / Arancel</th>
                    <th style={{ padding: "16px 20px", fontWeight: "600" }}>Entidad recaudadora</th>
                    <th style={{ padding: "16px 20px", fontWeight: "600" }}>Monto estimado</th>
                    <th style={{ padding: "16px 20px", fontWeight: "600" }}>Detalle del cobro</th>
                  </tr>
                </thead>
                <tbody>
                  {costosTerceros.map((c, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom:
                          i < costosTerceros.length - 1 ? "1px solid var(--line)" : "none",
                      }}
                    >
                      <td style={{ padding: "18px 20px", fontWeight: "600" }}>{c.item}</td>
                      <td style={{ padding: "18px 20px", color: "var(--ink-2)" }}>{c.entidad}</td>
                      <td style={{ padding: "18px 20px", whiteSpace: "nowrap" }}>
                        {c.porConfirmar ? (
                          <span
                            style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}
                          >
                            <Prov>{c.montoTexto}</Prov>
                          </span>
                        ) : (
                          c.montoTexto
                        )}
                      </td>
                      <td
                        style={{ padding: "18px 20px", color: "var(--ink-2)", fontSize: "0.88rem" }}
                      >
                        {c.nota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">
              Nota: Con la entrada en vigencia de la Ley 21.772, los aranceles notariales y de
              Conservadores están regulados por los decretos del Ministerio de Justicia. En tu
              presupuesto inicial te entregamos el desglose exacto según la comuna y valor de la
              compraventa.
            </p>
          </div>
        </section>

        {/* FAQ de pagos y garantía */}
        <section className="band" id="faq-pagos">
          <div className="wrap">
            <div className="cover-grid">
              <div>
                <p className="kicker">Dudas sobre pagos</p>
                <h2>Preguntas frecuentes sobre precios y garantía.</h2>
                <p className="lead" style={{ marginTop: "16px" }}>
                  Transparencia absoluta antes de contratar. Si tienes alguna duda adicional,
                  nuestro equipo te responderá de inmediato.
                </p>
                <div style={{ marginTop: "24px" }}>
                  <Link className="btn btn-quiet" href="/#diagnostico">
                    Consultar caso en el diagnóstico
                  </Link>
                </div>
              </div>

              <div className="faq">
                {faqPagos.map((item, idx) => (
                  <details key={idx} open={idx === 0}>
                    <summary>
                      <span>{item.q}</span>
                      <Icon name="plus" />
                    </summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
