import { describe, expect, it } from "vitest";
import {
  diagnosticoSchema,
  erroresPorCampo,
  normalizarCelular,
  pasoContactoSchema,
  pasoPropiedadSchema,
} from "./schema";

const valido = {
  objetivo: "comprar",
  region: "Los Lagos",
  comuna: "Puerto Varas",
  tipo: "Casa",
  pago: "contado",
  senales: ["herencia"],
  nombre: "Ana Pérez",
  whatsapp: "9 1234 5678",
  email: "",
  consentimiento: true,
};

describe("diagnosticoSchema", () => {
  it("acepta un envío válido y normaliza datos", () => {
    const r = diagnosticoSchema.parse(valido);
    expect(r.whatsapp).toBe("912345678");
    expect(r.email).toBeUndefined();
    expect(r.nombre).toBe("Ana Pérez");
  });

  it.each([
    ["+56 9 1234 5678", "912345678"],
    ["912345678", "912345678"],
    ["(9) 1234-5678", "912345678"],
  ])("normaliza %s", (entrada, salida) => {
    expect(normalizarCelular(entrada)).toBe(salida);
  });

  it.each(["812345678", "91234567", "9123456789", "abc"])("rechaza el celular %s", (wa) => {
    const r = pasoContactoSchema.safeParse({ ...valido, whatsapp: wa });
    expect(r.success).toBe(false);
    if (!r.success) expect(erroresPorCampo(r.error).whatsapp).toMatch(/9 dígitos/);
  });

  it("exige consentimiento", () => {
    const r = diagnosticoSchema.safeParse({ ...valido, consentimiento: false });
    expect(r.success).toBe(false);
    if (!r.success) expect(erroresPorCampo(r.error).consentimiento).toBeDefined();
  });

  it("rechaza regiones fuera de las 16", () => {
    const r = pasoPropiedadSchema.safeParse({ ...valido, region: "Otra región" });
    expect(r.success).toBe(false);
    if (!r.success)
      expect(erroresPorCampo(r.error).region).toBe("Elige la región de la propiedad.");
  });

  it("exige comuna con texto", () => {
    const r = pasoPropiedadSchema.safeParse({ ...valido, comuna: "  " });
    expect(r.success).toBe(false);
    if (!r.success) expect(erroresPorCampo(r.error).comuna).toBe("Escribe la comuna.");
  });

  it("rechaza señales desconocidas y correos mal escritos", () => {
    expect(diagnosticoSchema.safeParse({ ...valido, senales: ["otra"] }).success).toBe(false);
    expect(diagnosticoSchema.safeParse({ ...valido, email: "no-es-correo" }).success).toBe(false);
    expect(diagnosticoSchema.parse({ ...valido, email: "ana@correo.cl" }).email).toBe(
      "ana@correo.cl",
    );
  });

  it("acepta señales vacías por defecto", () => {
    const { senales: _omit, ...sin } = valido;
    void _omit;
    expect(diagnosticoSchema.parse(sin).senales).toEqual([]);
  });
});
