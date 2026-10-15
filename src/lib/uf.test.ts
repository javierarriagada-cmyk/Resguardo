import { describe, expect, it } from "vitest";
import { formatearPesos, obtenerValorUF, parsearUF } from "./uf";

const ok = { serie: [{ fecha: "2026-10-15T03:00:00.000Z", valor: 39876.54 }] };

function respuesta(body: unknown, status = 200): typeof fetch {
  return (async () =>
    new Response(typeof body === "string" ? body : JSON.stringify(body), {
      status,
    })) as typeof fetch;
}

describe("obtenerValorUF", () => {
  it("devuelve valor y fecha cuando la API responde bien", async () => {
    const d = await obtenerValorUF({ fetcher: respuesta(ok) });
    expect(d?.valor).toBe(39876.54);
    expect(d?.fechaTexto).toBe("15 de octubre de 2026");
  });

  it("devuelve null ante un 500", async () => {
    expect(await obtenerValorUF({ fetcher: respuesta({ error: "x" }, 500) })).toBeNull();
  });

  it("devuelve null ante JSON inválido", async () => {
    expect(await obtenerValorUF({ fetcher: respuesta("<html>no es json") })).toBeNull();
  });

  it("devuelve null ante un esquema inesperado", async () => {
    expect(await obtenerValorUF({ fetcher: respuesta({ serie: [{ valor: "1" }] }) })).toBeNull();
    expect(await obtenerValorUF({ fetcher: respuesta({ serie: [] }) })).toBeNull();
  });

  it("devuelve null si la API no responde a tiempo", async () => {
    const lenta: typeof fetch = (_u, init) =>
      new Promise((_r, reject) => {
        init?.signal?.addEventListener("abort", () => reject(new Error("abort")));
      });
    expect(await obtenerValorUF({ fetcher: lenta, timeoutMs: 20 })).toBeNull();
  });

  it("devuelve null si fetch lanza un error de red", async () => {
    const roto: typeof fetch = async () => {
      throw new TypeError("fetch failed");
    };
    expect(await obtenerValorUF({ fetcher: roto })).toBeNull();
  });
});

describe("parsearUF y formatearPesos", () => {
  it("rechaza valores no positivos", () => {
    expect(parsearUF({ serie: [{ fecha: "2026-10-15", valor: 0 }] })).toBeNull();
  });
  it("formatea en pesos chilenos sin decimales", () => {
    expect(formatearPesos(558412)).toBe("$558.412");
  });
});
