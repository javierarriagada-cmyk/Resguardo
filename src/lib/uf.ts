export type DatosUF = {
  valor: number;
  /** Fecha del valor, en formato largo de Chile (p. ej. "15 de octubre de 2026"). */
  fechaTexto: string;
  fechaISO: string;
};

export const UF_API_URL_POR_DEFECTO = "https://mindicador.cl/api/uf";
const UN_DIA = 60 * 60 * 24;

/** Valida la respuesta de mindicador.cl y la transforma. Devuelve null si no sirve. */
export function parsearUF(data: unknown): DatosUF | null {
  if (typeof data !== "object" || data === null) return null;
  const serie = (data as { serie?: unknown }).serie;
  if (!Array.isArray(serie)) return null;
  const hoy: unknown = serie[0];
  if (typeof hoy !== "object" || hoy === null) return null;
  const { valor, fecha } = hoy as { valor?: unknown; fecha?: unknown };
  if (typeof valor !== "number" || !Number.isFinite(valor) || valor <= 0) return null;
  if (typeof fecha !== "string") return null;
  const f = new Date(fecha);
  if (Number.isNaN(f.getTime())) return null;
  return {
    valor,
    fechaISO: fecha,
    fechaTexto: f.toLocaleDateString("es-CL", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Santiago",
    }),
  };
}

type Opciones = {
  url?: string;
  fetcher?: typeof fetch;
  timeoutMs?: number;
};

/**
 * UF del día con revalidación cada 24 h. Si la API falla, tarda o responde algo inválido,
 * devuelve null y la página muestra solo los montos en UF.
 */
export async function obtenerValorUF({
  url = process.env.UF_API_URL || UF_API_URL_POR_DEFECTO,
  fetcher = fetch,
  timeoutMs = 4000,
}: Opciones = {}): Promise<DatosUF | null> {
  try {
    const res = await fetcher(url, {
      signal: AbortSignal.timeout(timeoutMs),
      next: { revalidate: UN_DIA },
      headers: { Accept: "application/json" },
    } as RequestInit);
    if (!res.ok) return null;
    return parsearUF(await res.json());
  } catch {
    return null;
  }
}

export function formatearPesos(monto: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(monto);
}
