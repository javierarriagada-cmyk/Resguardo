import { describe, expect, it } from "vitest";
import { getAllGuias, getGuia, minutosLectura, textoPlano } from "./index";

const guias = getAllGuias();

describe("guías", () => {
  it("son tres, con slugs únicos", () => {
    expect(guias).toHaveLength(3);
    expect(new Set(guias.map((g) => g.slug)).size).toBe(3);
  });

  it.each(guias.map((g) => [g.slug, g] as const))("%s: cita normas y enlaza bien", (_, g) => {
    expect(g.fuentes.length).toBeGreaterThan(0);
    for (const f of g.fuentes) expect(f.url).toMatch(/^https:\/\/www\.bcn\.cl\/leychile\//);
    expect(minutosLectura(g)).toBeGreaterThan(1);
    expect(new Set(g.secciones.map((s) => s.id)).size).toBe(g.secciones.length);
    for (const r of g.relacionadas) expect(getGuia(r), r).toBeDefined();

    const texto = JSON.stringify(g.secciones);
    for (const [, href] of texto.matchAll(/\]\((\/guias\/[^)#]+)\)/g)) {
      expect(getGuia(href!.replace("/guias/", "")), href).toBeDefined();
    }
    // Sin cifras de plazos o costos inventados del servicio ni nombres de personas.
    expect(textoPlano(g)).not.toMatch(/abogad[oa] [A-ZÁÉÍÓÚ]/);
  });
});
