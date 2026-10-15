import { Icon } from "./ui/Icons";
import { TrafficSymbol } from "./ui/TrafficSymbol";

type Hito = {
  titulo: string;
  texto: string;
  estado: "done" | "now" | "";
  fecha?: [string, string];
  cuando?: string;
  chip?: string;
};

const hitos: Hito[] = [
  {
    titulo: "Diagnóstico",
    texto: "Llamada de 15 minutos con el equipo.",
    estado: "done",
    fecha: ["2026-08-04", "04 ago"],
  },
  {
    titulo: "Estudio de títulos",
    texto: "10 años de títulos y 30 de gravámenes.",
    estado: "done",
    fecha: ["2026-08-11", "11 ago"],
    chip: "Amarillo · 2 puntos ya resueltos",
  },
  {
    titulo: "Escritura e instrucción notarial",
    texto: "Firmadas por ambas partes en notaría.",
    estado: "done",
    fecha: ["2026-08-22", "22 ago"],
  },
  {
    titulo: "Inscripción en el Conservador",
    texto: "Ingresada. Te avisamos apenas salga.",
    estado: "now",
    cuando: "en curso",
  },
  {
    titulo: "Pago liberado al vendedor",
    texto: "Cuando la propiedad figure a tu nombre.",
    estado: "",
    cuando: "pendiente",
  },
];

/** Tarjeta "Tu expediente": línea de tiempo de 5 estados + estado de la plata + sello. */
export function Expediente() {
  return (
    <aside className="file" aria-label="Ejemplo de seguimiento de una operación">
      <div className="file-head">
        <div>
          <small>Tu expediente</small>
          <h2>Casa en Puerto Varas</h2>
          <p className="meta">Exp. 2026-0142 · CBR Puerto Varas</p>
        </div>
        <span className="sample">Ejemplo ficticio</span>
      </div>
      <ol className="track">
        {hitos.map((h) => (
          <li key={h.titulo} className={h.estado || undefined}>
            <span className="dot" aria-hidden="true">
              {h.estado === "done" ? <Icon name="check" /> : null}
            </span>
            <div>
              <b>{h.titulo}</b>
              <span>{h.texto}</span>
              {h.chip ? (
                <em className="chip a">
                  <TrafficSymbol estado="a" />
                  {h.chip}
                </em>
              ) : null}
            </div>
            {h.fecha ? (
              <time dateTime={h.fecha[0]}>{h.fecha[1]}</time>
            ) : (
              <span className="when">{h.cuando}</span>
            )}
          </li>
        ))}
      </ol>
      <div className="money">
        <div>
          <small>Estado de tu plata</small>
          <strong>Vale vista en custodia</strong>
          <p>
            En la notaría, bajo instrucción notarial. Se entrega al vendedor solo cuando la
            inscripción está a tu nombre.
          </p>
        </div>
        <Sello />
      </div>
    </aside>
  );
}

export function Sello() {
  return (
    <svg className="stamp" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <defs>
        <path id="arc" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1-90 0" />
      </defs>
      <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text fontSize="10" fontWeight="500" letterSpacing="2.1" fill="currentColor">
        <textPath href="#arc">EN CUSTODIA · INSTRUCCIÓN NOTARIAL ·</textPath>
      </text>
      <path
        d="M47 61l9 9 18-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
