import { Icon } from "./ui/Icons";
import { Prov } from "./ui/Prov";

type Plan = {
  titulo: string;
  para: string;
  precio: string;
  unidad: string;
  cuando: string;
  incluye: string[];
  cta: [string, string];
  feat?: boolean;
};

const planes: Plan[] = [
  {
    titulo: "Estudio de títulos",
    para: "Para saber si la propiedad está en regla.",
    precio: "$190.000",
    unidad: "honorario",
    cuando:
      "Servicio independiente: se paga al encargarlo. Si después compras con nosotros, se descuenta.",
    incluye: [
      "Informe semáforo explicado",
      "10 años de títulos y 30 de gravámenes",
      "Llamada para explicarte el resultado",
    ],
    cta: ["Pedir estudio", "#diagnostico"],
  },
  {
    titulo: "Compra protegida",
    para: "De la revisión a la inscripción a tu nombre.",
    precio: "UF 14",
    unidad: "honorario",
    cuando:
      "Si la operación no se concreta, no pagas. Se cobra cuando enviamos la escritura a la notaría.*",
    incluye: [
      "Estudio de títulos con informe semáforo",
      "Escritura e instrucción notarial",
      "Coordinación del alzamiento bancario",
      "Seguimiento hasta la inscripción",
    ],
    cta: ["Empezar con el diagnóstico", "#diagnostico"],
    feat: true,
  },
  {
    titulo: "Venta protegida",
    para: "Publicamos y hacemos toda la parte legal.",
    precio: "UF 18",
    unidad: "precio fijo",
    cuando: "Sin comisión porcentual. Si la operación no se concreta, no pagas.*",
    incluye: [
      "Publicación en portales",
      "Carpeta legal lista para compradores y bancos",
      "Escritura y pago protegido con vale vista",
    ],
    cta: ["Quiero vender", "#vender"],
  },
];

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
            <article key={p.titulo} className={p.feat ? "plan feat" : "plan"}>
              {p.feat ? <span className="tagline">Lo más completo</span> : null}
              <h3>{p.titulo}</h3>
              <p className="for">{p.para}</p>
              <p className="price">
                {p.precio} <small>{p.unidad}</small> <Prov>provisorio</Prov>
              </p>
              <p className="when-pay">{p.cuando}</p>
              <ul>
                {p.incluye.map((i) => (
                  <li key={i}>
                    <Icon name="check" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a className={p.feat ? "btn btn-primary" : "btn btn-quiet"} href={p.cta[1]}>
                {p.cta[0]}
              </a>
            </article>
          ))}
        </div>
        <p className="costs">
          * La operación se considera concretada cuando enviamos la escritura a la notaría para su
          firma. Montos provisorios; los valores en UF se convierten a pesos el día del pago.
        </p>
      </div>
    </section>
  );
}
