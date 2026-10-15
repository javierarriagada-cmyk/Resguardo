import { z } from "zod";
import { OBJETIVOS, PAGOS, REGIONES, SENALES, TIPOS } from "./constantes";

/** Normaliza un celular chileno: quita todo lo que no sea dígito y un prefijo 56 opcional. */
export function normalizarCelular(valor: string): string {
  const digitos = valor.replace(/\D/g, "");
  return digitos.length === 11 && digitos.startsWith("56") ? digitos.slice(2) : digitos;
}

export const pasoObjetivoSchema = z.object({
  objetivo: z.enum(OBJETIVOS, { error: "Elige qué necesitas." }),
});

export const pasoPropiedadSchema = z.object({
  region: z.enum(REGIONES, { error: "Elige la región de la propiedad." }),
  comuna: z
    .string({ error: "Escribe la comuna." })
    .trim()
    .min(2, { error: "Escribe la comuna." })
    .max(60, { error: "La comuna no puede superar 60 caracteres." }),
  tipo: z.enum(TIPOS, { error: "Elige el tipo de propiedad." }),
  pago: z.enum(PAGOS, { error: "Elige cómo se paga." }),
  senales: z.array(z.enum(SENALES)).max(SENALES.length).default([]),
});

export const pasoContactoSchema = z.object({
  nombre: z
    .string({ error: "Escribe tu nombre." })
    .trim()
    .min(1, { error: "Escribe tu nombre." })
    .max(80, { error: "El nombre no puede superar 80 caracteres." }),
  whatsapp: z
    .string({ error: "Escribe un celular de 9 dígitos que empiece con 9." })
    .transform(normalizarCelular)
    .pipe(
      z.string().regex(/^9\d{8}$/, { error: "Escribe un celular de 9 dígitos que empiece con 9." }),
    ),
  email: z
    .union([z.literal(""), z.email({ error: "Revisa el correo; por ejemplo: nombre@correo.cl." })])
    .optional()
    .transform((v) => (v ? v : undefined)),
  consentimiento: z.literal(true, {
    error: "Para enviar necesitamos tu autorización para usar estos datos.",
  }),
});

/** Esquema completo, compartido por el cliente y el Route Handler. */
export const diagnosticoSchema = pasoObjetivoSchema
  .extend(pasoPropiedadSchema.shape)
  .extend(pasoContactoSchema.shape);

export type DiagnosticoInput = z.input<typeof diagnosticoSchema>;
export type Diagnostico = z.output<typeof diagnosticoSchema>;

/** Convierte un ZodError en un mapa campo → primer mensaje. */
export function erroresPorCampo(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "_");
    if (!(key in out)) out[key] = issue.message;
  }
  return out;
}
