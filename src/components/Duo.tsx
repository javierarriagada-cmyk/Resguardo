import { Icon } from "./ui/Icons";
import { Prov } from "./ui/Prov";

export function Duo() {
  return (
    <section id="vender" aria-labelledby="ven-t">
      <div className="wrap duo">
        <article>
          <p className="kicker">Para quien vende</p>
          <h3 id="ven-t">Firmas sabiendo que la plata ya existe.</h3>
          <p>
            El comprador deja el pago en vale vista en la notaría antes de que entregues nada.
            Preparamos tu carpeta legal para que ningún banco ni comprador la objete.
          </p>
          <ul>
            {[
              "Publicación en los principales portales",
              "Certificados del Conservador y municipales al día",
              "Precio fijo en vez de comisión porcentual",
            ].map((t) => (
              <li key={t}>
                <Icon name="check" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#diagnostico">
            Quiero vender mi propiedad
          </a>
        </article>
        <article className="dark" id="corredores" aria-labelledby="cor-t">
          <p className="kicker">Para corredores</p>
          <h3 id="cor-t">Tú cierras el negocio. Nosotros, la parte legal.</h3>
          <p>
            Derivas la operación y tu cliente recibe estudio, escritura e instrucción notarial con
            seguimiento. Tu comisión no se toca y ves el estado del expediente.
          </p>
          <ul>
            <li>
              <Icon name="check" />
              <span>
                Tarifa preferente por volumen <Prov />
              </span>
            </li>
            <li>
              <Icon name="check" />
              <span>Estado de cada operación compartido contigo</span>
            </li>
            <li>
              <Icon name="check" />
              <span>Convenio escrito, sin exclusividad</span>
            </li>
          </ul>
          <a className="btn btn-quiet" href="#diagnostico">
            Conversemos una alianza
          </a>
        </article>
      </div>
    </section>
  );
}
