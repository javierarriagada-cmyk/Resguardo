import { describe, expect, it } from "vitest";
import { PAGOS, SENALES, type Senal } from "./constantes";
import { orientacion, peorEstado } from "./orientacion";

function combinaciones<T>(xs: readonly T[]): T[][] {
  return xs.reduce<T[][]>((acc, x) => acc.concat(acc.map((c) => [...c, x])), [[]]);
}

describe("orientacion", () => {
  it("sin señales devuelve solo el punto base neutro", () => {
    const r = orientacion([], "contado");
    expect(r).toHaveLength(1);
    expect(r[0]).toMatchObject({ clave: "base", estado: "n" });
  });

  it("herencia + juicio produce posesión efectiva (amarillo) y embargo (rojo)", () => {
    const r = orientacion(["juicio", "herencia"], "contado");
    expect(r.map((p) => p.clave)).toEqual(["base", "herencia", "juicio"]);
    expect(r.find((p) => p.clave === "herencia")?.titulo).toMatch(/Posesión efectiva/);
    expect(r.find((p) => p.clave === "juicio")).toMatchObject({ estado: "r" });
    expect(peorEstado(r)).toBe("r");
  });

  it("subsidio agrega prohibiciones SERVIU al final", () => {
    const r = orientacion(["hipoteca"], "subsidio");
    expect(r.at(-1)).toMatchObject({ clave: "subsidio", estado: "a" });
  });

  it("ignora duplicados", () => {
    expect(orientacion(["poder", "poder"], "credito")).toHaveLength(2);
  });

  const todas = combinaciones<Senal>(SENALES);
  it(`cubre las ${todas.length} combinaciones de señales × ${PAGOS.length} formas de pago`, () => {
    for (const combo of todas) {
      for (const pago of PAGOS) {
        const r = orientacion(combo, pago);
        expect(r[0]?.clave).toBe("base");
        expect(r).toHaveLength(1 + combo.length + (pago === "subsidio" ? 1 : 0));
        for (const s of combo) expect(r.some((p) => p.clave === s)).toBe(true);
        expect(peorEstado(r)).toBe(
          combo.includes("juicio") ? "r" : combo.length || pago === "subsidio" ? "a" : "n",
        );
        for (const p of r) {
          expect(p.titulo.length).toBeGreaterThan(0);
          expect(p.detalle.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
