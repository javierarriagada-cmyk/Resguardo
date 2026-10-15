import Link from "next/link";
import { empresa } from "@/content/empresa";
import { Icon } from "./ui/Icons";

export function Cierre() {
  return (
    <section className="closing" aria-labelledby="cta-t">
      <div className="wrap">
        <div>
          <h2 id="cta-t">Antes de transferir un peso, revisemos juntos.</h2>
          <p>El diagnóstico es gratis y te responde una persona.</p>
        </div>
        <div className="ctas">
          <a className="btn btn-primary" href="#diagnostico">
            Hacer mi diagnóstico gratis
          </a>
          <a className="btn btn-quiet btn-wa" href={empresa.whatsapp.url} rel="noopener">
            <Icon name="wa" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/** Barra de acciones fija en móvil (el pie reserva espacio para no ocultar el foco, WCAG 2.4.11). */
export function MobileBar() {
  return (
    <div className="mbar" role="region" aria-label="Acciones rápidas">
      <Link className="btn btn-primary" href="/#diagnostico">
        Diagnóstico gratis
      </Link>
      <a
        className="btn btn-quiet btn-wa"
        href={empresa.whatsapp.url}
        rel="noopener"
        aria-label="Escribir por WhatsApp"
      >
        <Icon name="wa" />
      </a>
    </div>
  );
}
