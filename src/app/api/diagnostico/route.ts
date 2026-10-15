import { diagnosticoSchema, erroresPorCampo } from "@/lib/diagnostico/schema";
import { orientacion, peorEstado } from "@/lib/diagnostico/orientacion";
import { NextResponse } from "next/server";

const MAX_BYTES = 8_000;

/**
 * POST /api/diagnostico
 * Valida con el mismo esquema Zod del cliente y, por ahora, solo registra el envío.
 * Nunca escribe en logs datos personales (nombre, teléfono, correo).
 */
export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = diagnosticoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", errores: erroresPorCampo(parsed.error) },
      { status: 400 },
    );
  }

  const d = parsed.data;
  const puntos = orientacion(d.senales, d.pago);

  // TODO(T6): verificar Cloudflare Turnstile, aplicar rate limit por IP, guardar en Postgres
  // (tabla `diagnosticos`), notificar al equipo (correo + WhatsApp Business) y crear la ficha en el CRM.
  console.info(
    "[diagnostico] recibido",
    JSON.stringify({
      objetivo: d.objetivo,
      region: d.region,
      tipo: d.tipo,
      pago: d.pago,
      senales: d.senales,
      prioridad: peorEstado(puntos),
      conCorreo: Boolean(d.email),
    }),
  );

  return NextResponse.json({ ok: true, orientacion: puntos }, { status: 201 });
}
