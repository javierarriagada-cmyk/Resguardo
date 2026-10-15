import { empresa } from "@/content/empresa";
import { NOTA_CONCRETADA } from "@/content/home";
import { Expediente } from "./Expediente";
import { PersonaIntro } from "./PersonaIntro";
import { Icon } from "./ui/Icons";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="h-title">
      <div className="wrap hero-grid">
        <div>
          <PersonaIntro />
          <div className="ctas">
            <a className="btn btn-primary" href="#diagnostico">
              Hacer mi diagnóstico gratis <Icon name="arrow" />
            </a>
            <a className="btn btn-quiet btn-wa" href={empresa.whatsapp.url} rel="noopener">
              <Icon name="wa" /> Hablar con el equipo
            </a>
          </div>
          <ul className="promises">
            <li>
              <b>Si la operación no se concreta, no pagas*</b>Cobramos cuando la escritura se envía
              a la notaría, no antes.
            </li>
            <li>
              <b>Revisión con pauta escrita</b>Cada punto se revisa con la misma lista de control.
              No es un reporte automático.
            </li>
            <li>
              <b>Todo Chile, desde tu teléfono</b>Coordinamos con la notaría y el Conservador de tu
              comuna.
            </li>
          </ul>
          <p className="fn">
            * <b>Operación concretada</b>
            {NOTA_CONCRETADA.replace("Operación concretada", "")} Certificados, derechos notariales
            y del Conservador son costos de terceros.
          </p>
        </div>
        <Expediente />
      </div>
    </section>
  );
}
