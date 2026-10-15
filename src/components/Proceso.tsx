import { pasos, plata } from "@/content/home";
import { Prov } from "./ui/Prov";

/** "Cómo funciona": 5 pasos + franja "dónde está tu plata en cada paso". */
export function Proceso() {
  return (
    <section className="band" id="como" aria-labelledby="como-t">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker">Cómo funciona</p>
            <h2 id="como-t">Cinco pasos. El mismo equipo en todos.</h2>
          </div>
          <p className="lead">
            No te derivamos de una persona a otra. Quien estudia tus títulos redacta la escritura y
            sigue la inscripción hasta el final.
          </p>
        </div>
        <ol className="steps">
          {pasos.map((p, i) => (
            <li key={p.titulo}>
              <span className="num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
              <span className="who">
                {p.quien}
                {p.prov ? (
                  <>
                    {" "}
                    <Prov />
                  </>
                ) : null}
              </span>
            </li>
          ))}
        </ol>
        <p className="cash-t" id="cash-t">
          Dónde está tu plata en cada paso
        </p>
        <div className="cash" role="group" aria-labelledby="cash-t">
          {plata.map((c, i) => (
            <div key={i} className={c.tipo || undefined}>
              <b className="step-l">Paso {i + 1}</b>
              <span>{c.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
