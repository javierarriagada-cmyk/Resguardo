import { expect, test, type Page } from "@playwright/test";

const RUTAS = ["/", "/precios", "/legal/privacidad", "/legal/terminos"];

/**
 * Registra cualquier violación de CSP y cualquier error de consola. No filtra nada:
 * una sola violación hace fallar la prueba.
 */
async function vigilar(page: Page) {
  const violaciones: string[] = [];
  const errores: string[] = [];
  await page.exposeFunction("__reportarCsp", (v: string) => violaciones.push(v));
  await page.addInitScript(() => {
    document.addEventListener("securitypolicyviolation", (e) => {
      (window as unknown as { __reportarCsp: (v: string) => void }).__reportarCsp(
        `${e.violatedDirective} bloqueó ${e.blockedURI || "(inline)"} en ${e.sourceFile}:${e.lineNumber}`,
      );
    });
  });
  page.on("console", (msg) => {
    if (msg.type() === "error") errores.push(msg.text());
  });
  page.on("pageerror", (err) => errores.push(err.message));
  return { violaciones, errores };
}

test.describe("Cabeceras de seguridad y CSP", () => {
  test("todas las rutas entregan las cabeceras requeridas", async ({ request }) => {
    for (const path of RUTAS) {
      const response = await request.get(path);
      expect(response.status()).toBe(200);
      const h = response.headers();
      expect(h["x-content-type-options"]).toBe("nosniff");
      expect(h["referrer-policy"]).toBe("strict-origin-when-cross-origin");
      expect(h["strict-transport-security"]).toBe("max-age=63072000; includeSubDomains");
      for (const f of ["camera=()", "microphone=()", "geolocation=()", "payment=()", "usb=()"]) {
        expect(h["permissions-policy"]).toContain(f);
      }
      expect(h["permissions-policy"]).not.toContain("interest-cohort");
      const csp = h["content-security-policy"] ?? "";
      expect(csp).toContain("default-src 'self'");
      expect(csp).toContain("object-src 'none'");
      expect(csp).toContain("frame-ancestors 'none'");
      expect(csp).not.toContain("'unsafe-eval'");
      expect(csp).not.toContain("vercel-scripts.com");
    }
  });

  test("la CSP bloquea de verdad un script externo (la vigilancia detecta violaciones)", async ({
    page,
  }) => {
    const { violaciones } = await vigilar(page);
    await page.goto("/");
    await page.evaluate(() => {
      const s = document.createElement("script");
      s.src = "https://ejemplo.invalid/x.js";
      document.body.appendChild(s);
    });
    await expect.poll(() => violaciones.length).toBeGreaterThan(0);
  });

  test("sin violaciones de CSP ni errores en portada, /legal/* y diagnóstico completo", async ({
    page,
  }) => {
    const { violaciones, errores } = await vigilar(page);

    for (const path of RUTAS) {
      await page.goto(path, { waitUntil: "networkidle" });
    }

    await page.goto("/");
    const form = page.locator("#diagnostico form");
    await form.scrollIntoViewIfNeeded();
    await form.getByRole("button", { name: "Continuar" }).click();
    await form.getByLabel("Región").selectOption("Valparaíso");
    await form.getByLabel("Comuna").fill("Viña del Mar");
    await form.getByRole("button", { name: "Continuar" }).click();
    await form.getByLabel("Nombre").fill("Prueba CSP");
    await form.getByLabel("WhatsApp").fill("912345678");
    await form.getByLabel(/Acepto que usen estos datos/).check();
    await form.getByRole("button", { name: "Enviar y ver mi orientación" }).click();
    await expect(page.locator("#r-title")).toContainText("Gracias, Prueba. Recibimos tu caso.");

    expect(violaciones).toEqual([]);
    expect(errores).toEqual([]);
  });
});
