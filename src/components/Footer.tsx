import Link from "next/link";
import { empresa } from "@/content/empresa";
import { Prov } from "./ui/Prov";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link className="brand" href="/">
              <span className="brand-word">Resguardo</span>
            </Link>
            <p className="foot-about">
              Servicio legal para compraventas de propiedades entre particulares en todo Chile. No
              somos notaría ni Conservador.
            </p>
          </div>
          <nav aria-label="Servicios">
            <h4>Servicios</h4>
            <ul>
              <li>
                <Link href="/precios">Precios</Link>
              </li>
              <li>
                <Link href="/precios#compra-protegida">Compra protegida</Link>
              </li>
              <li>
                <Link href="/precios#venta-protegida">Venta protegida</Link>
              </li>
              <li>
                <Link href="/precios#estudio-titulos">Estudio de títulos</Link>
              </li>
              <li>
                <Link href="/#corredores">Corredores</Link>
              </li>
              <li>
                <Link href="/cobertura">Cobertura por región</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Guías">
            <h4>Guías</h4>
            <ul>
              <li>
                <Link href="/guias/documentos-antes-de-comprar">Documentos para comprar</Link>
              </li>
              <li>
                <Link href="/guias/vale-vista">Cómo funciona el vale vista</Link>
              </li>
              <li>
                <Link href="/guias/instruccion-notarial">La instrucción notarial</Link>
              </li>
              <li>
                <Link href="/guias">Todas las guías</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Empresa">
            <h4>Empresa</h4>
            <ul>
              <li>
                <Link href="/#como">Quiénes somos</Link>
              </li>
              <li>
                <Link href="/#faq">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link href="/legal/privacidad">Política de privacidad</Link>
              </li>
              <li>
                <Link href="/legal/terminos">Términos del servicio</Link>
              </li>
              <li>
                <a href={empresa.whatsapp.url} rel="noopener">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="legal">
          <span>
            Razón social y RUT <Prov />
          </span>
          <span>© {new Date().getFullYear()} Resguardo · nombre, cifras y precios provisorios</span>
        </div>
      </div>
    </footer>
  );
}
