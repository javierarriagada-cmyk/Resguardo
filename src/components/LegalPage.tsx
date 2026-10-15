import { NOTA_CONCRETADA } from "@/content/home";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Prov } from "./ui/Prov";

/** Página legal provisoria: el texto definitivo requiere revisión legal propia (estrategia §9.11). */
export function LegalPage({ titulo }: { titulo: string }) {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <article className="legal-page">
          <p className="kicker">Legal</p>
          <h1>{titulo}</h1>
          <p>
            Texto en redacción <Prov />. Mientras tanto: usamos tus datos solo para contactarte
            sobre tu caso, no los compartimos con terceros y puedes pedir que los eliminemos
            escribiéndonos.
          </p>
          <p>{NOTA_CONCRETADA}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
