import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <article className="legal-page">
          <p className="kicker">Error 404</p>
          <h1>No encontramos esta página.</h1>
          <p>
            Puede que el enlace haya cambiado.{" "}
            <Link className="link" href="/#diagnostico">
              Haz el diagnóstico gratis
            </Link>{" "}
            o vuelve al{" "}
            <Link className="link" href="/">
              inicio
            </Link>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
