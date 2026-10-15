import type { Bloque } from "@/content/guias/types";
import { Rico } from "./Rico";

export function Bloques({ bloques }: { bloques: Bloque[] }) {
  return (
    <>
      {bloques.map((b, i) => {
        switch (b.tipo) {
          case "p":
            return (
              <p key={i}>
                <Rico texto={b.texto} />
              </p>
            );
          case "lista": {
            const Tag = b.ordenada ? "ol" : "ul";
            return (
              <Tag key={i}>
                {b.items.map((it, k) => (
                  <li key={k}>
                    <Rico texto={it} />
                  </li>
                ))}
              </Tag>
            );
          }
          case "pasos":
            return (
              <ol key={i} className="g-pasos">
                {b.items.map((it, k) => (
                  <li key={k}>
                    <strong>{it.titulo}</strong>
                    <span>
                      <Rico texto={it.texto} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "nota":
            return (
              <aside key={i} className="g-nota" aria-label={b.titulo}>
                <p className="g-nota-t">{b.titulo}</p>
                <p>
                  <Rico texto={b.texto} />
                </p>
              </aside>
            );
          case "pendiente":
            return (
              <aside key={i} className="g-pend" aria-label="Por confirmar">
                <p>
                  <span className="tbd">Por confirmar</span> <Rico texto={b.texto} />
                </p>
              </aside>
            );
        }
      })}
    </>
  );
}
