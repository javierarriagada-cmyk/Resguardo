"use client";

import { persona, type Persona } from "@/content/home";
import { useState } from "react";

/** Selector Compro/Vendo (aria-pressed) que cambia el titular y la bajada del hero. */
export function PersonaIntro() {
  const [p, setP] = useState<Persona>("compro");
  const c = persona[p];
  return (
    <>
      <div className="persona" role="group" aria-label="¿Qué quieres hacer?">
        {(Object.keys(persona) as Persona[]).map((k) => (
          <button key={k} type="button" aria-pressed={p === k} onClick={() => setP(k)}>
            {persona[k].boton}
          </button>
        ))}
      </div>
      <h1 id="h-title" aria-live="polite">
        {c.titulo[0]}
        <em>{c.titulo[1]}</em>
        {c.titulo[2]}
      </h1>
      <p className="lead" id="h-sub">
        {c.bajada}
      </p>
    </>
  );
}
