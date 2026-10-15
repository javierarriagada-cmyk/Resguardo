import type { Estado } from "@/lib/diagnostico/orientacion";
import { ESTADO_LABEL } from "@/lib/diagnostico/orientacion";
import type { CSSProperties } from "react";

/**
 * Símbolo de semáforo con forma + color (WCAG 1.4.1): círculo con visto (verde),
 * triángulo con exclamación (amarillo), octágono con equis (rojo), círculo punteado (neutro).
 * Decorativo por defecto; con `label` se expone como imagen accesible.
 */
export function TrafficSymbol({
  estado,
  label,
  style,
}: {
  estado: Estado;
  label?: boolean | string;
  style?: CSSProperties;
}) {
  const accesible = label !== undefined && label !== false;
  const texto = typeof label === "string" ? label : ESTADO_LABEL[estado];
  return (
    <svg
      className={`sym ${estado}`}
      style={style}
      focusable="false"
      {...(accesible ? { role: "img", "aria-label": texto } : { "aria-hidden": true })}
    >
      <use href={`#s-${estado}`} />
    </svg>
  );
}
