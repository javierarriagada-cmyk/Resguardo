import Link from "next/link";
import { getAllRegiones } from "@/content/regiones";

export function Cobertura() {
  const regionesData = getAllRegiones();

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
          <div className="mt-24">
            <Link href="/cobertura" className="btn btn-quiet">
              Ver cobertura por región
            </Link>
          </div>
        </div>
        <ul className="regions">
          {regionesData.map((reg) => (
            <li key={reg.slug}>
              <Link href={`/cobertura/${reg.slug}`} className="reg">
                {reg.nombre} <span>{reg.numero}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
