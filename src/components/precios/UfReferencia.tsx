import type { DatosUF } from "@/lib/uf";
import { formatearPesos } from "@/lib/uf";

/** Valor de la UF del día. Sin datos (API caída), explica que los montos quedan en UF. */
export function UfReferencia({ uf }: { uf: DatosUF | null }) {
  return (
    <aside className="uf-ref" aria-label="Valor de la UF">
      <small>UF de referencia</small>
      {uf ? (
        <>
          <strong>{formatearPesos(uf.valor)}</strong>
          <p>
            Valor del <time dateTime={uf.fechaISO}>{uf.fechaTexto}</time> según mindicador.cl. Al
            cobrar usamos el valor del día del cobro.
          </p>
        </>
      ) : (
        <>
          <strong>Montos en UF</strong>
          <p>La conversión a pesos se hace con el valor de la UF del día del cobro.</p>
        </>
      )}
    </aside>
  );
}

/** Conversión aproximada de un plan en UF a pesos; null si no hay UF o el plan está en pesos. */
export function aproximarPesos(precioUF: number | undefined, uf: DatosUF | null): string | null {
  if (!precioUF || !uf) return null;
  return formatearPesos(Math.round(precioUF * uf.valor));
}
