import { regiones } from "@/content/home";

export function Cobertura() {
  return (
    <section className="band" aria-labelledby="cob-t">
      <div className="wrap cover-grid">
        <div>
          <p className="kicker">Cobertura</p>
          <h2 id="cob-t" className="mt-14">
            De Arica a Magallanes.
          </h2>
          <p className="lead mt-18">
            Trabajamos con el Conservador que corresponde a cada comuna y con la notaría que elijan
            las partes. La firma es presencial en notaría; todo lo demás, a distancia.
          </p>
        </div>
        {/* TODO(T10): enlazar cada región a /cobertura/[region] cuando existan las páginas regionales. */}
        <ul className="regions">
          {regiones.map(([nombre, num]) => (
            <li key={nombre}>
              <span className="reg">
                {nombre} <span>{num}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
