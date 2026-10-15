import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { UfReferencia, aproximarPesos } from "./UfReferencia";

const uf = {
  valor: 39876.54,
  fechaTexto: "15 de octubre de 2026",
  fechaISO: "2026-10-15T03:00:00.000Z",
};

describe("UfReferencia", () => {
  it("muestra el valor y la fecha cuando hay UF", () => {
    const html = renderToStaticMarkup(<UfReferencia uf={uf} />);
    expect(html).toContain("$39.877");
    expect(html).toContain("15 de octubre de 2026");
  });

  it("si la API falló, muestra solo la indicación en UF y ningún monto en pesos", () => {
    const html = renderToStaticMarkup(<UfReferencia uf={null} />);
    expect(html).toContain("Montos en UF");
    expect(html).not.toMatch(/\$\d/);
  });

  it("aproxima a pesos solo planes en UF con UF disponible", () => {
    expect(aproximarPesos(14, uf)).toBe("$558.272");
    expect(aproximarPesos(14, null)).toBeNull();
    expect(aproximarPesos(undefined, uf)).toBeNull();
  });
});
