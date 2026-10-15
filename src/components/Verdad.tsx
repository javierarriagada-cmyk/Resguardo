import { Prov } from "./ui/Prov";

/** Franja "lo que hacemos y lo que no": hechos verificables, sin cifras sin respaldo. */
export function Verdad() {
  return (
    <div className="truth" role="region" aria-label="Lo que hacemos y lo que no">
      <div className="wrap">
        <div>
          <b>No reemplazamos a la notaría</b>
          <span>
            La firma ante notario y la inscripción en el Conservador siguen siendo obligatorias. Las
            preparamos y coordinamos.
          </span>
        </div>
        <div>
          <b>Pauta de revisión escrita</b>
          <span>
            Cada estudio sigue la misma lista de control, punto por punto. Nada queda a criterio del
            día.
          </span>
        </div>
        <div>
          <b>Criterio bancario</b>
          <span>
            10 años de títulos y certificado de gravámenes de 30 años, como para un crédito
            hipotecario.
          </span>
        </div>
        <div>
          <b>Operaciones acompañadas</b>
          <span>
            Cifra real y verificable <Prov />. No publicamos números que no podamos respaldar.
          </span>
        </div>
      </div>
    </div>
  );
}
