# AGENTS.md · Convenciones para agentes de código (Jules y otros)

Lee primero `docs/estrategia.md` (estrategia, sistema de diseño, tareas T1–T15) y
`docs/boceto-portada.html` (fuente de verdad visual y de textos de la portada).

## Reglas de negocio que no se negocian

1. **Garantía:** “si la operación no se concreta, no pagas” significa _concretada al enviar la
   escritura a la notaría para su firma_. Toda mención de la garantía va acompañada de esa definición
   (usa `NOTA_CONCRETADA` de `src/content/home.ts`). No cambies la regla.
2. **Sin personas:** no menciones abogados con nombre, foto, firma ni habilitación, ni agregues
   `Person` al JSON-LD, hasta que Javier lo decida.
3. **Claims:** nada de cifras, testimonios, logos ni plazos sin respaldo. Si falta el dato, usa
   `<Prov />` (“por confirmar”) y agrega el campo con `porConfirmar: true` en `src/content/empresa.ts`.
   Prohibido: “100% seguro”, “sin estafas garantizado”, “el más rápido”, “mejor precio”.
4. **Semáforo:** siempre forma + texto + color (`TrafficSymbol`). La marca nunca usa verde, amarillo
   ni rojo.

## Código

- Next.js App Router, TypeScript estricto (`noUncheckedIndexedAccess`). Sin `any`.
- Server Components por defecto. `"use client"` solo para interacción real; justifícalo en el PR.
- Estilos: usa los tokens de `src/styles/tokens.css`. No escribas colores en duro fuera de tokens
  (salvo los ya portados del boceto). Sin librerías de UI ni de íconos; agrega íconos al sprite de
  `src/components/ui/Icons.tsx`.
- Textos en español de Chile, segunda persona, frases cortas. Contenido en `src/content/`.
- Validación con Zod en `src/lib/**/schema.ts`, compartida entre cliente y servidor.
- Nunca registres en logs nombre, teléfono ni correo.
- Enlaces internos con `next/link`. Imágenes con `next/image`.

## Accesibilidad (WCAG 2.2 AA)

- Todo campo con `<label>`; errores con texto, `aria-invalid` y `aria-describedby`.
- Cambios de paso: mover el foco al título y anunciar con `aria-live`.
- Objetivos táctiles ≥ 24 px (el sistema usa ≥ 40 px). Respeta `prefers-reduced-motion`.
- `pnpm e2e` debe terminar con **cero** violaciones axe.

## Antes de abrir un PR

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm e2e
```

- Un PR por tarea, rama `feat/<tarea>` o `fix/<tema>`, commits en español con prefijo convencional
  (`feat:`, `fix:`, `chore:`, `docs:`, `test:`).
- Si cambias la portada, adjunta capturas a 1440 y 390 px (`node scripts/capturas.mjs`) y compáralas
  con `docs/boceto-*.png`.
- No hagas merge ni cambies la configuración de Vercel o de la rama `main`.
