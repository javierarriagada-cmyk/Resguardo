# Resguardo

Servicio inmobiliario chileno: compraventas protegidas entre particulares. Estudio de títulos con
informe semáforo, escritura, instrucción notarial con vale vista en custodia y seguimiento hasta la
inscripción en el Conservador.

Este repositorio contiene el sitio web (fase 1: portada + diagnóstico). La estrategia, el sistema de
diseño y el plan de tareas están en [`docs/estrategia.md`](docs/estrategia.md); el boceto aprobado de
la portada está en [`docs/boceto-portada.html`](docs/boceto-portada.html) con sus capturas de
referencia (`docs/boceto-desktop.png`, `docs/boceto-mobile.png`).

## Stack

| Capa        | Decisión                                                                              |
| ----------- | ------------------------------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19, TypeScript estricto                                |
| Estilos     | CSS global con tokens en variables CSS (`src/styles/tokens.css`), sin librerías de UI |
| Tipografías | `next/font/google` autoalojadas: Newsreader, Instrument Sans, IBM Plex Mono           |
| Validación  | Zod 4, mismo esquema en cliente y servidor                                            |
| Pruebas     | Vitest (lógica) · Playwright + @axe-core/playwright (flujo y accesibilidad)           |
| Calidad     | ESLint (`eslint-config-next`) + Prettier · GitHub Actions en cada PR                  |

## Arquitectura

```
src/
  app/
    layout.tsx              Layout raíz: lang es-CL, fuentes, metadata/Open Graph, JSON-LD LegalService
    page.tsx                Portada (Server Component) + JSON-LD FAQPage
    opengraph-image.tsx     Imagen Open Graph generada (1200×630)
    sitemap.ts, robots.ts   SEO técnico
    api/diagnostico/route.ts  POST: valida con Zod y registra el envío (sin datos personales en logs)
    legal/{privacidad,terminos}  Páginas legales provisorias (texto pendiente de revisión legal)
    not-found.tsx           404 con el sistema de diseño
  components/               Header, Hero, Expediente, Verdad, Riesgos, Proceso, Diagnostico,
                            DiagnosticWizard (isla cliente), Semaforo, Precios, Duo, Cobertura,
                            FAQ, Cierre/MobileBar, Footer, JsonLd
    ui/                     Icons (sprite SVG), TrafficSymbol (semáforo forma+texto+color), Prov
  content/                  Textos (home.ts) y datos de empresa (empresa.ts, con campos porConfirmar)
  lib/diagnostico/          constantes (16 regiones, señales), schema.ts (Zod), orientacion.ts (función pura)
  styles/                   tokens.css + globals.css (portados 1:1 del boceto)
e2e/                        Pruebas Playwright + axe (1440 y 390 px)
scripts/capturas.mjs        Capturas de página completa para comparar con el boceto
```

Principios:

- **Server Components por defecto.** Solo tres islas cliente: `DiagnosticWizard`, `PersonaIntro`
  (selector Compro/Vendo) y `HeaderScroll` (borde del encabezado al hacer scroll).
- **Una sola fuente de verdad para el diagnóstico.** `schema.ts` valida en el navegador paso a paso
  y en `/api/diagnostico`; `orientacion.ts` calcula “lo que revisaríamos primero”.
- **Semáforo accesible.** Cada estado usa forma + texto + color (WCAG 1.4.1); la marca (azul timbre)
  nunca es verde, amarilla ni roja.
- **Garantía siempre definida.** “Si la operación no se concreta, no pagas” va siempre junto a su
  definición: _operación concretada = cuando enviamos la escritura a la notaría para su firma_.
- **Sin personas.** El sitio no menciona abogados con nombre, firma ni habilitación; el respaldo es
  de equipo y proceso (estrategia §3.5).
- **Marcas provisorias.** `<Prov />` muestra “provisorio / por confirmar”. Se ocultan con
  `NEXT_PUBLIC_SHOW_PROVISIONAL=false` cuando los datos estén confirmados.

## Comandos

Requisitos: Node ≥ 20.9 y pnpm 10 (`corepack enable`).

```bash
pnpm install               # dependencias
pnpm dev                   # desarrollo en http://localhost:3000
pnpm lint                  # ESLint + Prettier (check)
pnpm format                # Prettier (write)
pnpm typecheck             # tsc --noEmit
pnpm test                  # Vitest (orientación y validación)
pnpm build && pnpm start   # producción local
pnpm e2e:install           # una vez: Chromium para Playwright
pnpm e2e                   # Playwright + axe (levanta `pnpm start` en el puerto 3100; requiere build)
node scripts/capturas.mjs http://localhost:3100 ./capturas   # capturas 1440 y 390 px
```

Variables de entorno: ver [`.env.example`](.env.example).

## Pendiente (ver `docs/estrategia.md` §8)

- `/api/diagnostico`: Turnstile, rate limit, Postgres, aviso al equipo y CRM (`TODO(T6)`).
- Cabeceras CSP/HSTS (`TODO(T14)`), páginas regionales (`T10`), guías MDX (`T11`), precios (`T12`).
- Despliegue en Vercel y workflow de Lighthouse sobre las vistas previas (`T8`).
- Textos legales definitivos, razón social, RUT, teléfono y WhatsApp reales.
