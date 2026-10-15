import Link from "next/link";
import { planes, type Plan } from "@/content/precios";
import { Icon } from "./ui/Icons";
import { Prov } from "./ui/Prov";

/** Tarjeta de plan compartida por la portada y /precios. */
export function PlanCard({
  plan,
  aproxPesos,
  conId = false,
}: {
  plan: Plan;
  aproxPesos?: string | null;
  conId?: boolean;
}) {
  return (
    <article id={conId ? plan.id : undefined} className={plan.feat ? "plan feat" : "plan"}>
      {plan.feat ? <span className="tagline">Lo más completo</span> : null}
      <h3>{plan.titulo}</h3>
      <p className="for">{plan.para}</p>
      <p className="price">
        {plan.precioTexto} <small>{plan.unidad}</small>{" "}
        {plan.provisorio ? <Prov>provisorio</Prov> : null}
      </p>
      {aproxPesos ? (
        <p className="price-aprox">
          ≈ {aproxPesos} <span>al valor de la UF de hoy</span>
        </p>
      ) : null}
      <p className="when-pay">{plan.cuando}</p>
      <ul>
        {plan.incluye.map((i) => (
          <li key={i}>
            <Icon name="check" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <Link className={plan.feat ? "btn btn-primary" : "btn btn-quiet"} href={plan.cta[1]}>
        {plan.cta[0]}
      </Link>
    </article>
  );
}

export function Precios() {
  return (
    <section id="precios" className="band" aria-labelledby="pre-t">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker">Precios</p>
            <h2 id="pre-t">Precio fijo, conocido antes de empezar.</h2>
          </div>
          <p className="lead">
            Sabes cuánto pagas, qué incluye y cuándo se cobra. Los gastos de notaría y Conservador
            te los detallamos aparte, con los valores reales de tu operación.
          </p>
        </div>
        <div className="plans">
          {planes.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
        <p className="costs">
          * La operación se considera concretada cuando enviamos la escritura a la notaría para su
          firma. Montos provisorios; los valores en UF se convierten a pesos el día del pago.{" "}
          <Link href="/precios">Ver precios en detalle</Link>
        </p>
      </div>
    </section>
  );
}
