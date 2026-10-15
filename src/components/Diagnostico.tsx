import { DiagnosticWizard } from "./DiagnosticWizard";
import { Icon } from "./ui/Icons";
import { Prov } from "./ui/Prov";

export function Diagnostico() {
  return (
    <section id="diagnostico" aria-labelledby="diag-t">
      <div className="wrap diag-grid">
        <div className="diag-aside">
          <p className="kicker">Diagnóstico gratis</p>
          <h2 id="diag-t">Antes de firmar nada, cuéntanos tu caso.</h2>
          <p className="lead">
            Tres pasos, unos dos minutos. Al final verás qué revisaríamos primero en tu caso.
            Después te escribe una persona, no un bot.
          </p>
          <ul>
            <li>
              <Icon name="check" />
              <span>Sin compromiso y sin pedirte documentos todavía.</span>
            </li>
            <li>
              <Icon name="check" />
              <span>Sirve si vas a comprar, a vender o si ya firmaste una promesa.</span>
            </li>
            <li>
              <Icon name="check" />
              <span>
                Respondemos en horario hábil <Prov />.
              </span>
            </li>
          </ul>
        </div>
        <DiagnosticWizard />
      </div>
    </section>
  );
}
