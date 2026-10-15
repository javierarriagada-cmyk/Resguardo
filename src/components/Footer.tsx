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
                <Link href="/precios">Planes y Precios</Link>
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
            </ul>
          </nav>
          {/* TODO(T11): enlazar a /guias/[slug] cuando existan las guías. */}
          <div role="group" aria-labelledby="foot-guias">
            <h4 id="foot-guias">Guías</h4>
            <ul>
              <li>Documentos para comprar</li>
              <li>Qué es un vale vista</li>
              <li>Vender una herencia</li>
              <li>Costos de notaría y CBR</li>
            </ul>
          </div>
          <nav aria-label="Empresa">
            <h4>Empresa</h4>
            <ul>
              <li>
                <Link href="/#como">Quiénes somos</Link>
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
