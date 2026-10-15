import type { Estado } from "@/lib/diagnostico/orientacion";
import { Icon } from "./ui/Icons";
import { TrafficSymbol } from "./ui/TrafficSymbol";

const leyenda: { e: Exclude<Estado, "n">; nombre: string; titulo: string; texto: string }[] = [
  {
    e: "g",
    nombre: "Verde",
    titulo: "En regla.",
    texto: "Los títulos están conformes. Puedes avanzar a la escritura.",
  },
  {
    e: "a",
    nombre: "Amarillo",
    titulo: "Se puede, con condiciones.",
    texto:
      "Hay puntos que se resuelven antes o en la firma. Te decimos cuáles y quién los resuelve.",
  },
  {
    e: "r",
    nombre: "Rojo",
    titulo: "No pagues todavía.",
    texto:
      "Hay un riesgo que hoy impide una compra segura. Te decimos si tiene solución y cuánto toma.",
  },
];

const filas: {
  e: Estado;
  item: string;
  estado: string;
  src: string;
  todo: string;
  open?: boolean;
}[] = [
  {
    e: "g",
    item: "El vendedor es el dueño inscrito",
    estado: "En regla",
    src: "Dominio vigente a fs. 48.910 N° 70.144 del año 2019, Registro de Propiedad del CBR de Santiago. Certificado de 12 días.",
    todo: "nada adicional. Verificamos la identidad del vendedor en la firma.",
  },
  {
    e: "a",
    item: "Hipoteca vigente a favor de un banco",
    estado: "Se alza en la misma escritura",
    src: "Hipoteca y prohibición a fs. 31.207 N° 25.880 del año 2019, Registro de Hipotecas del CBR de Santiago.",
    todo: "pedimos al banco su cláusula de alzamiento y el saldo de la deuda. El vale vista paga primero la deuda y el resto va al vendedor.",
    open: true,
  },
  {
    e: "a",
    item: "Vendedor casado en sociedad conyugal",
    estado: "Debe autorizar su cónyuge",
    src: "Certificado de matrimonio con subinscripciones. Art. 1749 del Código Civil.",
    todo: "incluimos la cláusula de autorización y coordinamos que la cónyuge firme el mismo día.",
  },
  {
    e: "a",
    item: "Terraza cerrada sin regularizar",
    estado: "Decides tú, con la información",
    src: "Recepción final del edificio sin la ampliación. Fotos del aviso de venta.",
    todo: "te explicamos el riesgo y el costo aproximado de regularizar, por si quieres negociarlo en el precio.",
  },
  {
    e: "g",
    item: "Embargos, precautorias y prohibiciones",
    estado: "Sin anotaciones vigentes",
    src: "Certificado de hipotecas, gravámenes y prohibiciones de 30 años, de 12 días.",
    todo: "pedimos uno nuevo justo antes de firmar.",
  },
  {
    e: "g",
    item: "Contribuciones, expropiación y gastos comunes",
    estado: "Al día y sin afectación",
    src: "Certificado de deuda de Tesorería; no expropiación municipal y SERVIU; certificado de la administración.",
    todo: "los insertamos en la escritura cuando corresponde.",
  },
];

/** Informe semáforo: leyenda + informe de ejemplo con filas desplegables. */
export function Semaforo() {
  return (
    <section id="informe" className="sec-flush" aria-labelledby="inf-t">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker">El informe semáforo</p>
            <h2 id="inf-t">Un estudio de títulos que se entiende sin ser abogado.</h2>
          </div>
          <p className="lead">
            Cada punto dice qué encontramos, en qué documento consta y qué hacemos al respecto. El
            color resume; la explicación decide.
          </p>
        </div>
        <div className="legend">
          {leyenda.map((l) => (
            <article key={l.e} className={`lg ${l.e}`}>
              <header>
                <TrafficSymbol estado={l.e} />
                <b>{l.nombre}</b>
              </header>
              <h3>{l.titulo}</h3>
              <p>{l.texto}</p>
            </article>
          ))}
        </div>

        <article className="report" aria-labelledby="rep-t">
          <div className="report-top">
            <div>
              <small>Informe de títulos · Ejemplo ficticio</small>
              <h3 id="rep-t">Departamento 804, Ñuñoa</h3>
              <p className="meta">Rol 01234-00567 · CBR Santiago · Emitido el 14 oct 2026</p>
            </div>
            <div className="verdict">
              <TrafficSymbol estado="a" />
              <div>
                <b>Resultado: amarillo</b>
                <span>Se puede comprar, con 3 condiciones antes de firmar.</span>
              </div>
            </div>
          </div>
          <ul className="rows">
            {filas.map((f) => (
              <li key={f.item}>
                <details open={f.open}>
                  <summary>
                    <TrafficSymbol estado={f.e} label />
                    <span className="item">{f.item}</span>
                    <span className="state">{f.estado}</span>
                    <Icon name="chev" className="chev" />
                  </summary>
                  <div className="body">
                    <p className="src">{f.src}</p>
                    <p className="todo">
                      <b>Qué hacemos:</b> {f.todo}
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
          <div className="report-foot">
            <div className="signer">
              <span className="initials" aria-hidden="true">
                <Icon name="check" size={20} />
              </span>
              <div>
                <b className="signer-t">Revisado por el equipo legal de Resguardo</b>
                <br />
                Con la pauta de estudio de títulos de criterio bancario
              </div>
            </div>
            <div className="report-scope">Títulos revisados: 10 años · Gravámenes: 30 años</div>
          </div>
        </article>
        <p className="note">
          Los datos registrales de este ejemplo son ficticios. El informe se basa en los
          certificados vigentes a la fecha de emisión; si cambian antes de firmar, lo actualizamos.
        </p>
      </div>
    </section>
  );
}
