import { expect, test } from "@playwright/test";

test.describe("Cabeceras de seguridad y CSP", () => {
  test("las respuestas HTTP incluyen cabeceras de seguridad requeridas", async ({ request }) => {
    const response = await request.get("/");
    expect(response.status()).toBe(200);

    const headers = response.headers();
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toContain("camera=()");
    expect(headers["strict-transport-security"]).toContain("max-age=");
    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["content-security-policy"]).toContain("https://va.vercel-scripts.com");
  });

  test("sin errores de consola ni violaciones de CSP en la portada, /legal/* y diagnóstico completo", async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    page.on("pageerror", (err) => {
      consoleErrors.push(err.message);
    });

    // 1. Portada
    await page.goto("/");
    expect(consoleErrors).toEqual([]);

    // 2. /legal/*
    for (const legalPath of ["/legal/privacidad", "/legal/terminos"]) {
      await page.goto(legalPath);
      expect(consoleErrors).toEqual([]);
    }

    // 3. Diagnóstico completo
    await page.goto("/");
    await page.locator("#diagnostico").scrollIntoViewIfNeeded();

    const form = page.locator("#diagnostico form");
    await form.getByRole("button", { name: "Continuar" }).click();

    await form.getByLabel("Región").selectOption("Valparaíso");
    await form.getByLabel("Comuna").fill("Viña del Mar");
    await form.getByRole("button", { name: "Continuar" }).click();

    await form.getByLabel("Nombre").fill("Prueba CSP");
    await form.getByLabel("WhatsApp").fill("912345678");
    await form.getByLabel(/Acepto que usen estos datos/).check();
    await form.getByRole("button", { name: "Enviar y ver mi orientación" }).click();

    await expect(page.locator("#r-title")).toContainText("Gracias, Prueba. Recibimos tu caso.");
    expect(consoleErrors).toEqual([]);
  });
});
