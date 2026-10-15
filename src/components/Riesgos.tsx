import { riesgos } from "@/content/home";

export function Riesgos() {
  return (
    <section aria-labelledby="riesgos-t">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="kicker">Dónde se pierde la plata</p>
            <h2 id="riesgos-t">Las estafas casi nunca parecen estafas.</h2>
          </div>
          <p className="lead">
            Parecen un vendedor amable, una carpeta incompleta o un “después lo firmamos”. Estos son
            los problemas que más se repiten entre particulares, y cómo los revisamos antes de que
            pongas un peso.
          </p>
        </div>
        <ol className="risks">
          {riesgos.map((r, i) => (
            <li className="risk" key={r.titulo}>
              <span className="n" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{r.titulo}</h3>
              <p>
                {r.texto}
                <span className="how">
                  <b>{r.como[0]}</b> {r.como[1]}
                </span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
