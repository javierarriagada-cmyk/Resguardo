export type DatosUF = {
  valor: number;
  fechaTexto: string;
  fechaISO: string;
};

export async function obtenerValorUF(): Promise<DatosUF | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const res = await fetch("https://mindicador.cl/api/uf", {
      signal: controller.signal,
      next: { revalidate: 86400 },
      headers: { Accept: "application/json" },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const hoy = data?.serie?.[0];
    if (!hoy || typeof hoy.valor !== "number" || !hoy.fecha) {
      return null;
    }

    const fechaObj = new Date(hoy.fecha);
    const fechaTexto = isNaN(fechaObj.getTime())
      ? hoy.fecha.slice(0, 10)
      : fechaObj.toLocaleDateString("es-CL", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        });

    return {
      valor: hoy.valor,
      fechaTexto,
      fechaISO: hoy.fecha,
    };
  } catch {
    clearTimeout(timeoutId);
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
