import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { Bloques } from "@/components/guias/Bloques";
import { empresa } from "@/content/empresa";
import { fechaLarga, getAllGuias, getGuia, minutosLectura } from "@/content/guias";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGuias().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuia(slug);
  if (!g) return {};
  return {
    title: g.corto,
    description: g.bajada,
    alternates: { canonical: `/guias/${g.slug}` },
    openGraph: {
      title: `${g.titulo} · Resguardo`,
      description: g.bajada,
      url: `/guias/${g.slug}`,
      locale: "es_CL",
      type: "article",
      publishedTime: g.revisada,
      modifiedTime: g.revisada,
    },
  };
}

function CtaDiagnostico({ id, titulo }: { id: string; titulo: string }) {
  return (
    <aside className="g-cta" aria-labelledby={id}>
      <p id={id} className="g-cta-t">
        {titulo}
      </p>
      <p>Te decimos qué revisar en tu caso, sin compromiso.</p>
      <Link href="/#diagnostico" className="btn btn-primary">
        Iniciar diagnóstico
      </Link>
    </aside>
  );
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuia(slug);
  if (!g) notFound();

  const mitad = Math.floor(g.secciones.length / 2);
  const relacionadas = g.relacionadas.map(getGuia).filter((r) => r !== undefined);
  const url = `${empresa.url}/guias/${g.slug}`;
  const org = { "@type": "Organization", name: empresa.nombre, url: empresa.url };

  return (
    <>
      <Header />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.titulo,
          description: g.bajada,
          inLanguage: "es-CL",
          datePublished: g.revisada,
          dateModified: g.revisada,
          mainEntityOfPage: url,
          url,
          author: org,
          publisher: org,
        }}
      />
      <main id="main">
        <header className="page-hero g-hero">
          <div className="wrap">
            <Breadcrumb
              items={[
                { name: "Inicio", url: "/" },
                { name: "Guías", url: "/guias" },
                { name: g.corto, url: `/guias/${g.slug}` },
              ]}
            />
            <p className="g-meta">
              <span>{g.categoria}</span>
              <span>{minutosLectura(g)} min de lectura</span>
            </p>
            <h1>{g.titulo}</h1>
            <p className="lead">{g.bajada}</p>
            <p className="g-byline">
              Equipo {empresa.nombre} · Revisada el{" "}
              <time dateTime={g.revisada}>{fechaLarga(g.revisada)}</time>
            </p>
          </div>
        </header>

        <div className="wrap g-layout">
          <nav className="g-toc" aria-label="En esta guía">
            <p className="g-toc-t">En esta guía</p>
            <ol>
              {g.secciones.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.titulo}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="g-body">
            <section className="g-brief" aria-labelledby="en-breve">
              <h2 id="en-breve">En breve</h2>
              <ul>
                {g.enBreve.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            {g.secciones.map((s, i) => (
              <div key={s.id}>
                <section aria-labelledby={s.id} className="g-sec">
                  <h2 id={s.id}>{s.titulo}</h2>
                  <Bloques bloques={s.bloques} />
                </section>
                {i === mitad - 1 && (
                  <CtaDiagnostico id="cta-medio" titulo="¿Estás en medio de una compraventa?" />
                )}
              </div>
            ))}

            <section className="g-fuentes" aria-labelledby="fuentes-t">
              <h2 id="fuentes-t">Normas citadas</h2>
              <ul>
                {g.fuentes.map((f) => (
                  <li key={f.norma}>
                    <a href={f.url} rel="noopener noreferrer">
                      {f.norma}
                    </a>
                    , {f.articulos}.
                  </li>
                ))}
              </ul>
              <p className="note">
                Textos consultados en LeyChile (Biblioteca del Congreso Nacional) en la fecha de
                revisión. Esta guía es informativa y no reemplaza la revisión de tu caso concreto.
              </p>
            </section>

            <CtaDiagnostico id="cta-final" titulo="Revisemos tu caso antes de que firmes." />
          </article>
        </div>

        {relacionadas.length > 0 && (
          <section className="sec-tight g-rel" aria-labelledby="rel-t">
            <div className="wrap">
              <h2 id="rel-t">Sigue leyendo</h2>
              <ul className="g-grid">
                {relacionadas.map((r) => (
                  <li key={r.slug}>
                    <article className="g-card">
                      <p className="g-meta">
                        <span>{r.categoria}</span>
                        <span>{minutosLectura(r)} min</span>
                      </p>
                      <h3>
                        <Link href={`/guias/${r.slug}`}>{r.titulo}</Link>
                      </h3>
                      <p>{r.bajada}</p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
