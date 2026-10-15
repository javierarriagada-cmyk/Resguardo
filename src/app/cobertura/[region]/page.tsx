import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/ui/Icons";
import { getAllRegiones, getRegionBySlug, type ConservadorData } from "@/content/regiones";
import { empresa } from "@/content/empresa";

type Props = { params: Promise<{ region: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllRegiones().map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const region = getRegionBySlug((await params).region);
  if (!region) return {};
  const url = `/cobertura/${region.slug}`;
  return {
    title: region.titular,
    description: region.bajada,
    alternates: { canonical: url },
    openGraph: {
      title: `${region.titular} · Resguardo`,
      description: region.bajada,
      url,
      locale: "es_CL",
      type: "website",
    },
  };
}

function dominio(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

function fechaCorta(iso: string): string {
  const [a, m, d] = iso.split("-");
  return `${d}-${m}-${a}`;
}

function Conservador({ cbr }: { cbr: ConservadorData }) {
  return (
    <li className="cbr">
      <div className="cbr-head">
        <h3>{cbr.nombre}</h3>
        {cbr.fuente ? (
          <p className="cbr-src">
            Territorio verificado ·{" "}
            <a href={cbr.fuente.url} rel="noopener noreferrer" target="_blank">
              Fuente: {dominio(cbr.fuente.url)}
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </a>{" "}
            <span className="cbr-date">consultada el {fechaCorta(cbr.fuente.consultada)}</span>
          </p>
        ) : (
          <span className="tbd">Territorio por confirmar</span>
        )}
      </div>
      <ul className="chips" aria-label={`Comunas de ${cbr.nombre}`}>
        {cbr.comunas.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      {cbr.nota ? <p className="cbr-note">{cbr.nota}</p> : null}
    </li>
  );
}

export default async function RegionPage({ params }: Props) {
  const region = getRegionBySlug((await params).region);
  if (!region) notFound();

  const url = `/cobertura/${region.slug}`;
  const pendientes = region.conservadores.some((c) => !c.fuente);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: region.titular,
          description: region.bajada,
          url: `${empresa.url}${url}`,
          provider: { "@id": `${empresa.url}/#organizacion` },
          areaServed: { "@type": "AdministrativeArea", name: `Región ${region.nombre}` },
        }}
      />
      <Header />
      <main id="main">
        <section className="page-hero" aria-labelledby="reg-t">
          <div className="wrap">
            <Breadcrumb
              items={[
                { name: "Inicio", url: "/" },
                { name: "Cobertura", url: "/cobertura" },
                { name: region.nombre, url },
              ]}
            />
            <p className="kicker">
              Región {region.numero} · {region.nombre}
            </p>
            <h1 id="reg-t">{region.titular}</h1>
            <p className="lead">{region.bajada}</p>
          </div>
        </section>

        <section className="sec-tight" aria-labelledby="cbr-t">
          <div className="wrap cover-grid">
            <div>
              <p className="kicker">Conservadores</p>
              <h2 id="cbr-t" className="mt-14">
                Conservadores de Bienes Raíces en {region.nombreConArticulo}
              </h2>
              <p className="lead mt-18">{region.descripcion}</p>
              {pendientes ? (
                <p className="note">
                  La lista aún no es exhaustiva. Antes de pedir un certificado confirmamos el
                  Conservador competente para la comuna de tu propiedad.
                </p>
              ) : null}
            </div>
            <ul className="cbr-list">
              {region.conservadores.map((c) => (
                <Conservador key={c.nombre} cbr={c} />
              ))}
            </ul>
          </div>
        </section>

        <section className="band" aria-labelledby="faq-t">
          <div className="wrap faq-grid">
            <div>
              <p className="kicker">Preguntas frecuentes</p>
              <h2 id="faq-t" className="mt-14">
                Preguntas frecuentes en {region.nombreConArticulo}
              </h2>
            </div>
            <div className="faq">
              {region.faq.map((item, i) => (
                <details key={item.q} open={i === 0}>
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

        <section aria-labelledby="cta-t">
          <div className="wrap cta-box">
            <div>
              <h2 id="cta-t">¿Compras o vendes en {region.nombreConArticulo}?</h2>
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
